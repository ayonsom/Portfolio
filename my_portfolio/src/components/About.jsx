import React from 'react';
import { FaPen } from "react-icons/fa";
import style from './About.module.css'

const About = () => {
 
  return (
    <div id='about' className={style.container}>
      <h2 className={style.title}>About Me </h2>
      <span className={style.icon}><FaPen/></span>
      <h3 className={style.heading}>Python Backend Developer</h3>
      <p className={style.text}>Aspiring Python Backend Developer and current student, proficient in HTML, CSS, and JavaScript, seeking opportunities to build a solid foundation in web development. Eager to contribute to innovative projects and expand skills in Python, with a focus on data structures such as 2D arrays, stacks, queues, recursion, backtracking, graphs, and dynamic programming. Enthusiastic about creating seamless web experiences and dedicated to honing problem-solving skills. Open to exciting opportunities and collaborations that provide valuable learning experiences in the field of web development.</p>
    </div>
  )
}

export default About