import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1280 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },

    laptop:{
      breakpoint: { max: 1279, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="3xl:px-[70px] 2xl:px-[50px] xl:px-[40px] lg:px-[40px] md:px-[40px] px-2 bg-[#606060] dark:bg-[#04505B] text-black-600 body-font flex justify-center items-center  relative z-0 ">
      <div className="choose container py-24  space-y-16 ">
        <div className="flex flex-wrap w-full  mb-8 flex-col items-center">
          <h1 className=" xltext-[45px] text-4xl leading-[56px] font-bold title-font mb-2 text-white ">
            ShowCase
          </h1>
          <p className="lg:w-[530px] md:w-[520px] w-full text-lg font-normal leading-[29px] text-[#E9E9E9] dark:text-[#959CB1]  mt-4 text-center ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={8328823}
          draggable={true}
          transitionDuration={300}
          containerclassName="main_card1   relative  "
          removeArrowOnDeviceType={[""]}
        >
          <div className="3xl:w-[420px] 2xl:w-[350px] xl:w-[280px] lg:w-[430px] md:w-[320px] w-11/12 p-[32px] 3xl:ml-2 3xl:mr-2 2xl:ml-2 2xl:mr-6 xl:ml-4 xl:mr-0 lg:ml-4 lg:mr-9 md:ml-2 md:mr-4 ml-3 mr-5 bg-[#F9F9F9] dark:bg-[#013A42] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./port-1.svg" className="w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white">
                Performance
              </div>
            </div>
            <div className="choose_content text-xs font-medium leading-[28px] text-[#717171] dark:text-[#959CB1]">
              Business Intelligence
            </div>
          </div>
          <div className="3xl:w-[420px] 2xl:w-[350px] xl:w-[280px] lg:w-[430px] md:w-[320px] w-11/12 p-[32px] 3xl:ml-2  3xl:mr-2 2xl:ml-2 2xl:mr-6  xl:ml-4 xl:mr-0 lg:ml-4 lg:mr-9 md:ml-2 md:mr-4 ml-3 mr-4 bg-[#F9F9F9] dark:bg-[#013A42] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./port-2.svg" className="w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white">
                Program Projects
              </div>
            </div>
            <div className="choose_content text-xs font-medium leading-[28px] text-[#717171] dark:text-[#959CB1]">
              Business Intelligence
            </div>
          </div>

          <div className="3xl:w-[420px] 2xl:w-[350px] xl:w-[280px] lg:w-[430px] md:w-[320px] w-11/12 p-[32px] 3xl:ml-2 3xl:mr-2 2xl:ml-2 2xl:mr-6 xl:ml-4 xl:mr-0 lg:ml-4 lg:mr-9 md:ml-2 md:mr-4 ml-3 mr-4 bg-[#F9F9F9] dark:bg-[#013A42] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./port-3.svg" className=" w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white">
                Architecture
              </div>
            </div>
            <div className="choose_content text-xs font-medium leading-[28px]  text-[#717171] dark:text-[#959CB1]">
              Information Management
            </div>
          </div>

          <div className="3xl:w-[420px] 2xl:w-[350px] xl:w-[280px] lg:w-[430px] md:w-[320px] w-11/12 p-[32px] 3xl:ml-2 3xl:mr-2 2xl:ml-2 2xl:mr-6  xl:ml-4 xl:mr-0 lg:ml-4 lg:mr-9 md:ml-2 md:mr-4 ml-3 mr-4 bg-[#F9F9F9] dark:bg-[#013A42] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./port-4.svg" className=" w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white">
                Data Modeling
              </div>
            </div>
            <div className="choose_content text-xs font-medium leading-[28px]  text-[#717171] dark:text-[#959CB1]">
              Information Management
            </div>
          </div>
        </Carousel>
        <div className=" w-full flex justify-center  ">
          <button
            type="submit"
            onClick={() => {
              navigate("/portfolio");
            }}
            className=" text-[#076978] dark:text-white  w-[164px] h-[48px]  bg-[#FFFFFF] dark:bg-[#4BA9B6]   hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-basd font-semibold leading-[24px] px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Choose;
