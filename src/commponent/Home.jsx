import React from "react";
import { motion } from "motion/react";
import img from "../assets/img.png";

export const Home = () => {
  return (
    <div id="home" className=" flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-7xl font-medium lg:text-8xl my-5 bg-gradient-to-t from-red-500 to-blue-400 text-transparent bg-clip-text"
        >
          Frontend Web Developer Based in Bangladesh
        </motion.h2>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex items-center justify-center gap-5"
        >
          <img src={img} alt="" />
        </motion.div>
      </div>
    </div>
  );
};
