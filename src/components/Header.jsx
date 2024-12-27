import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import {auth} from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
const Header = ()=>{
  const user = useSelector(store=>store.user)
  
  const navigate = useNavigate()
  
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }
    return(
        <>
 <div className="w-screen absolute flex   ">
        <div className="w-1/4  flex justify-center">
          <img
            className="w-44 h-20  z-50   "
            src={logo}
            alt='logo'
          />

        </div>
        {user && (
           <div className='w-3/4  p-4 flex items-center justify-end '>
           <img src={user.photoURL} className='z-50 px-3 w-16 h-8 rounded-xl' />
   
           <button onClick={handleSignOut} className='z-50  text-white text-end border border-white'>Log-out</button>
   
           </div>
        )}
       

      </div>        
      </>
    )
}
export default Header;