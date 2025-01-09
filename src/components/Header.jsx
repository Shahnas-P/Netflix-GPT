import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  //onAuthStateChanged API to check auth in browser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const { displayName, email, uid, photoURL } = user;

        //Dispatch an action to add user object into redux store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out - Dispatch an action to remove user object from redux store
        dispatch(removeUser());
        console.log("I'm Signed Out");
        navigate("/");
      }
    });

    //Unsubcribe onAuthStateChanged call back when the component unmounted.
    return ()=>{
      //call the function which remove the onAuthStateChanged callback from the browser.
      unsubscribe()
    }
  }, []);

  return (
    <>
      <div className="w-screen absolute flex   ">
        <div className="w-1/4  flex justify-center">
          <img className="w-44 h-20  z-50   " src={LOGO} alt="logo" />
        </div>
        {user && (
          <div className="w-3/4  p-4 flex items-center justify-end ">
            <img
              src={user.photoURL}
              className="z-50 px-3 w-16 h-8 rounded-xl"
            />

            <button
              onClick={handleSignOut}
              className="z-50  text-white text-end border border-white"
            >
              Log-out
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
