import React from 'react';
import FlipMove from 'react-flip-move';
import ProjectCard from './project_card.js'
import Reveal from 'react-reveal/Reveal';
import portfolio_items from '../assets/portfolio_items.js'
import SectionTitle from './section_title'

export default class Portfolio extends React.Component {
    constructor(props){
        super();
        this.state = {
            portfolio: portfolio_items,
            filters: ['ALL', 'WEB APPS', 'ALGORITHMIC', 'BACK END'],
            selected_filter: 0
        };
    }

    handle_filter_change=(e)=> {
        var selected = parseInt(e.target.getAttribute('order'));
        this.setState({selected_filter: selected});
    }

    render(){
        return(
            <div id='portfolio-container' className='section'>
                <SectionTitle text='PORTFOLIO' justify='center'/>
                <Reveal effect='fade-slide-up' duration={1000}>
                    <div id='portfolio-filters' className='no-interaction hidden'>
                        {
                            this.state.filters.map((filter,index)=>{
                                if(index == this.state.selected_filter){
                                    return <div key={index} order={index} className='filter selected' 
                                        onClick={this.handle_filter_change}>{filter}</div>
                                }else{
                                    return <div key={index} order={index} className='filter'
                                        onClick={this.handle_filter_change}>{filter}</div>
                                }
                                    
                            })
                        }
                    </div>
                </Reveal>
                <Reveal effect='fade-slide-up' duration={1000} >
                    <div className='hidden'>
                        <FlipMove id='projects-container' duration={250} maintainContainerHeight={true}>
                            {
                                this.state.portfolio
                                    .filter((project)=>(project.filter_tags.includes(this.state.filters[this.state.selected_filter])))
                                    .map( (project,index)=>{
                                        return <ProjectCard key={project.name} name={project.name} description={project.description} 
                                            link={project.link} src={project.img_src}/>
                                })
                            }
                        </FlipMove>
                    </div>
                </Reveal>
                   
               
            </div>
        )
    }
}