import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import project1 from '../assets/images/projects/98ish.gif'
import project2 from '../assets/images/projects/chitchat.gif'

const Projects = () => {
    return (
        <div>
            <div id="projects-title" className='full-container-title scrollspy'>
                <h2>Projects</h2>
                <p className="flow-text center-align">Here are some of my noteworthy creations.</p>
            </div>
            <div id='portfolio' className='full-container grey darken-4'>
                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6 white-text">
                        <div div id='project1' className="scrollspy">
                            <h4 className="indigo-text text-darken-1">98ish - Simulated Operating System</h4>
                        </div>
                        <p>A simulated operating system/desktop experience done with React.js</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• Leveraged React virtual DOM and reusable components to design, build, and maintain a robust, performant, and scalable system</li>
                            <li>• Implemented advanced hooks to manage complex window state, enabling concurrent processes and effective web experience</li>
                            <li>• Integrated multiple technologies and data sources through various web API's (Socket.IO, YouTube Data v3)</li>
                            <li>• Collaborated with one other developer (team of two), practicing Git Feature Branch workflow and AGILE approach for rapid, flexible, and iterative development</li>
                            <li>• Deployed application to web securely and affordably via Amazon cloud-computing services (AWS EC2)</li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='https://simul8.98ish.net/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">Website</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='http://youtube.com/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/Simul8-OS/98ish' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 center-align">
                        <img className="proj-gif" src={project1} alt='Project GIF' />
                    </div>
                </div>

                <div className="divider white"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6 white-text">
                        <div div id='project2' className="scrollspy">
                            <h4 className="cyan-text text-darken-1">Chit Chat - Instant Messaging App</h4>
                        </div>
                        <p>Instant messaging application using Spring Boot and WebSocket API</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• Maintained ownership of front-end, interfacing and collaborating cross-functionally to consistently build new product features</li>
                            <li>• Developed UI with best practices and cross-browser testing tools for platform-independent, responsive website</li>
                            <li>• Implemented custom styling (media queries, keyframes, flexbox, filters) and integrated multiple technologies (jQuery, Velocity.js) to produce modern and effective web experience</li>
                            <li>• Drove innovation through rapid prototyping, prioritized tasks, and consistent code and design reviews</li>
                            <li>• Utilized Chrome DevTools profiler (CPU and CSS selector profiles) to effectively measure and optimize project performance</li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='https://kb.chit-chat.link/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">Website</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='http://youtube.com/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/brandontaylor156/chit-chat' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 center-align">
                        <img className="proj-gif" src={project2} alt='Project GIF' />
                    </div>
                </div>

                <div className="divider grey darken-1"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6 white-text">
                        <div div id='project3' className="scrollspy">
                            <h4 className="green-text text-lighten-2">Baseline Today - Professional Tennis Forum</h4>
                        </div>
                        <p>Full stack forum for tennis enthusiasts to share discussion and receive latest updates on professional tennis circuit</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• Leveraged Flask modularized, micro-framework pattern to develop lightweight, high-performance, and scalable infrastructure</li>
                            <li>• Designed full CRUD system for managing persistent data elements of relational database and varying relational models</li>
                            <li>• Implemented object-oriented design to produce maintainable, reusable, and modifiable components with clearly defined interfaces, resulting in faster and more organized development</li>
                            <li>• Engineered custom algorithm to insert over 900 image paths into respective player profiles through Python built-in os module</li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Website" href='https://github.com/brandontaylor156/baseline-today' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon='external-link-alt' size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">Website</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='http://youtube.com/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/brandontaylor156/baseline-today' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 center-align">
                        <img className="proj-gif" src="" alt='Project GIF' />
                    </div>
                </div>

                <div className="divider grey darken-1"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6 white-text">
                        <div div id='project4' className="scrollspy">
                            <h4 className="teal-text text-darken-1">Project Manager with Java</h4>
                        </div>
                        <p>Project manager description</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• </li>
                            <li>• </li>
                            <li>• </li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='http://youtube.com/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/brandontaylor156/project_manager' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 center-align">
                        <img className="proj-gif" src="" alt='Project GIF' />
                    </div>
                </div>

                <div className="divider grey darken-1"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6 white-text">
                        <div div id='project5' className="scrollspy">
                            <h4 className="red-text text-darken-4">Vinyl Countdown - Full Stack MERN</h4>
                        </div>
                        <p>vinyl countdown description</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• </li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='http://youtube.com/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/brandontaylor156/vinyl_countdown' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 center-align">
                        <img className="proj-gif" src="" alt='Project GIF' />
                    </div>
                </div>

                <div className="divider grey darken-1"></div>

                <div style={{flexWrap: "wrap"}} className="row valign-wrapper">
                    <div className="col s12 m6 white-text">
                        <div div id='project6' className="scrollspy">
                            <h4 className="yellow-text text-darken-4">Private Wall - Full Stack Python</h4>
                        </div>
                        <p>Private wall description</p>
                        <ul style={{ padding: "4vh 0" }}>
                            <li>• </li>
                        </ul>
                        <div className='row center-align'>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="Video" href='http://youtube.com/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">Video</h6>
                            </div>
                            <div className='col s4'>
                                <a className="tooltipped" data-position="bottom" data-tooltip="GitHub" href='https://github.com/brandontaylor156/private_wall' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                                <h6 className="hide-on-large-only">GitHub</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 center-align">
                        <img style={{height: "300px", width: "auto", border: "1px solid gray"}} className="proj-gif" src="" alt='Project GIF' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
