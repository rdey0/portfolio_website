import React from 'react'
import background_image from '../images/BLACK_II.jpg'
import { ParallaxBanner } from 'react-scroll-parallax';
export default function Banner(props){
    return(
        <div id='banner-container' className='parallax'>
            <ParallaxBanner
                className='banner-image'
                layers={[
                    {
                        image: background_image,
                        amount: 0.7
                    }
                ]}
                style={{
                    height: '55vh',
                }}
            >
                <div className='banner-content'>
                    <h1 className='banner-title'>Hi, I'm Roy Dey</h1>
                    <div className='descriptors'>Full Stack Developer/ Designer/ Other Horseshit</div>
                </div>
                
            </ParallaxBanner>
        </div>
    )
}