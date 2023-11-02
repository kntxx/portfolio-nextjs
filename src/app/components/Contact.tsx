"use client";

import React, { useRef, FormEvent, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showMessage]);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_gn6ge7p",
          "template_qkvek19",
          form.current,
          "Bykfim08ZlZ2XXd_C"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowMessage(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <section
      id="contact"
      className="section flex items-center h-screen lg:h-[76vh]"
    >
      <div className="container mx-auto">
        <div
          className=" justify-between items-center lg:p-[60px] flex flex-col  text-center lg:text-left lg:flex-row md:items-center
        
        gap-y-11"
        >
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="font-neue "
          >
            <h4 className="text-[1.6rem] md:text-[2rem]  lg:text-[2.5rem] font-meduim ">
              Contact Me
            </h4>
            <h2 className="mt-5 max-w-[480px] font-roman text-lightgray text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] tracking-wide ">
              I'd love to hear from you! feel free to reach out with any
              questions or suggestions.
            </h2>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className=" shadow-xl rounded-2xl flex flex-col  gap-y-6 pb-24 p-6 items-start  md:w-[400px] lg:w-[500px] border h-[400px] text-left"
          >
            <form ref={form} onSubmit={sendEmail} className="">
              <CSSTransition
                in={showMessage}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div className="bg-gray-100 border border-gray-300  rounded-md px-4 py-2 text-center font-neue text-[17px] font-bold text-lightgray">
                  I have received your message. Thank you!
                </div>
              </CSSTransition>
              <input
                type="text"
                placeholder="Your Name"
                name="to_name"
                required
                className="bg-transparent font-neue font-thin border-b border-black max-w-[300px] py-3 outline-none w-full placeholder:text-lightgray transition-all"
              />
              <input
                type="email"
                name="from_name"
                placeholder="Your Email"
                required
                className="bg-transparent font-neue font-thin border-b border-black max-w-[300px] py-3 outline-none w-full placeholder:text-lightgray  transition-all"
              />
              <textarea
                name="message"
                required
                className="bg-transparent font-neue font-thin resize-none mb-12 border-b border-black py-12 outline-none w-full placeholder:text-lightgray  transition-all"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                value="Send"
                className="w-full font-neue font-roman cursor-pointer tracking-wide text-[16px] flex justify-center py-2 px-4 border border-black/40 rounded-md text-lightgray hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
