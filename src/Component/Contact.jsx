import React from 'react'
import classes from "./contact.module.css"
import {TfiLinkedin} from "react-icons/tfi"
import {AiOutlineMail} from "react-icons/ai"
import {TfiTwitterAlt} from "react-icons/tfi"
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className={classes.wrap}>  
        <div className={classes.link}>
          <Link to = "https://www.linkedin.com/in/mariam-oladejo-23b80a1a6"> <TfiLinkedin className = {classes.icon} /> </Link>
          <Link to = "dtnoladejo@gmail.com"><AiOutlineMail className = {classes.icon} /> </Link>
          <Link to = "twitter.com/Mariam_RDN"><TfiTwitterAlt className = {classes.icon} /></Link>
        </div>
        <div className={classes.name}>Oladejo Mariam 2023</div>
    </div>
  )
}

export default Contact