import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ProgressBar from "./Progressbar";

const ServiceCard = (
  { service, index } //here i did props my way, for practice
) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "just ", index * 0.5, 0.8)} //the index of every card, defines its slow entrance from left to right
      className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={service.icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
        <ProgressBar skill={service.skill} />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Frontend Developer. I studied Computer Science and my thesis is on
        Drone detection with machine learning. I started Frontend development in
        my internship and this is my progress so far.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-12">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} /> //Here are the cards, mt scales by 4,flex-wrap > flex row gia mobile friendly
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
