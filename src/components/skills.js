import React from 'react'
import Reveal from 'react-reveal/Reveal'
import skill_items from '../assets/skill_items'
import knowledge_items from '../assets/knowledge_items'
import SectionTitle from './section_title'
import SkillCard from './skill_card'
export default function Skills(){


    return (
        <div id='skills-container' className='section'>
            <div id='skills-section'>
                <SectionTitle text='SKILLS'/>
                <div id='skills'>
                    {
                        skill_items.map((skill, index)=>{
                            return <SkillCard key={index} icon={skill_items[index].icon} name={skill.name}/>
                        })
                    }
                </div>
            </div>

            <div id='knowledge-section'>
                <SectionTitle text='KNOWLEDGE'/>
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