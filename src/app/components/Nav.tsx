"use client";

import React, { useState, useContext, useEffect } from "react";
import { navLinks } from "../constants/data";
import { Link } from "react-scroll/modules";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import { NavContext } from "./NavContext";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
const Nav = () => {
  const { setIsOpen } = useContext(NavContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="nav"
      className={`py-5   bg-bgcol ${
        isScrolled &&
        "fixed z-20  top-0 left-0 right-0 shadow-sm transition-all  "
      }`}
    >
      <div className="container   mx-auto">
        <div className="flex justify-between items-center">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
          >
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              to="home"
            >
              <Image
                className="w-[130px] h-auto cursor-pointer"
                src="/logo.svg"
                width={120}
                height={100}
                quality={100}
                alt="logo"
              />
            </Link>
          </motion.div>
          <div className="hidden md:flex">
            <motion.ul
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              className="flex gap-10 font-neue font-light md:text-[1rem]  lg:text-[1.1rem] "
            >
              {navLinks.map((items) => (
                <li
                  className="cursor-pointer hover:text-black hover:border-b hover:border-black transition-all duration-300 ease-in-out"
                  key={items.id}
                >
                  <Link
                    to={items.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="md:hidden "
            onClick={() => setIsOpen(true)}
          >
            <CiMenuBurger className="text-[1.3rem]" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
