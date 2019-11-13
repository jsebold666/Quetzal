import React from 'react';
import './index.scss';
import user from '../../../icons/user.svg';

export default ( props ) => (
    <div>
        <div className='register'>
            <div className='img'></div>
            <div className='freg'>
                <div className='reco'>
                <form method='POST' action=''>
                    <legend>Registro</legend>
                    <img src={user} /><input type='text' name='user' placeholder='Usuario' className='inpu'/>
                    <input type='email' name='mail' placeholder='Correo' className='inpu'/>
                    <input type='password' name='pwd' placeholder='Contraseña' className='inpu'/>
                    <input type='checkbox' value='aceppt' required className='chck' /><span>Acepto los terminos y condiciones</span>
                    <p>¿Ya tienes cuenta?</p>
                    <input type='submit' value='Registrarse' className='env'/>
                </form>
                </div>
            </div>
        </div>
    </div>
)