import React from 'react';

export default class ProjectCard extends React.Component {
    constructor(props){
        super();
        this.state = {};
    }

    handle_hover=(event)=> {
        if(event.target.classList && event.target.classList[0] == 'project-overlay'){
            console.log('mouse enter');
            var project_title = event.target.children[0];
            var project_description = event.target.children[1];
            project_title.style.animation = 'fadeIn ease 0.4s, slide-project-title-up 0.4s ease';
            project_description.style.cssText = `animation: fadeIn 0.5s ease 0.4s;
                animation-fill-mode: forwards;
                -webkit-fill-mode: forwards;
                -moz-fill-mode: forwards;`
            console.log('mouse finish enter');
        }
    }

    handle_hover_exit=(event)=>{
        
        if(event.target.classList && event.target.classList[0] == 'project-overlay'){
            console.log('mouse exit');
            var project_title = event.target.children[0];
            var project_description = event.target.children[1];
            project_title.style.animation = null;
            project_description.style.animation = null;
            console.log('mouse finish exit');
        }
    }

    render(){
        return (
            <div className='project-card' 
            style={{backgroundImage: 'url(' + this.props.src + ')'} }
            onMouseEnter={this.handle_hover}
            onMouseLeave={this.handle_hover_exit}>
                <a href={this.props.link}
                target='_blank' 
                rel='noopener noreferrer' >
                    <div className='project-overlay'>
                        <div className='project-title'>{this.props.name}</div>
                        <p className='project-description'>{this.props.description}</p>
                    </div>
                </a>
            </div>
        )
    }
}