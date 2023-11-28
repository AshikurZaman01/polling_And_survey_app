import useAuth from "../../hooks/useAuth";
import { FcLike } from "react-icons/fc";
import { AiFillDislike } from "react-icons/ai";

const SurveyCard = ({ survey }) => {


    const { title, short_secs, description, like, dislike } = survey || {}

    const { user } = useAuth();
    console.log(user)

    return (
        <div className="mx-auto w-[400px] border border-gray-400 m-5 rounded-lg shadow-md shadow-gray-500">

            <div className="p-5">

                <div className=" flex border-b-2 justify-between items-start pb-5 h-[150px]">

                    <div>
                        <h1 className="text-3xl font-semibold">{title}</h1>
                        <h3 className="py-2 text-xl">{short_secs}</h3>
                    </div>

                    <div className="w-[40px] h-[40px] ">
                        <img className="rounded-full" src={user?.photoURL} alt="" />
                    </div>
                </div>

                <div className="flex justify-between gap-10 pt-5">
                    <div>
                        <button className="btn btn-sm bg-red-300">Like<FcLike />{like}</button>
                    </div>

                    <div>
                        <button className="btn btn-sm bg-blue-400">Dislike<AiFillDislike />{dislike}</button>
                    </div>
                </div>

                <div>
                    <button className="btn btn-sm mt-5 mb-2 w-full btn-info">View Details</button>
                </div>

            </div>



        </div>
    );
};

export default SurveyCard;