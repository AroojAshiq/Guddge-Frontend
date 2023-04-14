import React from "react";
import search from "../../assests/searchIcon.svg";
import bell from "../../assests/bellIcon.svg";
import img1 from "../../assests/imageHome.svg";
import img2 from "../../assests/imageHome2.svg";
import img3 from "../../assests/imageHome3.svg";
import img4 from "../../assests/imageHome4.svg";

import { UpRightArrowIcon } from "../iconComponent/Icon";

export default function Home() {
  return (
    <>
      <div className="lg:w-full md:w-[700px] md:px-5">
        <div className="flex items-center pb-6 border-b lg:justify-between gap-2 lg:flex-row md:justify-between md:flex-row  flex-col justify-center my-2">
          <div className="w-7/12 px-4">
            <p className="font-medium text-sm lg:text-left md:text-left text-center">
              Welcome To Guddge Time sheet !
            </p>
          </div>
          <div className="flex ">
            <div className="w-[233px] h-[44px] border border-[#A1A1A1] flex items-center rounded-lg lg:mt-0">
              <img src={search} alt="search" className="w-5 h-5 ml-3" />
              <input
                placeholder="Search User, License, email"
                className="placeholder-[#A1A1A1] text-xs w-full pl-2 outline-none text-[#A1A1A1]"
              />
            </div>
            <div className=" h-[44px] flex items-center ml-2 lg:mt-0">
              <button className="outline-none ml-2 bg-[#34A2B2] flex justify-center items-center w-[56px] h-[44px] rounded-md  ">
                <img src={bell} alt="bell-icon" className="animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full border-b pb-4 gap-x-3 pt-6 flex lg:flex-row md:flex-row flex-col justify-between  items-center ">
          <div className=" md:w-2/4 w-full bg-[#49A147] flex justify-center rounded-lg h-[109px] lg:mt-0 md:mt-0 mt-4">
            <div className="w-full xl:px-6 px-4 h-full flex flex-col items-center justify-center">
              <p className="w-full text-white text-xs font-medium">
                Client Sheets to Review
              </p>
              <div className="flex w-full items-center justify-between mt-1 text-white cursor-pointer">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#06FF00]"></div>
                  <p className="text-white text-xs font-semibold ml-1">15</p>
                </div>
                <UpRightArrowIcon />
              </div>
            </div>
          </div>

          <div className=" bg-[#EDFFED] md:w-2/4 w-full flex justify-center rounded-lg h-[109px] lg:mt-0 md:mt-0 mt-4">
            <div className="h-full w-full xl:px-6 px-4 flex flex-col items-center justify-center">
              <p className="w-full text-xs font-medium">
                Client Sheets to Review
              </p>
              <div className="flex w-full items-center justify-between mt-1 text-black cursor-pointer">
                <p className="text-[#169AA3] text-xs font-semibold drop-shadow-2xl">
                  355
                </p>
                <UpRightArrowIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 h-auto grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center xl:gap-x-3 lg:gap-x-3 gap-4">
          
          <div className="bg-[#FFF8E7] w-full px-3 gap-2 flex justify-center items-center rounded-lg h-[109px]">
            <div>
              <img src={img1} alt="total-contractor" />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <p className="w-full font-medium text-xs text-[#353535] mt-3">
                Total Contractors
              </p>
              <div className="flex w-full items-center justify-between mt-1 text-black cursor-pointer">
                <p className="text-[#795706] font-semibold drop-shadow-2xl text-xs">
                  13,499
                </p>
                <UpRightArrowIcon />
              </div>
            </div>
          </div>

          <div className=" bg-[#E2DBFE] px-3 gap-2   flex justify-center items-center rounded-lg h-[109px]">
            <div className="">
              <img src={img2} alt="total-contractor h-full" />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <p className="w-full font-medium text-xs text-[#353535] mt-3">
                Total Clients
              </p>
              <div className="flex w-full items-center justify-between mt-1 text-black cursor-pointer">
                <p className="text-[#1C0674] font-semibold text-xs drop-shadow-2xl">
                  13,499
                </p>
                <UpRightArrowIcon />
              </div>
            </div>
          </div>

          <div className=" bg-[#E4FFEC] px-4 gap-2 flex justify-center items-center rounded-lg h-[109px]">
            <div >
              <img src={img3} alt="total-contractor" />
            </div>
            <div className="w-full ml-3 h-full flex flex-col items-center justify-center">
              <p className="w-full font-medium text-xs text-[#353535] mt-3">
                Total Supervisors
              </p>
              <div className="flex w-full items-center justify-between mt-1 text-black cursor-pointer">
                <p className="text-[#014515] font-semibold text-xs drop-shadow-2xl">
                  13,499
                </p>
                <UpRightArrowIcon />
              </div>
            </div>
          </div>

          <div className=" bg-[#E1FBFF]  flex justify-center items-center gap-2 px-3 rounded-lg h-[109px]">
            <div>
              <img src={img4} alt="total-contractor" />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <p className="w-full font-medium text-xs text-[#353535] mt-3">
                Total Projects
              </p>
              <div className="flex w-full items-center justify-between mt-1 text-black cursor-pointer">
                <p className="text-[#004049] font-semibold text-xs drop-shadow-2xl">
                  13,499
                </p>
                <UpRightArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
