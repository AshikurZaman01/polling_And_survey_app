import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { AiFillDislike } from "react-icons/ai";

const SurveyDetails = () => {
    const surveyData = useLoaderData();
    const { title, description, userName, userEmail, userPhoto, date } = surveyData || {};
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [likeDisabled, setLikeDisabled] = useState(false);
    const [dislikeDisabled, setDislikeDisabled] = useState(false);

    const proUser = false;


    const handleLike = () => {
        setLikeCount(likeCount + 1);
        setDislikeDisabled(true);
    };

    const handleDislike = () => {
        setDislikeCount(dislikeCount + 1);
        setLikeDisabled(true);
    };

    return (
        <div className="w-[80%] mx-auto my-10">
            <div className="p-6 sm:p-4 dark:bg-gray-900 dark:text-gray-100 rounded border border-gray-300">
                <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img
                        src={userPhoto}
                        alt=""
                        className="self-center flex-shrink-0 w-16 h-16 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                    />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">{userName}</h4>
                        <p className="dark:text-gray-400">{userEmail}</p>
                    </div>
                </div>
            </div>

            <div className="bg-green-50 p-6 sm:p-12 border border-t-0 rounded border-gray-300">
                <div className="flex flex-col">
                    <div className="w-full flex justify-between items-center">
                        <h4 className="font-semibold text-3xl text-center md:text-left">{title}</h4>
                        <h4 className="">
                            <span className="font-semibold">Publish Date</span> : {date}
                        </h4>
                    </div>
                    <p className="dark:text-gray-400 pt-4">{description}</p>
                </div>
                <div className="flex justify-between gap-10 pt-10">
                    <div>
                        <button className="btn btn-sm bg-red-300"
                            onClick={handleLike}
                            disabled={likeDisabled}>
                            Like<FcLike />{likeCount}
                        </button>
                    </div>
                    <div>
                        <button
                            className="btn btn-sm bg-blue-400"
                            onClick={handleDislike}
                            disabled={dislikeDisabled}
                        >
                            Dislike<AiFillDislike />{dislikeCount}
                        </button>
                    </div>
                </div>
            </div>

            {
                proUser ? <div className="my-5">
                    <div className="flex flex-col">
                        <textarea name="description" type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Write Comment..." />
                    </div>
                    <button className="btn btn-sm ">Add Comment</button>
                </div>
                    :
                    <div className="my-5">
                        <p className="text-gray-600 text-xs">Please be a <a href="#" className="text-blue-400">Pro User</a> to comment</p>
                    </div>
            }

        </div>
    );
};

export default SurveyDetails;
