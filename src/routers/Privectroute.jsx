import React, { useContext } from 'react';
import { AuthContext } from '../provider/AughProvider';
import { Navigate } from 'react-router-dom';

const Privectroute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" replace={true} ></Navigate>;
};

export default Privectroute;