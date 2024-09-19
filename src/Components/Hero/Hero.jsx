import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/Images/dark-arrow.png"


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est cum nulla esse pariatur laborum, obcaecati, tenetur a corrupti commodi fuga eos veniam! Dicta eum corrupti tempora aliquam commodi tenetur.
            </p>
            <button className='btn'>
                Explore More
                <img src={dark_arrow}/>
            </button>
        </div>
    </div>
  )
}

export default Hero