import React from 'react';
import Footer from '../../components/footer/footer';
import FullWidthImage from '../../components/fullwidthimage/fullwidthimage';
import Title from '../../components/title/title';
import Card from '../../components/card/card';
import Button from '../../components/button/button';
//assets
import galaxy from '../../assets/images/galaxy.jpg';
import translucidGalaxy from '../../assets/images/translucidGalaxy.png';
import { FaMobile,FaPaintBrush } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import '../../styles.css';

class ServicesView extends React.Component {
    render() {
        return <div>
            <FullWidthImage opacity="0.5" image={galaxy} content={
                <div>
                    <div style={{ padding: '20px' }}>
                        <Title shadow="0px 2px 6px #3916F2" text="Veja as possíveis obras de arte que podemos te oferecer!" />
                    </div>
                </div>
            } />
            <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card image={translucidGalaxy} content={
                    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <MdWeb className="icon red-text" />
                        <Title text="Websites" size="1.4rem" />
                        <p className="cardText">
                            Precisando de um site ?
                            Seja ele institucional, landing page ,comercial
                            ou pessoal nós damos conta!
                            
                        </p>
                        <a className="link" href="http://corujal.herokuapp.com" target="_blank" rel="noopener noreferrer">Ver amostra</a>
                    </div>
                } />

                <Card image={translucidGalaxy} content={
                    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <FaMobile className="icon red-text" />
                        <Title text="Apps" size="1.4rem" />
                        <p className="cardText">
                            Tanto aplicações web quanto android.
                            Planejamos, documentamos
                            e desenvolvemos.
                        </p>
                        
                       <a className="link" href="https://ibb.co/QrD47QK" target="_blank" rel="noopener noreferrer">Ver amostra</a>
                       
                    </div>
                } />

                <Card image={translucidGalaxy} content={
                    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <FaPaintBrush className="icon red-text" />
                        <Title text="Identidade visual" size="1.4rem" />
                        <p className="cardText">
                        Logos, protótipos de sites ou apps,
                    brandbooks e  ilustrações.
                        </p>
                        <a className="link" href="https://ibb.co/c8ssC87" target="_blank" rel="noopener noreferrer">Ver amostra</a>
                    </div>
                } />
            </div>
            <div className="row">
            
                       <Button href="/orcamento" shadow="0px 0px 8px #EF1F1F" padding="20px 30px " backgroundColor="#FC185E" label="Quero minha obra!" />
            
            </div>
            <Footer />
        </div>
    }
}
export default ServicesView;