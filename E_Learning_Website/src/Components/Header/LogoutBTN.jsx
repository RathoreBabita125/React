import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../Store/AuthSlice'

function LogoutBTN() {
    const dispatch=useDispatch();

    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch.logout()
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default LogoutBTN
