import React from 'react';
import './index.scss';
import Sidebar from '../../../components/common/sidebar/index.jsx';

export default ( props ) => (
    <div>
        <div className="courses">
        <Sidebar />
            <div className="cards">
                <div className="subject math">
                    <span>Matemáticas</span>
                </div>
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