import { useEffect, useState } from "react";
import SurveyCard from "./SurveyCard";

const Survey = () => {
    const [surveys, setSurveys] = useState([]);
    const [ascending, setAscending] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [latestPost, setLatestPost] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/surveys')
            .then(res => res.json())
            .then(data => setSurveys(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const latestPostDate = surveys.reduce((latestDate, survey) => {
            if (survey.date) {
                const currentDate = new Date(survey.date);
                return currentDate > latestDate ? currentDate : latestDate;
            }
            return latestDate;
        }, new Date(0));

        const currentDate = new Date();
        const timeDifference = latestPostDate - currentDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        setLatestPost(daysDifference);
    }, [surveys]);

    const sortSurveysByDate = () => {
        const sortedSurveys = [...surveys];
        sortedSurveys.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (ascending) {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });
        setSurveys(sortedSurveys);
        setAscending(!ascending);
    };

    const sortSurveysByLikes = () => {
        const sortedSurveys = [...surveys];
        sortedSurveys.sort((a, b) => {
            if (ascending) {
                return a.like - b.like;
            } else {
                return b.like - a.like;
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

            <div className="flex flex-col sm:flex-row md:flex-row justify-center mb-4">
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

                <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2" onClick={sortSurveysByLikes}>
                    {ascending ? "Sort Ascending by Likes" : "Sort Descending by Likes"}
                </button>

                <button className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4" onClick={sortSurveysByDate}>
                    {ascending ? "Old Post" : "Latest Post"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {filteredSurveys.map(survey => (
                    <SurveyCard survey={survey} key={survey.id}></SurveyCard>
                ))}
            </div>
        </div>
    );
};

export default Survey;
