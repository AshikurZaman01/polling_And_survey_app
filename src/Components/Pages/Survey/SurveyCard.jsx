import useAuth from "../../hooks/useAuth";
import { FcLike } from "react-icons/fc";
import { AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey }) => {

    const { _id, title, shortdescription, description, like, dislike, date, userName, userEmail, userPhoto } = survey || {}

    const { user } = useAuth();

    return (
        <div className="mx-auto w-[400px] border border-gray-400 m-5 rounded-lg shadow-md shadow-gray-500">

            <div className="p-5">

                <div className=" flex border-b-2 justify-between items-start pb-5 h-[150px]">

                    <div>
                        <h1 className="text-3xl font-semibold">{title}</h1>
                        <h3 className="py-2 text-xl">{shortdescription}</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[40px] h-[35px] ">
                            <img className="rounded-full w-full h-full" src={userPhoto} alt={userName} />
                        </div>
                        <div>
                            <p className="text-xs w-[60px]">{date}</p>
                        </div>
                    </div>

                </div>

                <div>
                    <Link to={`/surveyDetails/${_id}`}>
                        <button className="btn btn-sm mt-5 mb-2 w-full btn-info">View Details</button>
                    </Link>
                </div>

            </div>



        </div>
    );
};

export default SurveyCard;