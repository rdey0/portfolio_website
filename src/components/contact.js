import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
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

    // Update the associated state when a change is made
    handle_field_change=(event)=> {
        var field_id = event.target.id;
        var updated_text = event.target.value;
        // update the appropriate state
        switch(field_id){
            case 'name':
                this.setState({name: updated_text});
                break;
            case 'email':
                this.setState({email: updated_text});
                break;
            case 'phone':
                this.setState({phone_number: updated_text});
                break;
            case 'message':
                this.setState({message: updated_text});
                break;
            default:
                break;
        }
    }

    // Check if required fields have been filled then send me an email
    handle_form_submit=()=> {
        var name = this.state.name;
        var email = this.state.email;
        var message = this.state.message;

        if(name && email && message){
            console.log('form submitted');
            // send email to me
            // clear input fields
            this.setState({
                name: '',
                email: '',
                phone_number: '',
                message: ''
            });
        }else{
            // display appropriate error messages
            console.log('error form not submitted');
            console.log(this.state);
        }

    }

    render(){
        return(
            <div id='contact-container' className='section'>
                <h1 className='section-title'>Contact</h1>
                <div id='user-info-container'>
                    <input id='name' placeholder='Name*' value={this.state.name} onChange={this.handle_field_change} className='input-field-small input'></input>
                    <input id='email' placeholder='Email*' value={this.state.email}  onChange={this.handle_field_change}  className='input-field-small input'></input>
                    <input id='phone' placeholder='Phone Number' value={this.state.phone_number} onChange={this.handle_field_change}  className='input-field-small input'></input>
                </div>
                <textarea id='message' placeholder='Message*' value={this.state.message}  onChange={this.handle_field_change}  className='input-field-large input'></textarea>
                <div className='button-container'>
                    <div className='button' onClick={this.handle_form_submit}>SEND MESSAGE</div>
                </div>
                <div className='social-links'>
                    <div className='link-container'>
                        <a 
                        href={'https://github.com/rdey0'}
                        target='_blank' 
                        rel='noopener noreferrer' >
                            <AiFillGithub className='social-icon'/>
                        </a>
                        
                        <a 
                        href={'https://www.linkedin.com/in/roydey/'}
                        target='_blank' 
                        rel='noopener noreferrer' >
                            <AiFillLinkedin className='social-icon'/>
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}