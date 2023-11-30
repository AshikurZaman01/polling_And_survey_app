import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState, useEffect } from "react";
import { comment } from "postcss";

const FeedbackByUsers = () => {
    const axiosSec = useAxiosSecure();

    const { data: surveys = [], refetch: surveysRefetch } = useQuery({
        queryKey: ["surveys"],
        queryFn: async () => {
            const response = await axiosSec.get("/surveys");
            return response.data;
        }
    });

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axiosSec.get('/comments');
                const sur = response.data.filter(comment => surveys.some(survey => comment.surveyId === survey._id));
                setComments(sur);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        fetchComments();
    }, [axiosSec, surveys]);

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center pt-10">All Surveyor</h1>
                <div className="divider pb-5"></div>
            </div>

            <div className="w-[80%] mx-auto ">

                <div>
                    <h1 className="text-2xl font-bold">Total : {surveys.length} <span className="text-xl font-normal"><i>surveys</i></span></h1>
                </div>

                <div>
                    <div className="overflow-x-auto my-3">
                        <table className="table table-zebra-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    surveys.map(user => <tr key={user._id}>

                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold">{user.title}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.shortdescription}
                                            <br />
                                            <span className="text-gray-500 text-xs font-semibold">{user.category}</span>
                                        </td>
                                        <td>
                                            <div className="flex flex-col items-center gap-3">
                                                {comments
                                                    .filter(comment => comment.surveyId === user._id)
                                                    .map((comment, index) => (
                                                        <div key={comment._id}>
                                                            <ul className="flex flex-col">
                                                                <li key={index + 1}>{index + 1}. {comment.comment}</li>
                                                            </ul>
                                                        </div>
                                                    ))}
                                            </div>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackByUsers;