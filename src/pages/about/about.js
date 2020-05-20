import React from 'react';
import FullWidthImage from '../../components/fullwidthimage/fullwidthimage';
import bluePlanet from '../../assets/images/bluePlanet.jpg';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaFacebookSquare, FaQuestion, FaToolbox } from 'react-icons/fa';
import Button from '../../components/button/button';
import Card from '../../components/card/card';
import Indicator from '../../components/indicator/indicator';
import Footer from '../../components/footer/footer';
//assets
import './styles.css';
import logo from '../../assets/images/logo.png';
import meteor from '../../assets/images/translucidMeteor.png';
import bluePlanet2 from '../../assets/images/translucidBluePlanet02.png';
import planet from '../../assets/images/translucidBluePlanet.png';

class AboutView extends React.Component {

  render() {
    return <div style={{ width: '100%' }}>
      <FullWidthImage opacity="0.5" height="50vh" image={bluePlanet} content={
        <div style={{ marginTop: '120px' }}>
          <div style={{ background: `url(${logo}) no-repeat center #16121A`, backgroundSize: 'contain' }} className="profilePicture" />
          <div style={{ margin: '10px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <p style={{ color: '#FFFFFF', fontFamily: 'roboto' }}>
              Suzano, São Paulo <br />


            </p>
            <p style={{ color: '#3DA1E9' }}>
              <a style={{texDecoration:'None',color: '#3DA1E9'}} target="__blank" href="mailto:vinicius.amelio@pixelcoders.com.br"><MdEmail style={{ fontSize: '28px' }} /></a>
              <a style={{texDecoration:'None',color: '#3DA1E9'}} target="__blank" href="https://www.instagram.com/pixelcoders/"> <FaInstagram style={{ fontSize: '28px' }} /></a>
              <a style={{texDecoration:'None',color: '#3DA1E9'}}  href="https://facebook.com/pixelcoderstecnologia/" target="__blank"><FaFacebookSquare style={{ marginBottom: '2px' }} className="fbIcon" /></a>
            </p>
          </div>

        </div>
      } />

      <div className="row" style={{ padding: '10px' }}>
      <Card image={planet} borderColor="#3DA1E9" content={
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
            <Button href="/orcamento" shadow="0px 3px 8px #EF1F1F" padding="20px 30px " backgroundColor="#FC185E" label="Quero minha obra!" />
          </div>
        } />
      </div>
      <Footer />
    </div>
  }
}

export default AboutView;