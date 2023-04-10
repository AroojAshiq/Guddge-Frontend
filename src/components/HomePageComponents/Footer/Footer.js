import React from "react";
import { Link } from "react-router-dom";
import {
  Footer1,
  Footer2,
  Footer3,
  FooterIcon1,
  FooterIcon2,
  FooterIcon3,
  FooterIcon4,
} from "../../iconComponent/Icon";
function Footer() {
  return (
    <div>
      <footer className="w-full p-12 bg-[#595959] dark:bg-[#022125] relative z-0 overflow-hidden ">
        <div className="  lg:w-44  lg:h-40 md:w-44 md:w-40 w-32 h-32 absolute  xl:left-[1095px] xl:top-36 lg:left-[800px] lg:top-[150px] md:left-[570px] md:top-[350px]  left-[230px] top-28  z-10  ">
          <Footer1 />
        </div>

        <div className=" lg:w-96  lg:h-36 md:w-80 md:h-36 w-64 h-28 absolute xl:left-[400px] xl:top-20  lg:left-[320px] lg:top-[100px] md:left-[180px] md:top-[340px] left-[110px] top-[800px]  z-10 ">
          <Footer3 />
        </div>

        <div className=" w-16 xl:top-[180px] -left-[0.5px] lg:top-[180px] md:top-[400px] top-[880px] absolute  z-10">
          <Footer2 />
        </div>

        <div className="w-full h-auto relative z-20  ">
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-col-1 xl:gap-28 lg:gap-32 md:gap-16 gap-y-12">
            <div className="xl:w-64 lg:w-60 ">
              <div className="  mb-6 md:mb-2">
                <Link to="/" className="flex items-center">
                  <img
                    src="./logo.svg"
                    className="h-10 mr-3 "
                    alt="FlowBite Logo"
                  />
                </Link>
              </div>
              <div className="mt-3 text-gray-300 text-base font-medium leading-[26px] ">
                <p>
                  Lorem ipsum dolor sit amet consetetur sadi scing elitr sed
                  diam nonumy.
                </p>
              </div>
              <div className="flex mt-8 sm:justify-start space-x-8  ">
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 hover:text-white"
                >
                  <FooterIcon1 />
                </Link>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FooterIcon2 />
                </Link>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FooterIcon3 />
                </Link>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <FooterIcon4 />
                </Link>
              </div>
            </div>

            <div className=" xl:w-56 lg:w-60">
              <h2 className="mb-6 text-xl font-bold leading-[28px] text-gray-900 uppercase text-white">
                contact
              </h2>
              <ul className=" text-base font-medium leading-[24px] text-gray-300 space-y-4">
                <li className="">
                  <Link to="/" className="hover:underline">
                    Site Street Xyz ,Sanfrancico xauausauau{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Talk To Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Xyz@guddge.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="auto">
              <h2 className="mb-6 text-xl font-bold leading-[28px]  text-gray-900 uppercase text-white">
                terms
              </h2>
              <ul className="text-gray-300 text-base font-medium leading-[24px] space-y-7">
                <li>
                  <Link
                    to="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" w-auto">
              <h2 className="mb-6 text-xl font-bold leading-[28px] text-gray-900 uppercase text-white">
                FAQs
              </h2>
              <ul className="text-gray-300 text-base font-medium leading-[24px] space-y-7 ">
                <li>
                  <Link
                    to="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Our Team
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="flex justify-end  w-24   place-self-end  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-arrow-up-square-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"
                  id="mainIconPathAttribute"
                  fill="#4BA9B6"
                ></path>{" "}
              </svg>
            </div> */}
          </div>
        </div>
      </footer>
      <div className=" w-full h-12 flex items-center bg-[#ABB3B6] justify-center ">
        <span className="text-sm  sm:text-center text-black">
          {" "}
          Copyright © 2023{" "}
          <Link to="/" className="hover:underline">
            Guddge™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
