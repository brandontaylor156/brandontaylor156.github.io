import React, {useEffect} from 'react'
import M from 'materialize-css';

import NavBar from './NavBar.jsx'
import MobileNav from './MobileNav.jsx'
import Banner1 from './Banner1.jsx';
import About1 from './About1.jsx';
import About2 from './About2.jsx';
import About3 from './About3.jsx';
import About4 from './About4.jsx';
import Banner2 from './Banner2.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Courses from './Courses.jsx'
import Contact from './Contact.jsx'

import simon3 from '../assets/images/banners/simon3.png'
import simon4 from '../assets/images/banners/simon4.png'
import simon5 from '../assets/images/banners/simon5.png'
import simon6 from '../assets/images/banners/simon6.png'
import simon8 from '../assets/images/banners/simon8.png'
import simon9 from '../assets/images/banners/simon7.png'

const Body = () => {
    useEffect(() => {
        let elems
        
        elems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(elems, {throttle: 1});

        elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

        elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {constrainWidth: false, coverTrigger: false});

        elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);

        elems = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elems);

    }, [])

    return (
        <div>
            <NavBar/>
            <MobileNav/>
            <Banner1/>
            
            <About1/>
            <About2/> 
            <About3/>
            <About4/> 

            <Banner2 img={simon3}/>
            <Projects/>
            <Banner2 img={simon4}/> 
            <Skills/> 
            <Banner2 img={simon5}/> 
            <Education/>
            <Banner2 img={simon6}/>
            <Experience/> 
            <Banner2 img={simon8}/>
            <Courses/>
            <Banner2 img={simon9}/>
            <Contact/>
        </div>
    )
}

export default Body
