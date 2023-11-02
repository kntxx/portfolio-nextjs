"use client";

import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll/modules";
import { NavContext } from "./NavContext";
import { navLinks } from "../constants/data";

const NavMobile = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);
  return (
    <nav
      className={`${
        isOpen ? "right-0" : "-right-full"
      }     md:hidden fixed bg-bgcol w-full top-0 z-20 bottom-0 transition-all duration-500`}
    >
      <div className="absolute right-0 left-0 mx-auto container mt-8 ">
        <div
     
          onClick={() => setIsOpen(false)}
          className="flex justify-end"
        >
          <AiOutlineClose className="text-[21px]" />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen ">
        <div className=" ">
          <ul className=" flex gap-7 justify-center items-center flex-col font-neue font-medium text-[25px]">
            {navLinks.map((items) => (
              <li className="cursor-pointer" key={items.id}>
                <Link
                  onClick={() => setIsOpen(false)}
                  to={items.id}
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  {items.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
