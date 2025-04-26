import { motion } from "motion/react";

export const Navbar = () => {
  return (
    <div className="sticky top-5 z-50">
      {/* navbar  */}
      <nav className=" flex items-center justify-center ">
        <motion.ul
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className={`border text-black font-medium bg-gradient-to-r from-red-300 via-green-300 to-blue-300 flex items-center justify-center gap-3 md:gap-10 px-4 md:px-16 py-2 md:py-3 rounded-full uppercase `}
        >
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            {/* <NavLink to="#about">about</NavLink> */}
            <a href="#about">about</a>
          </li>
          <li>
            {/* <NavLink>services</NavLink> */}
            <a href="#services">services</a>
          </li>
          <li>
            {/* <NavLink>work</NavLink> */}
            <a href="#work">work</a>
          </li>
          <li>
            {/* <NavLink>work</NavLink> */}
            <a href="#contact">contact</a>
          </li>
        </motion.ul>
      </nav>
    </div>
  );
};
