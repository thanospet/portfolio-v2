import { useState, useReducer } from "react";
import AuthContext from "./auth-context";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const defaultAuthState = {
  isLoggedIn: false,
  authToken: null,
  firstName: null,
  lastName: null,
  isLoading: false,
  error: null,
  registerSuccess: false,
  loginSuccess: false,
};

const link = "http://localhost:7160/";

const authReducer = (state, action) => {
  if (action.type === "SIGN_IN_INIT") {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  }

  if (action.type === "SIGN_IN_FAILURE") {
    return {
      ...state,
      isLoading: false,
      error: action.item,
    };
  }

  if (action.type === "SIGN_IN_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      loginSuccess: true,
      firstName: action.item.userFirstName,
      lastName: action.item.userLastName,
      authToken: action.item.token,
      isLoggedIn: true,
      registerSuccess: false,
    };
  }

  //=======================

  if (action.type === "USER_LOGOUT") {
    return (state = defaultAuthState);
  }

  return defaultAuthState;
};

const AuthProvider = (props) => {
  const [authState, dispatchAuthAction] = useReducer(
    authReducer,
    defaultAuthState
  );

  const checkUserAuthentication = async (email, password) => {
    // Init sign-in
    dispatchAuthAction({ type: "SIGN_IN_INIT" });

    // Init sign-in request
    try {
      // TODO: Send `email` & `password` to API
      // Fake
      const payload = {
        email: email,
        password: password,
      };

      const res = await axios.post(
        "http://localhost:7160/api/auth/register/login",
        payload
      );
      console.log("LOGIN RESPONSE", res.data.item);
      dispatchAuthAction({ type: "SIGN_IN_SUCCESS", item: res.data.item });
    } catch (error) {
      console.error(error);
      toast("Failed to login", {
        duration: 2000,
        type: "error",
      });

      dispatchAuthAction({ type: "SIGN_IN_FAILURE", item: "Sign-in failed!" });
    }
  };

  const userLogout = () => {
    console.log("USER_LOGOUT");
    dispatchAuthAction({ type: "USER_LOGOUT" });
  };

  const authContext = {
    ...authState,
    checkAuthentication: checkUserAuthentication,
    onLogout: userLogout,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
