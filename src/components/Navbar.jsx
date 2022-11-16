import React from "react";
import Logo from "../assets/Logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/Firebase";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <Link to="/">
          <img src={Logo} alt="/" />
        </Link>
        {!user && (
          <Link to="/SignUp">
            <button className="ml-auto font-medium rounded-lg py-2 px-4 hover:bg-amber-500 bg-teal-700 text-lg text-teal-50">
              Sign Up
            </button>
          </Link>
        )}
        {user && (
          <Link to="/Dashboard">
            <div>
              <img
                className="w-12 rounded-full"
                src={user.photoURL}
                alt="avatar"
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
