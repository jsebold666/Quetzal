import React from 'react';
import './index.scss';


export default ( props ) => (
    <div 
        className = {`switch ${ props.active ? "active" : "disable" }`}
        onClick = { () => props.changeSwitch() } >
        <div className = {`indicate ${ props.active ? "active" : "disable" }`} />
    </div>
)
