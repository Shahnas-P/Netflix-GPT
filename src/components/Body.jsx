import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = ()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
const {displayName,email,uid , photoURL}=user
        //Dispatch an action to add user object into redux store
        
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
       
        // ...
      } else {
        // User is signed out - Dispatch an action to remove user object from redux store
        dispatch(removeUser())
        console.log("I'm Signed Out");
        
        // ...
      }
    });
  },[])

    const appRouter = createBrowserRouter([
        { path: "/", element: <Login/> },
        {
          path: "/browse",
          element: <Browse/>,
        },
      ]);
      return <RouterProvider router={appRouter} />;
}
export default Body;