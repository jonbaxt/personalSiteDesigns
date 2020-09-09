import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollableAnchor from 'react-scrollable-anchor';

function NewAbout() {

    return (
        <div className={css(styles.mainArea)}>
            New About Page
            <h1 className={css(styles.bigFont, styles.underline)}>About</h1>

            <h2 className={css(styles.midFont)}>History</h2>            
            <div className={css(styles.timelineLeftSide)}>
            <h3 className={css(styles.smallFont)}>2008-2011 - BYU-Idaho Bachelors of Science</h3>
            
            <h3 className={css(styles.smallFont)}>2012-2019 - State of Utah Department of Human Services</h3>

            <h3 className={css(styles.smallFont)}>2018 - DevMountain Developers Coding Bootcamp, JavaScript Development</h3>
            </div>
            
            
            
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
    midFont: {
        // zIndex: '10',
        fontSize: '60px',
        '@media(max-width: 850px)': {
            fontSize: '40px',
        },
        '@media(max-width: 690px)': {
            fontSize: '30px',
        },
        '@media(max-width: 520px)': {
            fontSize: '20px',
        },
        '@media(max-width: 340px)': {
            fontSize: '10px',
        },
    },
    smallFont: {
        // zIndex: '10',
        fontSize: '23px',
        '@media(max-width: 850px)': {
            fontSize: '20px',
        },
        '@media(max-width: 690px)': {
            fontSize: '16px',
        },
        '@media(max-width: 520px)': {
            fontSize: '14px',
        },
        '@media(max-width: 340px)': {
            fontSize: '10px',
        },
    },
    underline: {
        textDecorationLine: 'underline',
    },
    timelineLeftSide: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'left',
        border: '1px solid black',
        width: '80%',
        

    }
});