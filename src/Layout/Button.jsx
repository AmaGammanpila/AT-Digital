import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" bg-secondaryColor py-2 px-5 mt-4 text-white font-bold uppercase text-1xl rounded-md ">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
