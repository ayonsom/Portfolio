import React, { useState } from 'react';
import ProjectCard from './projectCard';
import style from './Projects.module.css'

// import projectList from '/../data/projectList.json'


const Projects = () => {

  

  const projectList=[
    { 
         id :1,
         title :"Workout on Leetcode",
         image :"Leetcoode.png",
         profileLink:"https://oj.masaischool.com/user-home?username=cap01_005",  
    },
    {
         id :2,
         title :"Workout on Prepleaf",
         image :"masai.png",
         profileLink:"https://leetcode.com/ayon143/",
         
    }
]

 
  return (
    <section className={style.container} id='projects'>
      <h2 className={style.title}>Code Chronicle</h2>
      <div className={style.projects}>
        {projectList.map((project)=>(
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>

    </section>
    
  );
}

export default Projects