import React from 'react';
import Reveal from 'react-reveal/Reveal'

export default function SkillCard(props) {
    var Icon = props.icon;
    return (
        <Reveal effect='fade-slide-left'>
            <div className='skill-item hidden'>
                <Icon className='skill-icon'/>
                <div className='skill-name'>{props.name}</div>
            </div>
        </Reveal>
    )
}