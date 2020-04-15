import React from 'react';

const Title = props => (
    <h1 style={{textShadow: '0px 3px 6px  #4815F5 ',textAlign: 'center',fontFamily:'Rubik',fontSize:props.size??'2.5rem',color: props.color ?? 'white',fontWeight:400}}>{props.text}</h1>
);

export default Title;