import React from 'react'

export default function NavBar(props) {
    return(
        <div id='navbar-container'>
            <div className='item-container'>
                <div className='navbar-item'>ABOUT</div>
                <div className='navbar-item'>RESUME</div>
                <div className='navbar-item'>PORTFOLIO</div>
                <div className='navbar-item'>CONTACT</div>
            </div>
        </div>
    )
}