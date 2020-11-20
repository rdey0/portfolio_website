import React from 'react';
import Reveal from 'react-reveal/Reveal';

export default function SectionTitle(props) {
    return (
        <div>
            {
                (props.justify == 'center') ?

                (<Reveal effect='fade-slide-up'>
                    <div className='hidden'>
                        <h1 className='section-title'>{props.text}</h1>
                    </div>
                </Reveal>) :

                (<Reveal effect='fade-slide-right'>
                    <div className='hidden'>
                        <h1 className='section-title-alt'>{props.text}</h1>
                    </div>
                </Reveal>)
            }
        </div>
    )
}