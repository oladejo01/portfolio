import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import Logo from './Logo'


const Navbar = () => {
  return (
    <div>
        <div className= {classes.container}>
        <Logo/>
        <ul className={classes.ul}>
        <li className={classes.ul}> 
        <Link a = "/about">About</Link> </li>
        <li><Link a = "/project">Project</Link></li>
        <li><Link a = "/contact">Contact</Link></li>
  
    </ul></div>
    </div>
  )
}

export default Navbar