import React from 'react'
import classes from './About.module.css'
import mypix from "./mypic.png";
import { Link } from 'react-router-dom';
import {AiFillHtml5} from "react-icons/ai";
import {BiLogoCss3} from "react-icons/bi";
import {BiLogoTailwindCss} from "react-icons/bi";
import {BiLogoJavascript} from "react-icons/bi";
import {BiLogoReact} from "react-icons/bi"

function About() {
  return (
  <div className={classes.aboutContainer}>
    <div className={classes.About} id="about">
     
        <div className={classes.MeetMe}>
            <h2 className={classes.post}>Frontend developer</h2>
            <p className={classes.intro}>Hello, I'm Oladejo Mariam</p>
            <p>I am a frontend developer who is focused on creating responsive, user-friendly products and experiences for the web.
            I design with HTML5, CSS3, JavaScript, React, ES6,Taiwind CSS, and also work using GIT, Github, Node JS and Mongo DB </p>
   
            <button><Link to = "https://www.linkedin.com/in/mariam-oladejo-23b80a1a6">LinkedIn</Link></button>
        </div>
        <div className={classes.image} style={{
                     width:'20rem',
                     height: '20rem'
                    }}><img className={classes.img} src = {mypix} alt = "myself" />
        </div>
     
    </div>
        
        <div className={classes.stack}>
        <h2 className={classes.stackTitle}>STACK</h2>
        <span className={classes.stackIcons}>
            <AiFillHtml5 className = {classes.stackIcon}/>
            <BiLogoCss3 className = {classes.stackIcon}/>
            <BiLogoTailwindCss className = {classes.stackIcon}/>
           <BiLogoJavascript className = {classes.stackIcon}/>
            <BiLogoReact className = {classes.stackIcon}/>
        </span>
        </div>
    
      
   </div>
  )
}

export default About