import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul className='navbar'>
        <li className='li'><NavLink to="/">Home</NavLink></li>
        <li className='li'><NavLink to="/artists">Create a Concert</NavLink></li>
        <li className='li'><NavLink to="/concerts">View Artists</NavLink></li>
        <li className='li'><NavLink to="/users">Login</NavLink></li>
        <li className='li'><NavLink to="/signup">SignUp</NavLink></li>
    </ul>
  )
}

export default NavBar