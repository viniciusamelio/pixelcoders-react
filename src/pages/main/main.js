import React from 'react';
import FullWidthImage from '../../components/fullwidthimage/fullwidthimage';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import Card from '../../components/card/card';
import Indicator from '../../components/indicator/indicator';
//assets
import logo from '../../assets/images/logo.png';
import mainPlanet from '../../assets/images/mainPlanet.jpg';
import meteor from '../../assets/images/translucidMeteor.png';
import bluePlanet from '../../assets/images/translucidBluePlanet.png';
import bluePlanet2 from '../../assets/images/translucidBluePlanet02.png';
import '../../styles.css';
//icons
import { FaQuestion, FaToolbox } from "react-icons/fa";

class Main extends React.Component {
  render() {

    return (
      <div>
        <FullWidthImage content={<div>
          <Title shadow='0px 3px 6px  #4815F5 ' text="Soluções de outro mundo pensadas pixel por pixel" />
          <div style={{ height: '20vh' }}></div>
          <Button href="/" backgroundColor="#4C18FC" hoverColor="#3B0FD1" shadow="0px 6px 15px #4A00B2" opacity="0.85" label="Orçar agora!" />
        </div>} height={1} image={mainPlanet} />
        <div className="row" style={{ padding: '10px' }}>
          <Card image={bluePlanet} borderColor="#3DA1E9" content={
            <div className="centeredContent">
              <Indicator color="#3DA1E9" label="1" />
              <h2>Quem?</h2>
              <img src={logo} alt="Logo PixelCoders" style={{ marginBottom: '20px' }} height="80" />
              <p className="cardText">
                A PixelCoders é um grupo de desenvolvimento de
                software que enxerga suas criações, não apenas
                como produtos comerciais,mas como obras de arte.
                Sabemos da importância de nossas soluções no
                negócio de nossos clientes, é por isso que nossas
                obras são pensadas pixel por pixel.
                    </p>
            </div>
          } />
          <Card image={bluePlanet2} borderColor="#5D42F5" content={
            <div className="centeredContent">
              <Indicator color="#5D42F5" label="2" />
              <h2>Por quê?</h2>
              <FaQuestion className="icon purple-text" />
              <p className="cardText">
                Nossa principal filosofia é a qualidade nos mínimos
                detalhes, acompanhada da transparência no
                desenvolvimento.
                Acreditamos que um bom projeto envolve uma boa
                comunicação, de ambas as partes, para desenvolver a
                melhor obra que atenda a sua necessidade.Mais
                que atender necessidades, queremos agregar valor ao
                seu negócio,com nossa arte.
                    </p>
            </div>
          } />

          <Card image={meteor} borderColor="#D428F5" content={
            <div className="centeredContent">
              <Indicator color="#D428F5" label="3" />
              <h2>Como?</h2>
              <FaToolbox className="icon pink-text" />
              <p className="cardText" style={{ marginBottom: '15px' }}>
                Desde o planejamento conceitual da obra, até a
                lapidação de sua versão final, documentamos
                e apresentamos cada decisão tomada.
                Prezamos pela transparência e opinião quanto
                as decisões tomadas para o desenvolvimento.
                  </p>
              <Button href="/" shadow="0px 3px 8px #EF1F1F" padding="20px 30px " backgroundColor="#FC185E" label="Quero minha obra!" />
            </div>
          } />
        </div>

      </div>
    );
  }
}

export default Main;