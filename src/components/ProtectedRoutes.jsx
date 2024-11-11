/* eslint-disable react/prop-types */
import { useContext } from "react"
import { myContextAPI } from "../utilities"
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const {user} = useContext(myContextAPI);
    const navigate = useNavigate();

    if(!user){
        return navigate('/sign-in');
    }

  return user ? children : <Outlet/>;
}

export default ProtectedRoutes