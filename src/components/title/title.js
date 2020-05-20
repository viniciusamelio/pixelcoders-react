import React from 'react';

const Title = props => (
     props.main ===  "true" ?  <h1 style={{textShadow: props.shadow ,textAlign: 'center',fontFamily:'Rubik',fontSize:props.size??'2.5rem',color: props.color ?? 'white',fontWeight:400}}>{props.text}</h1>
     :  <h2 style={{textShadow: props.shadow ,textAlign: 'center',fontFamily:'Rubik',fontSize:props.size??'2.5rem',color: props.color ?? 'white',fontWeight:400}}>{props.text}</h2>
);

export default Title;