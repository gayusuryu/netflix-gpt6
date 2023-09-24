import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const [errorMessage,setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const name = useRef('');
  const confirmPassword = useRef('');

  const handleButtonClick = () => {
    //Validate form
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(name.current.value);
    console.log(confirmPassword.current.value);
    const message = checkValidData(email.current.value, password.current.value,name?.current.value,confirmPassword?.current.value);
    setErrorMessage(message);

    //Sign In/Sign Up
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        {!isSignInForm && (
          <input ref={confirmPassword}
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-4 w-full  bg-gray-700"
          />
        )}
        <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full  bg-red-700 rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?Sign Up Now"
            : "Already Registered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
