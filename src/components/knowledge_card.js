import React from 'react'

export default function KnowledgeCard(props) {
    return (
        <Reveal effect='fade-slide-left'>
            <div className='hidden'>
                <div key={index} className='knowledge-item'>
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