import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: MyMeals, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const email = localStorage.getItem("email");
        const pass = localStorage.getItem("password");
        if (email && pass !== "") {
          return <MyMeals {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    ></Route>
  );
};

export default ProtectedRoute;
