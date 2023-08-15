import React from 'react'
import classes from "./Project.module.css"
import bmi from "./bmi.jpeg"
import rps from "./rps.jpeg"
import { Link } from 'react-router-dom';
import weather from "./wea.jpeg"
import agecal from "./agecal.jpeg"

function Project() {
  return (
    <div className={classes.container} id="project">
         <h1 className={classes.title}>PROJECTS</h1>

         <div className={classes.project}>
         <div className={classes.image}>
                 <img className={classes.proimg} src = {weather} alt = "Weather app" />
        </div>
         <div className={classes.content}>
             <h1 className={classes.proName}>WEATHER APP</h1>
             <p>The weather app displays the weather condition of a location. This is designed using HTML5, CSS3, JavaScript.</p>
             <button><Link to = "https://weather-app-ten-pink-36.vercel.app/" > View Project </Link></button>  
         </div>
        
     </div>

        <div className={classes.project}>
            <div className={classes.content}>
                <h1 className={classes.proName}>BMI CALCULATOR</h1>
                <p>This bmi calculator help users to calculate their body mass index (bmi), users are required to input ther weight and height
                then on click of the calculate button, their bmi value displays, including their status that is whether 
                underweight (in yellow color), normal (in blue color), overweight (in orange color) and obesity (in red color).
                 This is designed using HTML5, CSS3, JavaScript.</p>
                <button><Link to = "https://project-bmi-cal-2.vercel.app/" > View Project </Link></button>  
            </div>
            <div className={classes.image}>
                <img className={classes.proImg} src = {bmi} alt = "bmi" />
            </div>
        </div>

        <div className={classes.project}>
            <div className={classes.image}>
                <img className={classes.proImg} src = {rps} alt = "rock paper scissors"/>
            </div>
            <div className={classes.content}>
                <h1 className={classes.proName}>PAPER ROCK SCISSORS GAME</h1>
                <p>This rock paper scissors game provide a fun engaging experience for users to play the classic
                hand game against a computer opponent digitally. User make their choice by selecting rock, paper or scissors, 
                user choice and computer choice displays including the score of the user and computer. This is designed using HTML5, CSS3, JavaScript.</p>
                <button><Link to = "https://project-rps.vercel.app/" > View Project </Link></button>  
            </div>
        </div>

        <div className={classes.project}>
        <div className={classes.content}>
            <h1 className={classes.proName}>AGE CALCULATOR</h1>
            <p>This age calculator computes age in terms of days, weeks, months and years. users are required to
            input their date of birth, then their age displays. This is designed using HTML5, CSS3, JavaScript.</p>
            <button><Link to = "https://project-age-cal.vercel.app/" > View Project </Link></button>  
        </div>

        <div className={classes.image}>
            <img className={classes.proimg} src = {agecal} alt = "age calculator"/>

        </div>
    </div>  

    </div>
  )
}

export default Project