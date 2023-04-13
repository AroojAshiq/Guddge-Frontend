import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import angle from "../../assests/angleIcon.svg";
import { StarIcon } from "../iconComponent/Icon";

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
        <div className="pt-4 pl-8 flex lg:gap-x-14 md:gap-x-14 gap-x-5">
          <NavLink to="/dashboard/timesheets/approval">
            <button className="flex gap-x-1 text-[#169AA3] justify-center items-center">
              <div className="-mt-2">
                <StarIcon />
              </div>
              <p className="border-b-2 pb-2 border-[#169AA3] ">
                T-sheet Approval
              </p>
            </button>
          </NavLink>
          <NavLink to="/dashboard/timesheets/approved">
            <button className="flex gap-x-1 border-b-2  hover:text-[#169AA3] hover:border-[#169AA3]  justify-center  items-center">
              <p className=" pb-2">T-sheet Approved</p>
            </button>
          </NavLink>
        </div>

        <div className="h-screen w-full overflow-y-auto px-4 mt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
