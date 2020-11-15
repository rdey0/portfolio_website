import React from 'react'
import background_image from '../images/BLACK_II_LARGE.jpg'
import { ParallaxBanner } from 'react-scroll-parallax';
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
        }
    },
    "interactivity": {
        "events": {
            "onclick":{
                "enable": true,
                "mode": "push"
            },
            "onhover": {
                "enable": true,
                "mode": "repulse",
                "parallax":{
                    "enable":true,
                    "force": 5,
                    "smooth": 500
                }
            }
        }
    }
}

export default function Banner(props){
    return(
        <div id='home-container'> 
            <Particles id='particle-layer' width='110vw' height='110vh' params={particle_params}/>
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