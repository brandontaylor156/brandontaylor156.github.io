import React from 'react'

import html from '../assets/images/bootcamp/htmlcss.png'
import bootstrap from '../assets/images/bootcamp/bootstrap.png'

import python from '../assets/images/bootcamp/python.png'
import flask from '../assets/images/bootcamp/flask2.png'
import mysql from '../assets/images/bootcamp/mysql.png'
import jquery from '../assets/images/bootcamp/jquery.png'
import aws from '../assets/images/bootcamp/aws.png'

import java from '../assets/images/bootcamp/java.png'
import springboot from '../assets/images/bootcamp/springboot.png'
import jpa from '../assets/images/bootcamp/jpa.png'
import azure from '../assets/images/bootcamp/azure.png'

import react from '../assets/images/bootcamp/react.png'
import node from '../assets/images/bootcamp/nodejs.png'
import express from '../assets/images/bootcamp/expressjs.png'
import mongodb from '../assets/images/bootcamp/mongodb.png'

const BootcampTimeline = () => {
    return (
        <div >
            <ul class="timeline grey darken-4 grey-text" style={{ borderRadius: "0%", paddingTop: "1px"}}>
                <li class="event">
                    <h5>Weeks 1-2 (Web Fundamentals)</h5>
                    <div style={{flexWrap: "wrap"}}class="valign-wrapper">
                    <img style={{ height: "30px", margin: "15px 10px" }} src={html} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={bootstrap} alt=""></img>
                    </div>
                </li>
                <li class="event">
                    <h5>Weeks 3-6 (Python Stack)</h5>
                    <div style={{flexWrap: "wrap"}}class="valign-wrapper">
                    <img style={{ height: "30px", margin: "15px 10px" }} src={python} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={flask} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={mysql} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={jquery} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={aws} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src="" alt=""></img>
                    </div>
                </li>
                <li class="event">
                    <h5>Weeks 7-10 (Java Stack)</h5>
                    <div style={{flexWrap: "wrap"}}class="valign-wrapper">
                    <img style={{ height: "30px", margin: "15px 10px" }} src={java} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={springboot} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={jpa} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={azure} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src="" alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src="" alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src="" alt=""></img>
                    </div>
                </li>
                <li class="event">
                    <h5>Weeks 11-14 (MERN Stack)</h5>
                    <div style={{flexWrap: "wrap"}}class="valign-wrapper">
                    <img style={{ height: "30px", margin: "15px 10px" }} src={react} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={node} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={express} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src={mongodb} alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src="" alt=""></img>
                    <img style={{ height: "30px", margin: "15px 10px" }} src="" alt=""></img>
                    </div>
                </li>
                <li class="event"  style={{ paddingBottom: '20px' }}>
                    <h5>9/23/22 (Graduation)</h5>
                </li>
            </ul>
        </div>
    )
}

export default BootcampTimeline

