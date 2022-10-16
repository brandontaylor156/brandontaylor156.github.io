import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavBar = () => {
    return (
        <div className="navbar-fixed">
            <ul id="dropdown1" className="dropdown-content">
                <li><a className="black-text" href="#project1">1. 98ish</a></li>
                <li><a className="black-text" href="#project2">2. Chit Chat</a></li>
                <li><a className="black-text" href="#project3">3. Baseline Today</a></li>
                <li><a className="black-text" href="#project4">4. Project Manager</a></li>
                <li><a className="black-text" href="#project5">5. Vinyl Countdown</a></li>
                <li><a className="black-text" href="#project6">6. Private Wall</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper black" >
                    <a href="/" className="brand-logo white-text" style={{marginLeft: "1vw"}}>
                        <span className="hide-on-small-only"><FontAwesomeIcon icon="rocket" style={{margin:'0 2px'}}/></span>
                        <h5 style={{display: "inline-block"}}>Brandon Taylor</h5>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a className="hover-ver" href="#about">About</a></li>
                        <li>
                            <a style={{outline: 'none'}} className='dropdown-trigger hover-ver' href='#projects-title' data-target='dropdown1'>
                                Projects
                                <FontAwesomeIcon icon="caret-down" style={{margin:'0 3px'}}/>
                            </a>
                        </li>
                        <li><a className="hover-ver" href="#skills">Skills</a></li>
                        <li><a className="hover-ver" href="#education">Education</a></li>
                        <li><a className="hover-ver" href="#experience">Experience</a></li>
                        <li><a className="hover-ver" href="#courses">Courses</a></li>
                        <li><a className="hover-ver" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
