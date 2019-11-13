import React from 'react';
import './index.scss';
import User from '../../../icons/user.svg';

export default ( props ) => (
    <div>
        <div className='sidebar'>
            <div className='profile'>
                <img src={User} />
                <h2>Student</h2>
                <h3>Estudiante</h3>
            </div>
            <div className='options'>

            </div>
        </div>
        <div className='header'>

        </div>
    </div>
)