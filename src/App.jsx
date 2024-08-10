import { useState } from "react"
import "./App.css"
import { CiMenuKebab } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
import { MdCallMade, MdOutlineFileDownload } from "react-icons/md"
import img from "./assets/Hasim.jpg"
import { AiOutlineMail } from "react-icons/ai"
import { IoCallOutline, IoLocationOutline } from "react-icons/io5"
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa"



function App() {

  const [navbar, setNavbar] = useState(false)

  return (
    <div className="bg-[#E5E5E5]">
        <div className="w-full h-[10vh] lg:h-[15vh] navbar-font border-b border-black">
          <nav className="lg:w-4/5 mx-5 h-full flex items-center justify-between lg:mx-auto">
            <div className="logo-font text-3xl cursor-pointer">
              hasim
            </div>
              <ul className={`${navbar ? "navbar" : "hidden"} lg:bg-[#E5E5E5] lg:relative lg:flex gap-5`}>
                <IoMdClose onClick={() => setNavbar(false)} className="absolute top-5 left-10 text-3xl lg:hidden" />
                <li onClick={() => setNavbar(false)}><a href="#home">Home</a></li>
                <li onClick={() => setNavbar(false)}><a href="#about">About</a></li>
                <li onClick={() => setNavbar(false)}><a href="#projects">Projects</a></li>
                <li onClick={() => setNavbar(false)}><a href="#contact" className="lg:hidden">Contact me</a></li>
              </ul>
            <a href="#contact" className="py-2 px-4 border hidden lg:block border-black">Contact me</a>
            <CiMenuKebab onClick={() => setNavbar(true)} className="lg:hidden text-3xl" />
          </nav>
        </div>
        <div className="lg:w-4/5 mx-5 h-[85vh] lg:mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="flex-1">
            <h1 className="logo-font text-5xl mb-10">Hi, <br /> I am MD HASIM</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minima veritatis eaque cupiditate ullam commodi! Cumque eveniet aliquam aspernatur? Voluptates dicta ducimus cum nostrum autem doloribus dolores tempore perspiciatis praesentium.</p>
            <div className="flex items-center">
              <a href="https://drive.google.com/file/d/19OAkKmrzrpmpTDtxgzBDzXrdEzovMMZ7/view?usp=drivesdk" target="_blank"><button className="flex items-center justify-center gap-2 py-3 px-4 md:px-5 border border-black mr-5">DOWNLOAD CV<MdOutlineFileDownload className="text-xl" /></button></a>
              <a href="#contact"><button className="flex items-center justify-center gap-2 py-3 px-4 md:px-5 border border-black">CONTACT ME<MdCallMade className="text-xl" /></button></a> 
            </div>
          </div>
          <div className="flex-1">

          </div>
        </div>

        {/* about section */}
        <div id="about" className="lg:w-4/5 mx-5 lg:mx-auto pt-10">
          <h1 className="logo-font underline text-center text-2xl">ABOUT</h1>
          <div className="lg:flex items-center justify-between gap-5 my-10">
            <div className="border border-black h-full p-5 mb-5 lg:mb-0">
              <img src={img} alt="" />
            </div>
            <div className="">
              <h1 className="text-2xl">MD Hasim</h1>
              <h1 className="text-xl my-3">I am a Web Devoloper</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat, quae corrupti facilis accusantium cumque dolore id totam neque explicabo suscipit deserunt accusamus tempora, natus cum praesentium laudantium! Est, natus.</p>
            </div>
          </div>
        </div>

        {/* contact me  */}
        <div id="contact" className="lg:w-4/5 lg:mx-auto mx-5 pt-20">
          <h1 className="logo-font underline text-center text-2xl">CONTACT</h1>
          <div className="lg:flex gap-10 mt-10">
            <div className="flex-1 mb-10 lg:mb-0">
              <h1 className="font-bold text-2xl">Let talk</h1>
              <p className="my-5">Let us keep in touch and try to reach the highest peak of our success</p>
              <p className="my-2 mt-3 flex items-center gap-3"><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" title="E-mail" className="cursor-pointer p-3 border border-black"><AiOutlineMail /></a>mdhasim050@gmail.com</p>
              <p className="my-2 flex items-center gap-3"><a href="#" title="Call" className="cursor-pointer p-3 border border-black"><IoCallOutline /></a>+8801881850283</p>
              <p className="my-2 flex items-center gap-3"><a href="https://www.google.com/maps" target="_blank" title="Location" className="cursor-pointer p-3 border border-black"><IoLocationOutline /></a>Dhaka, Bangladesh</p>
            </div>
            <div className="flex-1">
              <input className="w-full mb-5 p-3 bg-[#E5E5E5] outline-none border border-black" type="text" placeholder="Enter your name" />
              <input className="w-full mb-5 p-3 bg-[#E5E5E5] outline-none border border-black" type="email" placeholder="Enter your email"/>
              <textarea className="w-full border bg-[#E5E5E5] mb-5 border-black outline-none p-3" placeholder="Enter you massege" name="" id="" rows="5"></textarea>
              <button className="w-full py-3 border border-black">SEND</button>
            </div>
          </div>
        </div>

        <div className="px-5 lg:px-[10%] mt-20 py-12 bg-gray-300">
          <h1 className="logo-font text-3xl">hasim</h1>
          <div className="flex gap-3">
            <a className="text-2xl mt-5" href="https://www.facebook.com/hasim.nana.3?mibextid=ZbWKwL" target="_blank"><FaFacebook /></a>
            <a className="text-2xl mt-5" href="https://x.com/mdhasim050?t=4CVi4JLyqe-yoUqp_84YDg&s=09" target="_blank"><FaTwitter /></a>
            <a className="text-2xl mt-5" href="https://www.instagram.com/mdhasim.nana?igsh=MTN3bDgzYXF2MjE3NA==" target="_blank"><FaInstagramSquare /></a>
          </div>
        </div>
    </div>
  )
}

export default App
