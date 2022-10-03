import React, { useContext } from 'react'
import { UserContext } from '../context/User'

const Header = () => {
const {loggedInUser} =useContext(UserContext)
  return (
    <section>

      <h1>NC Games</h1>

      <img src={loggedInUser.avatar_url}
      alt={` portrait of ${loggedInUser.username}`}/>
    <p > {loggedInUser.username}</p>
    </section>
  )
}

export default Header