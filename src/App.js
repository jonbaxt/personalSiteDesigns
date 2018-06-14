import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'

// import NavBar from './Components/NavBar/NavBar';
import NavBarBooted from './Components/NavBar/NavBarBootStrapped';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    fontawesome.library.add(brands, solid, regular)
    return (
      <div className="App">
        {/* <NavBar /> */}
        <NavBarBooted />
        <div className='routeArea'>{routes}</div>
      </div>
    );
  }
}

export default App;
