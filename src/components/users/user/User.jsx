import React from 'react'
import "./user.css"
import axios from 'axios'

const User = () => {
    const fetchAsync = async () => {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users')
        let users = await res.json()
    }
  return (
    <>
        
      
    </>
  )
}

export default User
