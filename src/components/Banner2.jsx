import React from 'react'

const Banner2 = ({img}) => {
    return (
    <div className="parallax-container" style={{height: "auto"}}>
        <div className='parallax'><img src={img} alt='parallax banner'/>
        </div>
    </div>
    )
}

export default Banner2
