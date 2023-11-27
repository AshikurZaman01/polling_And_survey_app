import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    const spinner = (
        <div className='flex items-center justify-center min-h-screen'>
            <button type="button" className="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
                <div className="flex items-center justify-center m-[10px]">
                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                    <div className="ml-2">Processing...</div>
                </div>
            </button>
        </div>
    );

    if (loading) {
        return spinner;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;