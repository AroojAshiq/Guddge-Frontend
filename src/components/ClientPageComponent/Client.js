import React from "react";
import { Frame1, Frame2 } from "../iconComponent/Slide";

import { Link } from "react-router-dom";
function Client() {
  return (
    <section className=" bg-[#F5F5F5]  w-[100%] dark:bg-[#07343A] flex justify-center items-center  text-black-600 body-font relative z-0  overflow-hidden ">
      <div className="w-full absolute   flex justify-end  ">
        <div className=" xl:block lg:block md:block hidden xl:w-[550px]  xl:h-[500px]  lg:w-[400px] lg:h-[380px]  md:w-[470px] md:h-[390px]  w-[300px] h-[290px] relative xl:-top-[800px] lg:-top-[1460px] md:-top-[1620px]  -top-[620px]  ">
          <Frame1 />
        </div>
      </div>
      <div className="w-full absolute flex justify-start xl:block lg:block md:block hidden">
        <div className=" xl:w-[420px] xl:h-[700px]  lg:w-[280px] lg:h-[485px] md:w-[270px] md:h-[420px] w-[220px] h-[400px] relative xl:-top-[500px] lg:-top-[1200px] md:-top-[1400px] -top-[600px] bg-gradient-to-t  ">
          <Frame2 />
        </div>
      </div>
      <div className="container w-full space-y-12 px-6 py-12 mx-auto ">
        <div className="flex flex-wrap w-full  mb-8 flex-col ">
          <h1 className=" text-base leading-[24px] font-medium  mb-2 text-[#959CB1]">
            Home{" > "}
            <span className="text-base leading-[24px] font-medium  mb-2 text-black dark:text-white">
              {" "}
              clients
            </span>
          </h1>
          <h1 className="xl:text-[45px] text-4xl leading-[56px] font-bold  lg:text-start md:text-start text-center font-medium font-bold title-font mb-2 text-[#4B4B4B] dark:text-white">
            Clients
          </h1>
          <p className="xl:w-[550px] w-full  lg:text-start md:text-start text-center  text-lg font-normal leading-[29px] text-[#515151] dark:text-[#959CB1]  mt-2 ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex flex-wrap  justify-items-center   grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 xl-gap-x-12 xl:gap-y-10 lg:gap-x-2 lg:gap-y-10 md:gap-y-8 md:gap-x-6 sm:gap-y-8 relative z-20 ">
          <div className="xl:w-[400px] xl:h-[490px] lg:w-[390px] lg:h-auto md:w-[330px] md:h-auto w-[310px] h-auto p-4 mt-8 rounded-lg text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded-full object-center block"
                  src="./client-1.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-base font-semibold leading-[20px] text-black  dark:text-white rounded-lg  mb-6 text-center ">
                Amtrak <br></br>{" "}
                <span className="text-[#444444] dark:text-[#959CB1] text-xs font-normal leading-[16px]">
                  {" "}
                  Client
                </span>
              </h2>

              <p className=" text-black dark:text-[#BBBBBB] text-base font-normal leading-[24px] mb-6 mt-6 text-center ">
                Business Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor. dolor.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras sit amet dictum neque, laoreet dolor. dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor. dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit ame
              </p>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-[490px] lg:w-[390px] lg:h-auto md:w-[330px] md:h-auto w-[310px] h-auto  p-4 mt-8 rounded-lg text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded-full object-center block"
                  src="./client-2.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-base font-semibold leading-[20px]  text-black dark:text-white  rounded-lg mb-6 text-center ">
                Bridgestone <br></br>{" "}
                <span className="text-[#444444] dark:text-[#959CB1] text-xs font-normal leading-[16px]">
                  {" "}
                  Client
                </span>
              </h2>

              <p className=" text-black dark:text-[#BBBBBB]  text-base font-normal leading-[24px] mb-6 mt-6  text-center ">
                Business Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor. dolor.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras sit amet dictum neque, laoreet dolor. dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor. dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit ame
              </p>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-[490px] lg:w-[390px] lg:h-auto md:w-[330px] md:h-auto w-[310px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded-full object-center block"
                  src="./client-3.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className=" text-base font-semibold leading-[20px] text-black  dark:text-white rounded-lg  mb-6 text-center ">
                Barclay’s Capital <br></br>{" "}
                <span className="text-[#444444]  dark:text-[#959CB1] text-xs font-normal leading-[16px]">
                  {" "}
                  Client
                </span>
              </h2>

              <p className=" text-black  dark:text-[#BBBBBB] text-base font-normal leading-[24px] mt-6 mb-6  text-center ">
                Business Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor. dolor.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras sit amet dictum neque, laoreet dolor. dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor. dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit ame
              </p>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-[490px] lg:w-[390px] lg:h-auto md:w-[330px] md:h-auto w-[310px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white   xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded-full object-center block"
                  src="./client-4.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-base font-semibold leading-[20px]  text-black  dark:text-white  rounded-lg  mb-6 text-center ">
                Dassault Systems <br></br>{" "}
                <span className="text-[#444444] dark:text-[#959CB1] text-xs font-normal leading-[16px[">
                  {" "}
                  Client
                </span>
              </h2>

              <p className=" text-black  dark:text-[#BBBBBB] text-base font-normal leading-[24px] mb-6 mt-6 text-center">
                Business Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor. dolor.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras sit amet dictum neque, laoreet dolor. dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor. dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit ame
              </p>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-[490px] lg:w-[390px] lg:h-auto md:w-[330px] md:h-auto w-[310px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B]  ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded-full object-center block"
                  src="./client-5.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-base font-semibold leading-[20px]  text-black  dark:text-white  rounded-lg  mb-6 text-center ">
                Enterprise Products Partners L.P. <br></br>{" "}
                <span className="text-[#444444] dark:text-[#959CB1] text-xs font-normal leading-[16px]  ">
                  {" "}
                  Company
                </span>
              </h2>

              <p className=" text-black   dark:text-[#BBBBBB] text-base font-normal leading-[24px] mb-6 mt-6   text-center">
                Business Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor. dolor.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras sit amet dictum neque, laoreet dolor. dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor. dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit ame
              </p>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-[490px] lg:w-[390px] lg:h-auto md:w-[330px] md:h-auto w-[310px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded-full object-center block"
                  src="./client-6.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-base font-semibold leading-[20px] text-black  dark:text-white rounded-lg  mb-6 text-center ">
                Lucent Technologies <br></br>{" "}
                <span className="text-[#444444] dark:text-[#959CB1] text-xs font-normal leading-[16px] ">
                  {" "}
                  Client
                </span>
              </h2>

              <p className=" text-black  dark:text-[#BBBBBB] text-base font-normal leading[24px] mb-6 mt-6  text-center ">
                Business Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor. dolor.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras sit amet dictum neque, laoreet dolor. dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor. dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit ame
              </p>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-[490px] lg:w-[390px] lg:h-auto  md:w-[330px] md:h-auto w-[310px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded-full object-center block"
                  src="./client-7.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className=" text-base font-semibold leading-[20px]  text-black  dark:text-white  rounded-lg  mb-6 text-center ">
                Dassault Systems <br></br>{" "}
                <span className="text-[#444444] text-xs font-normal leading-[16px] dark:text-[#959CB1]">
                  {" "}
                  Client
                </span>
              </h2>

              <p className=" text-black  dark:text-[#BBBBBB] text-base font-normal leading[24px] mb-6 mt-6  text-center ">
                Business Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor. dolor.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras sit amet dictum neque, laoreet dolor. dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor. dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit ame
              </p>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-[490px] lg:w-[390px] lg:h-auto md:w-[330px] md:h-auto w-[310px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded-full object-center block"
                  src="./client-8.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-base font-semibold leading-[20px]  text-black  dark:text-white  rounded-lg  mb-6 text-center ">
                Enterprise Products Partners L.P. <br></br>{" "}
                <span className="text-[#444444] text-xs font-normal leading-[16px] dark:text-[#959CB1]">
                  {" "}
                  Company
                </span>
              </h2>

              <p className=" text-black  dark:text-[#BBBBBB] text-base font-normal leading-[24px] mb-6 mt-6  text-center ">
                Business Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor. dolor.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras sit amet dictum neque, laoreet dolor. dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor. dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit ame
              </p>
            </div>
          </div>

          <div className="xl:w-[400px] xl:h-[490px] lg:w-[390px] lg:h-auto md:w-[330px] md:h-auto w-[310px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="h-20 w-20  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full rounded-full object-center block"
                  src="./client-9.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className=" text-base font-semibold leading-[20px]  text-black  dark:text-white rounded-lg  mb-6 text-center ">
                Lucent Technologies <br></br>{" "}
                <span className="text-[#444444] text-xs font-normal leading-[16px] dark:text-[#959CB1]">
                  {" "}
                  Client
                </span>
              </h2>

              <p className=" text-black  dark:text-[#BBBBBB] text-base font-normal leading-[24px] mb-6 mt-6  text-center ">
                Business Description Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit amet dictum neque, laoreet
                dolor. dolor.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras sit amet dictum neque, laoreet dolor. dolor.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet
                dictum neque, laoreet dolor. dolor.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Cras sit ame
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center   bg-[#F5F5F5]  dark:bg-[#07343A] px-4 py-3 sm:px-6 ">
          <div className="flex flex-1 justify-center sm:hidden">
            <Link
              to="/"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </Link>
            <Link
              to="/"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </Link>
          </div>
          <div className="hidden sm:flex sm:flex-1 items-center justify-center">
            <div className="">
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm bg-[#ABB3B6] dark:bg-[#959CB126]"
                aria-label="Pagination"
              >
                <Link
                  to="/"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#343434"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <Link
                  to="/"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white  dark:text-[#959CB1]  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </Link>
                <Link
                  to="/"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </Link>
                <Link
                  to="/"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]   ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </Link>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <Link
                  to="/"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </Link>
                <Link
                  to="/"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </Link>
                <Link
                  to="/"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </Link>
                <Link
                  to="/"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-[#343434] dark:text-[#959CB1]  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#343434"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
