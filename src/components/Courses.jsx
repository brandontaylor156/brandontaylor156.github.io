import React from 'react'

import udemy from '../assets/images/courses/udemy.png'
import dojo from '../assets/images/education/dojo.png'
import linkedin from '../assets/images/courses/linkedIn.png'

const Courses = () => {
    return (
        <div>
            <div id="courses" className='full-container-title scrollspy'>
                <h2>Courses</h2>
                <p className="flow-text center-align">Here is a list of my relevant courses completed.</p>
            </div>

            <div className="full-container grey darken-4 white-text">

            <div className="row">
                <div className="col s12 m3 center-align">
                <img style={{ paddingTop: "20px", height: "100px" }} src={udemy} alt="Udemy icon"></img>
                </div>
                <div className="col s12 m9">
                    <h5>Udemy</h5>
                    <h6>Java Data Structures and Algorithms Masterclass</h6>
                    <h6>JavaScript Algorithms and Data Structures Masterclass</h6>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m3 center-align">
                <img style={{ paddingTop: "20px", height: "100px" }} src={dojo} alt="Coding Dojo icon"></img>
                </div>
                <div className="col s12 m9">
                    <h5>Coding Dojo</h5>
                    <h6>Python Stack</h6>
                    <h6>MERN Stack</h6>
                    <h6>Java Stack</h6>
                    <h6>Web Fundamentals</h6>
                </div>
            </div>
            
            <div className="row">
                <div className="col s12 m3 center-align">
                <img style={{ paddingTop: "20px", height: "100px" }} src={linkedin} alt="LinkedIn icon"></img>
                </div>
                <div className="col s12 m9">
                    <h5>LinkedIn Learning</h5>
                    <h6>JavaScript Essential Training</h6>
                    <h6>Learning ECMAScript 6+ (ES6+)</h6>
                    <h6>React.js Essential Training</h6>
                    <h6>Programming Foundations: Object-Oriented Design</h6>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Courses