import React, { useState } from 'react';
import style from './Contact.module.css';
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  const[isEnter,setIsEnter]=useState(false)
  // const EnterMail=()=>{
  //   setIsEnter(!isEnter)
  // }
  // const LeaveMail=()=>{
  //   setIsEnter(!isEnter)
  // }
  const handleEnter=()=>{
    setIsEnter(!isEnter)
  }
  let handleLeave=()=>{
    setIsEnter(!isEnter)
  }
  return (
    <div id='contact' className={style.container}>
      <div className={style.title}>
          <h2>Contact Me</h2>
          <p>Feel free to reach out !</p>
      </div>
      <ul className={style.linkContainer}>
        <li>    
          <a href="mailto:ayon143@gmail.com" className={style.link} onMouseEnter={handleEnter} onMouseLeave={handleLeave}><MdOutlineMail className={style.icon}/>{isEnter? "ayon143@gmail.com":"E-mail"}</a>
          {/* {isEnter && <span>keshrinka2013@gmail.com</span>} */}
        </li>
        <li>
          <a href="www.linkedin.com/in/ayonsom"className={style.link}><FaLinkedin className={style.icon}/>{"Linkedin"}</a>
        </li> 
        <li>  
          <a href="https://github.com/ayonsom"className={style.link}><FaGithub className={style.icon}/>{"GitHub"}</a>
        </li>
        <li>
          <a href="tel:08709455819"className={style.link}><IoMdCall className={style.icon}/>Tel:+91-8709455819</a>
        </li>
      </ul>
      
      
    </div>
  )
}

export default Contact
