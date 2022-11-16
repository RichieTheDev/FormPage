import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";

const Dashboard = () => {
  const Navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  if (loading) return <p>Loading...</p>;
  if (!user) return Navigate("/");
  if (user)
    return (
      <div className="mx-auto p-10 text-center">
        <p className="text-black font-bold text-4xl">
          Welome {user.displayName}
        </p>
        <p className="italic text-lg font-medium">
          Enjoy unlimited Benifits here
        </p>
        <button
          onClick={() => auth.signOut()}
          className="rounded-xl  py-2 px-4 bg-black font-bold text-white hover:bg-amber-500"
        >
          LOG OUT
        </button>
      </div>
    );
};

export default Dashboard;
