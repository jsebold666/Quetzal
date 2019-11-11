import React from 'react';
import './index.scss';
import student from '../../img/prg04.png';
import pro from '../../img/prg00.png';
import team from '../../img/workteam.png'

export default ( props ) => (
    <div>
        <div className='enc'>
           <div className="overlay">
               <h2>
                   Solo Piensa
               </h2>
               <div className = "p-container">
                    <p>Empieza a aprender aquí y diviértete estudiando de forma rápida y eficaz</p>
               </div>
               <button>Registrarse</button>
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
            <h2>Descubre Nuestro equipo de trabajo</h2>
        </div>
    </div>
)