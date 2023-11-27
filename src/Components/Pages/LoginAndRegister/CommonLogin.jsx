import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const CommonLogin = () => {

    const { googleLogin } = useAuth();

    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res);
                toast.success('Successfully logged in with Google!');
                setTimeout(() => {
                    toast.success('Welcome,', res.user.displayName);
                }, 2000);
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.log(err);
                toast.error('Failed to login with Google!');
            });

    }


    return (
        <div>

            <button className=" bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1 rounded-full my-4 w-[300px]  btn-primary mx-auto  block text-xl btn" onClick={handleGoogleLogin}>Google</button>
        </div>
    );
};

export default CommonLogin;