import React from "react";
import { AddIcon, ExcelLogo, ShareIcon } from "../iconComponent/Icon";

export default function ViewProjectTable() {
  return (
    <>
      <div>
        <div>
          <hr className="w-full pb-5" />

          <p className="font-medium text-sm text-[#075A66] py-2">
            Time sheet name
          </p>
          <div className="flex flex-col ">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className=" py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto rounded-lg">
                  <table className="table-auto text-left text-sm font-light w-full">
                    <thead className="border-b bg-[#E3E8EF] font-medium rounded-lg dark:border-neutral-500">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                        >
                          Changes Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          INVOICE CATEGORIES
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          PROJECT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          TASK
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                        >
                          COMMENTS (include risks, issues, details as
                          applicable)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td
                          width="20%"
                          className="whitespace-nowrap text-center px-6 py-4"
                        >
                          12-06-2021
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          126106
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          DFAS
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Data Foundation
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Added a new View
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Include October hours
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="w-full flex justify-center pb-6 items-center mt-7">
                    <button className="w-[166px] h-[36px] flex justify-center items-center gap-x-2 border border-dotted border-black rounded-[4px]">
                      <AddIcon />
                      <p>Add Row</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-7 flex flex-col gap-x-3 mt-14 lg:flex lg:flex-row md:flex-row  md:flex lg:justify-end md:justify-end justify-center items-center">
          <button className="lg:mt-0 md:mt-0 gap-x-2 mt-4 w-[134px] h-[44px] border rounded-md flex justify-center items-center">
            <ExcelLogo />
            <p className="text-xs">Save as .xlsx</p>
          </button>
          <button className="w-[170px] gap-x-2 text-white h-[44px] bg-[#34A2B2] rounded-md flex justify-center items-center">
            <ShareIcon />
            <p className="text-xs">Share with Contractor</p>
          </button>
        </div>
      </div>

      <div>
        <div>
          <hr className="w-full pb-5" />

          <p className="font-medium text-sm text-[#075A66] py-2">
            Time sheet name
          </p>
          <div className="flex flex-col ">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className=" py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto rounded-lg">
                  <table className="table-auto text-left text-sm font-light w-full">
                    <thead className="border-b bg-[#E3E8EF] font-medium rounded-lg dark:border-neutral-500">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                        >
                          Changes Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          INVOICE CATEGORIES
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          PROJECT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          TASK
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                        >
                          COMMENTS (include risks, issues, details as
                          applicable)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td
                          width="20%"
                          className="whitespace-nowrap text-center px-6 py-4"
                        >
                          12-06-2021
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          126106
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          DFAS
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Data Foundation
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Added a new View
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Include October hours
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="w-full flex justify-center pb-6 items-center mt-7">
                    <button className="w-[166px] h-[36px] flex justify-center items-center gap-x-2 border border-dotted border-black rounded-[4px]">
                      <AddIcon />
                      <p>Add Row</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-7 flex flex-col gap-x-3 mt-14 lg:flex lg:flex-row md:flex-row  md:flex lg:justify-end md:justify-end justify-center items-center">
          <button className="lg:mt-0 md:mt-0 gap-x-2 mt-4 w-[134px] h-[44px] border rounded-md flex justify-center items-center">
            <ExcelLogo />
            <p className="text-xs">Save as .xlsx</p>
          </button>
          <button className="w-[170px] gap-x-2 text-white h-[44px] bg-[#34A2B2] rounded-md flex justify-center items-center">
            <ShareIcon />
            <p className="text-xs">Share with Contractor</p>
          </button>
        </div>
      </div>

      <div>
        <div>
          <hr className="w-full pb-5" />

          <p className="font-medium text-sm text-[#075A66] py-2">
            Time sheet name
          </p>
          <div className="flex flex-col ">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className=" py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto rounded-lg">
                  <table className="table-auto text-left text-sm font-light w-full">
                    <thead className="border-b bg-[#E3E8EF] font-medium rounded-lg dark:border-neutral-500">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                        >
                          Changes Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          INVOICE CATEGORIES
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          PROJECT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          TASK
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                        >
                          COMMENTS (include risks, issues, details as
                          applicable)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td
                          width="20%"
                          className="whitespace-nowrap text-center px-6 py-4"
                        >
                          12-06-2021
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          126106
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          DFAS
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Data Foundation
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Added a new View
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Include October hours
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="w-full flex justify-center pb-6 items-center mt-7">
                    <button className="w-[166px] h-[36px] flex justify-center items-center gap-x-2 border border-dotted border-black rounded-[4px]">
                      <AddIcon />
                      <p>Add Row</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-7 flex flex-col gap-x-3 mt-14 lg:flex lg:flex-row md:flex-row  md:flex lg:justify-end md:justify-end justify-center items-center">
          <button className="lg:mt-0 md:mt-0 gap-x-2 mt-4 w-[134px] h-[44px] border rounded-md flex justify-center items-center">
            <ExcelLogo />
            <p className="text-xs">Save as .xlsx</p>
          </button>
          <button className="w-[170px] gap-x-2 text-white h-[44px] bg-[#34A2B2] rounded-md flex justify-center items-center">
            <ShareIcon />
            <p className="text-xs">Share with Contractor</p>
          </button>
        </div>
      </div>
    </>
  );
}
