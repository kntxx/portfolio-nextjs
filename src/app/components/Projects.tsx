"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Projects = () => {
  return (
    <section className="h-[75vh] lg:h-[85vh] flex items-center" id="projects">
      <div className="mx-auto container">
        <div className="flex flex-col  justify-center items-center gap-y-11">
          <div>
            <motion.h1
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              className="text-[1.9rem] md:text-[2.5rem] lg:text-[2.8rem]"
            >
              Project
            </motion.h1>
          </div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="flex items-center lg:flex-row flex-col shadow-xl  justify-between gap-y-11 lg:w-[1000px] p-5  border rounded-xl lg:h-[400px]"
          >
            <div className="max-w-[300px] lg:max-w-[450px] text-center lg:text-left">
              <h1 className="text-[1.6rem] md:text-[2.3rem] lg:text-[2.5rem]">
                Envogue Elite
              </h1>
              <p
                className="max-w-[350px] 
              text-[1rem]
              md:text-[1.1rem]
              lg:text-[1.2rem] text-lightgray"
              >
                Envogue Elite is an elegant and feature-rich online clothing
                e-commerce platform designed to offer a seamless shopping
                experience.
              </p>
            </div>
            <div className="flex items-center justify-center ">
              <div className="group relative max-w-[300px] md:max-w-[400px]  lg:max-w-[500px] overflow-hidden border border-lightgray/50 rounded-lg ">
                <div className=" cursor-pointer  group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>
                <Image
                  src="/project1.png"
                  width={400}
                  height={400}
                  alt="project 1"
                  quality={100}
                  className="w-auto h-auto group-hover:scale-125 transition-all duration-500  "
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-10">
                  <span className="text-3xl text-white font-thin">
                    {" "}
                    Envogue Elite
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-10 ">
                  <span>
                    <a href="https://envogueelite.vercel.app/" target="_blank">
                      <button className="font- bg-bgcol text-black p-[2px] w-[90px] rounded">
                        Live Demo
                      </button>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
