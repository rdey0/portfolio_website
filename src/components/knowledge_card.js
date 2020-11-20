import React from 'react'
import Reveal from 'react-reveal/Reveal'

export default function KnowledgeCard(props) {
    var Icon = props.icon;
    return (
        <Reveal effect='fade-slide-left'>
            <div className='hidden'>
                <div className='knowledge-item'>
                    <div className='knowledge-header'>
                        <Icon className='knowledge-icon' />
                        <div className='knowledge-title'>{props.name}</div>
                    </div>
                    <div className='knowledge-description'>{props.description}</div>
                </div>
            </div>
        </Reveal>
    )
}