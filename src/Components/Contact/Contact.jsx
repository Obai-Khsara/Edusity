import React from 'react'
import "./Contact.css"
import msgIcon from "../../assets/Images/msg-icon.png"
import mailIcon from "../../assets/Images/mail-icon.png"
import phoneIcon from "../../assets/Images/phone-icon.png"
import locationIcon from "../../assets/Images/location-icon.png"
import whiteArrow from "../../assets/Images/white-arrow.png"
import { useState } from 'react'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a995441c-f5c8-48b6-afcc-380380c85c78");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(()=>{
        setResult("")
      },1000)
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(()=>{
        setResult("")
      },1000)
    }
  };




  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msgIcon} alt="" /></h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit adipisci cumque rem libero magni eaque esse. Sapiente non dicta, placeat perferendis earum ab deleniti quam! Tempora possimus delectus culpa nihil?
            </p>
            <ul>
                <li>
                    <img src={mailIcon} alt="" />
                    obay.khsara7@gmail.com
                </li>
                <li>
                    <img src={phoneIcon} alt="" />
                    +961 776734997
                </li>
                <li>
                    <img src={locationIcon} alt="" />
                    Lebanon, Beqqa <br /> Rachaiya-Masnaa-Road
                </li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" required placeholder='Enter Your Mobile Number'/>
                <label>Write Your Message Here</label>
                <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>
                    Submit Now
                    <img src={whiteArrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact