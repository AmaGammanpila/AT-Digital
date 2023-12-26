import React from "react";
import Button from "../Layout/Button";

const Hero = () => {
  return (
    <div className="container">
      <div>
        <h1 className="text-white font-bold text-4xl w-4/5 pl-10 pt-5 pb-5">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>
        <div className="pl-10 pb-8">
          <Button title="Get free consultation" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
