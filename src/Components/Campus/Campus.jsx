import React from 'react'
import "./Campus.css"
import gallery1 from "../../assets/Images/gallery-6.jpg"
import gallery2 from "../../assets/Images/gallery2.jpg"
import gallery3 from "../../assets/Images/gallery3.jpg"
import gallery4 from "../../assets/Images/gallery5.jpg"
import whiteArrow from "../../assets/Images/white-arrow.png"

const Campus = () => {
  return (
    <div className='campus' id='campus'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>

        <button className='btn dark-btn'>See More Here <img src={whiteArrow} alt="" /></button>
    </div>
  )
}

export default Campus