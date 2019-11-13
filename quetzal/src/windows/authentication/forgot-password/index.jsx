import React, { Component } from 'react'
import './index.scss'

export default class ForgotPassword extends Component {
  constructor( props ) {
    super( props )
    this.state = {

    }
  }

  render( ) {
    return(
      <div className = "forgot-password">
        <div className = "container">
          <span>Recuperar Contraseña</span>
          <input type="text" className = "email-to-forgot"/>
          <button>Siguiente</button>
        </div>
      </div>
    )
  }
}