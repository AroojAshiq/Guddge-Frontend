import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import angle from "../../assests/angleIcon.svg";
import { StarIcon, CreateIcon } from "../iconComponent/Icon";

export default function TimeSheet() {
  return (
    <>
      <div className="lg:w-full md:w-[750px] w-full">
        <div className=" flex items-start ">
          <Link to="/dashboard/timesheets">
            <div className="w-[44px] self-start h-[44px] hover:bg-[#F0FAFC] flex items-center justify-center rounded lg:mt-0">
              <img src={angle} alt="back" />
            </div>
          </Link>
          <div className="w-full flex justify-between items-center h-[44px]">
            <h1 className="font-semibold text-lg lg:text-left pl-3 md:text-left text-center">
              Timesheet
            </h1>
          </div>
        </div>
        <div className="flex w-[94%] mx-auto justify-between items-center">
          <div className="pt-4 flex lg:gap-x-14 md:gap-x-14 gap-x-5">
            <NavLink to="/dashboard/timesheets/approval">
              <button className="flex gap-x-1 text-[#169AA3] justify-center items-center">
                <div className="-mt-2">
                  <StarIcon />
                </div>
                <p className="border-b-2 pb-2 border-[#169AA3] ">
                  Review Time Sheet
                </p>
              </button>
            </NavLink>
            <NavLink to="/dashboard/timesheets/approved">
              <button className="flex gap-x-1 border-b-2  hover:text-[#169AA3] hover:border-[#169AA3]  justify-center  items-center">
                <p className=" pb-2">Time Sheet Approved</p>
              </button>
            </NavLink>
          </div>
          <button className="flex outline-none lg:mt-0 md:mt-0 mt-4 h-[44px] w-[136px] justify-center rounded-lg text-[17px] font-medium items-center gap-x-2 bg-black text-white">
            <CreateIcon />
            <p>Create</p>
          </button>
        </div>

        <div className="h-screen w-full  px-4 mt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
