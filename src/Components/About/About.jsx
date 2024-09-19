import React from 'react'
import "./About.css"
// import aboutImg from "../../assets/Images/about.png"
import aboutImg from "../../assets/Images/about.jpg"
import playIcon from "../../assets/Images/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={aboutImg} alt="" className='about-img'/>
            <img src={playIcon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ipsam corporis perferendis unde at magni perspiciatis sequi culpa a quisquam, sit ullam incidunt deleniti fugit commodi quam! Dolorum, eius voluptatum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ipsam corporis perferendis unde at magni perspiciatis sequi culpa a quisquam, sit ullam incidunt deleniti fugit commodi quam! Dolorum, eius voluptatum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ipsam corporis perferendis unde at magni perspiciatis sequi culpa a quisquam, sit ullam incidunt deleniti fugit commodi quam! Dolorum, eius voluptatum.
            </p>
        </div>
    </div>
  )
}

export default About