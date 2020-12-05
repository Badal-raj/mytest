import React from "react";
import { Route,  BrowserRouter as Router, Switch } from "react-router-dom";

import { SignUpHoc } from "../Containers/SignUpHoc";
import { SignInHoc } from "../Containers/SignInHoc";

export const RouterMethod = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignInHoc} />
        <Route path="/signup" component={SignUpHoc} />
      </Switch>
    </Router>
  );
};
export default RouterMethod;
