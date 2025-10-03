import React from 'react'
import Header from '../../layout/Header'
import { BG_URL } from '../../../shared/utils/constant'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <div>
      <div className='absolute'>
        <Header/>
      </div>
      <div className='h-screen w-screen bg-cover  bg-center bg-no-repeat flex justify-center items-center' style={{backgroundImage:`url(${BG_URL})`}}>
        <LoginForm/>
      </div>

    </div>

  )
}

export default Login
