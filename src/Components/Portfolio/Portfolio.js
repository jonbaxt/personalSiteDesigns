import React from 'react';

import '../HomeScreen/HomeScreen.css';
import './Portfolio.css';

export default function Portfolio() {

    return (
        <div className='portfolioMain'>
            <h1 className='h1Res padT'>Projects</h1>

            <div className='portCont' >
                <a href='https://www.servedupsurveys.jonbaxt.me/#/Dashboard' className='noLine'><h1 className='h1ResPort padT' >Served Up Surveys</h1></a>
                <p className='pRes'>         A website built for a visitor to create and/or take surveys and manipulate or use the data in a variety of ways.</p>

                <p className='pRes'>The back end utilizes 8 SQL Tables to construct the Website and makes use of switch statements in Post requests or Edit requests enhancing re-usability from links to URLs.</p>

                <p className='pRes'>Requires login to gain access to majority of site through Auth0. Demo of site with link from my portfolio will bypass this to show features in portfolio mode.</p>

                <p className='pRes cen noBot lineUnder'>Technologies used in creation</p>
                <p className='pRes cen noInd'>HTML | CSS | Javascript | React | CSS in JS | PostgreSQL | Aphrodite.js | Express.js | Express-Sessions | Massive | Auth0 | Chart.js | CSS Animation | Responsive Layout</p>
                <br />
                <p className='pRes cen noInd'>The following video is a walk through of the site</p>

                <iframe width="846" height="488" style={{ margin: '0 auto' }}
                    src="https://www.youtube.com/embed/cT3LC5uyNrA"
                    title='Served up walkthrough' frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen></iframe>
                <br />
                <p className='pRes cen noInd'>This video highlights the navigation of the site and the site's result pages.</p>

                <iframe width="846" height="488" src="https://www.youtube.com/embed/mXc97QEu92M"
                    style={{ margin: '0 auto' }}
                    title='Graphs and others'
                    frameborder="0"
                    allow="autoplay; encrypted-media" allowfullscreen></iframe>

                <a href='https://www.bia.jonbaxt.me/' className='noLine'><h1 className='h1ResPort padT' >Build in Amsterdam Clone</h1></a>

                <p className='pRes'>Designed in a team of 4 developers. Organized and built website through an organization I own on GitHub.</p>

                <p className='pRes'>Goal was to recreate the website buildinamsterdam.com in a React environment to to build the site in a reusable component environment and also allowing smoother animations through CSS. Original website is a portfolio for the Build in Amsterdam company and highlights websites they built for their clients.</p>

                <p className='pRes'>Site was designed for a 1920x1280 screen to allow more coding of animations.</p>

                <p className='pRes cen noBot lineUnder'>Technologies used in creation</p>
                <p className='pRes cen noInd'>HTML | CSS | React | Javascript | Node.js | Express.js | Massive | Parallax | React-Meta-Tags | Arrows created in SVG | React Vimeo Player | Slick | React-Animate-CSS | Animate.css</p><br />

                <p className='pRes cen noInd'>The following video is a walk through of the site</p>

                <iframe width="846" height="488" src="https://www.youtube.com/embed/niJ5m1T6hrQ"
                    style={{ margin: '0 auto' }}
                    title='BIA'
                    frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>

                <p className='pRes slightInd'>My contributions to the project were:</p>
                <ul className='pRes listIndent'>
                    <li>Coding the majority of the CSS animations.</li>
                    <li>Help planning functionality of JavaScript objects including making component tree diagrams and schema's for the team to follow.</li>
                    <li>Assisted other group members in debugging problems through paired programming.</li>
                    <li>Solved GitHub merging problems caused by learning how to use a GitHub as a group.</li>
                    <li>Was given the nickname of the group, 'the tech guy' since I helped solve problems throughout from bugs in VS Code.</li>
                </ul>

                <a href='https://www.jonbaxt.me/' className='noLine'><h1 className='h1ResPort padT' >Parental Gaming Reviews</h1></a>

                <p className='pRes'>Site created as a place for parents to submit reviews for games on whether or not they feel the game is appropriate for kids.</p>
                
                <p className='pRes'>Website uses information stored on IGDB.com's API obtained through axios calls. To allow less queries to the API, information used for the site is stored in my PostgreSQL database after new game is added to site for reviews.</p>
                
                <p className='pRes'></p>
                
                <p className='pRes'></p>

            </div>
        </div>
    )
}