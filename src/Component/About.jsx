import React from 'react'
import classes from './About.module.css'
import mypix from "./mypix.jpg";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className={classes.About} id="about">
   <div className={classes.MeetMe}>
   <h2 className={classes.post}>Frontend developer</h2>
   <p className={classes.intro}>Hello, I'm Oladejo Mariam</p>
    <p>I am a frontend developer who is focused on creating responsive, user-friendly products and experiences for the web.
   I design with HTML5, CSS3, JavaScript, React, ES6,Taiwind CSS, and also work using GIT, Github, Node JS and Mongo DB </p>
   
   <button><Link to = "https://www.linkedin.com/in/mariam-oladejo-23b80a1a6">LinkedIn</Link></button>
   </div>
   <div className={classes.image}><img className={classes.img} src = {mypix} alt = "myself" /></div>
    </div>
  )
}

export default About