import React from 'react'

import dojo from '../assets/images/education/dojo.png'
import csun from '../assets/images/education/csun.png'
import moorpark from '../assets/images/education/moorpark.png'

const Education = () => {
    return (
        <div>
            <div id="education" className='full-container-title scrollspy'>
                <h2>Education</h2>
                <p className="flow-text center-align">My educational experiences.</p>
            </div>
            <div className="full-container blue-container white-text">
                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "150px" }} src={dojo} alt="Coding Dojo icon"></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Coding Dojo Bootcamp</h5>
                        <h6>Computer Software Engineering - Triple Black Belt</h6>
                        <h6>Burbank, CA | 06/2022 - 09/2022</h6>
                        <li>Achieved Black Belt status, the highest level of knowledge achievement, on all 3 curriculums</li>
                        <li>Built, tested, and deployed 3 full stack projects in Python Flask, Java Spring Boot and JavaScript MERN</li>
                        <li>Consistently executed beyond the curriculum by integrating self-taught technologies to my projects</li>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "150px" }} src={csun} alt="CSUN icon"></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>California State University, Northridge</h5>
                        <h6>Computer Science Major</h6> 
                        <h6>Northridge, CA | 08/2021 - 06/2022</h6>
                        <h6>Relevant Courses:</h6>
                        <li>COMP 110/L - Introduction to Algorithms and Programming/Lab</li>
                        <li>COMP 182/L - Data Structures and Program Design/Lab</li>
                        <li>COMP 122/L - Computer Architecture & Assembly Language/Lab</li>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "150px" }} src={moorpark} alt="Moorpark icon"></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Moorpark College</h5>
                        <h6>Associate of Science - AS, Computer Science</h6>
                        <h6>Moorpark, CA | 06/2019 - 05/2021</h6>
                        <li>Consistently achieved "Dean's List" and "National Honor's Society" certificates each semester.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
