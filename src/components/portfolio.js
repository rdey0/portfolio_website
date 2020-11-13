import React from 'react';
import raphunt_img from '../images/raphunt_pf.PNG'
import connect4_img from '../images/connect4_pf.PNG'
import cancer_img from '../images/cancer_classifier_pf.PNG'
import reverse_img from '../images/reverse_img_search_pf.png'
import panorama_img from '../images/panorama_pf.png'
import resizer_img from '../images/image_resizer_pf.png'
const portfolio_items = [
    {
        name: 'Raphunt',
        img_src: raphunt_img,
        link:'https://rdey0.github.io/raphunt/',
        filter_tags: ['All', 'Web Apps', 'Back End']
    },
    {
        name: 'Connect 4 AI',
        img_src: connect4_img,
        link: 'https://rdey0.github.io/connect4_ai/',
        filter_tags: ['All', 'Web Apps', 'Algorithmic']
    },
    {
        name: 'Cancer Classifier',
        img_src: cancer_img,
        link: 'https://rdey0.github.io/cancer_classifier/',
        filter_tags: ['All', 'Web Apps', 'Algorithmic', 'Back End']
    },
    {
        name: 'Reverse Image Search Algorithm',
        img_src: reverse_img,
        link: 'https://github.com/rdey0/reverse_image_search',
        filter_tags: ['All', 'Algorithmic']
    },
    {
        name: 'Panoramic Stitcher',
        img_src: panorama_img,
        link: 'https://github.com/rdey0/panoramic_stitcher',
        filter_tags: ['All', 'Algorithmic']
    },
    {
        name: 'Image Resizer',
        img_src: resizer_img,
        link: 'https://github.com/rdey0/image_resizer',
        filter_tags: ['All', 'Algorithmic']
    }

];

export default class Portfolio extends React.Component {
    constructor(props){
        super();
        this.state = {
            portfolio: portfolio_items,
            filters: ['All', 'Web Apps', 'Algorithmic', 'Back End'],
            selected_filter: 0
        };
    }

    handle_filter_change=(e)=> {
        var selected = e.target.getAttribute('order');
        this.setState({selected_filter: selected});
    }

    render(){
        return(
            <div id='portfolio-container' className='section'>
                <h1 className='section-title'>PROJECTS</h1>
                <div id='portfolio-filters'>
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
                <div id='projects-container'>
                    {
                        this.state.portfolio
                            .filter((project)=>(project.filter_tags.includes(this.state.filters[this.state.selected_filter])))
                            .map( (project,index)=>{
                                return(
                                    <div key={index} className='project-card' style={{backgroundImage: 'url(' + project.img_src + ')'}}>
                                        <div className='project-overlay'>
                                            <div className='project-title'>{project.name}</div>
                                        </div>
                                    </div>
                                )
                        })
                    }
                </div>
            </div>
        )
    }
}