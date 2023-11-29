import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { PiArrowFatUpDuotone } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa6";

const ManageUsers = () => {

    const axiosSec = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = await axiosSec.get("/users");
            return response.data;
        }
    })

    const handleDeleteUser = user => {
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

                axiosSec.delete(`/users/${user._id}`)
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

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make him admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSec.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Success!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
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
                    <h1 className="text-2xl font-bold">Total Surveyors : {users.length} <span className="text-xl font-normal"><i>surveyor</i></span></h1>
                </div>

                <div>
                    <div className="overflow-x-auto my-3">
                        <table className="table table-zebra-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    users.map(user => <tr key={user._id}>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold">{user.name}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.email}
                                            <br />

                                        </td>
                                        <td>
                                            {
                                                user.role === "admin" ? <span className="text-orange-600 font-bold border border-orange-600 px-3 py-1 rounded-md">Admin</span> : <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm btn-accent"><FaUsers /></button>
                                            }
                                        </td>
                                        <th>
                                            <div>
                                                <button onClick={() => handleDeleteUser(user)} className="btn btn-sm btn-error">Delete <MdDelete /></button>
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

export default ManageUsers;