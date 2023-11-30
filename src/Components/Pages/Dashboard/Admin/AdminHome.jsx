import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {

    const { user } = useAuth();

    const axiossec = useAxiosSecure();

    const [count, setCount] = useState([]);

    const { data } = useQuery({
        queryKey: ["admin-states"],
        queryFn: async () => {
            const res = await axiossec.get("/admin-states");
            setCount(res.data);
            return res.data;
        }
    })



    return (
        <div>

            <div>
                <h1 className="text-3xl font-serif">Hi, Welcome </h1>
                {
                    user.displayName ? <h2 className="text-4xl pl-5 font-semibold">{user.displayName}</h2> : "Back"
                }
            </div>
            <div className="divider"></div>

            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] mx-auto text-center">
                <div className="w-[250px] bg-orange-500 rounded">
                    <h1 className="text-3xl p-10 ">Users : {count?.users}</h1>
                </div>

                <div className="w-[250px] bg-slate-600 text-white rounded">
                    <h1 className="text-3xl p-10 ">Surveyors : {count?.surveys}</h1>
                </div>

                <div className="w-[250px] bg-red-400 text-white rounded">
                    <h1 className="text-3xl p-10 ">Comments : {count?.comments}</h1>
                </div>
            </div>

            

        </div>
    );
};

export default AdminHome;