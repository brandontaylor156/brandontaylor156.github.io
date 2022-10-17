import React from 'react'
import Animation from './Animation.jsx'
const About2 = () => {
    return (
        <div class='full-container blue-container darken-2'>
              <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                <div className="col s12 m6 push-m6">
                <h4 className="center-align white-text">My Introduction to Software Engineering</h4>
                        <p className="center-align flow-text white-text">
                            My journey in software extends back to AP Computer Science in high school. I always possessed a curiosity and admiration for technology, but it was then that I realized the boundless potential of code and its role in creating anything. 
                        </p>
                </div>
                <div style={{minHeight: "400px"}} className="col s12 m6 pull-m6 about-left black-text center-align valign-wrapper">
                    <Animation/>
                </div>
            </div>
          
        </div>
    )
}

export default About2