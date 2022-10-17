import React from 'react'
import moorpark from '../assets/images/education/moorpark.png'
import costco from '../assets/images/experience/costco.png'
import usaepay from '../assets/images/experience/usaepay.png'

const Experience = () => {
    return (
        <div>
            <div id="experience" className='full-container-title scrollspy'>
                <h2>Experience</h2>
                <p className="flow-text center-align">My professional experience over the years.</p>
            </div>
            <div className="full-container grey darken-4 white-text">
                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "150px" }} src={moorpark} alt="Moorpark College icon"></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Software Developer Intern</h5>
                        <h6>Moorpark College Graphic and Multimedia Design</h6>
                        <h6>Moorpark, CA | 04/2021 - 06/2021</h6>
                        <li>Architected over ten clean, well-documented, custom-made web pages to ensure optimal performance and achieve business requirements.</li>
                        <li>Collaborated closely with design / product team to produce the most user-friendly and aesthetically-pleasing UX/UI.</li>
                        <li>Prioritized responsive layout through use of Bootstrap 5, CSS flexbox, and HTML best practices.</li>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "150px" }} src={costco} alt="Costco icon"></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Customer Service Associate/Cashier</h5>
                        <h6>Costco Wholesale</h6>
                        <h6>Northridge, CA | 01/2019 - 06/2020</h6>
                        <li>Delivered consistent, responsive, and quality service to hundreds of customers per week by providing expert knowledge on warehouse products and departments.</li>
                        <li>Trained over thirty new hires via one-to-one mentorship, positively reinforcing Costco's culture of fast and high-quality service through a team effort.</li>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m3 center-align">
                        <img style={{ paddingTop: "20px", height: "150px" }} src={usaepay} alt="USAePay icon"></img>
                    </div>
                    <div className="col s12 m9">
                        <h5>Customer Support Agent</h5>
                        <h6>USAePay</h6>
                        <h6>Glendale, CA | 04/2017 - 01/2019</h6>
                        <li>Utilized USAePAY's virtual console as well as GitLab to communicate, document, and resolve all customer issues including late batch closures and console malfunctions.</li>
                        <li>Communicated with development, sales, and integration teams on a daily basis to generate solutions for customers - console fixes, gateway purchases, resulting in a strong company ecosystem.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
