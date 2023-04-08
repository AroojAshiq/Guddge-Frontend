import React from "react";

function Service() {
  
  return (
    <section className=" bg-[#F5F5F5] dark:bg-[#07343A] text-black-600 body-font relative z-0 overflow-hidden  ">
       <div className=" xl:w-[550px]  xl:h-[500px]  lg:w-[380px] lg:h-[380px]  md:w-[470px] md:h-[390px]  w-[280px] h-[250px] absolute   xl:left-[898px] lg:left-[643px]  md:left-[438px] left-[130px] xl:-top-8 lg:-top-8 md:-top-2 -top-2  z-10">
        <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block"
          src="./Frame 915.svg"
        />
      </div>

      <div className="xl:w-[420px] xl:h-[700px]  lg:w-[280px] lg:h-[485px] md:w-[240px] md:h-[420px] w-[220px] h-[400px] xl:top-[150px] lg:top-[160px] md:top-[150px] top-[200px]  absolute  z-10 -left-12 bg-gradient-to-t ">
        <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block  "
          src="./Frame 916.svg"
        />
      </div>
      <div className="container w-full  px-6 py-12 mx-auto ">
        <div className="flex flex-wrap w-full  mb-8 flex-col ">
          <h1 className=" text-base leading-[24px] font-medium title-font mb-2 text-[#959CB1]">
            Home{" > "}
            <span className="text-base leading-[24px] font-medium mb-2 text-black dark:text-white">
              {" "}
              Services
            </span>
          </h1>
          <h1 className="xl:text-[45px] text-4xl leading-[56px] font-bold  lg:text-start md:text-start text-center font-medium font-bold title-font mb-2 text-[#4B4B4B] dark:text-white">
            Services
          </h1>
          <p className="w-[550px]  lg:text-start md:text-start text-center text-lg font-normal leading-[29px]  text-[#515151] dark:text-[#959CB1]  mt-2 ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex  justify-center relative z-20 mb-8">
          <div className=" flex flex-wrap lg:w-10/12 md:w-10/12 w-auto border border-black h-full py-8 rounded-2xl justify-center space-y-6  mb-8 bg-[#E7E7E7]  dark:bg-[#04505B]  border border-[#E7E7E7] dark:border-[#08616CF7]">
            <div className="  w-11/12   h-full p-6 space-y-4 rounded-2xl bg-white   dark:bg-[#042A2F] ">
              <div className=" w-full  h-3/4 flex justify-center mt-2   ">
                <img
                  alt="gallery"
                  className=" object-cover h-full object-center block"
                  src="./service-1.svg"
                />
              </div>

              <div className="xl:w-full h-auto bg-white  dark:bg-[#042A2F] ">
                <div className=" relative w-full ">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
                  />
                  <div className=" bg-white  dark:bg-[#042A2F]   h-16 w-full pl-2 flex items-center   ">
                    <h1 className=" xl:text-2xl lg:text-2xl md:text-xl text-sm  font-bold leading-[32px] text-black dark:text-white ">
                      {" "}
                      Business Intelligence{" "}
                    </h1>
                  </div>
                  <div className="absolute top-5 right-3 text-white transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
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
                  <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-52">
                    <div className="w-full h-auto  ">
                      <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2">
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
                          Business Intelligence Architecture and Solution
                          Delivery
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Migration and Version Control Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Enterprise Administrative Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Mobile Dashboard Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Web Server Wrapper Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Performance Tuning
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="  w-11/12   h-full p-6 space-y-4 rounded-2xl bg-white   dark:bg-[#042A2F] ">
              <div className=" w-full  h-3/4 flex justify-center mt-2   ">
                <img
                  alt="gallery"
                  className=" object-cover h-full object-center block"
                  src="./service-2.svg"
                />
              </div>

              <div className="xl:w-full h-auto bg-white  dark:bg-[#042A2F] ">
                <div className=" relative w-full ">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
                  />
                  <div className=" bg-white  dark:bg-[#042A2F]   h-16 w-full pl-2 flex items-center   ">
                    <h1 className=" xl:text-2xl lg:text-2xl md:text-xl text-sm leading:[32px] font-bold text-black dark:text-white ">
                      {" "}
                      Technology{" "}
                    </h1>
                  </div>
                  <div className="absolute top-5 right-3 text-white transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
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
                  <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-52">
                    <div className="w-full h-auto  ">
                      <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2">
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
                          Business Intelligence Architecture and Solution
                          Delivery
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Migration and Version Control Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Enterprise Administrative Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Mobile Dashboard Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Web Server Wrapper Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Performance Tuning
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  w-11/12   h-full p-6 space-y-4 rounded-2xl bg-white   dark:bg-[#042A2F] ">
              <div className=" w-full  h-3/4 flex justify-center mt-2   ">
                <img
                  alt="gallery"
                  className=" object-cover h-full object-center block"
                  src="./service-3.svg"
                />
              </div>

              <div className="xl:w-full h-auto bg-white  dark:bg-[#042A2F] ">
                <div className=" relative w-full ">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
                  />
                  <div className=" bg-white  dark:bg-[#042A2F]   h-16 w-full pl-2 flex items-center   ">
                    <h1 className=" lg:text-2xl md:text-xl text-sm  font-bold text-black dark:text-white ">
                      {" "}
                      Data Warehouse{" "}
                    </h1>
                  </div>
                  <div className="absolute top-5 right-3 text-white transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
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
                  <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-52">
                    <div className="w-full h-auto  ">
                      <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2">
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
                          Business Intelligence Architecture and Solution
                          Delivery
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Migration and Version Control Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Enterprise Administrative Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Mobile Dashboard Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Web Server Wrapper Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Performance Tuning
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  w-11/12   h-full p-6 space-y-4 rounded-2xl bg-white   dark:bg-[#042A2F] ">
              <div className=" w-full  h-3/4 flex justify-center mt-2   ">
                <img
                  alt="gallery"
                  className=" object-cover h-full object-center block"
                  src="./service-4.svg"
                />
              </div>

              <div className="xl:w-full h-auto bg-white  dark:bg-[#042A2F] ">
                <div className=" relative w-full ">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer  "
                  />
                  <div className=" bg-white  dark:bg-[#042A2F]   h-16 w-full pl-2 flex items-center   ">
                    <h1 className=" xl:text-2xl lg:text-2xl md:text-xl text-sm  leading-[32px] font-bold text-black dark:text-white ">
                      {" "}
                      Training
                      {" "}
                    </h1>
                  </div>
                  <div className="absolute top-5 right-3 text-white transition-tranform duration-500 rotate-0 peer-checked:rotate-180   ">
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
                  <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-52">
                    <div className="w-full h-auto  ">
                      <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                        <li className="flex items-center mb-1 text-lg  font-medium leading-[28px] text-[#959CB1] gap-2">
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
                          Business Intelligence Architecture and Solution
                          Delivery
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Migration and Version Control Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Enterprise Administrative Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Mobile Dashboard Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Web Server Wrapper Solutions
                        </li>

                        <li className="flex items-center mb-1  text-lg  font-medium leading-[28px] text-[#959CB1] gap-2 ">
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
                          Performance Tuning
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
    </section>
  );
}

export default Service;
