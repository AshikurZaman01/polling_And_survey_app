import { useEffect, useState } from "react";
import SurveyCard from "../../Survey/SurveyCard";

const FeaturedSurvey = () => {

    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        fetch('survey.json')
            .then(res => res.json())
            .then(data => setSurveys(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="w-[95%] mx-auto">
            <div>
                <h1 className="text-center text-4xl font-bold my-10">Featured Survey</h1>
            </div>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mx-auto">
                    {
                        surveys.slice(0, 6).map(survey => <SurveyCard survey={survey} key={survey.id}></SurveyCard>)
                    }
                </div>
            </div>


        </div>
    );
};

export default FeaturedSurvey;