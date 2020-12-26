import React from "react";
import { Route,  BrowserRouter as Router, Switch } from "react-router-dom";

import * as Constents from '../Constents';

import  SignUpHoc  from "../Containers/SignUpHoc";
import  SignInHoc  from "../Containers/SignInHoc";
import {ProfileDetails} from '../Containers/ProfileDetails'
import {InfiniteScoll} from '../Components/InfiniteScroll'

export const RouterMethod = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Constents.SIGIN} component={SignInHoc} />
        <Route path={Constents.SIGNUP} component={SignUpHoc} />
        <Route path={Constents.PROFILE} component={ProfileDetails}/>
        <Route path={Constents.INFINITESCROLL} component={InfiniteScoll}/>
      </Switch>
    </Router>
  );
};
export default RouterMethod;
