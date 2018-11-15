import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
// import faNpm from '@fortawesome/fontawesome-free-brands/faNpm'
// import faReact from '@fortawesome/fontawesome-free-brands/faReact'
// import faJs from '@fortawesome/fontawesome-free-brands/faJs'
// import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5'
// import faDigitalOcean from '@fortawesome/fontawesome-free-brands/faDigitalOcean'
// import faCss3 from '@fortawesome/fontawesome-free-brands/faCss3'

import '../HomeScreen/HomeScreen.css';
import './Contact.css';
import '../Portfolio/Portfolio.css';

export default function Contact() {

    return (
        <div style={{ background: '#240404' }}>
            <ScrollableAnchor id={'contactSection'}>
                <ScrollAnimation animateIn="pulse">
                    <h1 className='h1Res padT'>Contact</h1>
                </ScrollAnimation>
            </ScrollableAnchor>

            <p className='pRes cen noInd'>I'd love to hear from you! Feel free to contact me if you're interested in utilizing my skills.</p><br /><br />
            <p className='pRes cen noInd'>jonbaxt.gmail.com</p><br />

            <span style={{ display: 'flex', justifyContent: 'center' }} >
                <a href='https://www.linkedin.com/in/jonbaxt/' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faLinkedin} className='fontAwes' /></a>
                <a href='https://github.com/jonbaxt' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithub} className='fontAwes' /></a>
            </span>
            <br />
            <br />
        </div>
    )
}