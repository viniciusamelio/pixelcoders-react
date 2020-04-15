import React from 'react';
import './styles.css';


const Indicator = props =>(
    <div style={{border:'3px solid'+props.color}} className="indicator">
        {props.label}
    </div>
);


export default Indicator; 