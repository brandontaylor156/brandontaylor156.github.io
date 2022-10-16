import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileNav = () => {
    return (
        <div className="container">
            <ul id="nav-mobile" className="sidenav grey darken-4 white-text">
                <li><p className="navlink center-align navtitle">Navigation</p></li>
                <li><div className="divider black" /></li>
                <li><a href="#about" className="white-text">About</a></li>
                <li class="no-padding">
                    <ul className="collapsible collapsible-accordion">
                        <li className="bold"><a href="#projects-title" className="collapsible-header white-text" style={{padding: "0 32px"}}>Projects<FontAwesomeIcon icon="caret-down" style={{margin:'0 3px'}}/></a>
                            <div className="collapsible-body grey darken-4">
                                <ul>
                                    <li><a href="#project1" className="white-text" style={{padding: "0 48px"}}>1. 98ish</a></li>
                                    <li><a href="#project2" className="white-text" style={{padding: "0 48px"}}>2. Chit Chat</a></li>
                                    <li><a href="#project3" className="white-text" style={{padding: "0 48px"}}>3. Baseline Today</a></li>
                                    <li><a href="#project4" className="white-text" style={{padding: "0 48px"}}>4. Project Manager</a></li>
                                    <li><a href="#project5" className="white-text" style={{padding: "0 48px"}}>5. Vinyl Countdown</a></li>
                                    <li><a href="#project6" className="white-text" style={{padding: "0 48px"}}>6. Private Wall</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                <li><a className="white-text" href="#skills">Skills</a></li>
                <li><a className="white-text" href="#education">Education</a></li>
                <li><a className="white-text" href="#experience">Experience</a></li>
                <li><a className="white-text" href="#courses">Courses</a></li>
                <li><a className="white-text" href="#contact">Contact</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger hide-on-large-only" style={{ position: 'fixed', zIndex: 997, top: '18px' }}><i class="material-icons white-text">menu</i></a>
        </div>
    )
}

export default MobileNav
