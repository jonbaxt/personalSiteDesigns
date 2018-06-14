import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeScreen from './Components/HomeScreen/HomeScreen';
import About from './Components/AboutPage/About';
import Contact from './Components/ContactPage/Contact';

export default (
    <Switch>
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </Switch>
)