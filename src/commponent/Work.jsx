import { motion } from "motion/react";
import travel from "../assets/traveling.jpg";
import restaurant from "../assets/restaurant.jpg";
import office from "../assets/office.jpg";

export const Work = () => {
  return (
    <div id="work" className="mt-10 pt-24 overflow-hidden">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-center text-6xl lg:text-8xl font-medium uppercase bg-gradient-to-r from-red-500 to-blue-400 text-transparent bg-clip-text"
      >
        my portfolio
      </motion.h1>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        <h1 className="logo-font mt-5 text-center text-2xl">My Letes Work</h1>
        <p className="lg:w-4/6 mx-auto md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aut
          provident voluptate iusto rerum modi ratione hic quo laboriosam
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="shadow-lg shadow-gray-800 p-5"
        >
          <img src={restaurant} className="w-full h-[150px] mb-5" alt="" />
          <h1 className="text-xl font-medium">Titel</h1>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            cupiditate quo provident omnis, dolorem libero sed
          </p>
          <div className="flex items-center justify-between mt-5">
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-blue-500 px-3 bg-opacity-30 font-bold rounded-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-blue-500 px-3 font-bold rounded-sm"
            >
              Live
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="shadow-lg shadow-gray-800 p-5"
        >
          <img src={office} className="w-full h-[150px] mb-5" alt="" />
          <h1 className="text-xl font-medium">Titel</h1>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            cupiditate quo provident omnis, dolorem libero sed
          </p>
          <div className="flex items-center justify-between mt-5">
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-blue-500 px-3 bg-opacity-30 font-bold rounded-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-blue-500 px-3 font-bold rounded-sm"
            >
              Live
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="shadow-lg shadow-gray-800 p-5"
        >
          <img src={travel} className="w-full h-[150px] mb-5" alt="" />
          <h1 className="text-xl font-medium">Titel</h1>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            cupiditate quo provident omnis, dolorem libero sed
          </p>
          <div className="flex items-center justify-between mt-5">
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-blue-500 px-3 bg-opacity-30 font-bold rounded-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-red-500 to-blue-500 px-3 font-bold rounded-sm"
            >
              Live
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
