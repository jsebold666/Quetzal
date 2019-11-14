import React, { Component } from 'react';
import './index.scss';
import pizarr from '../../../icons/abc.svg';
import report from '../../../icons/report.svg';
import team from '../../../icons/teamwork.svg';
import think from '../../../icons/think.svg';
import appr from '../../../icons/approved.svg';
import note from '../../../icons/notebook.svg';
import Swicth from '../../../components/common/swicth/index.jsx';

import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../../Routes'


export default class Login extends Component {
    constructor( props ){
        super(props)
        this.state = {
            switchActive: false
        }
    }

    changeSwitch = ( ) => this.setState(  state => ({switchActive: !state.switchActive}) )

    render(){
        return(
            <div>
                <div className='login'>
                    <div className='headimg'>
                    <img src={pizarr} />
                    <img src={report} />
                    <img src={team} />
                    <img src={think} />
                    <img src={appr} />
                    <img src={note} />
                </div>
                <h2>Estudio</h2>
                <h1>Rápido y Sencillo</h1>
                <div className='form'>
                <form method='POST' action=''>
                    <legend>Inicio de Sesión</legend>
                    <div className='data'>
                    <div className='inpts'>
                    <input type='email' name='mail' placeholder='Correo' />
                    <input type='password' name='pwd' placeholder='Contraseña' />
                    <p>¿Olvidaste tu contraseña?</p>
                    <Swicth
                        active = { this.state.switchActive }
                        changeSwitch = { this.changeSwitch }/><span>Recordar Usuario</span>
                    </div>
                    <div className='btns'>
                        <NavLink to = { ROUTES.ALUMN }><input type='submit' value='Entrar'/></NavLink>
                        <p>¿No tienes cuenta?</p>
                    </div>
                    </div>
                </form>
                </div>
                </div>
            </div>
        )
    }
}
