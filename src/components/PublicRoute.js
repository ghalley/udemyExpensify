import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const Public = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to="/dashboard" />
    ) : (
      <div>
        <Component {...props} />
      </div>
    )
  )} />
)

const mapStatetoProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStatetoProps)(Public);
