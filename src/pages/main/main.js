import React from 'react';
import FullWidthImage from '../../components/fullwidthimage/fullwidthimage';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
//assets
import mainPlanet from '../../assets/images/mainPlanet.jpg';
import translucidGalaxy from '../../assets/images/translucidGalaxy.png';
import translucidMeteor from '../../assets/images/translucidBluePlanet.png';
import translucidBluePlanet from '../../assets/images/translucidBluePlanet02.png'
import '../../styles.css';
//icons
import { FaMobile,FaPaintBrush  } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

class Main extends React.Component {
  render() {

    return (
      <div>
        <FullWidthImage content={<div>
          <Title main="true" size="2.6rem" shadow="0px 2px 6px #3916F2" text="Criação de apps e sites!" />
          <Title size="2.2rem" shadow='0px 3px 6px  #4815F5 ' text="Soluções de outro mundo pensadas pixel por pixel" />
          <div style={{ height: '15vh' }}></div>
          <Button href="/orcamento" backgroundColor="#4C18FC" hoverColor="#3B0FD1" shadow="0px 6px 15px #4A00B2" opacity="0.85" label="Fazer Orçamento!" />
        </div>} height={1} image={mainPlanet} />
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>                              

                <Card borderColor="#3DA1E9" image={translucidMeteor} content={
                    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <FaPaintBrush className="icon blue-text" />
                        <Title text="Identidade visual" size="1.4rem" />
                        <p className="cardText">
                        Logos, protótipos de sites ou apps,
                    brandbooks e  ilustrações.
                        </p>
                        <a className="blue-link" href="https://imgur.com/a/xvfcJP3" target="_blank" rel="noopener noreferrer">Ver amostra</a>
                    </div>
                } />

                <Card borderColor="#5D42F5"  image={translucidBluePlanet} content={
                    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <MdWeb className="icon purple-text" />
                        <Title text="Websites" size="1.4rem" />
                        <p className="cardText">
                            Precisando de um site ?
                            Seja ele institucional, landing page ,comercial
                            ou pessoal nós damos conta!
                            
                        </p>
                        <a className="purple-link" href="http://corujal.herokuapp.com" target="_blank" rel="noopener noreferrer">Ver amostra</a>
                    </div>
                } />  

                <Card borderColor="#D428F5" image={translucidGalaxy} content={
                    <div style={{ padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <FaMobile className="icon red-text" />
                        <Title text="Apps" size="1.4rem" />
                        <p className="cardText">
                            Tanto aplicações web quanto android.
                            Planejamos, documentamos
                            e desenvolvemos.
                        </p>
                        
                       <a className="link" href="https://imgur.com/a/fAcnamF" target="_blank" rel="noopener noreferrer">Ver amostra</a>
                       
                    </div>
                } />
            </div>
            <div className="row">
            
                       <Button href="/orcamento" hoverColor="#b51244" shadow="0px 0px 8px #EF1F1F" padding="17px 35px " backgroundColor="#FC185E" label="Fazer orçamento!" />
            
            </div>
             <Footer />
      </div>
    );
  }
}

export default Main;