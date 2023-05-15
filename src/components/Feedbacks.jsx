import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "firebase/auth";
import "firebase/analytics";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import SignUpButton from "./SignUpButton";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../utils/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const FeedbackCard = ({ name, message, userIcon, userEmail }) => (
  <>
    
    <motion.div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
      <p className="text-white font-black text-[48px]">"</p>
      <p className="text-white font-black text-[22px]">{message}</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]"></p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{" "}
              {name !== null ? name : "Anonymus 👻"}{" "}
            </p>
          </div>

          <img
            src={userIcon}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  </>
);

const FeedbackCardSignIn = ({ user, onGetTestimonials }) => {
  const [text, setText] = useState(" ");
  const [userName, setUserName] = useState("");
  const [userIcon, setUserIcon] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setUserName(user?.displayName);
    setUserIcon(user?.photoURL);
    setUserEmail(user?.email);
  }, []);

  const testimonialsCollectionRef = collection(db, "testimonials");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
  console.log("text", text);
  console.log("user", user);
    try {
      await addDoc(testimonialsCollectionRef, {
        message: text,
        name: userName,
        userIcon: userIcon,
      })
      toast.error("Successfully submitted !");
      onGetTestimonials();
      auth.signOut();
    } catch (err) {
      toast.error("Something went wrong. Please refresh the page.");
      console.error(err);
    }
    console.log("SEND", text);
  };


  return (
    <motion.div
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      
      {!user ? (
        <p className="text-white font-black text-[22px]">
          Are you a friend? A colleague? Sign in and comment on my work!
        </p>
      ) : (
        <>
        <Toaster position="bottom-right"/>
          <p className="text-white font-black text-[48px]">"</p>
          <form onSubmit={handleSubmit} className="p-4 rounded-l">
            <textarea
              id="message"
              rows="6"
              class="block p-3.5 w-full resize-none text-sm rounded-md"
              placeholder="Write here !"
              onChange={handleTextChange}
            ></textarea>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold my-2 px-4 rounded"
            >
              Post!
            </button>
          </form>
        </>
      )}

      <div className="mt-1">

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <SignUpButton />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const [user, loading] = useAuthState(auth);
  const [testimonials, setTestominals] = useState([]);

  const testimonialsCollectionRef = collection(db, "testimonials");

  const getTestimonials = async () => {
    console.log("run");
    try {
      const data = await getDocs(testimonialsCollectionRef);

      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log("filteredData", filteredData);
      setTestominals(filteredData);
    } catch (err) {}
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials?.map((testimonial, index) => (
          <FeedbackCard key={index} index={index} {...testimonial} />
        ))}

        <FeedbackCardSignIn
          onGetTestimonials={getTestimonials}
          key={testimonials.length + 1}
          user={user}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
