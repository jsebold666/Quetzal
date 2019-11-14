import React from 'react';
import './index.scss';

export default ( props ) => (
    <div>
        <p>
        { props.text ? props.text : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat similique soluta dignissimos debitis, cum sed quo ea dicta nostrum saepe veritatis nulla facere adipisci quisquam autem veniam nihil ex.` }
        </p>
    </div>
)