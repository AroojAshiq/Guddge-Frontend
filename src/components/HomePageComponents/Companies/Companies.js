import React from "react";
import { Companies } from "../../iconComponent/Slide";

function Slide({ darkMode, setDarkMode }) {
  return (
    <div className="w-full 3xl:h-[950px]  bg-[#F5F5F5] dark:bg-[#07343A] 2xl:h-[830px] xl:h-[730px] lg:h-[630px] relative md:h-[510px] h-[520px] dark:bg-[#07343A] overflow-hidden">
      <section className="w-full h-full body-font relative  bg-[#F5F5F5] dark:bg-[#07343A]">
        <div className=" xl:w-full xl:h-36 lg:mt-16 md:mt-20 flex px-4 lg:pt-12 md:pt-0 pt-10  flex-col items-center text-center  ">
          <h1 className=" xl:text-5xl text-4xl font-medium font-bold leading-[56px] title-font mb-2 text-black dark:text-white text  ">
            Companies Who Trust Us
          </h1>
          <p className="lg:w-[530px] md:w-[520px] w-full text-lg font-normal leading-[29px] text-[#515151] dark:text-[#959CB1] text-center mt-4  ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="w-full xl:flex items-center justify-center h-full absolute 3xl:-mt-28 2xl:-mt-28 xl:-mt-28 lg:-mt-36 md:-mt-32 -mt-24 mx-auto  lg:block md:block ">
          <Companies />
        </div>
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="3xl:w-[1770px] 2xl:w-[1485px] xl:w-[1190px] lg:w-[930px] 3xl:h-40 lg:h-32 md:w-[675px] md:h-24 w-44  p-2  bg-[#2E2D2D] dark:bg-[#043F47] 3xl:gap-40 2xl:gap-28 xl:gap-28 lg:gap-20 md:gap-16 gap-8 absolute 3xl:top-[200px] 2xl:top-[170px] xl:top-[150px] lg:top-[90px] md:top-[70px] top-[40px] flex lg:flex-row md:flex-row flex-col sm:flex-col   justify-center items-center  ">
            <div className="3xl:w-48 lg:w-36 md:w-36 w-24">
              <img
                alt="gallery"
                className="w-full object-cover h-full  object-center block"
                src="./teamnl logo.svg"
              />
            </div>

            <div className="3xl:w-44 lg:w-40 md:w-36 w-24">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="./lineicons.svg"
              />
            </div>

            <div className=" 3xl:w-44 lg:w-40 md:w-36 w-24">
              <img
                alt="gallery"
                className="w-full object-cover h-full  object-center block"
                src="./gray-grids.svg"
              />
            </div>

            <div className="3xl:w-56 lg:w-40 md:w-40 w-28">
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
export default Slide;
