import React from 'react';
import { Parallax } from 'react-parallax';
import '../HomeScreen/HomeScreen.css';
import './AboutStyles.css';

import portPic from '../../Resources/Resized.PNG';
import valImg from '../../Resources/The_Verge_Pixel_Falls_Wallpaper_Landscape.0.png';
import BYUI from '../../Resources/Logos/BYUIdaho.png';
import UtahSeal from '../../Resources/Logos/UtahSeal.png';
import UVU from '../../Resources/Logos/UVU.png';
import devLogo from '../../Resources/Logos/devLogo.png';

export default function AboutSection() {

    return (
        <div style={{ background: '#240404', paddingTop: '60px', paddingBottom: '60px' }}>
            <h1 className='h1Res'>About</h1>
            <div style={{ display: 'flex', flexDirction: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <div className='blurbCont' >
                    <p className='parSmall'>
                        About Me
I'm a Web Developer specializing in Javascript, React, HTML, CSS and many other languages and frameworks based off courses taken at DevMountain and UVU.</p>
                </div>
                <img src={portPic} alt='' className='imgArea' />
            </div>

            <div className='flRowAb moreTop' >
                <div className='flRowAb' >
                    <img src={BYUI} alt='' className='logoSizing' />
                    <img src={UtahSeal} alt='' className='logoSizing' />
                </div>

                <div className='blurbCont' >
                    <p className='parSmall' >Prior to Web Development I worked with the State of Utah in the department of human services using my Bachelors of Sociology from BYU-Idaho, which helped me learn skills in customer care and team building skills.   </p>
                </div>
            </div>

            <div className='flCon moreTop' >

                <div className='blurbCont heightCh' >
                    <p className='parSmall' >I have studied coding independently and have taken courses from UVU and DevMountain to enhance my skills as a web developer.</p>
                </div>
                <span className='logoCont' ><img src={UVU} alt='' className='uvuLogoSiz' /></span>
            </div>

            <div className='flCon moreTop' >
                <img src={devLogo} alt='' className='logoSizing' />

                <div className='blurbCont heightCh' >
                    <p className='parSmall' >I love to understand all aspects of code, from front to back. I also love learning, and am always working on enhancing and updating my skills as a developer.</p>
                </div>

            </div>
        </div>
    )
}