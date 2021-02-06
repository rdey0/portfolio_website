import React from 'react';
import me from '../images/me.png'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Reveal from 'react-reveal/Reveal';
import SectionTitle from './section_title'

export default function About() {
    
    return(
        <div id='about-container' className='section'>
            <SectionTitle text='ABOUT' justify='center'/>
            <Reveal effect='fade-slide-up'>
                <div id='about-header-container' className='hidden'>
                    <p className='short-description'>
                        I'm a passionate developer who enjoys all aspects of the process, front end and back.
                    </p>
                    <div className='bottom-border-container'></div>
                </div>
            </Reveal>
            <Reveal effect='fade-slide-up'>
                <div className='hidden'>
                    <div id='about-body-container'>
                        <Reveal effect='fade-slide-right'>
                            <div className='hidden'>
                                <img id='profile-pic' src={me}/>
                            </div>
                        </Reveal>
                        <Reveal effect='fade-slide-left'>
                            <div id='about-body' className='hidden'>
                                <div id='about-body-title'> Hi There</div>
                                <p id='body-long-description'>
                                    I'm a UC Davis computer science graduate with an interest in full stack development and
                                    artificial intelligence. When I'm not working on my passion projects, I enjoy weightlifting, 
                                    biking, and staying up to date on the latest hip hop releases.
                                    <br/>
                                    <br/>
                                    I'm currently searching for a software development position so if
                                    my portfolio piques your interest and you're hiring, give me a shout.
                                    
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
                </div>
            </Reveal>
        </div>
    )
}