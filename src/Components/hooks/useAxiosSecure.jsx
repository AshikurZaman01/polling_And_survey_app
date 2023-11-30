import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: 'https://server-theta-tan.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;