import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Header />
      <div className="w-screen h-screen bg-black absolute opacity-45 rounded-md"></div>

      <img
        className="w-screen h-screen  "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
      />
      {/* Login Form */}
      <form className="w-96   bg-black text-white absolute top-24 left-0 right-0 m-auto opacity-75 p-10">
        <p className="text-3xl font-bold my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </p>
        {!isSignIn && (
          <input
            className="w-full h-14 bg-transparent border border-gray-600 mt-2 pl-3 text-white placeholder-gray-100 rounded-md "
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          className="w-full h-14 bg-transparent border border-gray-600 my-4 pl-3 text-white placeholder-gray-100 rounded-md "
          type="text"
          placeholder="Email"
        />
        <input
          className="w-full h-14 bg-transparent border border-gray-600  pl-3 text-white placeholder-gray-100 rounded-md "
          type="password"
          placeholder="Password"
        />
        <button className="w-full h-10  my-4  pl-3 text-white  bg-red-600 rounded-md">
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
