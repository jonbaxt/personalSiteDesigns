import React from 'react';
import { StyleSheet, css } from 'aphrodite';
// import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs'
import faNpm from '@fortawesome/fontawesome-free-brands/faNpm'
import faReact from '@fortawesome/fontawesome-free-brands/faReact'
import faJs from '@fortawesome/fontawesome-free-brands/faJs'
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5'
import faDigitalOcean from '@fortawesome/fontawesome-free-brands/faDigitalOcean'
import faCss3 from '@fortawesome/fontawesome-free-brands/faCss3'

export default function ImageThumBootStrap() {

    return (
        <div className={css(st.col, st.wr)}>
            
                <div>
                    <FontAwesomeIcon className={css(st.iconLarge, st.fl)} icon={faHtml5} />
                    <h3 className={css(st.center)} >HTML 5</h3>
                </div>
                <div>
                    <FontAwesomeIcon className={css(st.iconLarge)} icon={faCss3} />
                    <h3 className={css(st.center)} >CSS 3</h3>
                </div>
                <div>
                    <FontAwesomeIcon className={css(st.iconLarge)} icon={faJs} />

                    <h3 className={css(st.center)} >JAVASCRIPT</h3>
                </div>
                <div>
                    <FontAwesomeIcon className={css(st.iconLarge)} icon={faReact} />

                    <h3 className={css(st.center)} >REACT</h3>
                </div>
            
            <div>
                <FontAwesomeIcon className={css(st.iconLarge)} icon={faNodeJs} />
                <h3 className={css(st.center)} >NODEjs</h3>
            </div>
            <div>
                <FontAwesomeIcon className={css(st.iconLarge)} icon={faNpm} />
                <h3 className={css(st.center)} >NPM</h3>
            </div>
            <div>
                <FontAwesomeIcon className={css(st.iconLarge)} icon={faDigitalOcean} />
                <h3 className={css(st.center)} >Digital Ocean</h3>
            </div>
            
        </div>
    )
}

const st = StyleSheet.create({
    iconLarge: {
        fontSize: '100px'
    },
    center: {
        textAlign: 'center',
        // margin: '0 auto',
    },
    fl: {
        display: 'flex',
        justifyContent: 'center',
    },
    col: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    wr: {
        flexWrap: 'wrap-around',
    },
})