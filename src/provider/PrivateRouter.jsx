import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user, loading} = use(AuthContext);
    // console.log(user);

    const location = useLocation();
    // console.log(location);

    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    // if there is user return children
    if (user && user?.email){
         return children;
    }
   
    // else navigate to login

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRouter;