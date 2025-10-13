import React from 'react'
import { LOGO, USER_AVATAR } from '../../shared/utils/constant'
import {auth} from '../../shared/utils/firebase.config'
import { useNavigate } from 'react-router-dom'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../auth/authSlice';
const Header = () => {
  const navigate = useNavigate('/')
  const dispatch = useDispatch()
  const user = useSelector((store)=>store?.user)
  
  const handleSignOut = ()=>{
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in 
        const {uid,displayName,email} = user;
        dispatch(addUser({uid:uid,displayName:displayName,email:email ,photoURL:USER_AVATAR}))
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    });
    return ()=> unsubscribe()
  },[])

  return (
    <div className=' w-screen bg-gradient-to-b from-black p-2 flex justify-between items-center ' >
      <img className='w-44'  src={LOGO} alt='LOGO'/>

      {user && (
         <div className='flex gap-2'>
      <img  src={user?.photoURL} />
      <button onClick={handleSignOut} className='mr-7 px-3 py-1 bg-white rounded-lg border font-medium '>Log out</button>
      </div>
      )}
     
    </div>
  )
}

export default Header
