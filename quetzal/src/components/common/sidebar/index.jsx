import React from 'react';
import './index.scss';
import User from '../../../icons/user.svg';
import Bottom from '../../../img/bottom.png';

export default ( props ) => (
    <div>
        <div className='sidebar'>
            <div className='profile'>
                <img src={User} />
                <h2>Student</h2>
                <h3>Estudiante</h3>
            </div>
            <div className='options'>
                <a href=''>Cursos</a>
                <a href=''>Perfil</a>
                <a href=''>Noticias</a>
                <a href=''>Foros</a>
                <a href=''>Nosotros</a>
            </div>
            <div className='img'>
                <img src={Bottom} />
            </div>
        </div>
    </div>
)