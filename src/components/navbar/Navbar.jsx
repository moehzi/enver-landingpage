import logo from "../../assets/enver.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import React, { useState } from "react";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">Services</a>
    </p>
    <p>
      <a href="#possibility">Our Project</a>
    </p>
    <p>
      <a href="#features">About Us</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className="relative z-10 flex items-center justify-between mt-4 layout">
      <div className="flex-1 ml-4 md:ml-0">
        <img src={logo} alt="logo" />
      </div>
      <div className="items-center flex-auto hidden justify-evenly md:flex">
        <Menu />
      </div>
      <div className="justify-end flex-1 hidden md:flex">
        <button className="px-8 py-2 border-2 border-solid rounded-md">
          Contact us
        </button>
      </div>
      <div className="flex mr-4 md:hidden ">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="flex flex-col items-center w-full h-screen py-3 top-1 justify-evenly md:hidden">
          <Menu />
          <button className="px-8 py-2 border-2 border-solid rounded-md">
            Contact us
          </button>
        </div>
      )}
    </section>
  );
};

export default Navbar;
