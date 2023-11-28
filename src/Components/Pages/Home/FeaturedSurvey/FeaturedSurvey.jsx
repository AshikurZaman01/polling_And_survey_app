import { useEffect, useState } from "react";
import SurveyCard from "../../Survey/SurveyCard";
import { Link } from "react-router-dom";

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
                <h1 className="text-center text-5xl font-bold my-10">Featured Survey</h1>
            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    {
                        surveys.slice(0, 6).map(survey => <SurveyCard survey={survey} key={survey.id}></SurveyCard>)
                    }
                </div>
            </div>

            <div className="text-center">
                <Link to={'/survey'}>
                    <button className="btn btn-sm mt-6 bg-slate-900 w-[300px] text-white">More Survey</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedSurvey;