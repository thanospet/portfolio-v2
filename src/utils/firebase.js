// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS1qOw6Q1XYEdxA3fcyinc5k45QX__b0w",
  authDomain: "agp-portfolio.firebaseapp.com",
  projectId: "agp-portfolio",
  storageBucket: "agp-portfolio.appspot.com",
  messagingSenderId: "774632528425",
  appId: "1:774632528425:web:4a96177bbdecf6d47f9a38",
  measurementId: "G-Z8G2JVLNET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("app", app);

// const analytics = getAnalytics(app);
export const auth = getAuth();

export const db = getFirestore(app);
