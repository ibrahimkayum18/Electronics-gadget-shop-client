import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {users, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <div className="text-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(!users){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRouter;