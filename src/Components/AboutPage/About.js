import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import abPic from '../../Resources/about.jpg'

function About(){

    return(
        <div className={css(st.fuzzIn)}>
            <h1 className={css(st.marLef)}>About Me</h1>
            <div className={css(st.marTop, st.fl)}>
            <div className={css(st.boxSpacing)}>
            <img src={abPic} alt='' className={css(st.picRes)} />
            </div>
            <div className={css(st.marTop, st.boxSpacing)}>
                <h3>I'm a longtime lover of coding that recently have taken the plunge of after 6 years of working with the State of Utah, I took 3 months to focus and hone in on my skills of programming and coding into web developing.</h3>
                <h3>I have developed my skills in React, Node, CSS, HTML, Chart.js, Massive, Sessions, etc.</h3>
                <h3>My background includes knowledge of C#, C++, Java, Javascript from other studies I've done.</h3>
            </div>
            </div>
        </div>
    )

}
const initOpac = { 'from': {opacity: 0}, 'to':{opacity: 1} }
const st = StyleSheet.create({
    fuzzIn: {
        animationName: initOpac,
        animationDuration: '1s',
        animationTimingFunction: 'ease-in',
        animationIterationCount: 'initial'
    },
    picRes: {
        width: '100%'
    },
    marLef:{
        marginLeft: '70px',
    },
    boxSpacing:{
        width: '50%',
    },
    marTop: {
        marginTop: '5px',
        marginLeft: '10px',
    },
    fl:{
        display:'flex',
        flexDirection: 'row',
    },
})
export default About;