import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props)=> token 
        // if token load component else go to login
        ?  <Component {...props} {...rest} />
        : <Redirect to="/login" /> 
        }
    />
  );
};

export default PrivateRoute;