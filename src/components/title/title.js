import React from 'react';

const Title = props => (
    <h1 style={{textShadow: props.shadow ,textAlign: 'center',fontFamily:'Rubik',fontSize:props.size??'2.5rem',color: props.color ?? 'white',fontWeight:400}}>{props.text}</h1>
);

export default Title;