import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({currentUser, setCurrentUser}) => {

  function handleClick() {
    fetch("/logout", {method: "DELETE"})
    setCurrentUser()
  }
  return (
    <div>
    <ul className='navbar'>
        <li className='navbar-li'><NavLink to="/">Home</NavLink></li>
        <li className='navbar-li'><NavLink to="/concerts">Create a Concert</NavLink></li>
        <li className='navbar-li'><NavLink to="/artists">View Artists</NavLink></li>
        <li className='navbar-li' style={{float: "right"}}><NavLink to="/signup">SignUp</NavLink></li>
        { currentUser ? <li onClick={handleClick} style={{float: "right"}} className='li'><NavLink to="/">Logout</NavLink></li> : <li style={{float: "right"}} className='li'><NavLink to="/login">Login</NavLink></li>}
        <li className='logo'>Liveify</li>
    </ul>
    </div>
  )
}

export default NavBar