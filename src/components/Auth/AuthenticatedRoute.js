import React, {useContext} from "react";
import Auth from "../../Context/Auth";
import {Route, Navigate} from "react-router-dom";

const AuthenticatedRoute = ( { path, component } ) => {
    const { isAuthenticated } = useContext(Auth);

    return isAuthenticated ? (
        <Route path={path} component={component} />
    ) : (<Navigate  to="/login" />)
 };

export default AuthenticatedRoute;