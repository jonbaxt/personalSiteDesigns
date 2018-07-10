import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'

// import NavBar from './Components/NavBar/NavBar';
// import NavBarBooted from './Components/NavBar/NavBarBootStrapped';

import TopSection from './Components/TopSection/TopSection';
import AboutSection from './Components/AboutSection/AboutSection';
import SkillsSection from './Components/Skills/SkillsSection';

import './App.css';

class App extends Component {
  render() {
    fontawesome.library.add(brands, solid, regular)
    return (
      <div className="App">
        <TopSection />
        <AboutSection />       
        <SkillsSection /> 
      </div>
    );
  }
}

export default App;
