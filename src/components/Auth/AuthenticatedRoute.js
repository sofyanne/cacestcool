import React, {useContext} from "react";
import AuthProvider from "../../context/AuthProvider";
import {Route, Navigate} from "react-router-dom";

const AuthenticatedRoute = ( { path, component } ) => {
    const { isAuthenticated } = useContext(AuthProvider);

    return isAuthenticated ? (
        <Route path={path} component={component} />
    ) : (<Navigate  to="/login" />)
 };

export default AuthenticatedRoute;