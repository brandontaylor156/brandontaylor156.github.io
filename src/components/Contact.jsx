import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = () => {
    return (
        <footer>
            <div id="contact" className='full-container-title scrollspy'>
                <h2>Contact Me</h2>
                <p className='flow-text center-align'>Feel free to reach out to me with any of these links.</p>
            </div>
            <div className='full-container blue-container center-align'>
                <div className="row"></div>
                <div style={{flexWrap: "wrap"}} className='row valign-wrapper'>
                    <div className="col s6 m3">
                        <a className="tooltipped" data-position="bottom" data-tooltip="Email" href='mailto:brandon.david4@outlook.com' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon='envelope' size='4x' color='white' />
                            <h6 className="black-text hide-on-large-only">Email</h6></a>
                    </div>
                    <div className="col s6 m3">
                        <a className="tooltipped" data-position="bottom" data-tooltip="LinkedIn" href='https://linkedin.com/in/brandontaylor156' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size='4x' color='white' />
                            <h6 className="black-text hide-on-large-only">LinkedIn</h6></a>
                    </div>
                    <div className="col s6 m3">
                        <a className="tooltipped" data-position="bottom" data-tooltip="Resume" href='https://docs.google.com/document/d/1i2uERHm9l7EgWfuAwvGfMsIqEW2mKpIyWqP2OuOP7zI/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon='file-pdf' size='4x' color='white' />
                            <h6 className="black-text hide-on-large-only">Resume</h6></a>
                    </div>
                    <div className="col s6 m3">
                        <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/brandontaylor156' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={['fab', 'github']} size='4x' color='white' />
                            <h6 className="black-text hide-on-large-only">GitHub</h6></a>
                    </div>
                </div>
                <div class="row white-text">
                    <div class="col s12">
                        © 2022 Brandon Taylor
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Contact
