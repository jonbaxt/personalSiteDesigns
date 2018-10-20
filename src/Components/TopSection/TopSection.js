import React from 'react';
import './TopSection.css'
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import { StyleSheet, css } from 'aphrodite';

// import about from '../../Resources/about.jpg';
// import abPic from '../../Resources/about.jpg';
// import portPic from '../../Resources/Resized.PNG'
import Mountains from '../../Resources/Mountains.jpg';
// import valImg from '../../Resources/The_Verge_Pixel_Falls_Wallpaper_Landscape.0.png'
// import valImg2 from '../../Resources/The_Verge_Singularity_Wallpaper_Landscape.0.png'
// import valImg3 from '../../Resources/The_Verge_Cubeometry_Wallpaper_Landscape.0.png'
// import fisher from '../../Resources/fishing.jpg'
export default function TopSection() {
    return (
        <div className={css(topCSS.topSection)} style={{width: '100%'}}>
                <Parallax
                    // className='parallaxTopArea'
                    blur={0}
                    bgImage={Mountains}
                    bgImageAlt="Background Image"
                    strength={380}
                >
                    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp" >
                    {/* <h1 className='h1Res h1Loc'>Jonathan Baxter</h1> */}
                    <h1 className={css(topCSS.h1Res, topCSS.h1Loc)}>Jonathan Baxter</h1>
                    {/* <h1 className='h1SecRes h1Loc2'>Web Developer</h1></ScrollAnimation> */}
                    <h1 className={css(topCSS.h1Res, topCSS. h1Loc2)}>Web Developer</h1></ScrollAnimation>
                    {/* <div style={{ height: '78vh', width: '98.9vw' }} /> */}
                    <div className={css(topCSS.parallaxDiv)} />
                </Parallax>
        </div>
    )
}
const topCSS = StyleSheet.create({
    topSection : {
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    h1Res: {
        marginTop: 0,
        fontFamily: 'arial',
        fontSize: '90px',
        color: 'white',
        textShadow: '4px 4px black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    h1Loc: {
        marginTop: '300px'
    },
    h1Loc2: {
        marginTop: '100px'
    },
    parallaxDiv: {
        // height: '78vh',
        height: '60vh',
        // width: '98.9vw',
        width: '98.8vw',
    },
});