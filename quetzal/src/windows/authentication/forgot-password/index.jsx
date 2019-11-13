import React, { Component } from 'react'
import './index.scss'

import ButtonPrimary from '../../../components/common/button-primary'
import InputText from '../../../components/common/input-text'
import TitleBlack from '../../../components/common/title-black'

export default class ForgotPassword extends Component {
  constructor( props ) {
    super( props )
    this.state = {

    }
  }

  render( ) {
    return(
      <div className = 'forgot-password'>
        <div className = 'container'>
          <TitleBlack
            text = { `Recuperar Contraseña` }/>
          <InputText 
            />
          <ButtonPrimary 
            text = { `Siguiente` }/>
        </div>
      </div>
    )
  }
}