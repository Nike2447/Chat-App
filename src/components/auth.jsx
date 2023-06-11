import React from "react";
import { auth, provider } from "../firebase-config.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();
export const Auth = (props) => {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className=" font-bold text-4xl mt-10">Chat App</h1>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className=" bg-stone-100 shadow-xl p-20 rounded-xl text-center">
          <h1 className="font-bold text-3xl text-center">Sign In</h1>
          <p className="py-10 ">Sign in with Google to continue</p>
          <button
            onClick={signInWithGoogle}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};
