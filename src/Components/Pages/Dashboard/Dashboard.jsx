import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    const isAdmin = false;

    return (
        <div className="flex">

            <div className="w-72 min-h-screen bg-slate-500">

                {
                    isAdmin ? <>{/* admin */}
                        <ul className="menu">
                            <div><h1 className="text-white text-3xl text-center p-7">Admin Home</h1></div>

                            <li className="text-white"><NavLink to={'/dashboard/manageUsers'} >Manage Users</NavLink></li>

                            <li className="text-white"><NavLink to={'/dashboard/surveyStatus'} >Survey Status</NavLink></li>

                            <li className="text-white"><NavLink to={'/dashboard/proUsers'} >Pro Users</NavLink></li>

                            <li className="text-white"><NavLink to={'/dashboard/surveyResponseAdmin'} >Survey Response</NavLink></li>
                        </ul>
                        {/* admin */}</>

                        :

                        <>
                            {/* surveyers */}

                            <ul className="menu">
                                <div><h1 className="text-white text-3xl text-center p-7">Surveyors Home</h1></div>

                                <li className="text-white"><NavLink to={'/dashboard/addSurvey'} >Add Survey</NavLink></li>

                                <li className="text-white"><NavLink to={'/dashboard/feedbackByUsers'} >Feedback By Users</NavLink></li>

                                <li className="text-white"><NavLink to={'/dashboard/feedbackByAdmin'} >Feedback By Admin</NavLink></li>

                                <li className="text-white"><NavLink to={'/dashboard/surveyResponseUsers'} >Survey Response</NavLink></li>
                            </ul>
                            {/* surveyers */}</>

                }





                <div className="divider"></div>
                <ul className="menu">
                    <li className="text-white"><NavLink to={'/'} >Home</NavLink></li>
                    <li className="text-white"><NavLink to={'/survey'} >Survey</NavLink></li>
                </ul>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;