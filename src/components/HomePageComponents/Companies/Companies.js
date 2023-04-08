import React from "react";

function Companies() {
  return (
    <div>
      <section className="w-[100%] lg:h-full md:h-full h-[550px]  bg-[#FFFFFF] dark:bg-[#07343A] lg:py-8 md:py-8 py-12  text-black-600 body-font  relative    ">
        <div className=" xl:w-full xl:h-36 lg:mt-20 flex px-4 lg:pt-12 md:pt-0 pt-10  flex-col items-center text-center  ">
          <h1 className=" xl:text-5xl text-4xl font-medium font-bold leading-[56px] title-font mb-2 text-black dark:text-white text  ">
            Companies Who Trust Us
          </h1>
          <p className="lg:w-[530px] md:w-[520px] w-full text-lg font-normal leading-[29px] text-[#515151] dark:text-[#959CB1] text-center mt-4  ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div>
          <div className=" w-full xl:h-[480px] lg:h-[400px] lg:block md:block hidden xl:-mt-3 lg:-mt-6 md:-mt-6">
            <img
              alt="gallery"
              className="w-full object-cover h-full  object-center block"
              src="./companies-bg.svg"
            />
          </div>
        </div>
        <div className="container w-full h-full  mx-auto flex justify-center  relative ">
          <div className="xl:w-[1260px] lg:w-[950px] lg:h-32 md:w-11/12 md:h-24 w-44  p-2  bg-[#2E2D2D] dark:bg-[#043F47] xl:gap-28 lg:gap-20 md:gap-16 gap-8 absolute xl:bottom-[232px] xl:left-[10px] lg:left-[36px] lg:bottom-[150px] md:bottom-[118px] md:left-8 bottom-60 left-[100px] flex lg:flex-row md:flex-row flex-col sm:flex-col   justify-center items-center  ">
            <div className=" lg:w-36 md:w-36 w-24">
              <img
                alt="gallery"
                className="w-full object-cover h-full  object-center block"
                src="./teamnl logo.svg"
              />
            </div>

            <div className=" lg:w-40 md:w-36 w-24">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="./lineicons.svg"
              />
            </div>

            <div className=" lg:w-40 md:w-36 w-24">
              <img
                alt="gallery"
                className="w-full object-cover h-full  object-center block"
                src="./gray-grids.svg"
              />
            </div>

            <div className=" lg:w-40 md:w-40 w-28">
              <img
                alt="gallery"
                className="w-full object-cover h-full  object-center block"
                src="./corpus.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Companies;
