import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../utils/api'
import { UserContext } from '../context/User'



export const Users = () => {
    const [users, setUsers]= useState([])
    
    const {setLoggedInUser} = useContext(UserContext)


useEffect(()=>{
    getUsers().then(({users})=>{
        setUsers(users)
        
    })
},[])




  return (
   <section>
    <ul>
        {users.map((user)=>{
           return <li key={user.username}>
               <img src={user.avatar_url} alt='Users avatar'/>
                <p>   {user.username} </p>
                <button onClick={()=> setLoggedInUser(user)}>Log in</button>
            </li>
        })}
    </ul>
   </section>

  )
}
export default Users