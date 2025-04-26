import { motion } from "motion/react";
import { FaLevelDownAlt } from "react-icons/fa";
import { FcRight } from "react-icons/fc";

export const About = () => {
  return (
    <div id="about" className="pt-24 overflow-hidden">
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
        className=" text-center text-6xl lg:text-8xl font-medium uppercase bg-gradient-to-r from-red-500 to-blue-400 text-transparent bg-clip-text"
      >
        ABOUT
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {/* myself  */}
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
          className="mb-5 lg:mb-0"
        >
          <h1 className="text-xl mb-5 uppercase font-medium flex items-center gap-2">
            Myself
            <FaLevelDownAlt className="text-white bg-gradient-to-b from-red-500 to-blue-400 py-1 rounded-sm" />
          </h1>
          <h1>Hi! I am MD Hasim</h1>
          <p>
            I am a fontend developer and a junior full stroke developer with 2
            years of experience on this platform. Maybe I can be a means to grow
            your business, so you can check out my protfolio and decide if I'm
            for you.
          </p>
          <div className="grid grid-cols-2 gap-1 text-[14px] mt-10">
            <div className="text-center shadow-lg p-1">
              <h1 className="text-xl font-bold">02+</h1>
              <p className="uppercase">years of experience</p>
            </div>
            <div className="text-center shadow-lg p-1">
              <h1 className=" text-xl font-bold ">20+</h1>
              <p className=" uppercase">projects completed</p>
            </div>
          </div>
        </motion.div>

        {/* skill  */}
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
          className=""
        >
          <h1 className="text-xl mb-5 uppercase font-medium flex items-center gap-2">
            skill
            <FaLevelDownAlt className="text-white bg-gradient-to-b from-red-500 to-blue-400 py-1 rounded-sm" />
          </h1>
          <div>
            <div className="grid grid-cols-8 items-center gap-2 mb-5">
              <h1 className="col-span-2 font-medium gap-2">Frontend</h1>
              <FcRight />
              <div className="col-span-5 text-[14px]">
                <p>HTML, CSS, JavaScript, React</p>
              </div>
            </div>
            <div className="grid grid-cols-8 items-center gap-2 mb-5">
              <h1 className="col-span-2 font-medium">Backend</h1>
              <FcRight />
              <div className="col-span-5 text-[14px]">
                <p>Node, Express</p>
              </div>
            </div>
            <div className="grid grid-cols-8 items-center gap-2 mb-5">
              <h1 className="col-span-2 font-medium">Databases</h1>
              <FcRight />
              <div className="col-span-5 text-[14px]">
                <p>MongoDB</p>
              </div>
            </div>
            <div className="grid grid-cols-8 items-center gap-2">
              <h1 className=" col-span-2 font-medium">Other</h1>
              <FcRight />
              <div className="col-span-5 text-[14px]">
                <p>Problem-Solving, Management, Productivity</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* education  */}
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
        >
          <h1 className="text-xl mb-5 uppercase font-medium flex items-center gap-2">
            education
            <FaLevelDownAlt className="text-white bg-gradient-to-b from-red-500 to-blue-400 py-1 rounded-sm" />
          </h1>
          <div>
            <div className="mb-5">
              <h1 className="font-medium mb-2">
                ( 2022-2023 ) Web Development Course
              </h1>
              <div className="italic text-[14px]">
                <p>Industry : Programing Here</p>
                <p>
                  Website :{" "}
                  <a
                    href="https://web.programming-hero.com/home"
                    className="text-blue-500 underline"
                  >
                    programing-here.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-medium mb-2">( 2022-2026 ) BA Honour</h1>
              <div className="italic text-[14px]">
                <p>University : Siddheshwari University</p>
                <p>
                  Website :{" "}
                  <a
                    className="text-blue-500 underline"
                    href="https://scd.edu.bd/scd/index.aspx"
                  >
                    scd.edu.bd
                  </a>
                </p>
                <p>Subject : Islamic History and Culture</p>
                <p>Study : Running</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
