import React from 'react'
import {RouterProvider } from 'react-router-dom'
import { appRouter } from '../../app/.router'


const Body = () => {
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
