import React from 'react';
import './styles.css';

const FullWidthImage = props => (
    <div className="fullwidth banner" style={{height: '100vh' }}>
        {props.content}
        <div className="banner" style={{width:'100%',height:'100%',backgroundImage:`url(${props.image})`,zIndex:-1,position:'absolute',top:0,opacity: props.opacity ?? 1}}>

        </div>
    </div>
);


export default FullWidthImage;