import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },

    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className=" bg-[#606060] dark:bg-[#04505B] text-black-600 body-font flex justify-center items-center  ">
      <div className="choose container py-24  space-y-16 ">
        <div className="flex flex-wrap w-full  mb-8 flex-col items-center">
          <h1 className="sm:text-3xl text-4xl font-lg font-bold title-font mb-2 text-white ">
            ShowCase
          </h1>
          <p className="lg:w-1/2 leading-relaxed text-[#E9E9E9] dark:text-[#959CB1] px-4 mt-4 text-center ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <Carousel
        className="lg:px-6 md:px-6 px-10 "
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={8328823}
          draggable={true}
          transitionDuration={300}
          containerclassName="main_card1  "
          removeArrowOnDeviceType={["tablet"]}
        >
          <div className="choose_card  w-72 p-6 bg-[#F9F9F9]  dark:bg-[#013A42] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./port-1.svg" className=" " alt="" />
              <div className="chooose_title text-md font-bold text-black dark:text-white">
                Performance
              </div>
            </div>
            <div className="choose_content text-sm text-[#717171] dark:text-[#959CB1]">
              Business Intelligence
            </div>
          </div>
          <div className="choose_card  w-72 p-6 bg-[#F9F9F9] dark:bg-[#013A42] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./port-2.svg" className=" " alt="" />
              <div className="chooose_title text-md font-bold text-black dark:text-white">
                Program Projects
              </div>
            </div>
            <div className="choose_content text-sm text-[#717171] dark:text-[#959CB1]">
              Business Intelligence
            </div>
          </div>

          <div className="choose_card  w-72 p-6 bg-[#F9F9F9] dark:bg-[#013A42] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./port-3.svg" className=" " alt="" />
              <div className="chooose_title text-md font-bold text-black dark:text-white">
                Architecture
              </div>
            </div>
            <div className="choose_content text-sm text-[#717171] dark:text-[#959CB1]">
              Information Management
            </div>
          </div>

          <div className="choose_card  w-72 p-6 bg-[#F9F9F9] dark:bg-[#013A42] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./port-4.svg" className=" " alt="" />
              <div className="chooose_title text-md font-bold text-black dark:text-white">
                Data Modeling
              </div>
            </div>
            <div className="choose_content text-sm text-[#717171] dark:text-[#959CB1]">
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
            className=" text-[#076978] dark:text-white w-36 bg-[#FFFFFF] dark:bg-[#4BA9B6]   hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Choose;
