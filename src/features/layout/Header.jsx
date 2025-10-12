import React from 'react'
import { LOGO, USER_AVATAR } from '../../shared/utils/constant'
import {auth} from '../../shared/utils/firebase.config'
import { useNavigate } from 'react-router-dom'
import {signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate('/')
  const user = useSelector((store)=>store?.user)
  
  const handleSignOut = ()=>{
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
