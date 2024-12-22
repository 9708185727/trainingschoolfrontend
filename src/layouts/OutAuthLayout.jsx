import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import { HOME_ROUTE } from '../contants/ListUrl'
const UnAuthLayout = () => {
    const {user} = useSelector((state)=>state.auth)
  return  <> {user?<Navigate to={HOME_ROUTE}/>:<Outlet/> } </>
  
}

export default UnAuthLayout