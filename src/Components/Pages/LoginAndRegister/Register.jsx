import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import CommonLogin from "./CommonLogin";
import useAxiosSecure, { axiosSecure } from "../../hooks/useAxiosSecure";

const image_Hosting_key = 'eec4232453de02c7130df9275dc373bd';
const image_HOSTING_api = `https://api.imgbb.com/1/upload?key=${image_Hosting_key}`;

const Register = () => {

    const { createUser, user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const useAxiosSec = useAxiosSecure();

    const handleRegisterForm = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];

        const formData = new FormData();
        formData.append('image', image);
        const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${image_Hosting_key}`, formData);




        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
        } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            toast.error('Password must contain at least one letter and one number');
        } else if (!/[@#$%^&+=]/.test(password)) {
            toast.error('Password must contain at least one special character (@#$%^&+=)');
        } else if (email === '' || password === '' || name === '') {
            toast.error('Please fill in all the fields');
        } else {
            createUser(email, password)
                .then((res) => {
                    console.log(res.user);
                    updateProfile(res.user, {
                        displayName: name,
                        photoURL: data.data.url,
                    })
                        .then(() => {

                            // create user add 
                            const userInfo = {
                                name: res.user?.displayName,
                                email: res.user?.email,
                            }
                            axiosSecure.post("/users", userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        console.log('Profile Update');
                                        toast.success('Registration Success');
                                        setTimeout(() => {
                                            toast.success('Welcome,', user?.displayName);
                                        }, 2000);
                                        navigate(location?.state ? location.state : '/');
                                        console.log('user data save to d')
                                    }
                                })
                            // create user add  
                        })
                        .catch((err) => {
                            toast.error('Registration failed');
                            console.log(err);
                        });
                })

        }
    }


    return (
        <div>
            <div className="h-screen md:flex">
                <div
                    className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">PollPilot</h1>
                        <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                        <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">

                    <form onSubmit={handleRegisterForm} className="bg-white">
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Register Here</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd" />
                            </svg>
                            <input name='fullName' className="pl-2 outline-none border-none" type="text" id="" placeholder="Full name" required />

                        </div>



                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input name='email' className="pl-2 outline-none border-none" type="text" id="" placeholder="Email Address" required />
                        </div>

                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type="text" name="password" id="" placeholder="Password" required />
                        </div>

                        <div>
                            <label htmlFor="image">Upload Image</label>
                            <input type="file" name="image" className="file-input file-input-bordered w-full max-w-xs" id="" placeholder="Upload Image" required />
                        </div>


                        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
                        <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer"><Link to={'/login'}>Already have an account ?<strong>Login</strong></Link> </span>
                        <CommonLogin></CommonLogin>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;