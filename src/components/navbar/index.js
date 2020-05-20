import React from 'react';
import './styles.css';
import logo from './assets/logo.png';
import { MdMenu } from "react-icons/md";
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import './scripts/menu';
const Navbar = props => (
    <nav id ='navbar'>
        <div id="logo-container">
            <MdMenu id="burger" onClick={props.drawerClickHandler} />
            <div id="divider"></div>
            <a id="logo" href="/"><img src={logo} alt="Logo PixelCoders" height="48"></img></a>
            <div id="#desktop-nav">
                <a className="nav-item" href="/">Início</a>
                <a className="nav-item" href="/sobre">Sobre</a>
                <a className="nav-item" href="/orcamento">Fazer orçamento</a>
            </div>
        </div>
        <div >
             <a style={{textDecoration: 'none',color : 'white', fontSize: '1.4rem'}} rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/PixelCoders-101078254919396"><FaFacebookF className="socialIcon" /></a>
            <a style={{textDecoration: 'none',color : 'white', fontSize: '1.4rem'}} target="_blank" rel="noopener noreferrer" href="https://instagram.com/pixelcoders"><FaInstagram className="socialIcon" />  </a>  
        </div>
    </nav>
);

export default Navbar;