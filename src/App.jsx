import { useState } from "react";
import "./App.css";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowRoundForward, IoMdClose } from "react-icons/io";
import { MdCallMade, MdOutlineFileDownload } from "react-icons/md";
import img from "./assets/Hasim.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa";
import Qualification from "./Qualification";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [qualification, setQualification] = useState(false);
  return (
    <div className={`bg-white pt-5 ${qualification ? "" : ""}`}>
      <div className="w-full navbar-font pb-5 lg:pb-0 border-b border-black  lg:border-none">
        <nav className="lg:w-4/5 mx-5 h-full flex items-center justify-between lg:mx-auto">
          <h2 className="logo-font w-[10%] h-full cursor-pointer flex items-center text-3xl">
            hasim
          </h2>
          <ul
            className={`${
              navbar ? "navbar md:w-2/4" : "hidden"
            } uppercase text-[14px] lg:relative lg:flex gap-6 ml-10`}
          >
            <IoMdClose
              onClick={() => setNavbar(false)}
              className="absolute top-5 left-10 text-3xl lg:hidden"
            />
            <li>
              <a onClick={() => setNavbar(false)} href="#home">Home</a>
            </li>
            <li>
              <a onClick={() => setNavbar(false)} href="#about">About</a>
            </li>
            {/* <li onClick={() => setNavbar(false)}><a href="#services">Services</a></li> */}
            <li>
              <a onClick={() => setNavbar(false)} href="#work">Work</a>
            </li>
            <li  className="lg:hidden">
              <a onClick={() => setNavbar(false)} href="#qualification">
                Qualification
              </a>
            </li>
            <li>
              <a onClick={() => setNavbar(false)} href="#blog">Blog</a>
            </li>
            <li>
              <a onClick={() => setNavbar(false)} href="#contact" className="lg:hidden">
                Contact me
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="py-2 px-4 border hidden lg:block border-black"
          >
            Contact me
          </a>
          <CiMenuKebab
            onClick={() => setNavbar(true)}
            className="lg:hidden text-3xl"
          />
        </nav>
      </div>
      <div className="lg:w-4/6 lg:mx-auto mx-5 h-[85vh] flex items-center justify-between">
        <div className="">
          <div className="w-[150px] mx-auto">
            <img
              className="w-full h-[150px] border border-black rounded-full"
              src={img}
              alt=""
            />
          </div>
          <h1 className="text-xl mt-5 text-center">Hi! I am MD HASIM</h1>
          <h2 className="text-center text-4xl font-bold logo-font my-5">
            frontend web developer <br />
            based in Bangladesh
          </h2>
          <p className="mb-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            minima veritatis eaque cupiditate ullam commodi! Cumque eveniet
            aliquam aspernatur? Voluptates dicta ducimus cum nostrum autem
            doloribus dolores tempore perspiciatis praesentium.
          </p>
          <div className="flex items-center justify-center">
            <a href="./assets/RESUME.pdf" download="RESUME.pdf" target="_blank">
              <button className="flex items-center justify-center gap-2 py-3 px-4 md:px-5 border border-black mr-5">
                DOWNLOAD CV
                <MdOutlineFileDownload className="text-xl" />
              </button>
            </a>
            <a href="#contact">
              <button className="flex items-center justify-center gap-2 py-3 px-4 md:px-5 border border-black">
                CONTACT ME
                <MdCallMade className="text-xl" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* about section */}
      <div id="about" className="lg:w-4/5 mx-5 lg:mx-auto pt-10">
        <h1 className="logo-font underline text-center text-2xl">ABOUT</h1>
        <div className="lg:flex items-center justify-between gap-5 my-10">
          <div className="border border-black lg:full h-full p-5 mb-5 lg:mb-0">
            <img src={img} alt="" />
          </div>
          <div className="">
            <h1 className="text-2xl">MD Hasim</h1>
            <h1 className="text-xl my-3">I am a Web Devoloper</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur repellat, quae corrupti facilis accusantium cumque
              dolore id totam neque explicabo suscipit deserunt accusamus
              tempora, natus cum praesentium laudantium! Est, natus.
            </p>
            <div className="flex gap-5 items-center">
              <button
                onClick={() => {
                  setQualification(true);
                }}
                className="hidden lg:block py-2 px-5 border border-black mt-10"
              >
                Qualification
              </button>
              <button className="py-2 px-9 border border-black mt-10">
                Hire Me
              </button>
            </div>
            <div className="flex gap-5 items-center justify-around mt-10">
              <div className="text-center">
                <h1 className="text-xl font-bold">02+</h1>
                <p className="opacity-50 uppercase">years of experience</p>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold">20+</h1>
                <p className="opacity-50 uppercase">projects completed</p>
              </div>
            </div>
            <Qualification open={qualification} close={setQualification} />
          </div>
        </div>
      </div>

      {/* qualification  */}
      <div id="qualification" className="mt-10 pt-10 mx-5 lg:hidden">
        <h1 className="logo-font text-3xl text-center mb-10 underline">
          Qualification
        </h1>
        <div className="grid grid-cols-1 gap-5">
          <div className="">
            <div>
              <h1 className=" my-5 text-xl font-bold ">Skill</h1>
              <p className="mb-5 text-[15px5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                ipsa distinctio magnam dolorum enim assumenda unde dolor quaerat
                rem nobis incidunt, a inventore, voluptatem quam veniam totam
                esse officiis laudantium.
              </p>
              <div className="w-full">
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #javaScript
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #react
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #node.js
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #express.js
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #mongoDB
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #html
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #css
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #tailwind
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #git
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #github
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #terminal
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #AI design
                </p>
                <p className="border inline-block mb-3 border-black rounded-lg text-[14px] py-1 px-3 mr-3">
                  #figma
                </p>
              </div>
            </div>
          </div>
          <div className=" text-start">
            <h1 className=" my-5 text-xl font-bold">Education</h1>
            <div>
              <div>
                <h1 className="font-bold mt-3">
                  2022-2023 Full Stack Development Course
                </h1>
                <p className="text-[15px]">Industry : Programing Hero</p>
                <p className="text-[15px]">Website : programing-hero.com</p>
              </div>
              <div>
                <h1 className="font-bold mt-5">2022-2026 BA Honours</h1>
                <p className="text-[15px]">
                  University : Siddheshwari University
                </p>
                <p className="text-[15px]">
                  Subject : Islamic History and Culture
                </p>
                <p className="text-[15px]">Study : Running</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* projects */}
      <div id="work" className="lg:w-4/5 mx-5 lg:mx-auto pt-10">
        <h2 className="text-center my-3">My Portfolio</h2>
        <h1 className="logo-font underline text-center text-2xl">
          My Letes Work
        </h1>
        <p className="lg:w-4/6 mx-auto mt-5 md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aut
          provident voluptate iusto rerum modi ratione hic quo laboriosam
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <div className="travel w-full h-[200px] rounded-md flex items-end justify-center">
            <div className="w-4/5 bg-white mb-5 px-3 py-2 rounded-md flex items-center justify-between">
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
            <div className="w-4/5 bg-white mb-5 px-3 py-2 rounded-md flex items-center justify-between">
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
            <div className="w-4/5 bg-white mb-5 px-3 py-2 rounded-md flex items-center justify-between">
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
            <div className="w-4/5 bg-white mb-5 px-3 py-2 rounded-md flex items-center justify-between">
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
        </div>
        <button className="w-32 mt-10 mx-auto border border-black py-2 px-3 text-center flex items-center justify-between">
          Show more
          <IoIosArrowRoundForward />
        </button>
      </div>

      {/* contact me  */}
      <div id="contact" className="lg:w-4/5 lg:mx-auto mx-5 pt-20">
        <h1 className="logo-font underline text-center text-2xl">CONTACT</h1>
        <div className="lg:flex gap-10 mt-10">
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
                className="cursor-pointer bg-[#E5E5E5] p-3"
              >
                <AiOutlineMail />
              </a>
              mdhasim050@gmail.com
            </p>
            <p className="my-2 flex items-center gap-3">
              <a
                href="#"
                title="Call"
                className="bg-[#E5E5E5] cursor-pointer p-3"
              >
                <IoCallOutline />
              </a>
              +8801881850283
            </p>
            <p className="my-2 flex items-center gap-3">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                title="Location"
                className="cursor-pointer bg-[#E5E5E5] p-3"
              >
                <IoLocationOutline />
              </a>
              Dhaka, Bangladesh
            </p>
          </div>
          <form className="flex-1">
            <input
              className="w-full mb-5 p-3  outline-none border border-black"
              type="text" required
              placeholder="Enter your name"
            />
            <input
              className="w-full mb-5 p-3 outline-none border border-black"
              type="email" required
              placeholder="Enter your email"
            />
            <textarea
              className="w-full border resize-none mb-5 border-black outline-none p-3"
              placeholder="Enter you massege"
              name="" required 
              id=""
              rows="5"
            ></textarea>
            <button className="w-full py-3 border border-black">SEND</button>
          </form>
        </div>
      </div>

      {/* footer section  */}
      <div className="px-5 lg:px-[10%] mt-20 py-12 bg-[#E5E5E5]">
        <h1 className="logo-font text-3xl text-center">hasim</h1>
        <div className="flex gap-3 items-center justify-center">
          <a
            className="text-2xl mt-5 hover:text-[#1877F2]"
            href="https://www.facebook.com/hasim.nana.3?mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="text-2xl mt-5 hover:text-[#1DA1F2]"
            href="https://x.com/mdhasim050?t=4CVi4JLyqe-yoUqp_84YDg&s=09"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            className="text-2xl mt-5 hover:text-[#EC375B]"
            href="https://www.instagram.com/mdhasim.nana?igsh=MTN3bDgzYXF2MjE3NA=="
            target="_blank"
          >
            <FaInstagramSquare />
          </a>
        </div>
        <div className="border border-black my-10"></div>
        <p className="text-center text-[14px]">
          2024 MD Hasim. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
