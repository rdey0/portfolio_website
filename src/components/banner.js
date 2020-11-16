import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Particles from 'react-particles-js'


const particle_params = {
    "particles": {
        "color": {
            "value": "#979799",
        },
        "number": {
            "value": 150
        },
        "size": {
            "value": 3
        },
        "shadow": {
            blur: 0,
            color: "#000000",
            enable: true
        },
        "size": {
            random:{
                enable: true,
                minimumValue: 5,
            }
        },
        "value":10
    },
    "interactivity": {
        "events": {
            "onclick":{
                "enable": true,
                "mode": "push"
            },
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "modes":{
                "repulse":{
                    distance: 20000,
                    duration: 0.4,
                    speed: 1
                }
            }
        }
    }
}

export default function Banner(props){
    return(
        <div id='home-container'> 
            <Particles id='particle-layer' width='100vw' height='100vh' params={particle_params}/>
            <div className='home-content no-interaction'>
                <h1 className='home-title'>Hi, I'm Roy Dey</h1>
                <div className='descriptors-container'>
                    <div className='descriptors'>Full Stack Developer / Designer / Percocet Addict</div>
                </div>
            </div>
        </div>
        
    )
}

/*
<div id='home-container' className='parallax'>
            <ParallaxBanner
                className='home-image'
                layers={[
                    {
                        image: background_image,
                        amount: 0.7
                    }
                ]}
                style={{
                    height: '100vh',
                }}
            >
                <div className='home-content no-interaction'>
                    <h1 className='home-title'>Hi, I'm Roy Dey</h1>
                    <div className='descriptors-container'>
                        <div className='descriptors'>Full Stack Developer / Designer / Percocet Addict</div>
                    </div>
                    
                </div>
                
            </ParallaxBanner>
        </div>
        */