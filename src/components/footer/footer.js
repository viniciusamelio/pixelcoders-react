import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo.png';
import image from '../../assets/images/galaxy.jpg'
import { MdEmail } from "react-icons/md";
const Footer = ()=>(
    <footer className="wave">
        <div style={{zIndex: 100}}>
            <img  src={logo} alt="Logo PixelCoders" height="80"/>            
        </div>
        <a href='mailto:contato@pixelcoders.com.br' style={{margin: '15px 0px',zIndex: 100}} id="emailRow"> <MdEmail id="icon" />  contato@pixelcoders.com.br</a>
        <span id="emailRow">  PixelCoders - 2020</span>
        <div style={{position: 'absolute',top : 0,width : '100%',height: '100%',backgroundImage : `url(${image})`, backgroundSize: 'cover',opacity: 0.04}} >

        </div>
    </footer>
);

export default Footer;