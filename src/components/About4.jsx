import React from 'react'
import BootcampTimeline from './BootcampTimeline'
const About4 = () => {
    return (
        <div class='full-container blue-container'>
            <div className="row">
                <div className="col s12 m6 push-m6 center-align journey">
                    <h4 className="white-text">My Coding Bootcamp Journey</h4>
                    <p className="flow-text white-text">
                        About half a year ago, I made one of the biggest decisions of my life in joining Coding Dojo's 14-week software development program. It was an immersive, 90+ hour per week bootcamp consisting of learning new languages and technologies, solving algorithms, and writing thousands of lines of code. It was one of the greatest learning experiences of my life, and I would do it again in a heartbeat. Here is a timeline of my journey.
                        </p>
                </div>
                <div className="col s12 m6 pull-m6 about-left black-text" >
                    <BootcampTimeline/>
                </div>
            </div>
        </div>
    )
}

export default About4
