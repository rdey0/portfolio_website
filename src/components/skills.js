import React from 'react';
import {FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaAngular} from 'react-icons/fa'
import{SiJavascript} from 'react-icons/si'
import {GiGears} from 'react-icons/gi'
import {MdLaptop} from 'react-icons/md'
import {BsTerminalFill} from 'react-icons/bs'
const skill_items = [
    {
        name: 'REACT',
        icon: FaReact
    },
    {
        name: 'NODE',
        icon: FaNodeJs
    },
    {
        name: 'JS ES6',
        icon: SiJavascript
    },
    {
        name: 'PYTHON 3',
        icon: FaPython
    },
    {
        name: 'HTML 5',
        icon: FaHtml5
    },
    {
        name: 'CSS 3',
        icon: FaCss3Alt
    },
    {
        name: 'ANGULAR',
        icon: FaAngular
    },
];

const knowledge_items = [
    {
        name: 'WEB DEVELOPMENT',
        icon: MdLaptop,
        description:`I enjoy creating interactive and stylish
        web applications. If you like my website you'll like my work!`
    },
    {
        name: 'API DEVELOPMENT',
        icon: GiGears,
        description:`I've created and hosted my own REST APIs. 
        Much of such work was accomplished with Node.js and Heroku`
    },
    {
        name: 'ALGORITHMS',
        icon: BsTerminalFill,
        description:`I'm no stranger to work which requires use of data structures 
        and efficient algorithms. Check out my AI and computer vision projects!`
    }
];


export default function Skills(){


    return (
        <div id='skills-container' className='section'>
            <div id='skills-section'>
                <h1 className='section-title-alt'>SKILLS</h1>
                <div id='skills'>
                    {
                        skill_items.map((skill, index)=>{
                            var Icon = skill_items[index].icon;
                            return(
                                <div key={index} className='skill-item'>
                                    <Icon className='skill-icon'/>
                                    <div className='skill-name'>{skill.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div id='knowledge-section'>
                <h1 className='section-title-alt'>KNOWLEDGE</h1>
                <div id='knowledge'>
                    {
                        knowledge_items.map((knowledge, index)=>{
                            var Icon = knowledge.icon;
                            return(
                                <div key={index} className='knowledge-item'>
                                    <div className='knowledge-header'>
                                        <Icon className='knowledge-icon' />
                                        <div className='knowledge-title'>{knowledge.name}</div>
                                    </div>
                                    <div className='knowledge-description'>{knowledge.description}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
    
}