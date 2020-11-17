import React from 'react';
import FlipMove from 'react-flip-move';
import ProjectCard from './project_card.js'
import raphunt_img from '../images/raphunt_pf.PNG'
import connect4_img from '../images/connect4_pf.PNG'
import cancer_img from '../images/cancer_classifier_pf.PNG'
import reverse_img from '../images/reverse_img_search_pf.png'
import panorama_img from '../images/panorama_pf.png'
import resizer_img from '../images/image_resizer_pf.png'
import Reveal from 'react-reveal/Reveal';
const portfolio_items = [
    {
        name: 'RAPHUNT',
        description: 'Gathers new hip hop song releases and displays their streaming links',
        img_src: raphunt_img,
        link:'https://rdey0.github.io/raphunt/',
        filter_tags: ['ALL', 'WEB APPS', 'BACK END']
    },
    {
        name: 'CONNECT 4 AI',
        description: 'Play connect 4 against difficult game search algorithms',
        img_src: connect4_img,
        link: 'https://rdey0.github.io/connect4_ai/',
        filter_tags: ['ALL', 'WEB APPS', 'ALGORITHMIC']
    },
    {
        name: 'CANCER CLASSIFIER',
        description: 'Customize your own machine learning model to predict the presence of cancer',
        img_src: cancer_img,
        link: 'https://rdey0.github.io/cancer_classifier/',
        filter_tags: ['ALL', 'WEB APPS', 'ALGORITHMIC', 'BACK END']
    },
    {
        name: 'REVERSE IMAGE SEARCH',
        description: 'Finds the closest matching images in an image bank when given a query image',
        img_src: reverse_img,
        link: 'https://github.com/rdey0/reverse_image_search',
        filter_tags: ['ALL', 'ALGORITHMIC']
    },
    {
        name: 'PANORAMIC STITCHER',
        description: 'Creates a panoramic, angle corrected photo using a set of overlapping images',
        img_src: panorama_img,
        link: 'https://github.com/rdey0/panoramic_stitcher',
        filter_tags: ['ALL', 'ALGORITHMIC']
    },
    {
        name: 'IMAGE RESIZER',
        description: 'A seam carving algorithm which resizes images without loss of key features',
        img_src: resizer_img,
        link: 'https://github.com/rdey0/image_resizer',
        filter_tags: ['ALL', 'ALGORITHMIC']
    }

];


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
                <Reveal effect='fade-slide-up' duration={1000}>
                    <h1 className='section-title'>PORTFOLIO</h1>
                </Reveal>
                <Reveal effect='fade-slide-up' duration={1000}>
                    <div id='portfolio-filters' className='no-interaction'>
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
                <Reveal effect='fade-slide-up' duration={1000}>
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
                </Reveal>
                   
               
            </div>
        )
    }
}