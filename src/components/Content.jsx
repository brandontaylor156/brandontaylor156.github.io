import React, {useEffect} from 'react'
import M from 'materialize-css';

import NavBar from './NavBar.jsx'
import MobileNav from './MobileNav.jsx'
import Banner from './Banner.jsx';
import About1 from './About1.jsx';
import About2 from './About2.jsx';
import About3 from './About3.jsx';

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
        <Banner/>
        
        <About1/>
        <About2/> 
       
        <About3/>
        {/* <About4/> 
        <About5/>
        <Test/> 
      
    
        <LineOne/>
        <Projects/>
        <LineTwo/>
        <Skills/>
        <LineThree/>
        <Education/>
        <LineFour/>
        <Experience/>
        <LineFive/>
        <Courses/>
        <LineSix/>
        <Contact/> */}
        </div>
    )
}

export default Body
