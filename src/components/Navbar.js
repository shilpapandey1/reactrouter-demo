import React from 'react'
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  const navLinkStyles=({isActive})=>{
  return {
      fontWeight: isActive ? 'Bold' : 'normal',
      textDecoration :isActive ? 'none' : 'underline',
  }
  }
  return(
    <nav className='primary-nav'>
        <NavLink style={navLinkStyles} to='/'> Home </NavLink>
        <NavLink style={navLinkStyles} to='/about'> About </NavLink>
        <NavLink style={navLinkStyles} to='/product'> Products </NavLink>
    </nav>
  )
  }
