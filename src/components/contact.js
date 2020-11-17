import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {MdLocationOn, MdEmail, MdSmartphone} from 'react-icons/md'
import Reveal from 'react-reveal/Reveal';
export default class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            phone_number: '',
            message: '',
            error: false,
            allow_submit: false
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
            case 'subject':
                this.setState({subject: updated_text});
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
        var subject = this.state.subject;
        var message = this.state.message;
        var errored_fields = [];
        const email_regex= RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
        if(!name)
            errored_fields.push('name');
        if(!email || !email_regex.test(email))
            errored_fields.push('email');

        if(name && email && message && subject){
            console.log('form submitted');

            /*
            window.Email.send({
                SecureToken: '010b08c2-294b-41b8-bf57-2d8e35a0f95d',
                To: 'roydey10@gmail.com',
                From: 'roydey10@gmail.com',
                Subject: subject,
                Body: `${name} from ${email} says \n ${message}`
            }).then(response=>{
                console.log(response);
                // send email to me
                // clear input fields
                this.setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            })
            */

            
        }else{
            // display appropriate error messages
            console.log('error form not submitted');
            console.log(this.state);
        }

    }

    //4822f734-bd4b-4bb2-bbd1-3452d1e56c38

    render(){
        return(
            <div id='contact-container' className='section'>
                <Reveal effect='fade-slide-up' duration={1000}>
                    <div className='hidden'>
                        <h1 className='section-title'>CONTACT</h1>
                    </div> 
                </Reveal>
                <div id='contact-body'>
                        <Reveal effect='fade-slide-right'>
                            <div id='user-info-container' className='hidden'>
                                    <div className='inline-container'>
                                        <input id='name' placeholder='Name*' value={this.state.name} onChange={this.handle_field_change} className='input-field-small input-small'></input>
                                        <input id='email' placeholder='Email*' value={this.state.email}  onChange={this.handle_field_change}  className='input-field-small input-small'></input>
                                    </div>
                                    <input id='subject' placeholder='Subject*' value={this.state.subject}  onChange={this.handle_field_change}  className='input-field-small input'></input>
                                    <textarea id='message' placeholder='Message*' value={this.state.message}  onChange={this.handle_field_change}  className='input-field-large input'></textarea>
                                    <div className='button-container'>
                                        <div className='button' onClick={this.handle_form_submit}>SEND MESSAGE</div>
                                    </div>  
                            </div>
                        </Reveal>
                    
                        <div id='personal-info-container'>
                            <div className='personal-info-item'>
                                <Reveal effect='fade-slide-left'>
                                    <div className='info-title-container hidden'>
                                        <MdLocationOn className='info-icon'/>
                                        <div className='info-title no-interaction'>LOCATION</div> 
                                    </div>
                                    <div className='hidden'>
                                        <div className='info-content'>San Jose, CA 95129</div>
                                    </div>
                                </Reveal>
                            </div>
                            <div className='personal-info-item'>
                                <Reveal effect='fade-slide-left'>
                                    <div className='info-title-container hidden'>
                                        <MdEmail className='info-icon'/>
                                        <div className='info-title no-interaction'>EMAIL</div>
                                    </div>
                                    <div className='hidden'>
                                        <div className='info-content'>roydey10@gmail.com</div>
                                    </div>  
                                </Reveal>
                            </div>
                            <div className='personal-info-item no-border-bottom'>
                                <Reveal effect='fade-slide-left'>
                                    <div className='info-title-container hidden'>
                                        <MdSmartphone className='info-icon'/>
                                        <div className='info-title no-interaction'>PHONE NUMBER</div>
                                    </div>
                                    <div className='hidden'>
                                        <div className='info-content'>+1 (408) 413-7941</div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                </div>
                <Reveal effect='fade-slide-left'>
                    <div className='social-links hidden'>
                        
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
                </Reveal>
                
            </div>
        )
    }
}