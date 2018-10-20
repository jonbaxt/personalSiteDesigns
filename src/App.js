import React, { Component } from 'react';
import "animate.css/animate.min.css";

import NavBar from './Components/NavBar/NavBar';
import Routes from './routes';
// import AboutSection from './Components/AboutSection/AboutSection';
// import SkillsSection from './Components/Skills/SkillsSection';
// import Portfolio from './Components/Portfolio/Portfolio';
// import Contact from './Components/Contact/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar /> 
        <Routes />
        {/* <NavLink to='/#TopSection' ></NavLink> */}
        {/* <AboutSection />        */}
        {/* <SkillsSection />  */}
        {/* <Portfolio /> */}
        {/* <Contact /> */}
      </div>
    );
  }
}

export default App;
