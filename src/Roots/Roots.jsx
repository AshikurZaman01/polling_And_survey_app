import { Outlet } from "react-router-dom";
import Navbar from "../Components/Pages/Home/Navbar";
import Footerr from "../Components/Pages/Footerr/Footerr";

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" px-10">
                <Outlet></Outlet>
            </div>
            <Footerr></Footerr>
        </div>
    );
};

export default Roots;