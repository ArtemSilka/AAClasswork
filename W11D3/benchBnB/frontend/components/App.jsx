import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import SigninFormContainer from './session/signin_form_container';
import { AuthRoute}  from '../util/route_util';

const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />

    <AuthRoute exact path="/login" component={SigninFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;