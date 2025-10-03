import React from 'react'
import { LOGO } from '../../shared/utils/constant'

const Header = () => {
  return (
    <div className=' w-screen bg-gradient-to-b from-black p-2 ' >
      <img className='w-44'  src={LOGO} alt='LOGO'/>
    </div>
  )
}

export default Header
