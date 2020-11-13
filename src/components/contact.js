import React from 'react';

export default class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            phone_number: '',
            message: ''
        };
    }
    render(){
        return(
            <div id='contact-container' className='section'>
                <h1 className='section-title'>Contact</h1>
                
            </div>
        )
    }
}