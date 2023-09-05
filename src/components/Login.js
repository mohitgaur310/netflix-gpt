import React, { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_IMG } from "../utils/Constants";
import { checkPasswordValidation , checkEmailValidation } from "../utils/validate";
const Login = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [errorMessage,setErrorMessage]=useState(null)
  const [errorPassMessage,setErrorPassMessage]=useState(null)
  const name=useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const handleClick = (e) => {
    let message = checkEmailValidation(email.current.value);
    let messagePass=checkPasswordValidation(password.current.value)
    e.preventDefault();
    setErrorPassMessage(messagePass);
    setErrorMessage(message)
  };
  const toggleSignUP = () => {
    setSignUp(!isSignUp);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_IMG} alt="login-img" />
      </div>
      <form className=" text-white w-3/12 my-36 mx-auto left-0 right-0  absolute p-12 bg-black bg-opacity-80">
        <h1 className="  font-bold text-3xl mb-3">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <>
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg "
          />
          </>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg "
        />
        <span className="font-thin p-2 text-red-500">{errorMessage}</span>
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4  my-2 w-full bg-gray-700  rounded-lg"
        />
        <span className=" font-thin p-2 text-red-500">{errorPassMessage}</span>
        <button
          className=" py-4 my-4  w-full bg-red-700 rounded-lg"
          onClick={handleClick}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignUP}>
          {!isSignUp
            ? "New to Netflix? Sign Up Now"
            : "Already Registered! Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
