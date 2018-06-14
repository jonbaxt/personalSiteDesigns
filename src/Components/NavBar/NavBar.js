import React, { Component } from 'react';

import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render(){
        return(<div className={css(st.mainNavArea)}>
            <div className={css(st.right)}>
            <h3 className={css(st.marLeft)}>
            <Link to='/' 
            style={{ textDecoration: 'none'}}>Home</Link></h3>
            <h3 className={css(st.marLeft)}>
            <Link to='/about'
            style={{ textDecoration: 'none'}}>About</Link></h3>
            <h3 className={css(st.marLeft)}>
            <Link to='/contact'
            style={{ textDecoration: 'none'}}>Contact</Link></h3>
            </div>
            <div className={css(st.right)}>
            <h3 className={css(st.marRight)}>Portfolio</h3>
            <h3 className={css(st.marRight)}><a href='https://www.linkedin.com/in/jonbaxt/' style={{textDecoration: 'none'}}>LinkedIn</a></h3>
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
})

export default NavBar;