import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const HomeServices = () => {
  const navigate = useNavigate();
  
  const responsive = {
    desktop: {
      breakpoint: { max: 1500, min: 1000 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },

    laptop:{
      breakpoint: { max: 1100, min: 800 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
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
      <div className="choose container py-24 px-4 space-y-16 relative">
        <div className="flex flex-wrap w-full  mb-8 flex-col items-center">
          <h1 className=" xl:text-[45px] text-4xl font-medium font-bold leading-[56px] title-font mb-2 text-[#4B4B4B] dark:text-white">
            Our Services
          </h1>
          <p className="lg:w-[530px] md:[520px] w-full text-lg font-normal leading-[29px] text-[#515151] dark:text-[#959CB1]  mt-4 text-center ">
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
          containerclassName="main_card1   "
          removeArrowOnDeviceType={[""]}
       
         
        >
          <div className="choose_card xl:w-[300px] lg:w-[400px] md:w-[320px] w-11/12 p-[32px] xl:ml-0 xl:mr-0 lg:ml-12 lg:mr-12 md:ml-6 md:mr-6 ml-4 mr-5 bg-[#F9F9F9]  dark:bg-[#04505B] rounded-2xl space-y-4 ">
            <div className="  card_title_flex  space-y-4 ">
              <img
                src="./showcase-1.svg"
                className=" object-centered w-full "
                alt=""
              />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white">
                Business Intelligence
              </div>
            </div>
            <div className="choose_content">
              <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                <li className="flex items-center mb-1 text-xs leading-[28px]  font-medium text-[#717171] dark:text-[#959CB1] ">
                  Business Intelligence Architecture and Solution Delivery
                </li>

                <li className="flex items-center mb-1 text-xs leading-[28px]  font-medium  text-[#717171]  dark:text-[#959CB1]">
                  Migration and Version Control Solutions
                </li>
                <li className="flex items-center mb-1 text-xs leading-[28px]  font-medium  text-[#717171]  dark:text-[#959CB1]">
                  Migration and Version Control Solutions
                </li>
              </ul>
            </div>
            <div className=" w-full h-[48px] flex lg:justify-start md:justify-start justify-center  ">
              <button
                type="submit"
                className=" text-[#076978] dark:text-white w-full h-full bg-[#F9F9F9] dark:bg-[#4BA9B6]  border border-[#076978] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="choose_card xl:w-[300px] lg:w-[400px] md:w-[320px] w-11/12  p-[32px]   xl:ml-0 xl:mr-0 lg:ml-12 lg:mr-12 md:ml-6 md:mr-6 ml-4 mr-5  bg-[#F9F9F9]  dark:bg-[#04505B] rounded-2xl space-y-4 ">
            <div className="  card_title_flex  space-y-4">
              <img src="./showcase-2.svg" className="w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white">
              Technology
              </div>
            </div>
            <div className="choose_content">
              <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                <li className="flex items-center mb-1  text-xs leading-[28px]  font-medium  text-[#717171]  dark:text-[#959CB1]">
                  Business Intelligence Architecture and Solution Delivery
                </li>

                <li className="flex items-center mb-1  text-xs leading-[28px]  font-medium   text-[#717171] dark:text-[#959CB1]">
                  Migration and Version Control Solutions
                </li>
                <li className="flex items-center mb-1  text-xs leading-[28px]  font-medium   text-[#717171] dark:text-[#959CB1]">
                  Migration and Version Control Solutions
                </li>
              </ul>
            </div>
            <div className=" w-full h-[48px] flex lg:justify-start md:justify-start justify-center  ">
              <button
                type="submit"
                className=" text-[#076978]  dark:text-white w-full h-full bg-[#F9F9F9] dark:bg-[#4BA9B6]  border border-[#076978] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="choose_card xl:w-[300px] lg:w-[400px] md:w-[320px] w-11/12 p-[32px]  xl:ml-0 xl:mr-0 lg:ml-6 lg:mr-6 md:ml-6 md:mr-6  ml-4 mr-4 bg-[#F9F9F9]  dark:bg-[#04505B] rounded-2xl space-y-4 ">
            <div className="  card_title_flex  space-y-4">
              <img src="./showcase-3.svg" className="w-full " alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white">
              Data Warehouse
              </div>
            </div>
            <div className="choose_content">
              <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                <li className="flex items-center mb-1 text-xs leading-[28px]  font-medium     text-[#717171]  dark:text-[#959CB1]">
                  Business Intelligence Architecture and Solution Delivery
                </li>

                <li className="flex items-center mb-1  text-xs leading-[28px]  text-[#717171]  dark:text-[#959CB1]">
                  Migration and Version Control Solutions
                </li>
                <li className="flex items-center mb-1 text-xs leading-[28px]  text-[#717171]  dark:text-[#959CB1]">
                  Migration and Version Control Solutions
                </li>
              </ul>
            </div>
            <div className=" w-full h-[48px] flex lg:justify-start md:justify-start justify-center  ">
              <button
                type="submit"
                className=" text-[#076978] dark:text-white w-full h-full bg-[#F9F9F9] dark:bg-[#4BA9B6]  border border-[#076978] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="choose_card xl:w-[300px] lg:w-[400px] md:w-[320px] w-11/12  p-[32px]  xl:ml-0 xl:mr-0 lg:ml-6 lg:mr-6 md:ml-6 md:mr-6 ml-4 mr-4  bg-[#F9F9F9]   dark:bg-[#04505B] rounded-2xl space-y-4">
            <div className="  card_title_flex  space-y-4">
              <img src="./showcase-4.svg" className=" w-full" alt="" />
              <div className="chooose_title text-base leading-[32px] font-bold text-black dark:text-white">
              Training
              </div>
            </div>
            <div className="choose_content">
              <ul className="list-reset text-black space-y-2   text-grey-darker rounded ">
                <li className="flex items-center mb-1 text-xs leading-[28px]  text-[#717171] dark:text-[#959CB1] ">
                  Business Intelligence Architecture and Solution Delivery
                </li>

                <li className="flex items-center mb-1 text-xs leading-[28px]  text-[#717171] dark:text-[#959CB1] ">
                  Migration and Version Control Solutions
                </li>
                <li className="flex items-center mb-1 text-xs leading-[28px]  text-[#717171] dark:text-[#959CB1] ">
                  Migration and Version Control Solutions
                </li>
              </ul>
            </div>
            <div className=" w-full  h-[48px] flex lg:justify-start md:justify-start justify-center  ">
              <button
                type="submit"
                className=" text-[#076978] dark:text-white w-full  h-full bg-[#F9F9F9] dark:bg-[#4BA9B6]  border border-[#076978] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
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
            className=" text-white dark:text-white  w-[164px] h-[48px] bg-[#0A93A7] dark:bg-[#4BA9B6]   hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-base font-semibold leading-[24px] px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
