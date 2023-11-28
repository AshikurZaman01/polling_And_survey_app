import { useEffect, useState } from "react";
import SurveyCard from "./SurveyCard";

const Survey = () => {
    const [surveys, setSurveys] = useState([]);
    const [ascending, setAscending] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch('survey.json')
            .then(res => res.json())
            .then(data => setSurveys(data))
            .catch(err => console.log(err))
    }, [])

    const sortSurveys = () => {
        const sortedSurveys = [...surveys];
        sortedSurveys.sort((a, b) => {
            if (ascending) {
                return a.id - b.id;
            } else {
                return b.id - a.id;
            }
        });
        setSurveys(sortedSurveys);
        setAscending(!ascending);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredSurveys = surveys.filter(survey =>
        survey.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || survey.category === selectedCategory)
    );

    const uniqueCategories = Array.from(new Set(surveys.map(survey => survey.category)));

    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-bold my-10">All Surveys Here</h1>
            </div>

            <div className="flex justify-center mb-4">

                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border-2 border-gray-300 p-2 mr-2"
                />

                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="border-2 border-gray-300 p-2"
                >
                    <option value="All">All Categories</option>
                    {uniqueCategories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2" onClick={sortSurveys}>
                    {ascending ? "Sort Ascending" : "Sort Descending"}
                </button>


            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto">
                {filteredSurveys.map(survey => (
                    <SurveyCard survey={survey} key={survey.id}></SurveyCard>
                ))}
            </div>
        </div>
    );
};

export default Survey;
