import React from 'react';
import './index.scss';
import logo from'../../../icons/logow.png';

export default ( props ) => (
    <div>
        <header>
            <img src={logo}></img>
            <ul>
                <li>Nosotros</li>
                <li>Políticas de Privacidad</li>
                <li>Iniciar Sesión</li>
            </ul>
        </header>
    </div>
)