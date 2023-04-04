import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const HomeServices = () => {
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
    <section className=" bg-[#CDCDCD42] dark:bg-[#07343A] text-black-600 body-font flex justify-center items-center  ">
      <div className="choose container py-24  space-y-16 ">
        <div className="flex flex-wrap w-full  mb-8 flex-col items-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-[#4B4B4B] dark:text-white">
            Our Services
          </h1>
          <p className="lg:w-1/2 leading-relaxed text-[#515151] dark:text-[#959CB1] px-4  mt-4 text-center ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <Carousel
          className="px-6 "
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={8328823}
          draggable={true}
          transitionDuration={300}
          containerclassName="main_card1 "
          removeArrowOnDeviceType={["tablet"]}
        >
          <div className="choose_card   w-72 p-6 bg-[#F9F9F9]  dark:bg-[#04505B] rounded-2xl space-y-4 ">
            <div className="card_title_flex  space-y-4">
              <img src="./showcase-1.svg" alt="" />
              <div className="chooose_title text-md font-bold text-black dark:text-white">
                Business Intelligence
              </div>
            </div>
            <div className="choose_content">
              <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                <li className="flex items-center mb-1 text-sm  font-normal text-[#717171] dark:text-[#959CB1] ">
                  Business Intelligence Architecture and Solution Delivery
                </li>

                <li className="flex items-center mb-1 text-sm  font-normal text-[#717171]  dark:text-[#959CB1]">
                  Migration and Version Control Solutions
                </li>
              </ul>
            </div>
            <div className=" w-full flex lg:justify-start md:justify-start justify-center  ">
              <button
                type="submit"
                className=" text-[#076978] dark:text-white w-full bg-[#F9F9F9] dark:bg-[#4BA9B6]  border border-[#076978] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="choose_card  w-72 p-6 bg-[#F9F9F9]  dark:bg-[#04505B] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./showcase-2.svg" className=" " alt="" />
              <div className="chooose_title text-md font-bold text-black dark:text-white">
                Business Intelligence
              </div>
            </div>
            <div className="choose_content">
              <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                <li className="flex items-center mb-1 text-sm  font-normal text-[#717171]  dark:text-[#959CB1]">
                  Business Intelligence Architecture and Solution Delivery
                </li>

                <li className="flex items-center mb-1 text-sm  font-normal text-[#717171] dark:text-[#959CB1]">
                  Migration and Version Control Solutions
                </li>
              </ul>
            </div>
            <div className=" w-full flex lg:justify-start md:justify-start justify-center  ">
              <button
                type="submit"
                className=" text-[#076978]  dark:text-white w-full bg-[#F9F9F9] dark:bg-[#4BA9B6]  border border-[#076978] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="choose_card  w-72 p-6 bg-[#F9F9F9]  dark:bg-[#04505B] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./showcase-3.svg" className=" " alt="" />
              <div className="chooose_title text-md font-bold text-black dark:text-white">
                Business Intelligence
              </div>
            </div>
            <div className="choose_content">
              <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                <li className="flex items-center mb-1 text-sm  font-normal text-[#717171]  dark:text-[#959CB1]">
                  Business Intelligence Architecture and Solution Delivery
                </li>

                <li className="flex items-center mb-1 text-sm  font-normal text-[#717171]  dark:text-[#959CB1]">
                  Migration and Version Control Solutions
                </li>
              </ul>
            </div>
            <div className=" w-full flex lg:justify-start md:justify-start justify-center  ">
              <button
                type="submit"
                className=" text-[#076978] dark:text-white w-full bg-[#F9F9F9] dark:bg-[#4BA9B6]  border border-[#076978] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="choose_card  w-72 p-6 bg-[#F9F9F9]   dark:bg-[#04505B] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./showcase-4.svg" className=" " alt="" />
              <div className="chooose_title text-md font-bold text-black dark:text-white">
                Business Intelligence
              </div>
            </div>
            <div className="choose_content">
              <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                <li className="flex items-center mb-1 text-sm  font-normal text-[#717171] dark:text-[#959CB1] ">
                  Business Intelligence Architecture and Solution Delivery
                </li>

                <li className="flex items-center mb-1 text-sm  font-normal text-[#717171] dark:text-[#959CB1] ">
                  Migration and Version Control Solutions
                </li>
              </ul>
            </div>
            <div className=" w-full flex lg:justify-start md:justify-start justify-center  ">
              <button
                type="submit"
                className=" text-[#076978] dark:text-white w-full bg-[#F9F9F9] dark:bg-[#4BA9B6]  border border-[#076978] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
              >
                Learn More
              </button>
            </div>
          </div>
        </Carousel>
        <div className=" w-full flex justify-center  ">
          <button
            type="submit"
            onClick={() => {
              navigate("/services");
            }}
            className=" text-white dark:text-white  w-36 bg-[#0A93A7] dark:bg-[#4BA9B6]  border border-[#076978] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
