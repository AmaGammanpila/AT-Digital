import React from "react";
import Image2 from "../assets/image2.png";
import Button from "../Layout/Button";
import Image1 from "../assets/image1.png";
const Services = () => {
  return (
    <div>
      <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
        <div className="w-full md:w-2/4 pl-3">
          <img src={Image2} alt="Image 2" />
        </div>
        <div className="md:w-2/4 md:text-left text-center pb-20">
          <h2 className="text-3xl font-semibold leading-tight text-primaryColor pb-5">
            Web & Mobile App Development
          </h2>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <Button title="Learn More" />
        </div>
      </div>

      <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-52 mx-3 mt-10 pb-20 ">
      <div className="w-full md:w-2/4 pl-3 md:absolute right-24 md:pl-48 ">
          <img src={Image1} alt="" />
        </div>
        
        <div className="md:w-2/4 md:text-left text-center">
          <h2 className="text-3xl font-semibold leading-tight text-primaryColor pb-5">
            Digital Strategy Consulting
          </h2>
          <p>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <Button title="Learn More" />
        </div>
        
      </div>
    </div>
  );
};

export default Services;
