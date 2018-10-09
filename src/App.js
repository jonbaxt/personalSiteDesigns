import React, { Component } from 'react';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
import "animate.css/animate.min.css";

// import fontawesome from '@fortawesome/fontawesome';
// import brands from '@fortawesome/fontawesome-free-brands';
// import solid from '@fortawesome/fontawesome-free-solid';
// import regular from '@fortawesome/fontawesome-free-regular';
// import { FontAwesomeIcon } from 

// import NavBar from './Components/NavBar/NavBar';
import TopSection from './Components/TopSection/TopSection';
import AboutSection from './Components/AboutSection/AboutSection';
import SkillsSection from './Components/Skills/SkillsSection';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

import './App.css';

class App extends Component {
  render() {
    // fontawesome.library.add(brands, solid, regular)
    return (
      <div className="App">
        
        {/* <NavBar />  */}
        
        {/* <NavLink to='/#TopSection' ></NavLink> */}
        <TopSection />
        <AboutSection />       
        
        <SkillsSection /> 
        
        <Portfolio />
        
        <Contact />
      </div>
    );
  }
}

export default App;
