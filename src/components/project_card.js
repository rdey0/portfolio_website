import React from 'react';
import Reveal from 'react-reveal/Reveal';
export default class ProjectCard extends React.Component {
    constructor(props){
        super();
        this.state = {};
    }

    render(){
        return (
            <Reveal effect='fade-slide-up' duration={1000}>
                <div className='project-card' style={{backgroundImage: 'url(' + this.props.src + ')'} }>
                    <a href={this.props.link}
                    target='_blank' 
                    rel='noopener noreferrer' >
                        <div className='project-overlay'>
                            <div className='project-title'>{this.props.name}</div>
                            <p className='project-description'>{this.props.description}</p>
                        </div>
                    </a>
                </div>
            </Reveal>
        )
    }
}