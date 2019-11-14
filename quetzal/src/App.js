
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as ROUTES from './Routes'

import Header from './components/common/header/index.jsx'
import Landing from './windows/home-page/index.jsx'
import ForgotPassword from './windows/authentication/forgot-password'
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
        <Header />
        <Switch>
          <Route exact path = { ROUTES.HOME } component = { Landing }/>
          <Route exact path = { ROUTES.FORGOTPASSWORD } component = { ForgotPassword }/>
        </Switch>
      </div>
    )
  }
}