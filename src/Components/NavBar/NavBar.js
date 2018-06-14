import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithubSq from '@fortawesome/fontawesome-free-brands/faGithubSquare'
class NavBar extends Component {

    render(){
        return(<div className={css(st.mainNavArea)}>
            <div className={css(st.right)}>
            <h3 className={css(st.marLeft)}>
            <Link to='/' className={css(st.fontNavAdjust, st.iconHover)}
            style={{ textDecoration: 'none'}}>Home</Link></h3>
            <h3 className={css(st.marLeft)}>
            <Link to='/about' className={css(st.fontNavAdjust, st.iconHover)}
            style={{ textDecoration: 'none'}}>About</Link></h3>

            <h3 className={css(st.marLeft)}>
            <Link to='/skills' className={css(st.fontNavAdjust, st.iconHover)}
            style={{ textDecoration: 'none'}}>Skills</Link></h3>

            <h3 className={css(st.marLeft)}>
            <Link to='/portfolio' className={css(st.fontNavAdjust, st.iconHover)}
            style={{ textDecoration: 'none'}}>Portfolio</Link></h3>
            
            <h3 className={css(st.marLeft)}>
            <Link to='/contact' className={css(st.fontNavAdjust, st.iconHover)}
            style={{ textDecoration: 'none'}}>Contact</Link></h3>
            </div>
            
            <div className={css(st.right, st.mar0)}>
            <a href='https://www.linkedin.com/in/jonbaxt/' style={{textDecoration: 'none'}}>
            <FontAwesomeIcon className={css(st.marRight, st.fontAdjust, st.iconAdjust, st.iconHover)} icon={faLinkedin} />
            </a>
            <a href='https://github.com/jonbaxt/' style={{textDecoration: 'none'}}>
            <FontAwesomeIcon className={css(st.marRight, st.fontAdjust, st.iconAdjust, st.iconHover)} icon={faGithubSq} />
            </a>

            </div>
        </div>)
    }
}

const st = StyleSheet.create({
    mainNavArea: {
        position: 'fixed',
        height: '80px',
        width: '100%',
        background: 'rgba(255,133,93,1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
    },
    mar0: {
        margin: 0,
        padding: 0,
    },
    left: {

    },
    right: {
        display: 'flex',
        flexDirection: 'row',
    },
    marLeft: {
        marginLeft: '15px',
    },
    marRight: {
        marginRight: '15px',
    },
    fontAdjust: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        // alignItems: 'center',
    },
    fontNavAdjust: {
        fontSize: '20px',
        color: 'rgba(178,72,37,1)',
        transition: '1s ease all',
    },
    iconAdjust: {
        fontSize: '30px',
        color: 'rgba(178,72,37,1)',
        transition: '1s ease all',
    },
    iconHover: {
        ':hover': {
            color: 'blue',
            transition: '1s ease all',
        }
    },
})

export default NavBar;