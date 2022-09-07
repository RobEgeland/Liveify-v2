import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({currentUser, setCurrentUser}) => {

  function handleClick() {
    fetch("/logout", {method: "DELETE"})
    setCurrentUser()
  }
  return (
    <ul className='navbar'>
        <li className='li'><NavLink to="/">Home</NavLink></li>
        <li className='li'><NavLink to="/artists">Create a Concert</NavLink></li>
        <li className='li'><NavLink to="/concerts">View Artists</NavLink></li>
        <li className='li'><NavLink to="/signup">SignUp</NavLink></li>
        { currentUser ? <li onClick={handleClick} style={{float: "right"}} className='li'><NavLink to="/">Logout</NavLink></li> : <li style={{float: "right"}} className='li'><NavLink to="/login">Login</NavLink></li>}
    </ul>
  )
}

export default NavBar