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
                <a className="nav-item" href="/">Serviços</a>
                <a className="nav-item" href="/">Sobre</a>
            </div>
        </div>
        <div id="social-container">
            <FaFacebookF className="socialIcon" />
            <FaInstagram className="socialIcon" />
        </div>
    </nav>
);

export default Navbar;