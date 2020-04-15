import React, { Component } from 'react';
import Navbar from './components/navbar/index';
import Drawer from './components/drawer/drawer';
import Backdrop from './components/backdrop/backdrop';
import FullWidthImage from './components/fullwidthimage/fullwidthimage';
import Title from './components/title/title';
import Button from './components/button/button';
import Card from './components/card/card';
import Indicator from './components/indicator/indicator';
//assets
import logo from './assets/images/logo.png';
import mainPlanet from './assets/images/mainPlanet.jpg';
import meteor from './assets/images/translucidMeteor.png';
import bluePlanet from './assets/images/translucidBluePlanet.png';
import bluePlanet2 from './assets/images/translucidBluePlanet02.png';
import './styles.css';
class App extends Component {

  state = {
    drawerOpen: false
  }

  drawerToggle = () => {
    this.setState((prevState) => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  }

  render() {
    let drawer;
    let backdrop;
    if (this.state.drawerOpen) {
      drawer = <Drawer drawerClickHandler={this.drawerToggle} />
      backdrop = <Backdrop />
    }
    return (
      <div className="App">
        <Navbar drawerClickHandler={this.drawerToggle} />
        {drawer}
        {backdrop}
        <FullWidthImage content={<div>
          <Title text="Soluções de outro mundo pensadas pixel por pixel" />
          <div style={{ height: '20vh' }}></div>
          <Button href="/" shadow="0px 6px 15px #4A00B2" opacity="0.85" label="Orçar agora!" />
        </div>} height={1} image={mainPlanet} />
        <div style={{ width: '100%', padding: '20px 10px' }}>
          <Card image={bluePlanet} content={
            <div className="centeredContent">
              <Indicator color="#3DA1E9" label="1" />
              <img src={logo} alt="Logo PixelCoders" style={{marginBottom: '20px'}} height="80" />
              <p className="cardText">
                A PixelCoders é um grupo de desenvolvimento de
                software que enxerga suas criações, não apenas
                como produtos comerciais,mas como obras de arte.
                Sabemos da importância de nossas soluções no
                negócio de nossos clientes, é por isso que nossas
                obras são pensadas pixel por pixel.
                </p>
            </div>
          } borderColor="#3DA1E9" />
        </div>
      </div>
    );
  }
}

export default App;
