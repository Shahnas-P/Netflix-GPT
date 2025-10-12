import React from 'react'
import {RouterProvider } from 'react-router-dom'
import { appRouter } from '../../app/.router'
import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../shared/utils/firebase.config';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../auth/authSlice';
import { USER_AVATAR } from '../../shared/utils/constant';

const Body = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in 
        const {uid,displayName,email} = user;
        dispatch(addUser({uid:uid,displayName:displayName,email:email ,photoURL:USER_AVATAR}))
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  },[])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
