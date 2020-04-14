import React from 'react';
import './styles.css';
import { MdClose } from "react-icons/md";
const Drawer = props => (    
    <div id="drawer">
        <div id="drawerCloser">
                <MdClose onClick={props.drawerClickHandler} />
        </div>
        <a href="/">Início</a>
        <a href="/">Serviços</a>
        <a href="/">Sobre</a>
    </div>
);

export default Drawer;