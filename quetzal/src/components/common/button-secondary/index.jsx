import React from 'react';
import './index.scss';

export default ( props ) => (
    <button
        className = { `button-secondary ${ props.class ? props.class : null }` }
        onClick = { ( ) => props.f_onClick ? props.f_onClick( ) : null }
        id = { props.id ? props.id : null }>{ props.text ? props.text : `Secondary Button` }</button>
)