import React from 'react'
import './Contact_content.css'
// import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

function Contact_content() {
  return (
    <div class="page">
      <div class="info_">
        <div>
          <div class="heading">Contact me</div>
          <div class="texts">I am Interested to work for an organisation or a freelancing oppurtunity,If you have any specific questions contact me here or through my socials</div>
          {/* <h1 class="text">I am Interested to work for an organisation or a freelancing oppurtunity</h1> */}
          {/* <h1 class="text">If you have any specific questions contact me here ot through my socials</h1> */}
        </div>  
        <div class="box">
          <input class="button_in Name" type="text" placeholder='Name'></input>
          <input class="button_in email" type="email" placeholder='Email'></input>
          <input class="button_in subject" type="text" placeholder='subject'></input>
          <input class="button_in message" type="text" placeholder='Message'></input>
          <div class="send">Send message</div>
        </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.171653607254!2d78.37284494999999!3d17.4097281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9559aefc19d7%3A0xb25a772c14b6d939!2sAvasa%20Hospital!5e0!3m2!1sen!2sin!4v1671967632629!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> */}
      </div>
    </div>
  )
}

export default Contact_content