import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.css"

const Contact = () => {
  return (
    <>
    <section className='contact-section'>
      <h3 className='title'>
      Let's Connect
      </h3>
      <p className="subTitle">
      What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect:
      </p>
      <div className='contact-info'>
        <a href="tel:+919579394172"><span><FaPhone /></span> +91 9579394172</a> 
        <a href="bidesamarth6@gmail.com"><span><SiGmail/></span> bidesamarth6@gmail.com</a>
      </div>
      <div className="platforms">
        <p>Reach Out on This Platform to Work Together:</p>
        <ul>
          <li><a href="#"><FaGithub/></a></li>
          <li><a href="#"><FaLinkedin/></a></li>
          <li><a href="#"><IoLogoWhatsapp /></a></li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default Contact