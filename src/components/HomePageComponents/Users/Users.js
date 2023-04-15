import React from "react";
import { UserBg1, UserBg2 } from "../../iconComponent/Slide";

function Users() {
  return (
    <div>
      <section className="3xl:px-[70px] 2xl:px-[50px] xl:px-[40px] lg:px-[40px] md:px-[40px] px-2  bg-[#465254]  flex items-center justify-center  dark:bg-[#04505B] text-black-600 body-font  relative z-0 overflow-hidden  ">
        <div className="absolute h-full flex w-full">
          <div className=" w-2/4 h-full flex items-end pb-4">
            <UserBg2 />
          </div>

          <div className=" h-full flex items-start justify-end w-2/4  ">
            <UserBg1 />
          </div>
        </div>

        <div className="container h-full px-5 py-28 mx-auto relative z-20  ">
          <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center ">
            <h1 className=" xl:text-[45px] text-4xl leading-[56px] font-bold title-font mb-2 text-[#FFFFFF]">
              What Our Users Says
            </h1>
            <p className="xl:w-1/2 lg:w-[600px] w-full text-lg font-normal leading-[29px] text-[#E6E6E6] dark:text-[#959CB1] text-center mt-4 ">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="-m-4 mt-16 justify-items-center   grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 3xl:gap-[215px] 2xl:gap-36 xl:gap-16 lg:gap-32 md:gap-12 gap-3 gap-y-8  ">
            <div className=" 3xl:w-[450px] 2xl:w-[400px] xl:w-[360px]  lg:w-[400px] md:w-80 w-[350px] xl:h-72 md:h-72  p-4  rounded-xl    bg-[#FFFFFF]  dark:bg-[#013A42]">
              <div className=" rounded-lg flex ml-6 mt-4 justify-center items-center   ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./stars.svg"
                />
              </div>

              <div className=" w-[96-4] h-28  ">
                <p className=" text-[#0C4A53] dark:text-white text-lg leading-[26px] font-normal  mt-6 ml-6 pr-6  text-left">
                  "Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="flex justify-center hidden dark:block  ">
                <hr className=" border-gray-700 w-full  "></hr>
              </div>
              <div className="  rounded-lg flex justify-items-start  ">
                <div className=" w-20 h-20 rounded-lg  mb-2 mt-2 ml-4  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block "
                    src="./user-1.svg"
                  />
                </div>

                <div className=" rounded-lg   ">
                  <h1 className=" text-black dark:text-white text-lg font-semibold leading-[28px] ml-6 mr-6 mb-4 mt-4   rounded-lg ">
                    Musharof Chy <br></br>{" "}
                    <span className=" text-[#5F8388] text-sm rounded-lg ">
                      {" "}
                      Founder @Xyz
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className=" 3xl:w-[450px] 2xl:w-[400px] xl:w-[360px]  lg:w-[400px] md:w-80 w-[350px]  xl:h-72 md:h-72 p-4   rounded-xl bg-[#FFFFFF]  dark:bg-[#013A42]   ">
              <div className=" rounded-lg flex ml-6 mt-4 justify-center items-center   ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./stars.svg"
                />
              </div>

              <div className=" w-[96-4] h-28 ">
                <p className="  text-[#0C4A53] dark:text-white text-lg leading-[26px] font-normal mb-6 mt-6 ml-6  pr-6  text-left">
                  "Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="flex justify-center hidden dark:block  ">
                <hr className=" border-gray-700 w-full "></hr>
              </div>
              <div className="    rounded-lg flex justify-items-start ">
                <div className=" h-20 w-20 rounded-lg  mb-2 mt-2  ml-4  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block "
                    src="./user-2.svg"
                  />
                </div>
                <div className=" rounded-lg   ">
                  <h1 className=" text-black dark:text-white text-lg font-semibold leading-[28px]  ml-6 mr-6 mb-4 mt-4 text-blue-500  rounded-lg ">
                    Musharof Chy <br></br>{" "}
                    <span className=" text-[#5F8388] text-sm rounded-lg ">
                      {" "}
                      Founder @Xyz
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="3xl:w-[450px] 2xl:w-[400px] xl:w-[360px]  lg:w-[400px] md:w-80 w-[350px] xl:h-72 md:h-72 p-4 rounded-xl bg-white-900 bg-[#FFFFFF]  dark:bg-[#013A42]  ">
              <div className=" rounded-lg ml-6 mt-4 flex justify-center items-center   ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./stars.svg"
                />
              </div>

              <div className=" w-[96-4] h-28 ">
                <p className="  text-[#0C4A53] dark:text-white text-lg leading-[26px] font-normal mb-6 mt-6 ml-6  pr-6  text-left">
                  "Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="flex justify-center hidden dark:block  ">
                <hr className=" border-gray-700 w-full "></hr>
              </div>
              <div className="   rounded-lg flex justify-items-start ">
                <div className=" h-20 w-20 rounded-lg  mb-2 mt-2  ml-4  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block "
                    src="./user-3.svg"
                  />
                </div>
                <div className=" rounded-lg     ">
                  <h1 className=" text-black dark:text-white text-lg font-semibold leading-[28px]  ml-6 mr-6 mb-4 mt-4 text-blue-500  rounded-lg ">
                    Musharof Chy <br></br>{" "}
                    <span className=" text-[#5F8388] text-md rounded-lg ">
                      {" "}
                      Founder @Xyz
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Users;
