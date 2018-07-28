import React from 'react';
import './HomeScreen.css'
import { Parallax, Background } from 'react-parallax';
// import about from '../../Resources/about.jpg';
import abPic from '../../Resources/about.jpg';
import portPic from '../../Resources/Resized.PNG'
import valImg from '../../Resources/The_Verge_Pixel_Falls_Wallpaper_Landscape.0.png'
import valImg2 from '../../Resources/The_Verge_Singularity_Wallpaper_Landscape.0.png'
import valImg3 from '../../Resources/The_Verge_Cubeometry_Wallpaper_Landscape.0.png'
import fisher from '../../Resources/fishing.jpg'


// import BootStrapCarousel from './BootStrapCarousel';
// import SlickCaras from './SlickCaras';
// import { PageHeader } from 'react-bootstrap'

// C:\Users\Jon Baxter\Documents\DevMountain\Projects\portfolio-intro-website\src\Resources\The_Verge_Pixel_Falls_Wallpaper_Landscape.0.png
class HomeScreen extends React.Component {

    render() {
        return (<div className='fuzzIn mainHome'>

            <div class='topSection' >
                {/* <img src={abPic} alt='' /> */}

                <Parallax
                    // className='parallaxTopArea'
                    blur={0}
                    bgImage={valImg}
                    bgImageAlt="Background Image"
                    strength={380}
                >
                    <h1 className='h1Res h1Loc'>Jonathan Baxter</h1>
                    <h1 className='h1SecRes h1Loc2'>Web Developer</h1>
                    <div style={{ height: '78vh', width: '100vw' }} />

                </Parallax>
            </div>



           
            <div className='aboutMeSection' >

            </div>


            <Parallax
                blur={0}
                bgImage={valImg2}
                bgImageAlt="Background Image"
                strength={380}
            >
                <div style={{ height: '40vh', width: '100vw' }} />
            </Parallax>

            <div className='sector marTopAndBot' >

            </div>
            <Parallax
                // className='parallaxTopArea'
                blur={0}
                bgImage={valImg3}
                bgImageAlt="Background Image"
                strength={380}
            >
                <h1 className='h1Res h1Loc'>About</h1>
                {/* <h1 className='h1SecRes h1Loc2'>Web Developer</h1> */}
                <div style={{ height: '40vh', width: '100vw' }} />
            </Parallax>
            <div className='aboutMeSection' >
                <p className='par' >I'm a Web Developer specialized in Javascript, React, HTML, CSS and more with a history learning other coding languages from previous courses taken at UVU.</p>

                {/* <h3>I'm a longtime lover of coding that recently have taken the plunge of after 6 years of working with the State of Utah, I took 3 months to focus and hone in on my skills of programming and coding into web developing.</h3>
                <h3>I have developed my skills in React, Node, CSS, HTML, Chart.js, Massive, Sessions, etc.</h3>
            <h3>My background includes knowledge of C#, C++, Java, Javascript from other studies I've done.</h3> */}
            </div>
            <Parallax
                // className='parallaxTopArea'
                blur={0}
                bgImage={valImg3}
                bgImageAlt="Background Image"
                strength={380}
            >
                <h1 className='h1Res h1Loc'>Skills</h1>
                {/* <h1 className='h1SecRes h1Loc2'>Web Developer</h1> */}
                <div style={{ height: '40vh', width: '100vw' }} />
            </Parallax>
            <div className='sector marTopAndBot' >
                <img src={portPic} alt='' className='imgArea' />
            </div>
            <div className='skillsSection' >

            </div>
            <Parallax
                // className='parallaxTopArea'
                blur={0}
                bgImage={valImg}
                bgImageAlt="Background Image"
                strength={380}
            >
                <div style={{ height: '78vh', width: '100vw' }} />
                {/* <h1 className='h1Res'>Jonathan Baxter</h1> */}
                {/* <h1 className='h1SecRes'>Web Developer</h1> */}

            </Parallax>


            <div className='experienceSection' >


            </div>
            <Parallax
                // className='parallaxTopArea'
                blur={0}
                bgImage={valImg}
                bgImageAlt="Background Image"
                strength={380}
            >
                <div style={{ height: '78vh', width: '100vw' }} />
                {/* <h1 className='h1Res'>Jonathan Baxter</h1> */}
                {/* <h1 className='h1SecRes'>Web Developer</h1> */}

            </Parallax>

            <div className='projectsSection' >

            </div>
            <Parallax
                // className='parallaxTopArea'
                blur={0}
                bgImage={valImg}
                bgImageAlt="Background Image"
                strength={380}
            >
                <div style={{ height: '78vh', width: '100vw' }} />
                {/* <h1 className='h1Res'>Jonathan Baxter</h1> */}
                {/* <h1 className='h1SecRes'>Web Developer</h1> */}

            </Parallax>
            <div className='contactSection' >
            </div>
            <Parallax
                // className='parallaxTopArea'
                blur={0}
                bgImage={valImg}
                bgImageAlt="Background Image"
                strength={380}
            >
                <div style={{ height: '78vh', width: '100vw' }} />
                {/* <h1 className='h1Res'>Jonathan Baxter</h1> */}
                {/* <h1 className='h1SecRes'>Web Developer</h1> */}

            </Parallax>
            <Parallax
                // className='parallaxTopArea'
                blur={0}
                bgImage={valImg2}
                bgImageAlt="Background Image"
                strength={380}
            >
                <div style={{ height: '78vh', width: '100vw' }} />
                {/* <h1 className='h1Res'>Jonathan Baxter</h1> */}
                {/* <h1 className='h1SecRes'>Web Developer</h1> */}

            </Parallax>


            {/* <PageHeader>Jonathan Baxter <small>Web Developer</small></PageHeader> */}
            {/* <iframe id="Example2"
    title="Example2"
    width="400"
    height="300"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=es-419&amp;geocode=&amp;q=buenos+aires&amp;sll=37.0625,-95.677068&amp;sspn=38.638819,80.859375&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=Buenos+Aires,+Argentina&amp;z=11&amp;ll=-34.603723,-58.381593&amp;output=embed">
</iframe> */}


            {/* <iframe id="Example2"
    title="Example2"
    width="400"
    height="300"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://www.youtube.com/watch?v=dCjt9eptadI">
</iframe>   */}
            {/* <iframe className='vid' width="100%" height="1000px" src="https://www.youtube.com/embed/dCjt9eptadI" frameborder="0" allow="autoplay; encrypted-media" muted allowfullscreen></iframe> */}
            {/* <iframe frameborder="0" width="480" height="270" src="//www.dailymotion.com/embed/video/x60i4ge?autoPlay=1" allowfullscreen="" allow="autoplay"></iframe> */}
            {/* <video className='videoTag' autoPlay loop muted> */}
            {/* <source src='https://www.youtube.com/watch?v=dCjt9eptadI' type='video/mp4' /> */}
            {/* <source src='https://www.youtube.com/watch?v=dCjt9eptadI'  /> */}
            {/* <source src='https://www.dailymotion.com/video/x60j4sq' type='WebM' /> */}
            {/* </video> */}
            {/* <iframe src='https://www.youtube.com/watch?v=dCjt9eptadI' /> */}

            {/* <SlickCaras /> */}

            {/* <BootStrapCarousel /> */}
        </div>)
    }
}

export default HomeScreen;