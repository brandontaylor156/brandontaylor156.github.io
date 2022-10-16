import React from 'react'
import text_editor from '../assets/images/text_editor.png'

const About3 = () => {
    return (
        <div className="full-container">
            <div style={{flexWrap: "wrap"}} className="row valign-wrapper white-text center-align">
                <div className="col s12 m6">
                <h4>My First Project</h4>
                    <p className="flow-text">
                    I pursued Computer Science in college and built my first few projects in C++. My favorite and most challenging project was a text editor built with linked lists! It was an eye-opening experience to the intricacies of seemingly simple applications that we take for granted every day. 
                    </p>
                </div>
                <div className="col s12 m6 center-align">
                <a href="https://youtu.be/VVWOD7imn6U" target="_blank" rel="noopener noreferrer"><img style={{width: "200px", border: "1px solid gray"}} class="first_project_pic hoverable" src={text_editor} alt="my_first_project_img" /></a>
                <p class="description">Used C++ and linked lists to create a text editor where each node represents a text character. Features include text insertion and deletion, cursor movement, and ability to save and load documents.</p>
                </div>
            </div>
        </div>

    )
}

export default About3
