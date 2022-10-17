import React, { useEffect } from 'react'
import $ from 'jquery'
import carouselPic1 from '../assets/images/about/code.png'
import carouselPic2 from '../assets/images/about/98ish.png'
import carouselPic3 from '../assets/images/about/pickleball.png'

const About1 = () => {
    useEffect(() => {
        let current = 0
        let previous = 2
        for (let i = 1; i < 3; i++) {
            $('#pic' + i).hide()
        }
        let interval = setInterval(function () {
            if (current === 2) {
                current = 0
                previous = 2
            } else {
                current += 1
                previous = current - 1
            }
            $('#pic' + previous).hide()
            $('#pic' + current).fadeIn(800)
            $('#mark' + current).addClass("marked")
            $('#mark' + previous).removeClass("marked");
            $('#text' + current).addClass("highlight")
            $('#text' + previous).removeClass("highlight")
        }, 2000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div id='about' className="full-container scrollspy grey darken-4">
            <div style={{flexWrap: "wrap", marginBottom: 0}} className="row valign-wrapper">
                <div className="col s12 m6 white-text">
                    <h3 className="center-align" style={{marginTop: 0}}>Hi, I'm Brandon.</h3>
                    <p className="flow-text center-align">I am a software developer from Los Angeles who loves to bring awesome ideas to life through <span className="highlight" id="text0">code</span>. I am passionate about creating <span className="highlight" id="text1">immersive user experiences</span> and am consistently seeking ways to improve that. In my spare time I enjoy competing and instructing in a sport called <span id="text2">pickleball</span>!</p>
                </div>
                <div style={{paddingTop: "20px"}} className="col s12 m6 center-align">
                        <img style={{height: 'auto', width: "400px", maxWidth: "100%", borderRadius: "2%"}} src={carouselPic1} alt="" id="pic0" class="carousel" />
                        <img style={{height: 'auto', width: "400px", maxWidth: "100%", borderRadius: "2%"}} src={carouselPic2} alt="" id="pic1" class="carousel hidden" />
                        <img style={{height: 'auto', width: "400px", maxWidth: "100%", borderRadius: "2%"}} src={carouselPic3} alt="" id="pic2" class="carousel hidden" />
                    <div class="markers">
                        <div id="mark0" class="marker marked"></div>
                        <div id="mark1" class="marker"></div>
                        <div id="mark2" class="marker"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About1
