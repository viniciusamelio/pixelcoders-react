import React, { Component } from 'react';
import Navbar from './components/navbar/index';
import Drawer from './components/drawer/drawer';
import Backdrop from './components/backdrop/backdrop';
import Routes from './routes';

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
        <Routes / >        
      </div>
    );
  }
}

export default App;
