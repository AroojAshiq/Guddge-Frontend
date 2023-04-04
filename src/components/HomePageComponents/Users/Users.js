import React from "react";

function Users() {
  return (
    <div>
      <section className=" bg-[#465254] dark:bg-[#04505B] text-black-600 body-font  relative z-0 overflow-hidden  ">
        <div className=" xl:w-60 xl:h-[450px] lg:w-48 lg:h-96 md:w-[281px] md:h-[460px] absolute  xl:left-[1200px] xl:top-12 lg:left-[830px] lg:top-16 md:left-[490px] md:top-8 left-[200px] top-28  z-10  ">
          <img
            alt="gallery"
            className="w-full object-cover h-full  object-center block"
            src="./user-bg-1.svg"
          />
        </div>

        <div className=" w-64 lg:top-[560px] md:top-[900px] top-[1180px] absolute  z-10 bg-fixed ">
          <img
            alt="gallery"
            className="w-full object-cover h-full  object-center block  "
            src="./user-bg-2.svg"
          />
        </div>

        <div className="container lg:px-5 md:px-5 px-10 py-28 mx-auto relative z-20  ">
          <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center ">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-[#FFFFFF]">
              What Our Users Says
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-[#E6E6E6] dark:text-[#959CB1] text-center mt-4 ">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
          <div className=" -m-4 mt-16 justify-items-center  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-8  ">
            <div className=" xl:w-96  md:w-80 sm:w-96  xl:h-72 md:h-72 p-4  rounded-lg    bg-[#FFFFFF]  dark:bg-[#013A42]">
              <div className="w-full rounded-lg ml-6 mt-4 flex justify-center items-center ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block "
                  src="./stars.svg"
                />
              </div>

              <div className=" w-[96] h-28  ">
                <p className=" text-[#0C4A53] dark:text-white text-sm font-normal  mt-6 ml-6 pr-6  text-left">
                  “Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="flex justify-center dark:block  ">
                <hr className=" border-gray-700 xl:w-80 lg:w-72  "></hr>
              </div>
              <div className="  rounded-lg flex justify-items-start  ">
                <div className=" xl:w-1/5 rounded-lg  mb-2 mt-2  ml-4  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block "
                    src="./user-1.svg"
                  />
                </div>

                <div className=" rounded-lg   ">
                  <h1 className=" text-black dark:text-white text-md ml-6 mr-6 mb-4 mt-4   rounded-lg ">
                    Musharof Chy <br></br>{" "}
                    <span className=" text-[#5F8388] text-md rounded-lg ">
                      Founder @Xyz
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className=" xl:w-96   md:w-80  sm:w-96 xl:h-72 md:h-72 p-4   rounded-lg bg-[#FFFFFF]  dark:bg-[#013A42]   ">
              <div className=" rounded-lg flex ml-6 mt-4 justify-center items-center   ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./stars.svg"
                />
              </div>

              <div className=" w-[96-4] h-28 ">
                <p className="  text-[#0C4A53] dark:text-white text-sm font-normal mb-6 mt-6 ml-6  pr-6  text-left">
                  “Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="flex justify-center  dark:block  ">
                <hr className=" border-gray-700 xl:w-80 lg:w-72 "></hr>
              </div>
              <div className="    rounded-lg flex justify-items-start ">
                <div className=" xl:w-1/5 rounded-lg  mb-2 mt-2  ml-4  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block "
                    src="./user-2.svg"
                  />
                </div>
                <div className=" rounded-lg   ">
                  <h1 className="  dark:text-white text-md ml-6 mr-6 mb-4 mt-4 text-blue-500  rounded-lg ">
                    Musharof Chy <br></br>{" "}
                    <span className=" text-[#5F8388] text-md rounded-lg ">
                      {" "}
                      Founder @Xyz
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className=" xl:w-96   md:w-80 sm:w-96 xl:h-72 md:h-72 p-4 rounded-lg bg-white-900 bg-[#FFFFFF]  dark:bg-[#013A42]  ">
              <div className=" rounded-lg ml-6 mt-4 flex justify-center items-center   ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./stars.svg"
                />
              </div>

              <div className=" w-[96-4] h-28 ">
                <p className="  text-[#0C4A53] dark:text-white text-sm font-normal mb-6 mt-6 ml-6  pr-6  text-left">
                  “Our members are so impressed. It's intuitive. It's clean.
                  It's distraction free. If you're building a community.
                </p>
              </div>
              <div className="flex justify-center  dark:block  ">
                <hr className=" border-gray-700 xl:w-80 lg:w-72 "></hr>
              </div>
              <div className="   rounded-lg flex justify-items-start ">
                <div className=" xl:w-1/5 rounded-lg  mb-2 mt-2  ml-4  ">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block "
                    src="./user-3.svg"
                  />
                </div>
                <div className=" rounded-lg     ">
                  <h1 className="  dark:text-white text-md ml-6 mr-6 mb-4 mt-4 text-blue-500  rounded-lg ">
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
