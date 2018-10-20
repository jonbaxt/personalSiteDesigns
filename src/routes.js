import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TopSection from './Components/TopSection/TopSection';


export default function Routes() {
    return (
        <Switch>
            <Route path='/' component={TopSection} exact />
        </Switch>
    )
}