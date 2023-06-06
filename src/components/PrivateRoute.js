import React from "react";
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoute = () => {

console.log(localStorage.getItem("token"))

 if (localStorage.getItem("token")){
     return <Outlet/>
 } else {
    return < Navigate replace to = "/" /> 
 }
}

export default PrivateRoute;