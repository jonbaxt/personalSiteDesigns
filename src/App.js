import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className='routeArea'>{routes}</div>
      </div>
    );
  }
}

export default App;
