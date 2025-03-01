import React from 'react'
import "./Content.css"
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Content = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions important
          to us as we strive to provide exceptional service to Our university
          community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@Iheoma.Dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +2348108130735
          </li>
          <li>
            <img src={location_icon} alt="" />
            14th heinz street , Rochas back gate <br />
            Imo State
          </li>
        </ul>
      </div>

      <div className="conent-col">
        <form>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>Sending</span>
      </div>
    </div>
  );
}

export default Content