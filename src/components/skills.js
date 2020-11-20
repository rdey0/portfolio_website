import React from 'react';
import Reveal from 'react-reveal/Reveal';
import skill_items from '../assets/skill_items.js'
import knowledge_items from '../assets/knowledge_items.js'


export default function Skills(){


    return (
        <div id='skills-container' className='section'>
            <div id='skills-section'>
                <Reveal effect='fade-slide-right'>
                    <div className='hidden'>
                        <h1 className='section-title-alt'>SKILLS</h1>
                    </div>
                </Reveal>
                <div id='skills'>
                    {
                        skill_items.map((skill, index)=>{
                            var Icon = skill_items[index].icon;
                            return(
                                <Reveal effect='fade-slide-left'>
                                    <div key={index} className='skill-item hidden'>
                                        <Icon className='skill-icon'/>
                                        <div className='skill-name'>{skill.name}</div>
                                    </div>
                                </Reveal>
                            )
                        })
                    }
                </div>
            </div>

            <div id='knowledge-section'>
                <Reveal effect='fade-slide-right'>
                    <div className='hidden'>
                        <h1 className='section-title-alt'>KNOWLEDGE</h1>
                    </div>  
                </Reveal>
                <div id='knowledge'>
                    {
                        knowledge_items.map((knowledge, index)=>{
                            var Icon = knowledge.icon;
                            return(
                                <Reveal effect='fade-slide-left'>
                                    <div className='hidden'>
                                        <div key={index} className='knowledge-item'>
                                            <div className='knowledge-header'>
                                                <Icon className='knowledge-icon' />
                                                <div className='knowledge-title'>{knowledge.name}</div>
                                            </div>
                                            <div className='knowledge-description'>{knowledge.description}</div>
                                        </div>
                                    </div>
                                </Reveal>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
    
}