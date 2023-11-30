import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDelete, MdOutlineBrowserUpdated } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageSurvey = () => {

    const axiosSec = useAxiosSecure();

    const { data: surveys = [], refetch } = useQuery({
        queryKey: ["surveys"],
        queryFn: async () => {
            const response = await axiosSec.get("/surveys");
            return response.data;
        }
    })


    const handleDeleteServey = (surveys) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSec.delete(`/surveys/${surveys._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

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

                                        <th>
                                            <div>
                                                <Link to={`/dashboard/updateSurvey/${user._id}`}>
                                                    <button className="btn btn-sm btn-info">Update<MdOutlineBrowserUpdated /></button>
                                                </Link>


                                                <button onClick={() => handleDeleteServey(user)} className="btn btn-sm btn-error">Delete <MdDelete /></button>
                                            </div>
                                        </th>
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

export default ManageSurvey;