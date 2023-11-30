import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SurveyorHome = () => {
    const { user } = useAuth();

    console.log(user)


    return (
        <div>

            <div>
                <h1 className="text-3xl font-serif">Hi, Welcome </h1>
                {
                    user.displayName ? <h2 className="text-4xl pl-5 font-semibold">{user.displayName}</h2> : "Back"
                }
            </div>
            <div className="divider"></div>

            <div className="w-[90%] mx-auto my-10">
                <h1 className="text-4xl font-bold">Surveyor Details</h1>

                <div className="my-5 border border-gray-400 p-5 rounded">

                    <div className="w-[100px] h-[100px] rounded-full">
                        <img className="rounded-full" src={user?.photoURL} alt="" />
                    </div>
                    <h1 className="text-2xl font-serif font-semibold"><span className="text-orange-400">Name</span> : <span className="text-gray-600">{user?.displayName}</span></h1>

                    <h1 className="text-2xl font-serif font-semibold"><span className="text-orange-400">Email</span> : <span className="text-gray-600">{user?.email}</span></h1>


                </div>
            </div>

        </div>
    );
};

export default SurveyorHome;