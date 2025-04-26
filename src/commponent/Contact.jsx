import { useRef } from "react";
import { motion } from "motion/react";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { Toaster } from "react-hot-toast";

export const Contact = () => {
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
    <div id="contact" className=" mt-10 pt-28">
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
        className="text-center text-7xl lg:text-8xl font-medium uppercase bg-gradient-to-r from-red-500 to-blue-400 text-transparent bg-clip-text"
      >
        contact
      </motion.h1>
      <div className="lg:w-4/5 lg:mx-auto md:flex gap-10 mt-20">
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
          className="flex-1 mb-10 lg:mb-0"
        >
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
        </motion.div>
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          ref={form}
          onSubmit={sendEmail}
          className="flex-1"
        >
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
        </motion.form>
      </div>
    </div>
  );
};
