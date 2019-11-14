import React from 'react';
import './index.scss';
import Sidebar from '../../../components/common/sidebar/index.jsx';

import * as ROUTES from '../../../Routes'
import { NavLink } from 'react-router-dom'

export default ( props ) => (
    <div>
        <div className="courses">
        <Sidebar />
            <div className="cards">
                <NavLink to = { ROUTES.VIDEO } className = 'link'><div className="subject math">
                    <span>Matemáticas</span>
                </div></NavLink>
                <div className="subject spani">
                    <span>Español</span>
                </div>
                <div className="subject science">
                    <span>Ciencias</span>
                </div>
                <div className="subject inf">
                    <span>Informática</span>
                </div>
            </div>
        </div>
    </div>
)