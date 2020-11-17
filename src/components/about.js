import React from 'react';
import me from '../images/me.png'

import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Reveal from 'react-reveal/Reveal';


export default function About() {
    
    return(
        <div id='about-container' className='section'>
            <Reveal effect='fade-slide-up' duration={500}>
                <h1 className='section-title'>ABOUT ME</h1>
            </Reveal>
            <Reveal effect='fade-slide-up' duration={500}>
                <div id='about-header-container'>
                    <p className='short-description'>
                        I'm a passionate developer who enjoys all aspects of the process, front end and back.
                    </p>
                    <div className='bottom-border-container'></div>
                </div>
            </Reveal>
            <Reveal effect='fade-slide-up' duration={500}>
                <div id='about-body-container'>
                    <Reveal effect='fade-slide-right' duration={1000}>
                        <img id='profile-pic' src={me}/>
                    </Reveal>
                    <Reveal effect='fade-slide-left' duration={1000}>
                        <div id='about-body'>
                            <div id='about-body-title'> Hi There</div>
                            <p id='body-long-description'>
                                I'm a UC Davis computer science graduate with an interest in full stack development and
                                artificial intelligence. I'm currently searching for a software development position so if
                                my portfolio piques your interest and you're hiring, give me a shout
                                <br/>
                                <br/>
                                When I'm not working on my passion projects, I enjoy smoking percs off the foil and
                                catching up on the latest cinematic releases
                            </p>
                            <div id='about-my-info'>
                                <div className='about-info-item'>
                                    <div className='about-info-title'>Name:</div>
                                    <div className='about-info-content'>Roy Dey</div>
                                </div>
                                <div className='about-info-item'>
                                    <div className='about-info-title'>Email:</div>
                                    <div className='about-info-content'>roydey10@gmail.com</div>
                                </div>
                                <div className='about-info-item'>
                                    <div className='about-info-title'>Phone:</div>
                                    <div className='about-info-content'>+1 (408) 413-7941</div>
                                </div>
                                <div className='about-info-item'>
                                    <div className='about-info-title'>Socials:</div>
                                    <div className='about-info-content'>
                                        <a 
                                        href={'https://github.com/rdey0'}
                                        target='_blank' 
                                        rel='noopener noreferrer' >
                                            <AiFillGithub className='about-social-icon'/>
                                        </a>
                                        
                                        <a 
                                        href={'https://www.linkedin.com/in/roydey/'}
                                        target='_blank' 
                                        rel='noopener noreferrer' >
                                            <AiFillLinkedin className='about-social-icon'/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Reveal>
        </div>
    )
}