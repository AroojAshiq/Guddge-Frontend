import React from "react";
import { Link } from "react-router-dom";
import angle from "../../assests/angleIcon.svg";
import ViewProjectTable from "./ViewProjectTable";
import { AddIcon } from "../iconComponent/Icon";

export default function ViewProject() {
  return (
    <>
      <div className="lg:w-full md:w-[750px] w-full">
        <div className=" flex lg:items-start md:items-start lg:justify-start lg:flex-row md:justify-start md:flex-row flex-col justify-center items-center my-2">
          <Link to="/dashboard/projects">
            <div className="w-[44px] self-start h-[44px] hover:bg-[#F0FAFC] flex items-center justify-center rounded lg:mt-0">
              <img src={angle} alt="back" />
            </div>
          </Link>
          <div className="w-full flex justify-between items-center">
            <h1 className="font-semibold text-lg lg:text-left pl-3 md:text-left text-center">
              James Smith Home Project Time sheet
            </h1>
            <button className="border flex justify-center items-center gap-x-2 w-[167px] h-[44px] rounded-md">
              <AddIcon />
              <p className="text-xs font-medium">Create New sheet</p>
            </button>
          </div>
        </div>

        <div className="h-screen overflow-y-auto px-4 mt-10">
          <ViewProjectTable />
        </div>
      </div>
    </>
  );
}
