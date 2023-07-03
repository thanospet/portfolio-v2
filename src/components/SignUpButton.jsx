import React from "react";
import { useState } from "react";
import { github } from "../assets";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import CanvasLoader from "./Loader";


const SignUpButton = () => {
  const [user, loading] = useAuthState(auth);
  const [testimonial, setTestimonial] = useState({
    userName: "",
    message: "",
    icon: null,
  });

  const githubProvider = new GithubAuthProvider();

  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log("result", result.user.displayName);
      setCurrentUser(user.displayName);
    } catch (error) {
      console.log(error);
      setCurrentUser({});
    }
  };

  const onLogout = () => {};

  return (
    <div>
      <>
        {!user && (
          <button onClick={signInWithGithub} className="flex justify-center">
            <p className="flex justify-center mt-3 font-bold mr-2">
              Sign in with GitHub{" "}
            </p>
            <img
              src={github}
              alt="Sign in with Github"
              style={{ maxWidth: "50px", cursor: "pointer" }}
            />
          </button>
        )}
        {user && (
          <div className="flex">
            {" "}
            <span>
              <img
                src={user.photoURL}
                alt="User Image"
                style={{
                  maxWidth: "50px",
                  cursor: "pointer",
                  borderRadius: "100%",
                }}
              />
            </span>
            <p className="font-bold mt-3 ml-3">{user.displayName}</p>
            {loading ? (
              <CanvasLoader />
            ) : (
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="w-20 font-bold"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </>
    </div>
  );
};

export default SignUpButton;
