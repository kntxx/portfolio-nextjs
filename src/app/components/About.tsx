"use client";

import React from "react";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Image from "next/image";
const About = () => {
  return (
    <section
      className="section h-[80vh] lg:h-screen flex items-center justify-center"
      id="about"
    >
      <div className="container mx-auto ">
        <div
          className="flex flex-col lg:flex-row 
        lg:justify-between "
        >
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex"
          >
            <Image
              src="/newaboutpic.png"
              width={380}
              height={300}
              quality={100}
              priority={true}
              alt="newaboutpic"
              className="w-auto h-auto hover:scale-105 duration-300 transition"
            />
          </motion.div>
          <div className="flex justify-center items-center">
            <div className="md:w-[500px] flex flex-col text-center lg:text-left gap-y-5">
              <motion.h1
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                className="text-[1.9rem] md:text-[2.5rem] lg:text-[2.8rem]"
              >
                About Me
              </motion.h1>

              <motion.p
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className="font-roman text-[1rem] 
              md:text-[1.1rem]
              lg:text-[1.2rem] tracking-wide"
              >
                As a college student pursuing a Bachelor of Science degree in
                Information Technology, I have been actively expanding my skills
                in Front-End Development.
              </motion.p>
              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                className="font-roman text-[1rem] 
                 md:text-[1.1rem]
              lg:text-[1.2rem] tracking-wide"
              >
                My focus has been on mastering technologies such as HTML, CSS,
                Javascript, React, and Tailwind CSS to create engaging and
                dynamic user experiences.
              </motion.p>
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                className="flex flex-col items-center mx-auto lg:mx-0  lg:flex-row   leading-8  lg:justify-between max-w-[400px] "
              >
                <div className="flex flex-col">
                  <h2
                    className="
                  text-[1.1rem]

                  md:text-[1.2rem]
                  lg:text-[1.3rem]
                  font-semibold
                  text-lightgray
                  uppercase
                  
                  "
                  >
                    name
                  </h2>
                  <p className="text-[1rem]  text-lightgray">
                    Kent Joseph Gesoro
                  </p>
                </div>
                <div className="">
                  <h2
                    className="  text-[1.1rem]
                  md:text-[1.2rem]
                  lg:text-[1.3rem]
                  font-semibold
                  text-lightgray
                  uppercase"
                  >
                    email
                  </h2>
                  <p className="text-[1rem] text-lightgray">
                    kentatixx@gmail.com
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                className="
                  justify-center lg:justify-start
              flex items-center gap-x-2"
              >
                <p className="text-[1.2rem]">
                  Tech <span className="ml-4 mr-3">|</span>
                </p>
                <IoLogoHtml5
                  className="text-[1.1rem]
                  md:text-[1rem]
                lg:text-[1.8rem] transition-transform duration-200 hover:scale-150"
                />
                <IoLogoCss3
                  className="text-[1.2rem]
                md:text-[1.4rem]
                lg:text-[1.8rem] transition-transform duration-200 hover:scale-150"
                />
                <IoLogoJavascript
                  className="text-[1.3rem]
                md:text-[1.4rem]
                lg:text-[1.9rem] transition-transform duration-200 hover:scale-150"
                />
                <BiLogoReact
                  className="text-[1.5rem]
                md:text-[1.7rem]
                lg:text-[1.9rem] transition-transform duration-200 hover:scale-150"
                />
                <TbBrandNextjs
                  className="text-[1.5rem]
                  md:text-[1.6rem]
                lg:text-[1.9rem] transition-transform duration-200 hover:scale-150"
                />
                <TbBrandTypescript
                  className="text-[1.3rem]
                
                md:text-[1.6rem]
                lg:text-[1.7rem] transition-transform duration-200 hover:scale-150"
                />
                <BiLogoTailwindCss
                  className="text-[1.6rem]
                md:text-[1.7rem]
                lg:text-[1.9rem] transition-transform duration-200 hover:scale-150"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
