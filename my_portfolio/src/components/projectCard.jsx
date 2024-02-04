import React from 'react';
import style from './ProjectCard.module.css';
import { FaGithub } from "react-icons/fa";
import { IoIosNavigate } from "react-icons/io"


const ProjectCard = ({project}) => {
  return (
    <div className={style.container}>

        <img src={project.image}alt={project.title} className={style.image} />
        <h3 className={style.title}>{project.title}</h3>
        <div className={style.linkContainer}>
         <a href={project.profileLink} className={style.link}> <IoIosNavigate className={style.icon}/>Profile Link</a>   
        </div>
    </div>
  )
}

export default ProjectCard