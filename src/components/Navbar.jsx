import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="flex flex-row justify-between md:px-32 bg-primaryColor py-5 px-5">
        <div>
          <Link to="/" className="size-1 cursor-pointer ">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <nav className="hidden md:flex gap-8 font-medium p-1 text-lg text-white cursor-pointer items-center">
          <Link to="services" spy={true} smooth={true} duration={500}>
            SERVICES
          </Link>
          <Link to="about us" spy={true} smooth={true} duration={500}>
            ABOUT US
          </Link>
          <Link to="contact us" spy={true} smooth={true} duration={500}>
            CONTACT US
          </Link>
          <Link to="careers" spy={true} smooth={true} duration={500}>
            CAREERS
          </Link>
        </nav>

        <div className="md:hidden" onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={30} color="white" />
          </div>
        </div>
      </div>

      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-full transition-transform duration-700 bg-primaryColor text-white `}
      >
        <Link to="services" spy={true} smooth={true} duration={500}>
          SERVICES
        </Link>
        <Link to="about us" spy={true} smooth={true} duration={500}>
          ABOUT US
        </Link>
        <Link to="contact us" spy={true} smooth={true} duration={500}>
          CONTACT US
        </Link>
        <Link to="careers" spy={true} smooth={true} duration={500}>
          CAREERS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
