import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const navbar = () => {
  return (
    <div className='link'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/services'>Services</Link>
    </div>
  )
}

export default navbar