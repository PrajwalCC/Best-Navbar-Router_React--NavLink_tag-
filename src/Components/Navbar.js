import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <h1>React Router Dom</h1>
        <div className='navlink' >
            <NavLink activeClassName="active" className="link" to="/" >Home</NavLink>
            <NavLink activeClassName="active" className="link" to="/about" >About</NavLink>
        </div>
    </div>
  )
}

export default Navbar