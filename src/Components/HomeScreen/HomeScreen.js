import React from 'react';

import { StyleSheet, css } from 'aphrodite';
import BootStrapCarousel from './BootStrapCarousel';
import { PageHeader } from 'react-bootstrap'

class HomeScreen extends React.Component {
    
    render(){
        return(<div className={css(st.fuzzIn, st.mainHome)}>
            <PageHeader>Jonathan Baxter <small>Web Developer</small></PageHeader>
            <BootStrapCarousel />
        </div>)
    }
}
const initOpac = { 'from': {opacity: 0}, 'to':{opacity: 1} }
const st = StyleSheet.create({
    fuzzIn: {
        animationName: initOpac,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    mainHome: {
        textAlign: 'left',
    },
})

export default HomeScreen;