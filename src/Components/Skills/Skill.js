import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';


import ImageThum from './ImageThumBootStrap';

export default function Skill(){

    return(
        <div className={css(st.fuzzIn)}>
            <PageHeader>Skills<small> what I'm skilled at currently and will be developing more</small></PageHeader>
            
            <ImageThum />
            

            {/* <FontAwesomeIcon icon={faNodeJs} /> */}
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
    iconLarge: {
        fontSize: '100px'
    }
})