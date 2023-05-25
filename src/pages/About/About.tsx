import React from "react";

import styles from "./About.module.scss";

import {FacebookIcon} from "../../assets/icons";


const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.description}>
                <h1 className={styles.description_name}>Dmitrijs Petrovs</h1>
                <p className={styles.description_about}>Front-end developer 18 years old, Minsk & Riga</p>
            </div>
            <div className={styles.foto}>
                <FacebookIcon />
            </div>
            <h3 className={styles.description_name}>About me</h3>
            <p className={styles.description_about} style={{maxWidth: "700px"}}>
                My name is Dmitry and I am a beginner Front-end developer. I would be glad if you consider my candidacy for the position of Front-end developer.
                <div/>
                I have knowledge of HTML, CSS, JavaScript, TypeScript, React.JS, FlexBox, Grid, Firebase, API, Persist and Git. My English level is B2. In addition, I have developed 3 projects based on TeachMeSkills school: experience with adaptive, cross-browser layout; HTML, CSS (SCSS), Figma; use of HTML tags in accordance with their semantics, use of flexbox or grid positioning, knowledge of the basic principles of BEM; JavaScript: I can work with asynchronous functions, understand EventLoop (micro and macro tasks); React/Redux: React Router, hooks, functional components, React Context or Redux (using Redux Toolkit); perform static typing using TypeScript; Git version control; WebStorm compiler and code editor.
                You can view my projects at the following link: https://github.com/d1pefe?tab=repositories.
                <div/>
                I have experience in conducting business correspondence in English. I enjoy solving complex tasks, acquiring new knowledge. I am not afraid to take responsibility because I believe that this is the key to professional and personal development.
                <div/>
                I would be happy to talk to you in person and answer all your questions.
                Have a nice day!
                You can read more on LinkedIn: <a href={"https://www.linkedin.com/in/dipe-fe/"}>https://www.linkedin.com/in/dipe-fe/</a> and in my <a href={"https://drive.google.com/drive/folders/1GNRWRLD3Rr259Fm6eWwmHmGTzeau7ZdI?usp=sharing"}>resume</a>
            </p>
        </div>
    </div>)};

export default About;
