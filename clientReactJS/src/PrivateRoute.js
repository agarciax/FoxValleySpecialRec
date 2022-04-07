import React from "react";
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    return (
        isAuthenticated ? children : <Navigate to="/FoxValleySpecialRec" />
    );
}

export default PrivateRoute;
