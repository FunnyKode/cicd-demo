import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router';
import { AuthContext } from '../../auth/Auth';



const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

    const { currentUser } = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={routesProps =>
                !!currentUser ? (<RouteComponent {...routesProps} />) : (<Redirect to={"/login"} />)
            }
        />
    );
};

export default PrivateRoute;
