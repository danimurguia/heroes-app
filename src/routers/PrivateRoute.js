import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../auth/authContext'

export const PrivateRoute = ({children}) => {

  const {user} = useContext(AuthContext)

  return user.logged 
         ? children
         : <Navigate to='/login' />
}
