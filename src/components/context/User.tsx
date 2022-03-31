import React, { useContext } from 'react'
import { PropsUserContext } from './UserContext'

const User = () => {
  const userContext = useContext(PropsUserContext)
  const handleLogin = () => {

  }
  const handleLogout = () => {
      
  }
  return (
    <div>
        <button
        onClick={handleLogin}
        >Login</button>
        <button
        onClick={handleLogout}
        >Logout</button>

    </div>
  )
}

export default User