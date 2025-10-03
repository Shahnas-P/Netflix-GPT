import React from 'react'

const LoginForm = () => {
  return (
    <div className='bg-black/80 text-white absolute p-3 px-4 w-2/3 md:w-3/12 md:p-11 '>
      <form >
      <h1 className='text-xl font-semibold py-3 md:text-2xl'>
        Sign In
      </h1>
      <div className='flex flex-col gap-2 '>
    <input type='email' placeholder='Email Address' className='p-2 outline-none placeholder-gray-400  bg-gray-800 text-white rounded-sm'/>
      <input type='password' placeholder='Password' className='p-2 outline-none placeholder-gray-400  bg-gray-800 text-white rounded-sm'/>
      <button className='bg-red-600 p-2 text-sm mt-3 rounded-sm' >Sign In</button>
      </div>
      
      <p className='text-gray-400 text-sm my-2 '>New to Netflix ? <span className='text-white font-medium'>Sign Up now.</span></p>
      </form>
    </div>
  )
}

export default LoginForm 
