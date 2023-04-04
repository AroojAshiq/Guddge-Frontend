import React from "react";

function Choose() {
  return (
    <section className=" bg-[#F5F5F5] dark:bg-[#07343A]  text-black-600 body-font  flex justify-center items-center relative z-0 overflow-hidden  ">
      <div className=" xl:w-[550px]  xl:h-[500px]  lg:w-[380px] lg:h-[380px]  md:w-[470px] md:h-[390px]  w-[280px] h-[250px] absolute   xl:left-[898px] lg:left-[643px]  md:left-[438px] left-[130px] xl:-top-8 lg:-top-8 md:-top-2 -top-2 z-10">
        <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block"
          src="./Frame 915.svg"
        />
      </div>

      <div className=" xl:w-[420px] xl:h-[700px]  lg:w-[280px] lg:h-[485px] md:w-[240px] md:h-[420px] w-[220px] h-[400px] xl:top-[150px] lg:top-[160px] md:top-[150px] top-[200px] absolute  z-10 -left-12 bg-gradient-to-t  ">
        <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block  "
          src="./Frame 916.svg"
        />
      </div>
      <div className="container w-full  px-6 py-12 mx-auto ">
        <div className="flex flex-wrap w-full  mb-8 flex-col ">
          <h1 className=" text-sm font-medium font-bold title-font mb-2 text-[#959CB1] dark:text-[#959CB1]">
            Home{" > "}
            <span className="text-sm font-medium font-bold title-font mb-2 text-black dark:text-white">
              {" "}
               About
            </span>
          </h1>
          <h1 className="sm:text-3xl text-2xl lg:text-start md:text-start text-center font-medium font-bold title-font mb-2 text-[#4B4B4B] dark:text-white">
            About
          </h1>
          <p className="lg:w-1/2  lg:text-start md:text-start text-center leading-relaxed text-[#515151] dark:text-[#959CB1]  mt-4 ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex  justify-center relative z-20 mb-8  ">
          <div className=" flex flex-wrap  w-11/12  py-8 rounded-2xl justify-center space-y-6  mb-8 bg-[#E7E7E7] dark:bg-[#00343C] border border-[#E7E7E7] dark:border-[#08616CF7]">
            <div className="  w-11/12  h-auto p-6 space-y-20 rounded-2xl bg-white dark:bg-[#042A2F]  ">
              <div className=" w-full h-12 flex justify-center mt-2   ">
                <img
                  alt="gallery"
                  className=" object-cover h-full object-center block"
                  src="./logo.svg"
                />
              </div>
            
              <div>
              <h1 className="lg:text-2xl  md:text-md text-md font-normal font-semibold lg:text-start md:text-start text-center mb-4 text-black dark:text-white">About Us</h1>
                <p className="lg:text-xl md:text-md text-md font-normal lg:text-start md:text-start text-center text-black dark:text-[#B5B5B5]">
                  Guddge is a professional services company specialized in
                  delivering Information Management, and Business Intelligence
                  solutions for corporate and government agencies. <br></br>
                  Our goal is to provide right blend of business and technology
                  expertise with strong leadership, interpersonal communication,
                  analysis, design, implement, and integrate skills in providing
                  enterprise wide Business Intelligence solutions. <br></br>
                  We believe in providing acceptance and utilization to add
                  value to the organization by providing a usable system and
                  solutions. Partner with Guddge to ensure the success of your
                  Information Management and Business Intelligence
                  implementations.
                </p>
              </div>
            </div>

            <div className=" w-11/12  p-6 flex  space rounded-2xl justify-between bg-white dark:bg-[#042A2F] z-20  flex lg:flex-row md:flex-row flex-col ">
              <div className="w-auto h-40  flex justify-center items-center  ">
                <ul className="list-reset text-black space-y-2 mt-2  text-grey-darker rounded ">
              <h1 className="lg:text-2xl  md:text-md text-md font-normal font-semibold lg:text-start md:text-start text-center mb-4 text-black dark:text-white">Contact Us</h1>

                  <li className="flex items-center mb-1 text-md font-normal text-[#959CB1] ">
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

                  <li className="flex items-center mb-1 text-sm font-normal text-[#959CB1]">
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

                  <li className="flex items-center mb-1 text-sm font-normal text-[#959CB1] ">
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

              <div className="lg:w-0.5 md:w-0.5 w-auto lg:h-40 md:h-40 h-0.5  lg:mt-0 md:mt-0 mt-4  flex justify-center items-center border border-[#828282]  bg-[#828282]"></div>

              <div className="w-auto h-40 flex items-center lg:justify-end justify-center  lg:ml-0 md:ml-6 ml-0    ">
              
                <ul className="list-reset text-black space-y-2 mt-2 text-grey-darker rounded ">
                <h1 className="lg:text-2xl  md:text-md text-md font-normal font-semibold lg:text-start md:text-start text-center mb-4 text-black dark:text-white">Contact Us</h1>
                  <li className="flex items-center mb-1 text-md font-normal text-[#959CB1] ">
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

                  <li className="flex items-center mb-1 text-sm font-normal text-[#959CB1] ">
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

                  <li className="flex items-center mb-1 text-sm font-normal text-[#959CB1] ">
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
    </section>
  );
}

export default Choose;
