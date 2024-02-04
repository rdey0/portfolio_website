import React from 'react'
import Reveal from 'react-reveal/Reveal'
import skill_items from '../assets/skill_items'
import knowledge_items from '../assets/knowledge_items'
import SectionTitle from './section_title'
import SkillCard from './skill_card'
import KnowledgeCard from './knowledge_card'
export default function Skills() {


    return (
        <div id='skills-container'>
            <div id='skills-section'>
                <SectionTitle text='SKILLS' />
                <div id='skills'>
                    {
                        skill_items.map((skill, index) => {
                            return <SkillCard key={index} icon={skill_items[index].icon} name={skill.name} />
                        })
                    }
                </div>
            </div>

            {/* <div id='knowledge-section'>
                <SectionTitle text='KNOWLEDGE'/>
                <div id='knowledge'>
                    {
                        knowledge_items.map((knowledge, index)=>{
                            return <KnowledgeCard key={index} 
                                icon={knowledge.icon} name={knowledge.name} description={knowledge.description}/>
                        })
                    }
                </div>
            </div> */}
        </div>
    )

}