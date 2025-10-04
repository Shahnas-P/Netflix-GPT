import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { checkValidData } from '../../../shared/utils/validate'

const LoginForm = () => {

  const [isSignInForm,setIsSignInForm] = useState(true)
  const email = useRef(null)
  const password = useRef(null)
  const [error,setError] = useState(null)
  
  const handleSignupForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  const handleSubmit = ()=>{
    const errorMessage = checkValidData(email.current.value,password.current.value)
    setError(errorMessage);
   
  }
  return (
    <div className='bg-black/80 text-white absolute p-3 px-4 w-2/3 md:w-3/12 md:p-11 '>
      <form onSubmit={(e)=>e.preventDefault()} >
      <h1 className='text-xl font-semibold py-3 md:text-2xl'>
        {isSignInForm ? "Sign In" : "Sign Up" }
      </h1>
      <div className='flex flex-col gap-2 '>
      {!isSignInForm &&   <input type='text' placeholder='Full Name' className='p-2 outline-none placeholder-gray-400  bg-gray-800 text-white rounded-sm' />}
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
