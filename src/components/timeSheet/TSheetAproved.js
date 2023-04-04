import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, ArrowRight } from "../iconComponent/Icon";

export default function TSheetAproved() {
  const data = [
    {
      id: 1,
      name: "James Smith Home Project",
      supervisor: "Mark Nelson",
      Contractors: "Kalan Mandlea",
      Client: "James Smith",
      CreatedOn: "04 - Feb - 2022",
    },
    // {
    //   id: 2,
    //   name: "James Smith Home Project",
    //   supervisor: "Mark Nelson",
    //   Contractors: "Kalan Mandlea",
    //   Client: "James Smith",
    //   CreatedOn: "04 - Feb - 2022",
    // },
    // {
    //   id: 3,
    //   name: "James Smith Home Project",
    //   supervisor: "Mark Nelson",
    //   Contractors: "Kalan Mandlea",
    //   Client: "James Smith",
    //   CreatedOn: "04 - Feb - 2022",
    // },
    // {
    //   id: 4,
    //   name: "James Smith Home Project",
    //   supervisor: "Mark Nelson",
    //   Contractors: "Kalan Mandlea",
    //   Client: "James Smith",
    //   CreatedOn: "04 - Feb - 2022",
    // },
    // {
    //   id: 5,
    //   name: "James Smith Home Project",
    //   supervisor: "Mark Nelson",
    //   Contractors: "Kalan Mandlea",
    //   Client: "James Smith",
    //   CreatedOn: "04 - Feb - 2022",
    // },
    // {
    //   id: 6,
    //   name: "James Smith Home Project",
    //   supervisor: "Mark Nelson",
    //   Contractors: "Kalan Mandlea",
    //   Client: "James Smith",
    //   CreatedOn: "04 - Feb - 2022",
    // },
  ];
  return (
    <div className="h-screen  overflow-y-auto px-4">
      {data?.map((obj, i) => (
        <div key={obj?.id} className="py-3 ">
          <hr className="mb-6 " />
          <div className="rounded-md border  pb-3">
            <div className="lg:flex md:flex flex-col justify-between block  ">
              <div className="w-full bg-[#EEFDFF] border-b lg:h-[68px] md:h-[68px] h-auto lg:py-0 md:py-0 py-3">
                <div className="w-[98%] h-full mx-auto flex justify-between items-center">
                  <h1 className="text-[17px] font-bold">
                    James Smith Home Project Time sheet
                  </h1>
                  <Link to="/dashboard/viewtimesheets">
                    <button className="flex outline-none lg:mt-0 md:mt-0 mt-4 h-[44px] w-[136px] justify-center rounded-lg text-[17px] font-medium items-center gap-x-2 bg-black text-white">
                      <p>Open</p>
                      <ArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <div className=" sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <tbody>
                            <tr>
                              <td className="whitespace-nowrap  font-normal text-xs text-[#808080] px-6 py-2">
                                Client Name
                              </td>
                              <td className="whitespace-nowrap text-center font-normal text-xs text-[#808080] px-6 py-2">
                                Approval Date
                              </td>
                              <td className="whitespace-nowrap text-center font-normal text-xs text-[#808080] px-6 py-2">
                                Approved By
                              </td>
                              <td className="whitespace-nowrap text-end font-normal text-xs text-[#808080] px-6 py-2">
                                Status
                              </td>
                            </tr>
                            <tr>
                              <td className="whitespace-nowrap font-normal text-xs text-[#808080] px-6 pb-2">
                                James Smith
                              </td>
                              <td className="whitespace-nowrap text-center font-normal text-xs text-[#007A8B] px-6 pb-2">
                                <i>Waiting</i>
                              </td>
                              <td className="whitespace-nowrap font-normal text-center text-xs text-[#808080] px-6 pb-2">
                                Not yet
                              </td>
                              <td className="whitespace-nowrap text-end font-normal text-xs text-[#0C8B3F] px-6 pb-2">
                                Need Approval
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <hr className="w-[95%] mx-auto" />
                </div>
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="relative w-full h-auto overflow-hidden">
                <input
                  type="checkbox"
                  className="peer absolute top-0 insert-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className=" h-12 w-full pl-5 flex items-center text-[#64748B] ">
                  <p className=" text-sm text-black font-medium  ">
                    Assign Contractors For This Project <span>2</span>
                  </p>
                </div>
                {/* arrow */}
                <div className="absolute top-4 lg:left-[270px] md:left-[270px] left-[265px] text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
                  <ArrowIcon className="transition-transform -rotate-90" />
                </div>
                {/* content */}
                <div className="transition-all duration-500 overflow-hidden max-h-0 peer-checked:max-h-[1000vh] flex flex-col ">
                  <div className="w-[95%] flex flex-col mt-3  mx-auto">
                    <div className="flex hover:bg-[#F9FEFF] py-2 px-1 rounded-md">
                      <div className="w-6/12">
                        <p className="font-normal text-xs text-[#808080]">
                          Contractor Name
                        </p>
                        <p className="font-normal mt-2 text-xs text-[#808080]">
                          Elon Kilven
                        </p>
                      </div>
                      <div className="w-6/12">
                        <p className="font-normal text-xs text-[#808080]">
                          Contractor Email
                        </p>
                        <p className="font-normal mt-2 text-xs text-[#808080]">
                          Elonkilven@Hotmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[95%] flex flex-col mt-3  mx-auto">
                    <div className="flex hover:bg-[#F9FEFF] py-2 px-1 rounded-md">
                      <div className="w-6/12">
                        <p className="font-normal text-xs text-[#808080]">
                          Contractor Name
                        </p>
                        <p className="font-normal mt-2 text-xs text-[#808080]">
                          Elon Kilven
                        </p>
                      </div>
                      <div className="w-6/12">
                        <p className="font-normal text-xs text-[#808080]">
                          Contractor Email
                        </p>
                        <p className="font-normal mt-2 text-xs text-[#808080]">
                          Elonkilven@Hotmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[95%] flex flex-col mt-3 mx-auto">
                    <div className="flex hover:bg-[#F9FEFF] py-2 px-1 rounded-md">
                      <div className="w-6/12">
                        <p className="font-normal text-xs text-[#808080]">
                          Contractor Name
                        </p>
                        <p className="font-normal mt-2 text-xs text-[#808080]">
                          Elon Kilven
                        </p>
                      </div>
                      <div className="w-6/12">
                        <p className="font-normal text-xs text-[#808080]">
                          Contractor Email
                        </p>
                        <p className="font-normal mt-2 text-xs text-[#808080]">
                          Elonkilven@Hotmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex w-full justify-center items-center gap-x-6 mt-2">
        <button className="h-[44px] w-[72px] outline-none border rounded-md text-xs font-normal border-black">
          Cancel
        </button>
        <button className="h-[44px] w-[81px] outline-none bg-[#5BBE0D] text-white rounded-md text-xs font-normal">
          Approve
        </button>
      </div>
    </div>
  );
}
