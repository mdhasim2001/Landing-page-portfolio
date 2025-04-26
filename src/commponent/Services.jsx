import { motion } from "motion/react";

export const Services = () => {
  return (
    <div id="services" className="pt-24 overflow-hidden">
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
        services
      </motion.h1>

      <div className="lg:w-4/5 lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="px-5 py-10 shadow-lg shadow-gray-800 rounded-lg"
        >
          <h1 className="text-xl mb-3 uppercase text-center ">
            Web Development
          </h1>
          <div className="text-[14px] flex flex-col items-center justify-center">
            <ul className="">
              <li className="list-disc">Responsive Web Design </li>
              <li className="list-disc">Frontend Development</li>
              <li className="list-disc">Backend Development</li>
              <li className="list-disc">Full-Stack Development</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="px-5 py-10 shadow-lg shadow-gray-800 rounded-lg"
        >
          <h1 className="text-xl mb-3 uppercase text-center ">
            Specialized Services
          </h1>
          <div className="text-[14px] flex flex-col items-center justify-center">
            <ul className="">
              <li className="list-disc">E-Commerce Development </li>
              <li className="list-disc">Web App Development </li>
              <li className="list-disc">API Integration</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="px-5 py-10 shadow-lg shadow-gray-800 rounded-lg"
        >
          <h1 className="text-xl mb-3 uppercase text-center ">
            Performance & Optimization
          </h1>
          <div className="text-[14px] flex flex-col items-center justify-center">
            <ul className="">
              <li className="list-disc">Website Speed Optimization </li>
              <li className="list-disc">SEO-Friendly Development</li>
              <li className="list-disc">Web Accessibility (WCAG)</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="px-5 py-10 shadow-lg shadow-gray-800 rounded-lg"
        >
          <h1 className="text-xl mb-3 uppercase text-center ">
            Maintenance & Support
          </h1>
          <div className="text-[14px] flex flex-col items-center justify-center">
            <ul className="">
              <li className="list-disc">Website Hosting & Deployment</li>
              <li className="list-disc">Ongoing Maintenance</li>
              <li className="list-disc">Bug Fixes & Troubleshooting </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
