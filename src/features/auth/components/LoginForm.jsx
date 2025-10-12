import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { checkValidData } from '../../../shared/utils/validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from '../../../shared/utils/firebase.config';
import { useNavigate } from 'react-router-dom';
import { USER_AVATAR } from '../../../shared/utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from '../authSlice';

const LoginForm = () => {

  const [isSignInForm,setIsSignInForm] = useState(true)
  const dispatch   = useDispatch()
  const email = useRef(null)
  const password = useRef(null)
  const fullName = useRef(null)
  const [error,setError] = useState(null)
  const navigate = useNavigate()
  
  const handleSignupForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  const handleSubmit = () => {
    const errorMessage = checkValidData(email.current.value, password.current.value);
    setError(errorMessage);
    if (errorMessage) return null;

    if (!isSignInForm) {
      //sign Up
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const {uid,email,displayName,} = auth.currentUser
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:USER_AVATAR}))
            })
            .catch((error) => {
              setError(error.message)
            });
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    } else {
      //sign In
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + error.message)
        });
    }
  };
  return (
    <div className='bg-black/80 text-white absolute p-3 px-4 w-2/3 md:w-3/12 md:p-11 '>
      <form onSubmit={(e)=>e.preventDefault()} >
      <h1 className='text-xl font-semibold py-3 md:text-2xl'>
        {isSignInForm ? "Sign In" : "Sign Up" }
      </h1>
      <div className='flex flex-col gap-2 '>
      {!isSignInForm &&   <input  ref={fullName} type='text' placeholder='Full Name' className='p-2 outline-none placeholder-gray-400  bg-gray-800 text-white rounded-sm' />}
      <input ref={email} type='text' placeholder='Email Address' className='p-2 outline-none placeholder-gray-400  bg-gray-800 text-white rounded-sm'/>
      <input ref={password} type='password' placeholder='Password' className='p-2 outline-none placeholder-gray-400  bg-gray-800 text-white rounded-sm'/>
      <p className='text-sm text-red-700'>{error}</p>
      <button  onClick={()=>handleSubmit()} className='bg-red-600 p-2 text-sm mt-3 rounded-sm' >{isSignInForm ? "Sign In" : "Sign Up" }</button>
      </div>
      <p className='text-gray-400 text-sm my-2 '>{isSignInForm?"New to Netflix ?":"Already a user ?"} <span onClick={handleSignupForm} className='text-white font-medium cursor-pointer'>{isSignInForm?"Sign Up":"Sign In"} </span>now.</p>
      </form>
    </div>
  )
}

export default LoginForm 
