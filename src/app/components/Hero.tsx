"use client";

import Image from "next/image";
import { myDetails } from "../constants/data";
import { TypeAnimation } from "react-type-animation";
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Hero = () => {
  return (
    <section
      className="section min-h-[75vh] lg:min-h-[85vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto ">
        <div className="flex  justify-between items-center flex-col-reverse lg:flex-row gap-y-11">
          <div className="flex justify-center items-center text-center lg:text-left">
            <div className="flex flex-col justify-center ">
              <motion.h1
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                className="text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] "
              >
                Hello, <br /> I am Kent Gesoro
              </motion.h1>
              <div className="flex flex-col gap-y-2">
                <motion.p
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  className="font-thin   text-[1rem] md:text-[1.3rem]  lg:text-[1.4rem]"
                >
                  A passionate college student on a journey to become a
                </motion.p>
                <motion.p
                  variants={fadeIn("right", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  className="font-bold    text-[1rem] md:text-[1.3rem] lg:text-[1.4rem]"
                >
                  <TypeAnimation
                    sequence={[
                      "Software Engineer.",
                      2000,
                      "Software Engineer.",
                      2000,
                      "Software Engineer.",
                      2000,
                    ]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </motion.p>
                <p>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    <motion.button
                      variants={fadeIn("right", 0.5)}
                      initial="hidden"
                      whileInView={"show"}
                      className="border-b-black border-b-2 font-thin text-black cursor-pointer text-[1rem] md:text-[1.3rem] lg:text-[1.4rem]"
                    >
                      Get in Touch
                    </motion.button>
                  </Link>
                </p>
                <motion.div
                  variants={fadeIn("right", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  className="flex gap-x-6 mt-3 lg:justify-start justify-center"
                >
                  <a
                    href="https://www.facebook.com/tnek18"
                    className=" transition-transform duration-300 hover:scale-150"
                    title="Visit our Facebook page"
                    target="_blank"
                  >
                    <TbBrandFacebook size={23} />
                  </a>
                  <a
                    href="https://www.instagram.com/kentatixx18"
                    className=" transition-transform duration-300 hover:scale-150"
                    target="_blank"
                  >
                    <SlSocialInstagram size={21} />{" "}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kent-joseph-gesoro-69b399259/"
                    className=" transition-transform duration-300 hover:scale-150"
                    target="_blank"
                  >
                    <PiLinkedinLogoLight size={24} />{" "}
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
          >
            <Image
              src="/avatar.png"
              width={400}
              height={1}
              quality={100}
              priority={true}
              alt="Profile Picture"
              className="w-[250px] md:w-[350px]   lg:w-[450px] lg:h-full hover:rotate-12 transition duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
