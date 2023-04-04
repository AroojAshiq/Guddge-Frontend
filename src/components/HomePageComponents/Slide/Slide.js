import React from "react";

import { useNavigate } from "react-router-dom";
function Slide({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  return (
    <div>
      <section
        className={`max-w-full lg:max-h-full md:h-full h-[250px]   body-font relative   ${
          darkMode ? "bg-[#F5F5F5]" : "bg-[#07343A]"
        } `}
      >
        <div className=" xl:w-full xl:h-11/12  ">
          <img
            alt="gallery"
            className="w-full object-cover h-full  object-center block"
            src="./Group 11.svg"
          />
        </div>

        <div className="md:w-6/12  lg:w-7/12 w-full p-4  lg:gap-8 gap-6 flex flex-col items-center absolute xl:bottom-24 xl:left-72 lg:left-56 lg:bottom-12  md:left-48 md:bottom-6  bottom-8 ">
          <h1 className=" lg:text-4xl md:text-lg text-sm font-bold text[#434343] dark:text-white text-center">
            The Solution We Offer
          </h1>
          <p className="lg:text-xl md:text-md  text-xs lg:font-medium md:font-medium font-base text-[#6D6D6D] dark:text-white text-center">
            Guddge is a professional services company specialized in delivering
            Information Management, and Business Intelligence solutions for
            corporate and government agencies.
          </p>
          <div className=" flex justify-center gap-8">
            <button
              type="button"
              onClick={() => {
                navigate("/web-development");
              }}
              className=" text-white  bg-[#078CA0]  dark:bg-[#4BA9B6] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-8 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
            >
              Learn More
            </button>

            <button
              type="button"
              onClick={() => {
                navigate("/web-development");
              }}
              className=" text-white  bg-[#078CA0]  dark:bg-[#4BA9B6] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-8 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slide;
