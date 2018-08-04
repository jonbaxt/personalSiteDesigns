import React from 'react';
import './TopSection.css'
import { Parallax } from 'react-parallax';
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
        <div className='topSection'>
                <Parallax
                    // className='parallaxTopArea'
                    blur={0}
                    bgImage={Mountains}
                    bgImageAlt="Background Image"
                    strength={380}
                >
                    <h1 className='h1Res h1Loc'>Jonathan Baxter</h1>
                    <h1 className='h1SecRes h1Loc2'>Web Developer</h1>
                    <div style={{ height: '78vh', width: '100vw' }} />

                </Parallax>
        </div>
    )

}