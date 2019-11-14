import React from 'react';
import './index.scss';
import logo from'../../../icons/logow.png';
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../../Routes'

export default ( props ) => (
    <div>
        <header>
            <img src={logo}></img>
            <ul>
                <li>Nosotros</li>
                <li>Políticas de Privacidad</li>
                <li><NavLink to = { ROUTES.LOGIN } className = 'links'>Iniciar Sesión</NavLink></li>
            </ul>
        </header>
    </div>
)