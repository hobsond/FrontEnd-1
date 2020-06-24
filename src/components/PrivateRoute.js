import React from "react";
import { Route, Redirect } from "react-router-dom";

// Hey there
//this component is basically a shell that wraps around another component
//its job is to check if the user has a token
//if the user has a token it loads the component that has been passed to it as props
//if the user does not have a token it redirects them to the login page

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={()=> token 
        // if token load component else go to login
        ?  <Component />
        : <Redirect to="/login" /> 
        }
    />
  );
};

export default PrivateRoute;