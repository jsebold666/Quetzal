import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as ROUTES from './Routes'

import Header from './components/common/header/index.jsx';
import Landing from './windows/home-page/index.jsx'

export default class App extends Component {
  constructor( props ) {
    super( props )
    this.state = {

    }
  }

  render( ) {
    return(
      <div className = 'App'>
        <Header></Header>
        {//<Landing></Landing>
        }
        <Switch>
          <Route exact path = { ROUTES.HOME } component = { Landing }/>
        </Switch>
      </div>
    )
  }
}