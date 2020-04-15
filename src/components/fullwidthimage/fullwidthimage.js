import React from 'react';
import './styles.css';

const FullWidthImage = props => (
    <div className="fullwidth banner" style={{height:`100vh`,backgroundImage:`url(${props.image})` }}>
        {props.content}
    </div>
);


export default FullWidthImage;