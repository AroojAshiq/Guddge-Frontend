import React from "react";
import { Frame1, Frame2 } from "../iconComponent/Slide";

function Career() {
  return (
    <section className=" bg-[#F5F5F5]  dark:bg-[#07343A]   flex justify-center items-center text-black-600 body-font  flex justify-center items-center relative z-0 overflow-hidden  ">
      <div className="w-full absolute   flex justify-end  ">
        <div className=" xl:block lg:block md:block hidden xl:w-[550px]  xl:h-[500px]  lg:w-[400px] lg:h-[380px]  md:w-[370px] md:h-[390px]  w-[300px] h-[290px] relative xl:-top-[240px] lg:-top-[300px] md:-top-[300px]  -top-[620px]  ">
          <Frame1 />
        </div>
      </div>
      <div className="w-full absolute flex justify-start xl:block lg:block md:block hidden">
        <div className=" xl:w-[420px] xl:h-[700px]  lg:w-[280px] lg:h-[485px] md:w-[270px] md:h-[420px] w-[220px] h-[400px] relative xl:-top-[50px] lg:-top-[60px] md:-top-[70px] -top-[600px] bg-gradient-to-t  ">
          <Frame2 />
        </div>
      </div>

      <div className="container w-full  px-6 py-12 mx-auto  z-10">
        <div className="flex justify-between lg:flex-row md:flex-row flex-col">
          <div className="flex flex-wrap lg:w-7/12 md:w-7/12 w-full mb-8 flex-col lg:items-start ">
            <h1 className="text-base leading-[24px] font-medium  mb-2 text-[#959CB1]">
              Home{" > "}
              <span className="text-base leading-[24px] font-medium  mb-2 text-black dark:text-white">
                {" "}
                CareerPage
              </span>
            </h1>
            <h1 className="xl:text-[45px] text-4xl leading-[56px] font-bold lg:text-start md:text-start text-center font-medium font-bold title-font mb-2 text-[#4B4B4B] dark:text-white">
              Careers
            </h1>
            <p className=" xl:w-[550px] md:w-[400px] w-full lg:text-start md:text-start text-center text-lg font-normal leading-[29px] text-[#515151] dark:text-[#959CB1]   ">
              Join our dynamic team and make a positive impact. Check out our
              current job openings for growth opportunities.
            </p>
          </div>

          <div className="flex justify-center items-center lg:mt-8 md:mt-12 mt-0 ">
            <div className="mb-3 xl:w-96  h-[80px] p-4  flex  items-center bg-white dark:bg-[#003036] rounded-lg">
              <div className="relative  flex flex justify-center w-full flex-wrap items-stretch  gap-6 ">
                <input
                  type="search"
                  className="relative m-0 -mr-px block w-[1%] h-[50px] min-w-0 flex-auto rounded-lg  bg-[#ECECEC]    dark:bg-[#01434B] dark:border-none   bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out  focus:text-neutral-700  focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Search Career"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
                <button
                  className="relative z-[2] flex items-center rounded-lg bg-primary bg-[#078CA0] px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  justify-center relative z-20 mb-8 mt-4">
          <div className=" flex flex-wrap lg:w-10/12 md:w-11/12 w-full  h-full py-8 rounded-2xl justify-center space-y-6  mb-8 bg-[#E7E7E7] dark:bg-[#04505B]  border border-[#E7E7E7] dark:border-[#08616CF7]">
            <div className="  w-11/12   h-full p-2 space-y-4 rounded-2xl bg-white  dark:bg-[#042A2F]   ">
              <div className="w-full h-auto rounded-2xl ">
                <div className=" relative w-full rounded-2xl  bg-[#F9F9F9]  dark:bg-[#042A2F]  ">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
                  />
                  <div className=" bg-[#F9F9F9]  dark:bg-[#042A2F]  h-16 w-full p-6 flex items-center rounded-2xl    ">
                    <h1 className=" xl:text-2xl lg:text-2xl md:text-2xl text-md leading-[32px] font-bold text-black dark:text-white ">
                      Data Analyst Require For Guddage
                    </h1>
                  </div>
                  <div className="absolute top-5 right-3 text-white  transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      className="w-6 h-6 stroke-black dark:stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full bg-[#F9F9F9] dark:bg-[#042A2F] rounded-lg ">
                    <div className="w-full h-auto rounded-lg  ">
                      <div className="  overflow-hidden transition-all duration-500 max-h-auto peer-checked:h-auto  w-full  h-auto p-6 space-y-12 rounded-2xl   ">
                        <div className="w-full h-auto  space-y-4 text-[#3F3F3F] dark:text-[#959CB1] ">
                          <p className=" leading-[28px] text-lg  font-medium lg:text-start md:text-start text-center">
                            <span className="font-semibold dark:text-white ">
                              Company Overview:{" "}
                            </span>{" "}
                            Guddage is a fast-growing company in the healthcare
                            industry that specializes in creating innovative
                            solutions to improve patient care. Our team is made
                            up of driven and passionate individuals who are
                            committed to making a difference in the lives of
                            patients around the world.<br></br>
                            <span className="font-semibold dark:text-white  ">
                              Job Overview:{" "}
                            </span>{" "}
                            We are seeking a talented Data Analyst to join our
                            team. The successful candidate will be responsible
                            for collecting, analyzing, and interpreting complex
                            data sets to provide insights and recommendations
                            that will drive business growth and improve patient
                            outcomes. <br></br>{" "}
                            <span className="font-semibold dark:text-white ">
                              Key Responsibilities:
                            </span>
                            <br></br>
                            Collaborate with cross-functional teams to define
                            and prioritize business questions and objectives
                          </p>

                          <ul className="list-reset text-[#3F3F3F]  dark:text-[#959CB1]  space-y-2  text-grey-darker rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]     gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill "
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collaborate with cross-functional teams to define
                              and prioritize business questions and objectives
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collect and analyze large data sets using
                              statistical methods and software tools
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Interpret and present data insights in a clear and
                              concise manner to stakeholders
                            </li>
                          </ul>

                          <h1 className=" text-lg font-semibold leading-[28px]  lg:text-start md:text-start text-center dark:text-white">
                            Requirements:
                          </h1>

                          <ul className="list-reset text-black space-y-2  text-[#3F3F3F] dark:text-[#959CB1] rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Bachelor's or Master's degree in a relevant field
                              such as Computer Science, Mathematics, Statistics,
                              or Data Science
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Proficiency in SQL and experience with data
                              visualization tools such as Tableau or PowerBI
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Experience working with electronic health records
                              (EHR) or other healthcare data sources is a plus
                            </li>
                          </ul>
                          <p className="text-lg font-medium leading-[28px]   lg:text-start md:text-start text-center">
                            If you are a highly motivated and analytical
                            individual with a passion for improving patient
                            outcomes through data-driven insights, we encourage
                            you to apply for this exciting opportunity.
                          </p>
                        </div>
                        <div className=" w-full  p-2 flex  space rounded-2xl justify-between bg-white dark:bg-[#042A2F] z-20  flex lg:flex-row md:flex-row flex-col ">
                          <div className="w-auto h-40 flex justify-center items-center    ">
                            <ul className="list-reset text-black space-y-2 mt-2  text-grey-darker rounded ">
                              <h1 className="  text-2xl  font-bold leading-[32px] lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base   font-medium leading-[20px] text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>

                          <div className="lg:w-0.5 md:w-0.5 w-auto lg:h-36 md:h-40 h-0.5  lg:mt-5 md:mt-0 mt-4 flex justify-center items-center border border-[#828282]  bg-[#828282]"></div>

                          <div className="w-auto h-40 flex items-center lg:justify-end justify-center  lg:ml-0 md:ml-6 ml-0  ">
                            <ul className="list-reset text-black space-y-2 mt-2 text-grey-darker rounded ">
                              <h1 className=" text-2xl  font-bold leading-[32px] font-normal font-semibold lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2  "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  {" "}
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  w-11/12   h-full p-2 space-y-4 rounded-2xl bg-white  dark:bg-[#042A2F]   ">
              <div className="w-full h-auto rounded-2xl ">
                <div className=" relative w-full rounded-2xl  bg-[#F9F9F9]  dark:bg-[#042A2F]  ">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
                  />
                  <div className=" bg-[#F9F9F9]  dark:bg-[#042A2F]  h-16 w-full p-6 flex items-center rounded-2xl    ">
                    <h1 className=" xl:text-2xl lg:text-2xl md:text-2xl text-md leading-[32px] font-bold text-black dark:text-white ">
                      Digital Marketing Specialist For Guddge
                    </h1>
                  </div>
                  <div className="absolute top-5 right-3 text-white  transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      className="w-6 h-6 stroke-black dark:stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full bg-[#F9F9F9] dark:bg-[#042A2F] rounded-lg ">
                    <div className="w-full h-auto rounded-lg  ">
                      <div className="  overflow-hidden transition-all duration-500 max-h-auto peer-checked:h-auto  w-full  h-auto p-6 space-y-12 rounded-2xl   ">
                        <div className="w-full h-auto  space-y-4 text-[#3F3F3F] dark:text-[#959CB1] ">
                          <p className=" leading-[28px] text-lg  font-medium lg:text-start md:text-start text-center">
                            <span className="font-semibold dark:text-white ">
                              Company Overview:{" "}
                            </span>{" "}
                            Guddage is a fast-growing company in the healthcare
                            industry that specializes in creating innovative
                            solutions to improve patient care. Our team is made
                            up of driven and passionate individuals who are
                            committed to making a difference in the lives of
                            patients around the world.<br></br>
                            <span className="font-semibold dark:text-white  ">
                              Job Overview:{" "}
                            </span>{" "}
                            We are seeking a talented Data Analyst to join our
                            team. The successful candidate will be responsible
                            for collecting, analyzing, and interpreting complex
                            data sets to provide insights and recommendations
                            that will drive business growth and improve patient
                            outcomes. <br></br>{" "}
                            <span className="font-semibold dark:text-white ">
                              Key Responsibilities:
                            </span>
                            <br></br>
                            Collaborate with cross-functional teams to define
                            and prioritize business questions and objectives
                          </p>

                          <ul className="list-reset text-[#3F3F3F]  dark:text-[#959CB1]  space-y-2  text-grey-darker rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]     gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill "
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collaborate with cross-functional teams to define
                              and prioritize business questions and objectives
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collect and analyze large data sets using
                              statistical methods and software tools
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Interpret and present data insights in a clear and
                              concise manner to stakeholders
                            </li>
                          </ul>

                          <h1 className=" text-lg font-semibold leading-[28px]  lg:text-start md:text-start text-center dark:text-white">
                            Requirements:
                          </h1>

                          <ul className="list-reset text-black space-y-2  text-[#3F3F3F] dark:text-[#959CB1] rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Bachelor's or Master's degree in a relevant field
                              such as Computer Science, Mathematics, Statistics,
                              or Data Science
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Proficiency in SQL and experience with data
                              visualization tools such as Tableau or PowerBI
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Experience working with electronic health records
                              (EHR) or other healthcare data sources is a plus
                            </li>
                          </ul>
                          <p className="text-lg font-medium leading-[28px]   lg:text-start md:text-start text-center">
                            If you are a highly motivated and analytical
                            individual with a passion for improving patient
                            outcomes through data-driven insights, we encourage
                            you to apply for this exciting opportunity.
                          </p>
                        </div>
                        <div className=" w-full  p-2 flex  space rounded-2xl justify-between bg-white dark:bg-[#042A2F] z-20  flex lg:flex-row md:flex-row flex-col ">
                          <div className="w-auto h-40 flex justify-center items-center    ">
                            <ul className="list-reset text-black space-y-2 mt-2  text-grey-darker rounded ">
                              <h1 className="  text-2xl  font-bold leading-[32px] lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base   font-medium leading-[20px] text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>

                          <div className="lg:w-0.5 md:w-0.5 w-auto lg:h-36 md:h-40 h-0.5  lg:mt-5 md:mt-0 mt-4 flex justify-center items-center border border-[#828282]  bg-[#828282]"></div>

                          <div className="w-auto h-40 flex items-center lg:justify-end justify-center  lg:ml-0 md:ml-6 ml-0  ">
                            <ul className="list-reset text-black space-y-2 mt-2 text-grey-darker rounded ">
                              <h1 className=" text-2xl  font-bold leading-[32px] font-normal font-semibold lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2  "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  {" "}
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  w-11/12   h-full p-2 space-y-4 rounded-2xl bg-white  dark:bg-[#042A2F]   ">
              <div className="w-full h-auto rounded-2xl ">
                <div className=" relative w-full rounded-2xl  bg-[#F9F9F9]  dark:bg-[#042A2F]  ">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
                  />
                  <div className=" bg-[#F9F9F9]  dark:bg-[#042A2F]  h-16 w-full p-6 flex items-center rounded-2xl    ">
                    <h1 className=" xl:text-2xl lg:text-2xl md:text-2xl text-md leading-[32px] font-bold text-black dark:text-white ">
                      Software Engineer Require
                    </h1>
                  </div>
                  <div className="absolute top-5 right-3 text-white  transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      className="w-6 h-6 stroke-black dark:stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full bg-[#F9F9F9] dark:bg-[#042A2F] rounded-lg ">
                    <div className="w-full h-auto rounded-lg  ">
                      <div className="  overflow-hidden transition-all duration-500 max-h-auto peer-checked:h-auto  w-full  h-auto p-6 space-y-12 rounded-2xl   ">
                        <div className="w-full h-auto  space-y-4 text-[#3F3F3F] dark:text-[#959CB1] ">
                          <p className=" leading-[28px] text-lg  font-medium lg:text-start md:text-start text-center">
                            <span className="font-semibold dark:text-white ">
                              Company Overview:{" "}
                            </span>{" "}
                            Guddage is a fast-growing company in the healthcare
                            industry that specializes in creating innovative
                            solutions to improve patient care. Our team is made
                            up of driven and passionate individuals who are
                            committed to making a difference in the lives of
                            patients around the world.<br></br>
                            <span className="font-semibold dark:text-white  ">
                              Job Overview:{" "}
                            </span>{" "}
                            We are seeking a talented Data Analyst to join our
                            team. The successful candidate will be responsible
                            for collecting, analyzing, and interpreting complex
                            data sets to provide insights and recommendations
                            that will drive business growth and improve patient
                            outcomes. <br></br>{" "}
                            <span className="font-semibold dark:text-white ">
                              Key Responsibilities:
                            </span>
                            <br></br>
                            Collaborate with cross-functional teams to define
                            and prioritize business questions and objectives
                          </p>

                          <ul className="list-reset text-[#3F3F3F]  dark:text-[#959CB1]  space-y-2  text-grey-darker rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]     gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill "
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collaborate with cross-functional teams to define
                              and prioritize business questions and objectives
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collect and analyze large data sets using
                              statistical methods and software tools
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Interpret and present data insights in a clear and
                              concise manner to stakeholders
                            </li>
                          </ul>

                          <h1 className=" text-lg font-semibold leading-[28px]  lg:text-start md:text-start text-center dark:text-white">
                            Requirements:
                          </h1>

                          <ul className="list-reset text-black space-y-2  text-[#3F3F3F] dark:text-[#959CB1] rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Bachelor's or Master's degree in a relevant field
                              such as Computer Science, Mathematics, Statistics,
                              or Data Science
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Proficiency in SQL and experience with data
                              visualization tools such as Tableau or PowerBI
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Experience working with electronic health records
                              (EHR) or other healthcare data sources is a plus
                            </li>
                          </ul>
                          <p className="text-lg font-medium leading-[28px]   lg:text-start md:text-start text-center">
                            If you are a highly motivated and analytical
                            individual with a passion for improving patient
                            outcomes through data-driven insights, we encourage
                            you to apply for this exciting opportunity.
                          </p>
                        </div>
                        <div className=" w-full  p-2 flex  space rounded-2xl justify-between bg-white dark:bg-[#042A2F] z-20  flex lg:flex-row md:flex-row flex-col ">
                          <div className="w-auto h-40 flex justify-center items-center    ">
                            <ul className="list-reset text-black space-y-2 mt-2  text-grey-darker rounded ">
                              <h1 className="  text-2xl  font-bold leading-[32px] lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base   font-medium leading-[20px] text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>

                          <div className="lg:w-0.5 md:w-0.5 w-auto lg:h-36 md:h-40 h-0.5  lg:mt-5 md:mt-0 mt-4 flex justify-center items-center border border-[#828282]  bg-[#828282]"></div>

                          <div className="w-auto h-40 flex items-center lg:justify-end justify-center  lg:ml-0 md:ml-6 ml-0  ">
                            <ul className="list-reset text-black space-y-2 mt-2 text-grey-darker rounded ">
                              <h1 className=" text-2xl  font-bold leading-[32px] font-normal font-semibold lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2  "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  {" "}
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  w-11/12   h-full p-2 space-y-4 rounded-2xl bg-white  dark:bg-[#042A2F]   ">
              <div className="w-full h-auto rounded-2xl ">
                <div className=" relative w-full rounded-2xl  bg-[#F9F9F9]  dark:bg-[#042A2F]  ">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
                  />
                  <div className=" bg-[#F9F9F9]  dark:bg-[#042A2F]  h-16 w-full p-6 flex items-center rounded-2xl    ">
                    <h1 className=" xl:text-2xl lg:text-2xl md:text-2xl text-md leading-[32px] font-bold text-black dark:text-white ">
                      Financial Analyst Require
                    </h1>
                  </div>
                  <div className="absolute top-5 right-3 text-white  transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      className="w-6 h-6 stroke-black dark:stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full bg-[#F9F9F9] dark:bg-[#042A2F] rounded-lg ">
                    <div className="w-full h-auto rounded-lg  ">
                      <div className="  overflow-hidden transition-all duration-500 max-h-auto peer-checked:h-auto  w-full  h-auto p-6 space-y-12 rounded-2xl   ">
                        <div className="w-full h-auto  space-y-4 text-[#3F3F3F] dark:text-[#959CB1] ">
                          <p className=" leading-[28px] text-lg  font-medium lg:text-start md:text-start text-center">
                            <span className="font-semibold dark:text-white ">
                              Company Overview:{" "}
                            </span>{" "}
                            Guddage is a fast-growing company in the healthcare
                            industry that specializes in creating innovative
                            solutions to improve patient care. Our team is made
                            up of driven and passionate individuals who are
                            committed to making a difference in the lives of
                            patients around the world.<br></br>
                            <span className="font-semibold dark:text-white  ">
                              Job Overview:{" "}
                            </span>{" "}
                            We are seeking a talented Data Analyst to join our
                            team. The successful candidate will be responsible
                            for collecting, analyzing, and interpreting complex
                            data sets to provide insights and recommendations
                            that will drive business growth and improve patient
                            outcomes. <br></br>{" "}
                            <span className="font-semibold dark:text-white ">
                              Key Responsibilities:
                            </span>
                            <br></br>
                            Collaborate with cross-functional teams to define
                            and prioritize business questions and objectives
                          </p>

                          <ul className="list-reset text-[#3F3F3F]  dark:text-[#959CB1]  space-y-2  text-grey-darker rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]     gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill "
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collaborate with cross-functional teams to define
                              and prioritize business questions and objectives
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collect and analyze large data sets using
                              statistical methods and software tools
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Interpret and present data insights in a clear and
                              concise manner to stakeholders
                            </li>
                          </ul>

                          <h1 className=" text-lg font-semibold leading-[28px]  lg:text-start md:text-start text-center dark:text-white">
                            Requirements:
                          </h1>

                          <ul className="list-reset text-black space-y-2  text-[#3F3F3F] dark:text-[#959CB1] rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Bachelor's or Master's degree in a relevant field
                              such as Computer Science, Mathematics, Statistics,
                              or Data Science
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Proficiency in SQL and experience with data
                              visualization tools such as Tableau or PowerBI
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Experience working with electronic health records
                              (EHR) or other healthcare data sources is a plus
                            </li>
                          </ul>
                          <p className="text-lg font-medium leading-[28px]   lg:text-start md:text-start text-center">
                            If you are a highly motivated and analytical
                            individual with a passion for improving patient
                            outcomes through data-driven insights, we encourage
                            you to apply for this exciting opportunity.
                          </p>
                        </div>
                        <div className=" w-full  p-2 flex  space rounded-2xl justify-between bg-white dark:bg-[#042A2F] z-20  flex lg:flex-row md:flex-row flex-col ">
                          <div className="w-auto h-40 flex justify-center items-center    ">
                            <ul className="list-reset text-black space-y-2 mt-2  text-grey-darker rounded ">
                              <h1 className="  text-2xl  font-bold leading-[32px] lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base   font-medium leading-[20px] text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>

                          <div className="lg:w-0.5 md:w-0.5 w-auto lg:h-36 md:h-40 h-0.5  lg:mt-5 md:mt-0 mt-4 flex justify-center items-center border border-[#828282]  bg-[#828282]"></div>

                          <div className="w-auto h-40 flex items-center lg:justify-end justify-center  lg:ml-0 md:ml-6 ml-0  ">
                            <ul className="list-reset text-black space-y-2 mt-2 text-grey-darker rounded ">
                              <h1 className=" text-2xl  font-bold leading-[32px] font-normal font-semibold lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2  "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  {" "}
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  w-11/12   h-full p-2 space-y-4 rounded-2xl bg-white  dark:bg-[#042A2F]   ">
              <div className="w-full h-auto rounded-2xl ">
                <div className=" relative w-full rounded-2xl  bg-[#F9F9F9]  dark:bg-[#042A2F]  ">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
                  />
                  <div className=" bg-[#F9F9F9]  dark:bg-[#042A2F]  h-16 w-full p-6 flex items-center rounded-2xl    ">
                    <h1 className=" xl:text-2xl lg:text-2xl md:text-2xl text-md leading-[32px] font-bold text-black dark:text-white ">
                      Content Writer Require
                    </h1>
                  </div>
                  <div className="absolute top-5 right-3 text-white  transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      className="w-6 h-6 stroke-black dark:stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full bg-[#F9F9F9] dark:bg-[#042A2F] rounded-lg ">
                    <div className="w-full h-auto rounded-lg  ">
                      <div className="  overflow-hidden transition-all duration-500 max-h-auto peer-checked:h-auto  w-full  h-auto p-6 space-y-12 rounded-2xl   ">
                        <div className="w-full h-auto  space-y-4 text-[#3F3F3F] dark:text-[#959CB1] ">
                          <p className=" leading-[28px] text-lg  font-medium lg:text-start md:text-start text-center">
                            <span className="font-semibold dark:text-white ">
                              Company Overview:{" "}
                            </span>{" "}
                            Guddage is a fast-growing company in the healthcare
                            industry that specializes in creating innovative
                            solutions to improve patient care. Our team is made
                            up of driven and passionate individuals who are
                            committed to making a difference in the lives of
                            patients around the world.<br></br>
                            <span className="font-semibold dark:text-white  ">
                              Job Overview:{" "}
                            </span>{" "}
                            We are seeking a talented Data Analyst to join our
                            team. The successful candidate will be responsible
                            for collecting, analyzing, and interpreting complex
                            data sets to provide insights and recommendations
                            that will drive business growth and improve patient
                            outcomes. <br></br>{" "}
                            <span className="font-semibold dark:text-white ">
                              Key Responsibilities:
                            </span>
                            <br></br>
                            Collaborate with cross-functional teams to define
                            and prioritize business questions and objectives
                          </p>

                          <ul className="list-reset text-[#3F3F3F]  dark:text-[#959CB1]  space-y-2  text-grey-darker rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]     gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill "
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collaborate with cross-functional teams to define
                              and prioritize business questions and objectives
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Collect and analyze large data sets using
                              statistical methods and software tools
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Interpret and present data insights in a clear and
                              concise manner to stakeholders
                            </li>
                          </ul>

                          <h1 className=" text-lg font-semibold leading-[28px]  lg:text-start md:text-start text-center dark:text-white">
                            Requirements:
                          </h1>

                          <ul className="list-reset text-black space-y-2  text-[#3F3F3F] dark:text-[#959CB1] rounded ">
                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]   gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Bachelor's or Master's degree in a relevant field
                              such as Computer Science, Mathematics, Statistics,
                              or Data Science
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Proficiency in SQL and experience with data
                              visualization tools such as Tableau or PowerBI
                            </li>

                            <li className="flex items-center mb-1 text-lg  font-medium leading-[28px]    gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                fill="#02A2B9"
                                className="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                              >
                                {" "}
                                <circle cx="8" cy="8" r="8"></circle>{" "}
                              </svg>
                              Experience working with electronic health records
                              (EHR) or other healthcare data sources is a plus
                            </li>
                          </ul>
                          <p className="text-lg font-medium leading-[28px]   lg:text-start md:text-start text-center">
                            If you are a highly motivated and analytical
                            individual with a passion for improving patient
                            outcomes through data-driven insights, we encourage
                            you to apply for this exciting opportunity.
                          </p>
                        </div>
                        <div className=" w-full  p-2 flex  space rounded-2xl justify-between bg-white dark:bg-[#042A2F] z-20  flex lg:flex-row md:flex-row flex-col ">
                          <div className="w-auto h-40 flex justify-center items-center    ">
                            <ul className="list-reset text-black space-y-2 mt-2  text-grey-darker rounded ">
                              <h1 className="  text-2xl  font-bold leading-[32px] lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base   font-medium leading-[20px] text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>

                          <div className="lg:w-0.5 md:w-0.5 w-auto lg:h-36 md:h-40 h-0.5  lg:mt-5 md:mt-0 mt-4 flex justify-center items-center border border-[#828282]  bg-[#828282]"></div>

                          <div className="w-auto h-40 flex items-center lg:justify-end justify-center  lg:ml-0 md:ml-6 ml-0  ">
                            <ul className="list-reset text-black space-y-2 mt-2 text-grey-darker rounded ">
                              <h1 className=" text-2xl  font-bold leading-[32px] font-normal font-semibold lg:text-start md:text-start text-center mb-4 text-black dark:text-white">
                                Contact Us
                              </h1>
                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-house-door mr-2  "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Address: Juhu, Mumbai 400049
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="currentColor"
                                  className="bi bi-telephone mr-2 "
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>{" "}
                                </svg>
                                Phone: (510) 408-7574
                              </li>

                              <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1] ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  id="IconChangeColor"
                                  height="24"
                                  width="24"
                                  className="cls-2 mr-2 "
                                >
                                  {" "}
                                  <path
                                    d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                                    id="mainIconPathAttribute"
                                    fill="#959CB1"
                                  ></path>
                                </svg>
                                Email: info@guddge.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
