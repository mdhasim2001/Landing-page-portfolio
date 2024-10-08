import { useState, useRef  } from "react";
import "./App.css";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowRoundForward, IoMdClose, IoMdSunny } from "react-icons/io";
import { MdCallMade, MdOutlineFileDownload } from "react-icons/md";
import img from "./assets/Hasim.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoLocationOutline, IoMoon } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa";
import Qualification from "./Qualification";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";

function App() {
  const [navbar, setNavbar] = useState(false);
  const [qualification, setQualification] = useState(false);
  const [theme, setTheme] = useState(false)


    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_9z73ftj', 'template_sykyt5a', form.current, {
          publicKey: 's5qbTZI2PWUcOl1eJ',
        })
        .then(
          () => {
            toast.success('Successfully your message!')
            
          },
          (error) => {
            toast.error(error , "This didn't work.")
          },
        );
    };

  return (
    <div id="home"  className={`${theme ? "bg-[#050318] text-white" : ""}  pt-5 ${qualification ? "" : ""}`}>
      <div className={`w-full ${theme ? "bg-[#050318]" : "bg-white"}   fixed z-10 top-0 h-[8vh] lg:h-[12vh] navbar-font`}>
        <nav className="lg:px-[10%] h-full px-5 flex items-center justify-between mx-auto">
          <h2 className="logo-font cursor-pointer text-3xl">
            hasim
          </h2>
          <ul
            className={`${
              navbar ? "navbar" : "hidden"
            } ${theme ? " bg-white lg:bg-[#050318] text-[#050318] lg:text-white" : "bg-[#050318] lg:bg-white text-white lg:text-black"} uppercase text-[14px] lg:relative lg:flex gap-6 ml-10`}
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
            <li  className="lg:hidden">
              <a onClick={() => setNavbar(false)} href="#qualification">
                Qualification
              </a>
            </li>
            <li>
              <a onClick={() => setNavbar(false)} href="#work">serveces</a>
            </li>
            <li>
              <a onClick={() => setNavbar(false)} href="#work">Work</a>
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
          <div className="flex items-center gap-2 lg:ml-16">
              <button onClick={()=> {setTheme(false)}} className={`${theme ? "" : "hidden"} p-1 cursor-pointer border rounded-full`}><IoMdSunny /></button>
              <button onClick={()=> {setTheme(true)}} className={`${theme ? "hidden" : ""} p-1 cursor-pointer border rounded-full`}><IoMoon /></button>
            {/* <Button className="hidden lg:block" bntName="contact me" tag="#contact"/> */}
            <CiMenuKebab
              onClick={() => setNavbar(true)}
              className="lg:hidden text-3xl"
            />
          </div>
        </nav>
      </div>

      {/* banner */}
      <div className="lg:w-4/6 lg:mx-auto mx-5 h-[100vh] flex items-center justify-between">
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
          <div className="flex items-center justify-center mt-10 gap-5">
            <Button bntName="download cv" theme={theme} tag="./assets/RESUME.pdf" download="download" icon={<MdOutlineFileDownload />}/>
            <Button bntName="contact me" theme={theme} tag="#contact" icon={<MdCallMade/>}/>
          </div>
        </div>
      </div>

      {/* about section */}
      <div id="about" className="lg:w-4/5 mx-5 lg:mx-auto pt-24">
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
            <div className="flex gap-5 mt-10 items-center">
              <div onClick={() => {setQualification(true)}} className="hidden lg:block">
                <Button  bntName="qualification" theme={theme}/>
              </div>
              <Button bntName="hire me" theme={theme}/>
              
            </div>
            <div className="flex gap-5 items-center justify-around mt-10">
              <div className="text-center">
                <h1 className="text-xl font-bold">02+</h1>
                <p className="opacity-50 -z-10 uppercase">years of experience</p>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold">20+</h1>
                <p className="opacity-50 -z-10 uppercase">projects completed</p>
              </div>
            </div>
            <Qualification theme={theme} open={qualification} close={setQualification} />
          </div>
        </div>
      </div>

      {/* portfolio  */}
      <div id="work" className="lg:w-4/5 mx-5 lg:mx-auto mt-10 pt-24">
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
            <div className={`w-4/5 ${theme ? "bg-[#050318]" : "bg-white"} mb-5 px-3 py-2 rounded-md flex items-center justify-between`}>
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
            <div className={`w-4/5 ${theme ? "bg-[#050318]" : "bg-white"} mb-5 px-3 py-2 rounded-md flex items-center justify-between`}>
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
            <div className={`w-4/5 ${theme ? "bg-[#050318]" : "bg-white"} mb-5 px-3 py-2 rounded-md flex items-center justify-between`}>
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
            <div className={`w-4/5 ${theme ? "bg-[#050318]" : "bg-white"} mb-5 px-3 py-2 rounded-md flex items-center justify-between`}>
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
        <div className="w-40 mx-auto mt-10">
          <Button bntName="show more" theme={theme} icon={<IoIosArrowRoundForward />}/>
        </div>
      </div>

      {/* contact me  */}
      <div id="contact" className="lg:w-4/5 lg:mx-auto mx-5 mt-10 pt-28">
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
                className="cursor-pointer p-3"
              >
                <AiOutlineMail />
              </a>
              mdhasim050@gmail.com
            </p>
            <p className="my-2 flex items-center gap-3">
              <a
                href="#"
                title="Call"
                className=" cursor-pointer p-3"
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
                className="cursor-pointer p-3"
              >
                <IoLocationOutline />
              </a>
              Dhaka, Bangladesh
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex-1">
            <Input type="text" name="name" placeholder="Enter your name" theme={theme}/>
            <Input type="email" name="email" placeholder="Enter your email" theme={theme}/>
            <textarea
              className={`w-full border resize-none mb-5 ${theme ? "bg-[#050318] border-white" : "border-black" } outline-none p-3`}
              placeholder="Enter you message"
              name="message" required 
              id=""
              rows="5"
            ></textarea>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            <button type="submit" className={`w-full py-3 border ${theme ? "bg-[#050318] border-white" : "border-black" }`}>SEND</button>
          </form>
        </div>
      </div>

      {/* footer section  */}
      <div className="px-5 lg:px-[10%] mt-20 py-12 bg-[#050318] text-white">
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
        <div className="border my-10"></div>
        <p className="text-center text-[14px]">
          2024 MD Hasim. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
