import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdLocationOn, MdEmail, MdSmartphone } from 'react-icons/md'
import Reveal from 'react-reveal/Reveal';
import SectionTitle from './section_title'

export default class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            button_content: 'SEND',
            error_message: '',
            errored_elements: {
                name: false,
                email: false,
                subject: false,
                message: false
            },
            can_submit: false
        };
    }

    is_valid_email = (email) => {
        const email_regex = RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
        return email_regex.test(email);
    }

    is_errored = (field_id) => {
        var errored = this.state.errored_elements;
        return errored[field_id];
    }

    handle_on_blur = (event) => {
        var field_id = event.target.id;
        var updated_text = event.target.value;
        var new_errored_state = this.state.errored_elements;
        // check if field is already marked as errored (if so then we don't have to do anything)
        if (!this.is_errored(field_id)) {
            // check if the text field is empty, or if it's an invalid email
            if (!updated_text || (field_id == 'email' && !this.is_valid_email(updated_text))) {
                // mark this field as errored
                new_errored_state[field_id] = true;
                this.setState({ errored_elements: new_errored_state }, console.log(this.state));
            }
        }

    }
    // Update the associated state when a change to a field is made and check if
    // it is no longer errored
    handle_field_change = (event) => {
        var field_id = event.target.id;
        var updated_text = event.target.value;
        var new_errored_state = this.state.errored_elements;
        var new_state = {
            button_content: 'SEND',
            errored_elements: new_errored_state
        };
        new_state[field_id] = updated_text;

        // check if field is not marked as errored (if so then we don't have to do anything)
        if (this.is_errored(field_id)) {
            console.log(field_id);
            // check if the errored field is no longer errored
            if (field_id == 'email') {
                console.log(this.is_valid_email(updated_text));
                // mark field as not errored if email is now valid
                if (this.is_valid_email(updated_text))
                    new_state.errored_elements[field_id] = false;
            } else if (updated_text) {
                // mark field as not errored
                new_state.errored_elements[field_id] = false;
            }
        }

        this.setState(new_state, () => {
            this.setState({ can_submit: this.can_submit() });
        });

    }

    // check if the form can be submitted (there exists no errors)
    can_submit = () => {
        console.log('can submit?')
        // make sure email is valid
        if (!this.is_valid_email(this.state.email))
            return false
        console.log('email ok');
        // make sure all other fields are filled in and have no outstanding errors
        const errored = this.state.errored_elements;
        for (const field_id in errored) {
            var field_text = this.state[field_id];
            if (errored[field_id] || !field_text)
                return false;
        }
        console.log('can submit');
        return true;
    }

    // Check if required fields have been filled then send me an email
    handle_form_submit = () => {
        if (this.can_submit) {
            // change button content to notify user that the form is being sent
            this.setState({
                button_content: 'SENDING...',
                error_message: ''
            });
            // send email via smtpjs
            window.Email.send({
                SecureToken: '010b08c2-294b-41b8-bf57-2d8e35a0f95d',
                To: 'roydey10@gmail.com',
                From: 'roydey10@gmail.com',
                Subject: this.state.subject,
                Body: `${this.state.name} from ${this.state.email} says \n ${this.state.message}`
            }).then(response => {
                // On successful submit, clear input fields, change button text to DELIVERED
                // and prevent submission
                this.setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    can_submit: false,
                    button_content: 'DELIVERED'
                });
            }).catch((error) => {
                // On error, reset button content to SEND tell the user to retry submission
                this.setState({
                    button_content: 'SEND',
                    error_message: `Sorry, Sending Failed, Please Try Again`
                })
            });
        }


    }


    render() {
        return (
            <div id='contact-container' className='section'>
                <SectionTitle text='CONTACT' justify='center' />
                <div id='contact-body'>

                    <Reveal effect='fade-slide-right'>
                        <div id='user-info-container' className='hidden'>
                            <div className='inline-container'>
                                <input id='name'
                                    placeholder='Name*'
                                    value={this.state.name}
                                    onChange={this.handle_field_change}
                                    onBlur={this.handle_on_blur}
                                    className={`input-field-small input-small ${this.is_errored('name') ? 'errored' : ''}`}></input>
                                <input id='email'
                                    placeholder='Email*'
                                    value={this.state.email}
                                    onChange={this.handle_field_change}
                                    onBlur={this.handle_on_blur}
                                    className={`input-field-small input-small ${this.is_errored('email') ? 'errored' : ''}`}></input>
                            </div>
                            <input id='subject'
                                placeholder='Subject*'
                                value={this.state.subject}
                                onChange={this.handle_field_change}
                                onBlur={this.handle_on_blur}
                                className={`input-field-small input ${this.is_errored('subject') ? 'errored' : ''}`}></input>
                            <textarea id='message'
                                placeholder='Message*'
                                value={this.state.message}
                                onChange={this.handle_field_change}
                                onBlur={this.handle_on_blur}
                                className={`input-field-large input ${this.is_errored('message') ? 'errored' : ''}`}></textarea>
                            <div className='button-container'>
                                <div className={this.state.can_submit ? 'button' : 'disabled-button no-interaction'} onClick={this.handle_form_submit}>
                                    {this.state.button_content}
                                </div>
                                <div id='error-message'>{this.state.error_message}</div>
                            </div>
                        </div>
                    </Reveal>

                    <div id='personal-info-container'>
                        <div className='personal-info-item'>
                            <Reveal effect='fade-slide-left'>
                                <div className='info-title-container hidden'>
                                    <MdLocationOn className='info-icon' />
                                    <div className='info-title no-interaction'>LOCATION</div>
                                </div>
                                <div className='hidden'>
                                    <div className='info-content'>SF Bay Area, CA</div>
                                </div>
                            </Reveal>
                        </div>
                        <div className='personal-info-item'>
                            <Reveal effect='fade-slide-left'>
                                <div className='info-title-container hidden'>
                                    <MdEmail className='info-icon' />
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
                                    <MdSmartphone className='info-icon' />
                                    <div className='info-title no-interaction'>PHONE NUMBER</div>
                                </div>
                                <div className='hidden'>
                                    <div className='info-content'>+1 (408) 413-7941</div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                </div>
                <Reveal effect='fade-slide-up'>
                    <div className='social-links hidden'>

                        <div className='link-container'>
                            <a
                                href={'https://github.com/rdey0'}
                                target='_blank'
                                rel='noopener noreferrer' >
                                <AiFillGithub className='social-icon' />
                            </a>

                            <a
                                href={'https://www.linkedin.com/in/roydey/'}
                                target='_blank'
                                rel='noopener noreferrer' >
                                <AiFillLinkedin className='social-icon' />
                            </a>
                        </div>
                    </div>
                </Reveal>

            </div>
        )
    }
}