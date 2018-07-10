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
        <Parallax
            blur={0}
            bgImage={valImg}
            bgImageAlt="Background Image"
            strength={380}
        >
            <h1 className='h1Res h1Loc'>About</h1>
            <div className='flCon' >

                <div className='blurbCont' >
                    <p className='parSmall'>
                        I'm a Web Developer specialized in Javascript, React, HTML, CSS and more with a history learning other coding languages from previous courses taken at UVU.</p>
                </div>

                <img src={portPic} alt='' className='imgArea' />

            </div>

            <div className='flRowAb moreTop' >
                <div className='flRowAb' >
                    <img src={BYUI} alt='' className='logoSizing' />
                    <img src={UtahSeal} alt='' className='logoSizing' />
                </div>

                <div className='blurbCont heightCh' >
                    <p className='parSmall' >Prior to Web Development I worked with the State of Utah in the department of human services using my Bachelors of Sociology from BYU-Idaho, which helped me learn skills in customer care and team building skills.  </p>
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
                    <p className='parSmall' >I love to figure out everything with code from front to back. I love to see how things work and that is why I love to always enhance my skills of being a full stack developer.</p>
                </div>

            </div>

            <div style={{ height: '40vh', width: '100vw' }} />
        </Parallax>
    )
}