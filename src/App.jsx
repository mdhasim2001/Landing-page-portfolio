import { useRef } from "react";
import img from "./assets/img.png";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLevelDownAlt,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9z73ftj", "template_sykyt5a", form.current, {
        publicKey: "s5qbTZI2PWUcOl1eJ",
      })
      .then(
        () => {
          toast.success("Successfully your message!");
        },
        (error) => {
          toast.error(error, "This didn't work.");
        }
      );
  };

  return (
    <div className="bg-black text-white text-opacity-60">
      <div className="mx-5 lg:w-4/5 pt-5 lg:mx-auto">
        <div className="sticky top-5 z-50">
          {/* navbar  */}
          <nav className=" flex items-center justify-center ">
            <ul
              className={`border text-black bg-gradient-to-r from-red-100 via-green-100 to-blue-100 flex items-center justify-center gap-5 lg:gap-10 px-5 lg:px-16 py-3 rounded-full uppercase `}
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
            </ul>
          </nav>
        </div>

        {/* banner */}
        <div id="home" className="h-[100vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <h2 className="text-7xl font-medium lg:text-8xl my-5 bg-gradient-to-t from-red-500 to-blue-400 text-transparent bg-clip-text">
              Frontend Web Developer Based in Bangladesh
            </h2>
            <div className="flex items-center justify-center mt-10 gap-5">
              <img src={img} alt="" />
            </div>
          </div>
        </div>

        {/* about section */}
        <div id="about" className="pt-24">
          <h1 className="text-center text-7xl lg:text-8xl font-medium uppercase bg-gradient-to-r from-red-500 to-blue-400 text-transparent bg-clip-text">
            ABOUT
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-10">
            <div className="mb-5 lg:mb-0">
              <h1 className="text-xl mb-5 uppercase font-medium flex items-center gap-2">
                Myselfe
                <FaLevelDownAlt className="text-white bg-gradient-to-b from-red-500 to-blue-400 py-1 rounded-sm" />
              </h1>
              <h1>Hi! I am MD Hasim</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates provident quasi soluta earum fuga iste aspernatur
                maxime? Excepturi fugit ipsam animi est vero ipsum sunt sint
                incidunt culpa quasi. Sunt.
              </p>
              <div className="grid grid-cols-2 gap-1 text-[14px] mt-10">
                <div className="text-center shadow-lg p-1">
                  <h1 className="text-xl font-bold">02+</h1>
                  <p className="uppercase">years of experience</p>
                </div>
                <div className="text-center shadow-lg p-1">
                  <h1 className=" text-xl font-bold">20+</h1>
                  <p className=" uppercase">projects completed</p>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-xl mb-5 uppercase font-medium flex items-center gap-2">
                skill
                <FaLevelDownAlt className="text-white bg-gradient-to-b from-red-500 to-blue-400 py-1 rounded-sm" />
              </h1>
            </div>
            <div>
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
            </div>
          </div>
        </div>

        {/* services  */}
        <div id="services" className="pt-24">
          <h1 className="text-center text-7xl lg:text-8xl font-medium uppercase bg-gradient-to-r from-red-500 to-blue-400 text-transparent bg-clip-text">
            services
          </h1>
        </div>

        {/* portfolio  */}
        <div id="work" className="mt-10 pt-24">
          <h1 className="text-center text-7xl lg:text-8xl font-medium uppercase bg-gradient-to-r from-red-500 to-blue-400 text-transparent bg-clip-text">
            my portfolio
          </h1>
          <h1 className="logo-font mt-5 text-center text-2xl">My Letes Work</h1>
          <p className="lg:w-4/6 mx-auto md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aut
            provident voluptate iusto rerum modi ratione hic quo laboriosam
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <div className="travel w-full h-[200px] rounded-md flex items-end justify-center">
            <div
              className={`w-4/5 mb-5 px-3 py-2 rounded-md flex items-center justify-between`}
            >
              <div>
                <h1 className="font-bold">Travel</h1>
                <p className="text-[12px]">Web Design</p>
              </div>
              <a
                href="https://mdhasim2001.github.io/Travel-website/"
                className="p-2 border-[2px] border-green-600 rounded-full"
                target="blank"
              >
                <FaLocationArrow />
              </a>
            </div>
          </div>
          <div className="smart-ticket w-full h-[200px] rounded-md flex items-end justify-center">
            <div
              className={`w-4/5  mb-5 px-3 py-2 rounded-md flex items-center justify-between`}
            >
              <div>
                <h1 className="font-bold">Smart Ticket</h1>
                <p className="text-[12px]">Web Design</p>
              </div>
              <a
                href="https://mdhasim2001.github.io/smart-ticketing/"
                className="p-2 border-[2px] border-green-600 rounded-full"
                target="blank"
              >
                <FaLocationArrow />
              </a>
            </div>
          </div>
          <div className="restaurent w-full h-[200px] rounded-md flex items-end justify-center">
            <div
              className={`w-4/5 mb-5 px-3 py-2 rounded-md flex items-center justify-between`}
            >
              <div>
                <h1 className="font-bold">Restaurent</h1>
                <p className="text-[12px]">Web Design</p>
              </div>
              <a
                href="https://restaurent-boss.netlify.app/"
                className="p-2 border-[2px] border-green-600 rounded-full"
                target="blank"
              >
                <FaLocationArrow />
              </a>
            </div>
          </div>
          <div className="office w-full h-[200px] rounded-md flex items-end justify-center">
            <div
              className={`w-4/5 mb-5 px-3 py-2 rounded-md flex items-center justify-between`}
            >
              <div>
                <h1 className="font-bold">Office</h1>
                <p className="text-[12px]">Web Design</p>
              </div>
              <a
                href="https://mdhasim2001.github.io/smart-ticketing/"
                className="p-2 border-[2px] border-green-600 rounded-full"
                target="blank"
              >
                <FaLocationArrow />
              </a>
            </div>
          </div>
        </div> */}
          <div className="w-40 mx-auto mt-10"></div>
        </div>

        {/* contact me  */}
        <div id="contact" className=" mt-10 pt-28">
          <h1 className="text-center text-7xl lg:text-8xl font-medium uppercase bg-gradient-to-r from-red-500 to-blue-400 text-transparent bg-clip-text">
            contact
          </h1>
          <div className="lg:w-4/5 lg:mx-auto lg:flex gap-10 mt-20">
            <div className="flex-1 mb-10 lg:mb-0">
              <h1 className="font-bold text-2xl">Let talk</h1>
              <p className="my-5">
                Let us keep in touch and try to reach the highest peak of our
                success
              </p>
              <p className="my-2 mt-3 flex items-center gap-3">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  title="E-mail"
                  className="cursor-pointer p-3"
                >
                  <AiOutlineMail />
                </a>
                mdhasim050@gmail.com
              </p>
              <p className="my-2 flex items-center gap-3">
                <a href="#" title="Call" className=" cursor-pointer p-3">
                  <IoCallOutline />
                </a>
                +8801881850283
              </p>
              <p className="my-2 flex items-center gap-3">
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  title="Location"
                  className="cursor-pointer p-3"
                >
                  <IoLocationOutline />
                </a>
                Dhaka, Bangladesh
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex-1">
              <input
                className="w-full border resize-none mb-2 bg-black p-3"
                // bg-gradient-to-r from-red-500 to-blue-400
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
              <input
                className="w-full border resize-none mb-2 bg-black p-3"
                type="text"
                name="email"
                required
                placeholder="Enter your email"
              />
              <textarea
                className={`w-full border resize-none mb-2 bg-black p-3`}
                placeholder="Enter you message"
                name="message"
                required
                id=""
                rows="5"
              ></textarea>
              <Toaster position="top-center" reverseOrder={false} />
              <button
                type="submit"
                className={`w-full py-3 border bg-gradient-to-r from-red-500 to-blue-400 font-bold opacity-100`}
              >
                SEND
              </button>
            </form>
          </div>
        </div>

        {/* footer section  */}
        <div className="mt-20 py-12 ">
          <hr />
          <div className="flex items-center justify-between mt-12">
            <div className="flex items-center justify-center gap-3">
              <a
                className="text-2xl hover:text-[#1877F2]"
                href="https://www.facebook.com/hasim.nana.3?mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="text-2xl hover:text-[#1DA1F2]"
                href="https://x.com/mdhasim050?t=4CVi4JLyqe-yoUqp_84YDg&s=09"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                className="text-2xl hover:text-[#EC375B]"
                href="https://www.instagram.com/mdhasim.nana?igsh=MTN3bDgzYXF2MjE3NA=="
                target="_blank"
              >
                <FaInstagramSquare />
              </a>
            </div>
            <p className="text-center text-[14px]">
              2024 MD Hasim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
