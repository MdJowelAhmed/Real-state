import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-lg flex justify-center mt-32 ml-72 md:ml-[500px]"></span>
    }
    if (!user) {
            return <Navigate to='/login' state={location?.pathname || "/"}></Navigate>
        }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;