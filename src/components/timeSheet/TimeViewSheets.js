import React from "react";
import { Link } from "react-router-dom";
import angle from "../../assests/angleIcon.svg";
import ViewProjectTable from "./ViewProjectTable";
import { AddIcon, FilterIcon, CancelIcon } from "../iconComponent/Icon";

export default function TimeViewSheets() {
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
        <div className="flex">
          <button className="h-[44px] w-[179px] rounded-md bg-[#0B5D69] flex justify-center items-center text-white gap-x-1">
            <p>Filter Applied</p>
            <FilterIcon />
          </button>
          <div class="flex w-full flex-wrap justify-center">
            <div
              data-te-chip-init
              data-te-ripple-init
              class="[word-wrap: break-word] text-white my-[5px] bg-black mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px]  py-0 px-[12px] text-xs font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear "
              data-te-ripple-color="dark"
            >
              Millan contractor
              <span
                data-te-chip-close
                class="float-right w-4 cursor-pointer  text-base text-white opacity-[.53] transition-all duration-200 ease-in-out "
              >
                <CancelIcon height={20} width={20} />
              </span>
            </div>

            <div
              data-te-chip-init
              data-te-ripple-init
              class="[word-wrap: break-word] text-white my-[5px] bg-black mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px]  py-0 px-[12px] text-xs font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear "
              data-te-ripple-color="dark"
            >
              12-Mar-2021 to 26-Jun-2021
              <span
                data-te-chip-close
                class="float-right w-4 cursor-pointer  text-base text-white opacity-[.53] transition-all duration-200 ease-in-out "
              >
                <CancelIcon height={20} width={20} />
              </span>
            </div>

            <div
              data-te-chip-init
              data-te-ripple-init
              class="[word-wrap: break-word] text-white my-[5px] bg-black mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px]  py-0 px-[12px] text-xs font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear "
              data-te-ripple-color="dark"
            >
              Data Foundations
              <span
                data-te-chip-close
                class="float-right w-4 cursor-pointer  text-base text-white opacity-[.53] transition-all duration-200 ease-in-out "
              >
                <CancelIcon height={20} width={20} />
              </span>
            </div>
          </div>
          <p className="text-sm text-[#BA0E0E] w-40 font-normal">
            Clear All Filters
          </p>
        </div>

        <div className="h-screen overflow-y-auto px-4 mt-3">
          <ViewProjectTable />
        </div>
      </div>
    </>
  );
}
