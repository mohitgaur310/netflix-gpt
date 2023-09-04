import React, { useState } from "react";
import Header from "./Header";
import { LOGIN_IMG } from "../utils/Constants";

const Login = () => {
  const [isSignUp, setSignUp] = useState(false);

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
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg "
        />
        <input
          type="password"
          placeholder="Password "
          className="p-4  my-2 w-full bg-gray-700  rounded-lg"
        />
        {isSignUp && (
          <input
            type="text"
            placeholder="Country Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg "
          />
        )}        
        <button className=" py-4 my-4  w-full bg-red-700 rounded-lg">
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
