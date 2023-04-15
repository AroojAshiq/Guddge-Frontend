import React from "react";
import {Feature2, Feature3, Feature4 } from "../../iconComponent/Icon";

import { useNavigate } from "react-router-dom";

function Choose({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  return (
    <div>
      <section
        className={`3xl:px-[70px] 2xl:px-[50px] xl:px-[40px] lg:px-[40px] md:px-[40px] px-2 overflow-hidden  ${
          darkMode ? "bg-[#CDCDCD42]" : "bg-[#003A42]"
        } text-black-600 body-font`}
      >
        <div className="container  py-28  mx-auto ">
          <div className=" flex flex-wrap w-full mb-8 flex-col  items-center text-center">
            <h1
              className={`xl:text-4xl  text-4xl font-bold title-font mb-2  ${
                darkMode ? "text-[#093E46]" : " text-white"
              }`}
            >
              Main Features
            </h1>
            <p className="xl:w-[530px] lg:w-1/2 md:w-3/4 w-full leading-7 text-lg font-normal text-[#535353] dark:text-[#959CB1] text-center mt-4 ">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="flex flex-wrap   justify-center justify-items-center w-ful5 h-auto  grid 2xl:grid-cols-4  xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 3xl:gap-12 2xl:gap-8 xl:gap-4 lg:gap-x-48 lg:gap-y-7 md:gap-8 gap-y-12 ">
          <div className="3xl:w-[410px] 2xl:w-[350px] xl:w-[290px]  lg:w-[370px] md:w-80  w-[350px]     flex justify-center items-center flex justify-self-center ">
              <div className=" w-full rounded-lg bg-[#F9F9F9] dark:bg-[#04505B] text-white  shadow-lg  ">
                <div className="p-4 rounded-lg flex justify-center items-center  ">
                  <div className="  mb-2 mt-2 p-2 2xl:w-32 2xl:h-28 w-20 h-20 text-[#093E46] dark:text-[#77EEFF]  bg-[#F4F4F4] dark:bg-[#013339] flex justify-center items-center rounded-lg">
                    <Feature2 />
                  </div>
                </div>
                <div>
                  <h2 className=" 2xl:text-3xl text-2xl text-[#093E46] leading-8 dark:text-white rounded-lg font-bold title-font mb-6 text-center ">
                  End To End Services
                  </h2>

                  <p className=" text-[#70888C]  dark:text-[#959CB1] 2xl:text-lg text-base font-medium leading-[26px] mb-6 mt-6 pl-8 pr-6  text-center">
                    Tuae nam ex similique incidunt expedita exerci tationem
                    laudantium. Repellendus quisquam numquam perferendis earum
                    sapiente non tempore? Fugit repellat ut maiores.
                  </p>
                  <div className=" p-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/");
                      }}
                      className=" text-white w-full xl:h-[56px] bg-[#078CA0] dark:bg-[#4BA9B6] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold leading-6 rounded-lg 2xl:text-lg text-base   py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-500  mb-2 "
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="3xl:w-[410px] 2xl:w-[350px] xl:w-[290px]  lg:w-[370px] md:w-80  w-[350px]     flex justify-center items-center flex justify-self-center ">
              <div className=" w-full rounded-lg bg-[#F9F9F9] dark:bg-[#04505B] text-white  shadow-lg  ">
                <div className="p-4 rounded-lg flex justify-center items-center  ">
                  <div className="  mb-2 mt-2 p-2 2xl:w-32 2xl:h-28 w-20 h-20 text-[#093E46] dark:text-[#77EEFF]  bg-[#F4F4F4] dark:bg-[#013339] flex justify-center items-center rounded-lg">
                    <Feature2 />
                  </div>
                </div>
                <div>
                  <h2 className=" 2xl:text-3xl text-2xl text-[#093E46] leading-8 dark:text-white rounded-lg font-bold title-font mb-6 text-center ">
                    IT Strategy
                  </h2>

                  <p className=" text-[#70888C]  dark:text-[#959CB1] 2xl:text-lg text-base font-medium leading-[26px] mb-6 mt-6 pl-8 pr-6  text-center">
                    Tuae nam ex similique incidunt expedita exerci tationem
                    laudantium. Repellendus quisquam numquam perferendis earum
                    sapiente non tempore? Fugit repellat ut maiores.
                  </p>
                  <div className=" p-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/");
                      }}
                      className=" text-white w-full xl:h-[56px] bg-[#078CA0] dark:bg-[#4BA9B6] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold leading-6 rounded-lg 2xl:text-lg text-base   py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-500  mb-2 "
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" 3xl:w-[410px] 2xl:w-[350px] xl:w-[290px]  lg:w-[370px] md:w-80  w-[350px]  flex justify-center items-center flex justify-self-center">
              <div className="   w-full rounded-lg bg-[#F9F9F9] dark:bg-[#04505B] text-white  shadow-lg    ">
                <div className=" p-4 rounded-lg flex justify-center items-center   ">
                  <div className="  mb-2 mt-2 2xl:w-32 2xl:h-28 w-20  h-20 text-[#093E46] dark:text-[#77EEFF]  bg-[#F4F4F4] dark:bg-[#013339] flex justify-center items-center rounded-lg">
                    <Feature3 />
                  </div>
                </div>
                <div>
                  <h2 className=" 2xl:text-3xl text-2xl text-[#093E46] leading-8 dark:text-white   rounded-lg font-medium title-font mb-6 text-center ">
                    Cyber Security
                  </h2>

                  <p className="  text-[#70888C] dark:text-[#959CB1] 2xl:text-lg text-base font-medium leading-[26px] mb-6 mt-6 pl-8 pr-6  text-center">
                    Tuae nam ex similique incidunt expedita exerci tationem
                    laudantium. Repellendus quisquam numquam perferendis earum
                    sapiente non tempore? Fugit repellat ut maiores.
                  </p>
                  <div className=" p-4 flex justify-center">
                  <button
                      type="button"
                      onClick={() => {
                        navigate("/");
                      }}
                      className=" text-white w-full xl:h-[56px] bg-[#078CA0] dark:bg-[#4BA9B6] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold leading-6 rounded-lg 2xl:text-lg text-base   py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-500  mb-2 "
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="3xl:w-[410px] 2xl:w-[350px] xl:w-[290px]  lg:w-[370px] md:w-80 w-[350px]   flex justify-center items-center flex justify-self-center ">
              <div className=" w-full rounded-lg bg-[#F9F9F9] dark:bg-[#04505B] text-white  shadow-lg   ">
                <div className="p-4 rounded-lg flex justify-center items-center  ">
                  <div className="  mb-2 mt-2 2xl:w-32 2xl:h-28 w-20  h-20 text-[#093E46] dark:text-[#77EEFF]  bg-[#F4F4F4] dark:bg-[#013339] flex justify-center items-center rounded-lg">
                    <Feature4 />
                  </div>
                </div>
                <div>
                  <h2 className=" 2xl:text-3xl text-2xl text-[#093E46] leading-8 dark:text-white  rounded-lg font-medium title-font mb-6 text-center ">
                    Cloud Computing
                  </h2>

                  <p className=" text-[#70888C]  dark:text-[#959CB1] 2xl:text-lg text-base font-medium leading-[26px] mb-6 mt-6 pl-8 pr-6  text-center">
                    Tuae nam ex similique incidunt expedita exerci tationem
                    laudantium. Repellendus quisquam numquam perferendis earum
                    sapiente non tempore? Fugit repellat ut maiores.
                  </p>
                  <div className=" p-4 flex justify-center">
                  <button
                      type="button"
                      onClick={() => {
                        navigate("/");
                      }}
                      className=" text-white w-full xl:h-[56px] bg-[#078CA0] dark:bg-[#4BA9B6] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold leading-6 rounded-lg 2xl:text-lg text-base   py-2.5 text-center inline-flex justify-center items-center dark:focus:ring-gray-500  mb-2 "
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Choose;
