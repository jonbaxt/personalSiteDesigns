import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'

import TopSection from './Components/TopSection/TopSection';
import AboutSection from './Components/AboutSection/AboutSection';
import SkillsSection from './Components/Skills/SkillsSection';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

import './App.css';

class App extends Component {
  render() {
    fontawesome.library.add(brands, solid, regular)
    return (
      <div className="App">
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
