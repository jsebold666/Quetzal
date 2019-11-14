import React from 'react';
import './index.scss';

export default ( props ) => (
    <div>
        <h1>{ props.text ? props.text : 'Lorem Ipsup' }</h1>
    </div>
)