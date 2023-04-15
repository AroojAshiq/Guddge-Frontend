import React from "react";
import { Frame1, Frame2 } from "../iconComponent/Slide";

function Portfolio() {
  return (
    <section className=" bg-[#F5F5F5] dark:bg-[#07343A]  text-black-600 body-font  flex justify-center items-center relative z-0 overflow-hidden  ">
      <div className="w-full absolute flex justify-end items-end">
        <div className="xl:block lg:block md:block hidden xl:w-[550px]  xl:h-[500px]  lg:w-[400px] lg:h-[380px]  md:w-[370px] md:h-[390px]  w-[280px] h-[250px] relative xl:-top-[550px] lg:-top-[900px] md:-top-[880px] -top-[850px] ">
         
          <Frame1 />
        </div>
      </div>
      <div className="w-full absolute flex justify-start xl:block lg:block md:block hidden">
        <div className=" xl:w-[420px] xl:h-[700px]  lg:w-[280px] lg:h-[485px] md:w-[270px] md:h-[420px] w-[220px] h-[400px] relative xl:-top-[280px] lg:-top-[700px] md:-top-[650px] -top-[600px]  bg-gradient-to-t  ">
         
          <Frame2 />
        </div>
      </div>
      <div className="container w-full space-y-12 px-6 py-12 mx-auto ">
        <div className="flex flex-wrap w-full  mb-8 flex-col ">
          <h1 className=" text-base leading-[24px] font-medium  title-font mb-2 text-[#959CB1]">
            Home{" > "}
            <span className="text-base leading-[24px] font-medium  title-font mb-2 text-black dark:text-white">
              {" "}
              About
            </span>
          </h1>
          <h1 className="xl:text-[45px] text-4xl leading-[56px] font-bold   lg:text-start md:text-start text-center  font-medium font-bold title-font mb-2 text-[#4B4B4B]  dark:text-white">
            Portfolio
          </h1>
          <p className="xl:w-[550px] w-full lg:text-start md:text-start text-center text-lg font-normal leading-[29px] text-[#515151] dark:text-[#959CB1]  mt-2 ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex flex-wrap  justify-items-center pb-20  grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1  xl:gap-x-20 lg:gap-12  md:gap-12 gap-y-12 relative z-20 ">
          <div className=" xl:w-96  xl:h-[350px] lg:w-[350px] md:w-80 sm:w-96  rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B] ">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-t-lg"
                src="./portfolio-1.svg"
              />
            </div>

            <div className="h-32  ">
              <h1 className=" text-black dark:text-white text-2xl  font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Performance
              </h1>

              <p className=" text-black dark:text-[#959CB1]  text-base font-medium leading-[24px] mt-6 ml-6 pr-6  text-left">
                Business Intelligence
              </p>
            </div>
          </div>

          <div className=" xl:w-96  xl:h-[350px] lg:w-[350px]  md:w-80 sm:w-96  rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B] ">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-t-lg"
                src="./portfolio-2.svg"
              />
            </div>

            <div className="  h-32 ">
              <h1 className=" text-black dark:text-white  text-2xl font-bold  mt-6 ml-6 pr-6  text-left">
                Program Projects
              </h1>

              <p className=" text-black dark:text-[#959CB1]  text-base font-medium leading-[24px]  mt-6 ml-6 pr-6  text-left">
                Business Intelligence
              </p>
            </div>
          </div>

          <div className=" xl:w-96  xl:h-[350px] lg:w-[350px]  md:w-80 sm:w-96   rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B] ">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-t-lg"
                src="./portfolio-3.svg"
              />
            </div>

            <div className=" h-32  ">
              <h1 className=" text-black  dark:text-white text-2xl font-bold leading-[32px]  mt-6 ml-6 pr-6  text-left">
                Architecture
              </h1>

              <p className=" text-black dark:text-[#959CB1]  text-base font-medium leading-[24px] mt-6 ml-6 pr-6  text-left">
                Information Management
              </p>
            </div>
          </div>

          <div className=" xl:w-96  xl:h-[350px] lg:w-[350px]  md:w-80 sm:w-96   rounded-lg bg-white-900 text-white  bg-[#FFFFFF]  dark:bg-[#04505B]">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-t-lg"
                src="./portfolio-4.svg"
              />
            </div>

            <div className="  h-32 ">
              <h1 className=" text-black dark:text-white text-2xl font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Data Modeling
              </h1>

              <p className=" text-black  dark:text-[#959CB1]  text-base font-medium leading-[24px]  mt-6 ml-6 pr-6  text-left">
                Information Management
              </p>
            </div>
          </div>

          <div className=" xl:w-96  xl:h-[350px] lg:w-[350px]  md:w-80 sm:w-96   rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B]">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-t-lg"
                src="./portfolio-5.svg"
              />
            </div>

            <div className=" h-32  ">
              <h1 className=" text-black dark:text-white text-2xl font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Data Integration
              </h1>

              <p className=" text-black dark:text-[#959CB1]  text-base font-medium leading-[24px]  mt-6 ml-6 pr-6  text-left">
                Information Management
              </p>
            </div>
          </div>

          <div className=" xl:w-96  xl:h-[350px] lg:w-[350px]  md:w-80 sm:w-96   rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B]">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-t-lg"
                src="./portfolio-6.svg"
              />
            </div>

            <div className=" h-32  ">
              <h1 className=" text-black dark:text-white text-2xl font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Mining
              </h1>

              <p className=" text-black dark:text-[#959CB1]  text-base font-medium leading-[24px] mt-6 ml-6 pr-6  text-left">
                Business Intelligence
              </p>
            </div>
          </div>

          <div className=" xl:w-96 xl:h-[350px] lg:w-[350px]  md:w-80 sm:w-96   rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B]">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-t-lg"
                src="./portfolio-7.svg"
              />
            </div>

            <div className="  h-32 ">
              <h1 className=" text-black  dark:text-white text-2xl font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Data Quality
              </h1>

              <p className=" text-black dark:text-[#959CB1]  text-base font-medium leading-[24px] mt-6 ml-6 pr-6  text-left">
                Information Management
              </p>
            </div>
          </div>

          <div className=" xl:w-96  xl:h-[350px] lg:w-[350px]  md:w-80 sm:w-96   rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B]">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-t-lg"
                src="./portfolio-8.svg"
              />
            </div>

            <div className="  h-32 ">
              <h1 className=" text-black dark:text-white text-2xl font-bold leading-[32px] mt-6 ml-6 pr-6  text-left">
                Data Quality
              </h1>

              <p className=" text-black dark:text-[#959CB1]  text-base font-medium leading-[24px]  mt-6 ml-6 pr-6  text-left">
                Information Management
              </p>
            </div>
          </div>

          <div className=" xl:w-96  xl:h-[350px] lg:w-[350px]  md:w-80 sm:w-96   rounded-lg bg-white-900 text-white  bg-[#FFFFFF] dark:bg-[#04505B] ">
            <div className="w-full rounded-lg flex justify-center items-center ">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-t-lg"
                src="./portfolio-9.svg"
              />
            </div>

            <div className="  h-32 ">
              <h1 className=" text-black dark:text-white text-2xl font-bold leading-[32px]  mt-6 ml-6 pr-6  text-left">
                Reporting
              </h1>

              <p className=" text-black  dark:text-[#959CB1] text-base font-medium leading-[24px]  mt-6 ml-6 pr-6  text-left">
                Business Intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
