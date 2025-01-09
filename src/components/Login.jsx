import Header from "./Header";
import { useRef, useState, useEffect } from "react";
import { checkValidate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
//import BG image from constants.js file
import { BG, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  //Adding new state varible for error count and error message to given error for specific field
  const [errorCount, setErrorCount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const resetInputField = () => {
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (fullName.current) fullName.current.value = "";
  };

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleOnClickBtn = () => {
    //Validate Input field

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const fullNameValue = isSignIn ? null : fullName?.current?.value;

    //We can get the validation error here
    const validationResult = checkValidate(
      emailValue,
      passwordValue,
      fullNameValue
    );
    if (validationResult) {
      setErrorCount(validationResult.count);
      setErrorMessage(validationResult.error);
      // console.log(errorCount);
      // console.log(errorMessage);
    } else {
      console.log("Validationis success");
      setErrorCount("");
      setErrorMessage("");

      if (!isSignIn) {
        //SignUp Logic'
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            //Update Profile

            updateProfile(user, {
              displayName: fullNameValue,
              photoURL:
                USER_AVATAR,
            })
              .then(() => {
                // Profile updated!
                const { displayName, email, uid, photoURL } = auth.currentUser;
                //Dispatch an action to add user object into redux store

                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );

                // alert("User registered Successfully");
                resetInputField();
              })
              .catch((error) => {
                // An error occurred
                setErrorCount(3);
                setErrorMessage(
                  error.message || "Somthing went wrong , try again."
                );
              });
            // resetInputField();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
            setErrorCount(3);
            setErrorMessage("User already exist, Try unique mail id");
          });
      } else {
        //SignIn Logic
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorCount(3);
            setErrorMessage("Invalid Credential");
          });

        resetInputField();
      }
    }
  };

  const handleBlur = () => {
    setErrorCount(0);
    setErrorMessage("");
  };
  return (
    <>
      <Header />
      <div className="w-screen h-screen bg-black absolute opacity-45 rounded-md"></div>

      <img className="w-screen h-screen  " src={BG} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-96   bg-black text-white absolute top-24 left-0 right-0 m-auto opacity-75 p-10"
      >
        <p className="text-3xl font-bold my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>

        {/* Only show the full Name input field if it is sign Up */}
        {!isSignIn && (
          <input
            ref={fullName}
            className="w-full h-14 bg-transparent border border-gray-600 mt-2 pl-3 text-white placeholder-gray-100 rounded-md "
            type="text"
            placeholder="Full Name"
            onBlur={handleBlur}
          />
        )}
        {!isSignIn && (
          <p className="text-red-700 pl-2 font-semibold text-sm">
            {errorCount === 1 && errorMessage}
          </p>
        )}

        {/* email input field  */}
        <div className=" my-4">
          <input
            ref={email}
            className="w-full h-14 bg-transparent border border-gray-600 pl-3 text-white placeholder-gray-100 rounded-md "
            type="text"
            placeholder="Email"
            onBlur={handleBlur}
          />
          <p className="text-red-700 pl-2 font-semibold text-sm">
            {errorCount === 2 && errorMessage}
          </p>
        </div>

        {/* password input field */}
        <div className=" my-4">
          <input
            ref={password}
            className="w-full h-14 bg-transparent border border-gray-600 pl-3 text-white placeholder-gray-100 rounded-md "
            placeholder="Password"
            onBlur={handleBlur}
            type="password"
          />
          <p className="text-red-700  font-semibold text-sm">
            {errorCount === 3 && errorMessage}
          </p>
        </div>
        <button
          onClick={handleOnClickBtn}
          className="w-full h-10  my-4  opacity-100 pl-3 text-white  bg-red-700 rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p>
          {isSignIn ? "New to New to Netflix?" : "Already Registered?"}{" "}
          <span
            onClick={handleSignInToggle}
            className="font-bold  cursor-pointer"
          >
            {isSignIn ? "Sign up now." : "Sign In now"}
          </span>
        </p>
      </form>
    </>
  );
};
export default Login;
