import React from 'react';
import me from '../images/me.png'
export default function About() {
    return(
        <div id='about-container' className='section'>
            <h1 className='section-title'>ABOUT ME</h1>
            <p className='short-description'>
                My name is Roy Dey. I'm a passionate developer who enjoys all aspects of the process, front end and back.
            </p>
            <div id='info-and-skills-container'>
                <img id='profile-pic' src={me}/>
            </div>
        </div>
    )
}