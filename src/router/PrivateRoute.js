import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const PrivateRoute = () => {

  const { auth } = useContext( AuthContext );
 
  return(
    auth.logged ? <Outlet /> : <Navigate to="/login" />
  )
}
