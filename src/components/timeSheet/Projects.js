import React, { useState } from "react";
import search from "../../assests/searchIcon.svg";
import plus from "../../assests/plusIcon.svg";
import ProjectModal from "./ProjectModal";
import { Link } from "react-router-dom";
import { TrashIcon, EditIcon, ArrowIcon } from "../iconComponent/Icon";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      id: 1,
      name: "James Smith Home Project",
      supervisor: "Mark Nelson",
      Contractors: "Kalan Mandlea",
      Client: "James Smith",
      CreatedOn: "04 - Feb - 2022",
    },
    {
      id: 2,
      name: "James Smith Home Project",
      supervisor: "Mark Nelson",
      Contractors: "Kalan Mandlea",
      Client: "James Smith",
      CreatedOn: "04 - Feb - 2022",
    },
    {
      id: 3,
      name: "James Smith Home Project",
      supervisor: "Mark Nelson",
      Contractors: "Kalan Mandlea",
      Client: "James Smith",
      CreatedOn: "04 - Feb - 2022",
    },
    {
      id: 4,
      name: "James Smith Home Project",
      supervisor: "Mark Nelson",
      Contractors: "Kalan Mandlea",
      Client: "James Smith",
      CreatedOn: "04 - Feb - 2022",
    },
    {
      id: 5,
      name: "James Smith Home Project",
      supervisor: "Mark Nelson",
      Contractors: "Kalan Mandlea",
      Client: "James Smith",
      CreatedOn: "04 - Feb - 2022",
    },
    {
      id: 6,
      name: "James Smith Home Project",
      supervisor: "Mark Nelson",
      Contractors: "Kalan Mandlea",
      Client: "James Smith",
      CreatedOn: "04 - Feb - 2022",
    },
  ];
  return (
    <>
      <div className="max-w-[900px] md:px-5">
        <div className=" flex items-center lg:justify-between lg:flex-row md:justify-between md:flex-row flex-col justify-center my-2">
          <div className="w-7/12 px-4">
            <h1 className="font-semibold text-lg lg:text-left md:text-left text-center">
              All Projects
            </h1>
            <p className="text-base font-normal text-gray-500 lg:text-left md:text-left text-center">
              You can create multiple role based on license or give role to
              someone blah blah
            </p>
          </div>
          <div className="w-[233px] h-[52px] border border-[#A1A1A1] flex items-center rounded-lg lg:mt-0 mt-5">
            <img src={search} alt="search" className="w-5 h-5 ml-3" />
            <input
              placeholder="Search User by name or email"
              className="placeholder-[#A1A1A1] text-sm w-full pl-2 outline-none text-[#A1A1A1]"
            />
          </div>
        </div>
        <div className=" flex items-center lg:flex-row lg:justify-between md:flex-row md:justify-between justify-center flex-col  my-7 px-4">
          <h1 className="font-semibold text-lg">
            Total Projects <span>360</span>
          </h1>
          <button
            className="w-[155px] h-[44px] bg-black rounded-lg flex items-center justify-center lg:mt-0 mt-3"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <img src={plus} alt="create" />
            <p className="text-white text-xs font-normal pl-1">
              Create New Project
            </p>
          </button>
        </div>
        <div className="h-screen overflow-y-auto px-4">
          {data?.map((obj, i) => (
            <div key={obj?.id} className="py-3 ">
              <hr className="mb-6 " />
              <div className="bg-[#F0FAFC] rounded-lg pb-3">
                <div className="lg:flex md:flex items-center justify-between block  p-5">
                  <div className="flex ">
                    <div>
                      <p className="text-base font-normal text-gray-500">
                        Name
                      </p>
                      <p className="text-base font-normal text-gray-500">
                        Supervisor
                      </p>
                      <p className="text-base font-normal text-gray-500">
                        Contractors
                      </p>
                      <p className="text-base font-normal text-gray-500">
                        Client
                      </p>
                      <p className="text-base font-normal text-gray-500">
                        Created on
                      </p>
                    </div>
                    <div className="ml-5">
                      <p className=" text-base font-medium">{obj.name}</p>
                      <p className=" text-base font-medium">{obj.supervisor}</p>
                      <p className=" text-base font-medium">
                        {obj.Contractors}
                      </p>
                      <p className=" text-base font-medium">{obj.Client}</p>
                      <p className=" text-base font-medium">{obj.CreatedOn}</p>
                    </div>
                  </div>
                  <div className="flex mt-4 lg:flex-col md:flex-col lg:justify-between lg:items-end justify-between  lg:h-32 md:h-32">
                    <div className="flex gap-x-5">
                      <TrashIcon />
                      <EditIcon />
                    </div>

                    <div className="flex justify-between">
                      <Link
                        to="/dashboard/viewproject"
                        className="underline text-[#037283] hover:no-underline transition-all duration-1000 ease-linear "
                      >
                        <p className="text-base font-semibold   text-[#037283] ">
                          View Sheet
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full ">
                  <div className="relative w-full h-auto overflow-hidden">
                    <input
                      type="checkbox"
                      className="peer absolute top-0 insert-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                    />
                    <div className=" h-12 w-full pl-5 flex items-center text-[#64748B] ">
                      <p className=" text-lg text-black font-medium  ">
                        Subprojects <span>(2)</span>
                      </p>
                    </div>
                    {/* arrow */}
                    <div className="absolute top-3 mr-3 right-3 text-[#64748B] transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
                      <ArrowIcon className="transition-transform -rotate-90" />
                    </div>
                    <hr className="w-[96%] ml-[2%] pt-3" />
                    {/* content */}
                    <div className=" bg-[#F0FAFC] rounded-lg transition-all duration-500 overflow-hidden max-h-0 peer-checked:max-h-[1000vh] flex flex-col ">
                      <div className="w-[95%] flex flex-col justify-between items-center mx-auto">
                        <div className="lg:flex bg-[#D9EFF3] mt-5 rounded-lg md:flex items-center justify-between block w-full p-5">
                          <div className="flex ">
                            <div>
                              <p className="text-base font-normal text-gray-500">
                                Name
                              </p>
                              <p className="text-base font-normal text-gray-500">
                                Supervisor
                              </p>
                              <p className="text-base font-normal text-gray-500">
                                Contractors
                              </p>
                              <p className="text-base font-normal text-gray-500">
                                Client
                              </p>
                              <p className="text-base font-normal text-gray-500">
                                Created on
                              </p>
                            </div>
                            <div className="ml-5">
                              <p className=" text-base font-medium">
                                {obj.name}
                              </p>
                              <p className=" text-base font-medium">
                                {obj.supervisor}
                              </p>
                              <p className=" text-base font-medium">
                                {obj.Contractors}
                              </p>
                              <p className=" text-base font-medium">
                                {obj.Client}
                              </p>
                              <p className=" text-base font-medium">
                                {obj.CreatedOn}
                              </p>
                            </div>
                          </div>
                          <div className="flex mt-4 lg:flex-col md:flex-col lg:justify-between lg:items-end justify-between  lg:h-32 md:h-32">
                            <div className="flex gap-x-5">
                              <TrashIcon />
                              <EditIcon />
                            </div>

                            <div className="flex justify-between">
                              <Link
                                to="/dashboard/viewproject"
                                className="underline text-[#037283] hover:no-underline transition-all duration-1000 ease-linear "
                              >
                                <p className="text-base font-semibold   text-[#037283] ">
                                  View Sheet
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="lg:flex bg-[#D9EFF3] mt-5 rounded-lg md:flex items-center justify-between block w-full p-5">
                          <div className="flex ">
                            <div>
                              <p className="text-base font-normal text-gray-500">
                                Name
                              </p>
                              <p className="text-base font-normal text-gray-500">
                                Supervisor
                              </p>
                              <p className="text-base font-normal text-gray-500">
                                Contractors
                              </p>
                              <p className="text-base font-normal text-gray-500">
                                Client
                              </p>
                              <p className="text-base font-normal text-gray-500">
                                Created on
                              </p>
                            </div>
                            <div className="ml-5">
                              <p className=" text-base font-medium">
                                {obj.name}
                              </p>
                              <p className=" text-base font-medium">
                                {obj.supervisor}
                              </p>
                              <p className=" text-base font-medium">
                                {obj.Contractors}
                              </p>
                              <p className=" text-base font-medium">
                                {obj.Client}
                              </p>
                              <p className=" text-base font-medium">
                                {obj.CreatedOn}
                              </p>
                            </div>
                          </div>
                          <div className="flex mt-4 lg:flex-col md:flex-col lg:justify-between lg:items-end justify-between  lg:h-32 md:h-32">
                            <div className="flex gap-x-5">
                              <TrashIcon />
                              <EditIcon />
                            </div>

                            <div className="flex justify-between">
                              <Link
                                to="/dashboard/viewproject"
                                className="underline text-[#037283] hover:no-underline transition-all duration-1000 ease-linear "
                              >
                                <p className="text-base font-semibold   text-[#037283] ">
                                  View Sheet
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <ProjectModal setShowModal={setShowModal} showModal={showModal} />
        </div>
      </div>
    </>
  );
}
