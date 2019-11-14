import React from 'react';
import './index.scss';

import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../Routes'

import Header from '../../components/common/header/index.jsx'

import student from '../../img/prg04.png';
import pro from '../../img/prg00.png';
import team from '../../img/workteam.png';
import t1 from '../../icons/team.svg';
import facebook from '../../icons/facebook.svg';
import instagram from '../../icons/instagram.svg';
import twitter from '../../icons/twitter.svg';
import mail from '../../icons/mail.svg'

export default ( props ) => (
    <div>
        <Header />
        <div className='enc'>
           <div className="overlay">
               <h2>
                   Solo Piensa
               </h2>
               <div className = "p-container">
                    <p>Empieza a aprender aquí y diviértete estudiando de forma rápida y eficaz</p>
               </div>
               <button><NavLink to = { ROUTES.REGISTER } className = 'links'>Registrarse</NavLink></button>
           </div>
        </div>
        <div className='enc1'>
            <div className="content">
                <div className='imt'>
                    <img src={student}></img>
                    <div className='text'>
                    <h2>Estudiantes</h2>
                    <p>Atención en la forma de estudiar y la incorporación del uso de las nuevas tecnologías para
                        garantizar un mejor y más rápido.
                    </p>
                    </div>
                </div>
                <div className='imt'>
                    <img src={pro} id='pqimlp'></img>
                    <div className='text'>
                    <h2>Programadores</h2>
                    <p>Concientes de la transformación digital y partidarios del aprendizaje
                        autónomo, asi como de la importancia del trabajo en equipo.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='enc2'>
            <div className='c1'>
                <h2>Basada en Datos</h2>
            </div>
            <div className='c2'>
                <h2>Privacidad y Seguridad</h2>
            </div>
            <img src={team}/>
            <div className='c3'>
                <h2>Desarrollo en equipo</h2>
            </div>
            <div className='c4'>
                <h2>Lado del Usuario</h2>
            </div>
        </div>
        <div className='des'>
            <div className='team'>
                <div className='verl'>
            <h2>Descubre Nuestro equipo de trabajo</h2>
            <img src={t1}/>
            </div>
            </div>
            <div className='footer'>
                <div className='contact'>
                    <img src={facebook}/>
                    <img src={twitter} />
                    <img src={instagram} />
                    <img src={mail} />
                    <p>justthinkcompany@gmail.com</p>
                </div>
                <div className='asistnt'>
                    <h2>Asistencia</h2>
                    <p>Centro de ayuda</p>
                    <p>Condiciones de uso</p>
                    <p>Políticas de Privacidad</p>
                </div>
                <div className='app'>
                    <h2>Aplicación</h2>
                    <p>Información del Desarrollo</p>
                </div>
                <div className='u-cont'>
                    <h2>U-Cont</h2>
                    <p>Información</p>
                    <p>Descarga</p>
                </div>
            </div>
        </div>
    </div>
)