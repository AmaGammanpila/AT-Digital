import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-primaryColor ">
      <div className="flex flex-col items-left md:flex-row md:justify-between md:items-center">
        <div className="md:w-1/3 pl-10 pt-5 pb-5">
          <div className="pb-5">
            <img src={Logo} alt="AT Digital Logo" />
          </div>
          <p className="text-white ">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        <div className="md:w-1/3 pl-10 pb-5 pt-5">
          <h6 className="text-white text-2xl font-semibold">
            Our Technologies
          </h6>
          <div>
            <ul className="text-white font-normal pt-3">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/3 pb-5 pt-5 pl-10">
          <h6 className="text-white text-2xl font-semibold">Our Services</h6>
          <div>
            <ul className="text-white font-normal pt-3">
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing solutions</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
       
        <hr className="bg-white w-3/4 mx-auto " />
   
        <p className="text-white text-center pb-5 pt-3">Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
