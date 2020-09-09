import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';

function NewAbout() {

    return (
        <div className={css(styles.mainArea)}>
            New About Page
            <h1 className={css(styles.bigFont, styles.underline)}>About</h1>

            
            
            
            
            
            
            
            
            -------------------------------------------
        </div>
    )
}

export default NewAbout;

const styles = StyleSheet.create({
    mainArea: {
        width: '100%',
        color: 'black',
        textShadow: '1px 1px 2px grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigFont: {
        // zIndex: '10',
        fontSize: '120px',
        '@media(max-width: 850px)': {
            fontSize: '100px',
        },
        '@media(max-width: 690px)': {
            fontSize: '80px',
        },
        '@media(max-width: 520px)': {
            fontSize: '40px',
        },
        '@media(max-width: 340px)': {
            fontSize: '30px',
        },
    },
    underline: {
        textDecorationLine: 'underline',
    },
});