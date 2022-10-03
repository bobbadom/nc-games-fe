import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => {


  return (
    <section><h2><Link to={'/'}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to={'/reviews'}>Reviews</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </h2> <h2><Link to={'/users'}>Users</Link></h2>

    <></></section>
  )
}

export default NavBar
