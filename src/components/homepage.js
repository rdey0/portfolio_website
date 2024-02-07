import React from 'react'
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
            "value": 3,
            "random": {
                "enable": true,
                "minimumValue": 1,
            }
        },
        "shadow": {
            "blur": 0,
            "color": "#000000",
            "enable": true
        },
        "value": 10
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "modes": {
                "repulse": {
                    "distance": 20000,
                    "duration": 0.4,
                    "speed": 1
                }
            }
        }
    }
}

export default function Homepage(props) {
    return (
        <div id='home-container'>
            <Particles id='particle-layer' width='100vw' height='100vh' params={particle_params} />
            <div className='home-content no-interaction'>
                <h1 className='home-title'>Hi, I'm Roy Dey</h1>
                <div className='descriptors-container'>
                    <div className='descriptors'>Fullstack Software Engineer / Designer / Creator</div>
                </div>
            </div>
        </div>

    )
}
