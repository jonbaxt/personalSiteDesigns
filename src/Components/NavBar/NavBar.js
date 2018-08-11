import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <div id='navMain'>
            <div id='navInner'>
            <h3 className='cases'>Home</h3>
            <h3 className='cases'>About</h3>
            <h3 className='cases'>Skills</h3>
            <h3 className='cases'>Portfolio</h3>
            <h3 className='cases'>Contact</h3>
            </div>
            <div id='navInnerRight'>
            <h3 className='nameStyle' >Jonathan Baxter</h3>
            <h3 className='nameStyle secondL' >Web Developer</h3>
            </div>
        </div>
    )
}