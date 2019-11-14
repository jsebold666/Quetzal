import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as ROUTES from './Routes'

import Landing from './windows/home-page/index.jsx'
import ForgotPassword from './windows/authentication/forgot-password'
import Login from './windows/authentication/login'
import Register from './windows/authentication/register'
import Alumn from './windows/profiles/courses/index.jsx';
import Lesson from './windows/profiles/lesson/index.jsx';
import Video from './windows/profiles/videoC/index.jsx';

export default class App extends Component {
  constructor( props ) {
    super( props )
    this.state = {

    }
  }

  render( ) {
    return(
      <div className = 'App'>
        <Switch>
          <Route exact path = { ROUTES.HOME } component = { Landing }/>
          <Route exact path = { ROUTES.FORGOTPASSWORD } component = { ForgotPassword }/>
          <Route exact path = { ROUTES.REGISTER } component = { Register }/>
          <Route exact path = { ROUTES.LOGIN } component = { Login }/>
          <Route exact path = { ROUTES.ALUMN } component = { Alumn }/>
          <Route exact path = { ROUTES.COURSESTEST } component = { Lesson }/>
          <Route exact path = { ROUTES.VIDEO } component = { Video }/>
        </Switch>
      </div>
    )
  }
}