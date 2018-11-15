import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import '../HomeScreen/HomeScreen.css';
import './SkillsSection.css';
import '../Portfolio/Portfolio.css'
import { Parallax } from 'react-parallax';
import Unsplash from '../../Resources/Unsplash.jpg';
// import valImg from '../../Resources/The_Verge_Pixel_Falls_Wallpaper_Landscape.0.png';
// import valImg2 from '../../Resources/The_Verge_Singularity_Wallpaper_Landscape.0.png';
// import valImg3 from '../../Resources/The_Verge_Cubeometry_Wallpaper_Landscape.0.png';

import jsLog from '../../Resources/SkillsLogos/JSLogo.png';
import htmlLog from '../../Resources/SkillsLogos/HTML5.png';
import cssLog from '../../Resources/SkillsLogos/CSS3.png';
import reactLog from '../../Resources/SkillsLogos/ReactJS.png';
import jsES6 from '../../Resources/SkillsLogos/es6.png';
import vueLog from '../../Resources/SkillsLogos/VuejsLogo.png';
import nodeJs from '../../Resources/SkillsLogos/NodejsLogo.png';
import massLogo from '../../Resources/SkillsLogos/Massive.jpg';
import postGresLogo from '../../Resources/SkillsLogos/postgresql-logo.png';
import reduxLog from '../../Resources/SkillsLogos/Redux.png';
import passportLog from '../../Resources/SkillsLogos/passportJS.png';
import chartJsLog from '../../Resources/SkillsLogos/Chartjs.png';
import parLogo from '../../Resources/SkillsLogos/parralax.png';
import BootStLog from '../../Resources/SkillsLogos/Bootstrap.png';
import slickLogo from '../../Resources/SkillsLogos/slick.gif';
import sassLogo from '../../Resources/SkillsLogos/sass.png';


export default function SkillsSection() {

    return (
        <Parallax
            // className='parallaxTopArea'
            blur={0}
            bgImage={Unsplash}
            bgImageAlt="Background Image"
            strength={300}
        >
            <ScrollableAnchor id={'skillsSection'}>
            <ScrollAnimation animateIn="pulse">
            <h1 className='h1Res h1Loc'>Skills</h1></ScrollAnimation>
            </ScrollableAnchor>


            <div className='skillsCont' >

                <span className='iconCont' ><img src={jsES6} alt='' className='skillLogoResExtra' /></span>

                <span className='iconCont' ><img src={htmlLog} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={cssLog} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={reactLog} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={jsLog} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={vueLog} alt='' className='skillLogoResExtra' /></span>

                <span className='iconCont' ><img src={nodeJs} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={massLogo} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={postGresLogo} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={reduxLog} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={passportLog} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={chartJsLog} alt='' className='skillLogoRes' style={{ width: '180px' }} /></span>

                <span className='iconCont' ><img src={parLogo} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={sassLogo} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={BootStLog} alt='' className='skillLogoRes' /></span>

                <span className='iconCont' ><img src={slickLogo} alt='' className='skillLogoRes' /></span>


                <span className='iconContWide' >
                    <p className='pRes cen noInd colInvert' >
                        Related Skills from other Studies<br /><br />
                        C++<br />

                        C# <br />

                        Java <br /><br />

                        And Courses in:<br /><br />

                        Computer Architecture <br />

                        SQL Database with Oracle <br />

                        Linux Administation - Intro and Advanced <br />

                        Computer Networking <br />
                    </p>
                </span>


            </div>

            <div style={{ height: '50vh', width: '100vw' }} />
        </Parallax>
    )
}