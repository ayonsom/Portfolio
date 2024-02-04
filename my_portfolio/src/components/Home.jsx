import React, { useEffect } from 'react';
import style from './Home.module.css';
import {useTypewriter,cursor} from 'react-simple-typewriter';
import { MdWavingHand } from "react-icons/md"

function Home() {
 const [typeEffect]=useTypewriter({
  words:["Python Backend Developer !","Algorithm Developer !","Tech Enthusiast !"],
  loop:{},
  typeSpeed:70,
  deleteSpeed:30,
  
})

const handleResumeClick = () => {

  const resumeFileUrl = 'https://drive.google.com/file/d/1AE254D7q0pqMFLN7jSyvXtymc4rH7/view?usp=sharing';
  const anchor = document.createElement('a');
  anchor.href = resumeFileUrl;
  anchor.download = 'Ayon_Som_Resume.pdf';
  anchor.click();

  const googleDriveLink = 'https://drive.google.com/file/d/1AE254D7q0pqMFLN7lHyvXtymc4rH7/view?usp=sharing';
  window.open(googleDriveLink, '_blank');
};


  return (
    <div id='home' className={style.home}>
      <div className={style.left}>
        <h2 className={style.hello}>Hello  <MdWavingHand className={style.icon}/> ,  I'm </h2>
        <h1 className={style.name}>Ayon Som</h1>
        <h2 className={style.typerContainer}>I'm a
          <span className={style.typeEffect}>{typeEffect}</span>
        </h2>
        <button onClick={handleResumeClick}>Resume</button>
      </div>
      <img src="Ayon's image.png" alt="Ayon's Image" className={style.image} />
    </div>
  );
}

export default Home;
