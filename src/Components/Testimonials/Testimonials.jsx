import React, { useRef } from 'react'
import "./Testimonials.css"
import nextIcon from "../../assets/Images/next-icon.png"
import backIcon from "../../assets/Images/back-icon.png"
import user1 from "../../assets/Images/program-1.png"
import user2 from "../../assets/Images/user-2.png"
import user3 from "../../assets/Images/program-2.png"
import user4 from "../../assets/Images/user-4.png"

const Testimonials = () => {
    const slider = useRef()
    let tx = 0
    const slideForward = () => {
        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials' id='testimonials'>
        <img className='next-btn' src={nextIcon} alt="" onClick={slideForward}/>
        <img className='back-btn' src={backIcon} alt="" onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>User 1</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi perspiciatis saepe consequatur.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>User 2</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi perspiciatis saepe consequatur.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>User 3</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi perspiciatis saepe consequatur.
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>User 4</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi perspiciatis saepe consequatur.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials