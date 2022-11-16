import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const Navigate = useNavigate();
  const GoogleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      Navigate("/Dashboard");
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-20 shadow-2xl bg-slate-200 md:mx-10 rounded-3xl">
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="w-full text-center text-4xl font-bold">Weclome !</h1>

        <button
          onClick={() => {
            Navigate("/Dashboard");
            GoogleLogin();
          }}
          className="w-fit hover:bg-teal-700 font-medium rounded-3xl bg-stone-800 mt-3 text-stone-100 py-2 px-4 flex items-center text-xl"
        >
          <FcGoogle size={30} />
          Sign In with Google
        </button>
        <button className="w-fit hover:bg-teal-700 font-medium rounded-3xl mt-2 bg-stone-800 text-stone-100 py-2 px-4 flex items-center text-xl">
          <AiFillFacebook size={30} />
          Sign In with FaceBook
        </button>
      </div>
    </div>
  );
};

export default SignIn;
