import React from 'react';
import me from '../images/me.png'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Reveal from 'react-reveal/Reveal';
import SectionTitle from './section_title'

export default function About() {

    return (
        <div id='about-container' className='section'>
            <SectionTitle text='ABOUT' justify='center' />
            <Reveal effect='fade-slide-up'>
                <div id='about-header-container' className='hidden'>
                    {/* <p className='short-description'>
                        I'm a passionate developer who enjoys all aspects of the process, front end and back.
                    </p> */}
                    <div className='bottom-border-container'></div>
                </div>
            </Reveal>
            <Reveal effect='fade-slide-up'>
                <div className='hidden'>
                    <div id='about-body-container'>
                        <Reveal effect='fade-slide-right'>
                            <div className='hidden'>
                                <img id='profile-pic' src={me} />
                            </div>
                        </Reveal>
                        <Reveal effect='fade-slide-left'>
                            <div id='about-body' className='hidden'>
                                <div id='about-body-title'> Hi There</div>
                                <p id='body-long-description'>
                                    I'm a software engineer with experience building robust and
                                    scalable web/mobile applications using Python, Django, Postgres, and React.
                                    At SILQ, a freight forwarding startup, I developed their client web app and
                                    backend systems to generate freighting quotes and track purchased goods.

                                    <br />
                                    <br />
                                    I'm currently searching for a software engineering position so if
                                    my portfolio piques your interest and you're hiring, give me a shout!

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
                                        <div className='about-info-title'>Location:</div>
                                        <div className='about-info-content'>SF Bay Area, CA</div>
                                    </div>
                                    <div className='about-info-item'>
                                        <div className='about-info-title'>Socials:</div>
                                        <div className='about-info-content'>
                                            <a
                                                href={'https://github.com/rdey0'}
                                                target='_blank'
                                                rel='noopener noreferrer' >
                                                <AiFillGithub className='about-social-icon' />
                                            </a>

                                            <a
                                                href={'https://www.linkedin.com/in/roydey/'}
                                                target='_blank'
                                                rel='noopener noreferrer' >
                                                <AiFillLinkedin className='about-social-icon' />
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