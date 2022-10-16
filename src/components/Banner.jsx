import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profilePic from '../assets/images/profile_pic.png'

const Banner = () => {
    return (
        <div>
            <div id='banner' className='parallax-container center-align' style={{ height: 'auto' }}>
                <div id='parallax-zero'>
                    <div className="row">
                        <div className="col s12 m6">
                            <div class="img-container">
                                <div className="hoverBody">
                                    <img src={profilePic} alt="profile_image" className="profile_img" />
                                    <div className="hoverLoader">
                                        <span style={{"--i":1}}></span>
                                        <span style={{"--i":2}}></span>
                                        <span style={{"--i":3}}></span>
                                        <span style={{"--i":4}}></span>
                                        <span style={{"--i":5}}></span>
                                        <span style={{"--i":6}}></span>
                                        <span style={{"--i":7}}></span>
                                        <span style={{"--i":8}}></span>
                                        <span style={{"--i":9}}></span>
                                        <span style={{"--i":10}}></span>
                                        <span style={{"--i":11}}></span>
                                        <span style={{"--i":12}}></span>
                                        <span style={{"--i":13}}></span>
                                        <span style={{"--i":14}}></span>
                                        <span style={{"--i":15}}></span>
                                        <span style={{"--i":16}}></span>
                                        <span style={{"--i":17}}></span>
                                        <span style={{"--i":18}}></span>
                                        <span style={{"--i":19}}></span>
                                        <span style={{"--i":20}}></span>
                                        <span style={{"--i":21}}></span>
                                        <span style={{"--i":22}}></span>
                                        <span style={{"--i":23}}></span>
                                        <span style={{"--i":24}}></span>
                                        <span style={{"--i":25}}></span>
                                        <span style={{"--i":26}}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 valign-wrapper banner-text">
                            <div className="container">
                                <h4 className="flow-text white-text">"Everything negative - pressure, challenges - is all an opportunity for me to rise."</h4>
                                <h6 className="flow-text kobe">-Kobe Bryant</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner   