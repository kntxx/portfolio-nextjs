"use client";
import React, { createContext, useState } from "react";
interface NavContextValue {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const NavContext = createContext<NavContextValue>({
  isOpen: false,
  setIsOpen: () => {},
});

const NavContextProvider = ({ children }: { children: JSX.Element | null }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;
