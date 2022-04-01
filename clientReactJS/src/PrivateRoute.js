import React from "react";
import { Navigate, Route } from "react-router-dom";
import Admin from "./Admin";

function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    return (
        isAuthenticated ? children : <Navigate to="/Login" />
    );
}

export default PrivateRoute;
