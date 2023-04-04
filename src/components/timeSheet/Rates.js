import React from "react";
import search from "../../assests/searchIcon.svg";
import edit from "../../assests/editIcon.svg";

export default function Rates() {
  const data = [
    {
      id: 1,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      ContRate: "$50",
      ClientRate: "$60",
    },
    {
      id: 2,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      ContRate: "$50",
      ClientRate: "$60",
    },
    {
      id: 3,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      ContRate: "$50",
      ClientRate: "$60",
    },
    {
      id: 4,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      ContRate: "$50",
      ClientRate: "$60",
    },
    {
      id: 5,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      ContRate: "$50",
      ClientRate: "$60",
    },
    {
      id: 6,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      ContRate: "$50",
      ClientRate: "$60",
    },
  ];
  return (
    <>
      <div className="max-w-[900px] md:px-5">
        <div className="flex items-center lg:justify-between lg:flex-row flex-col md:justify-between md:flex-row  justify-center my-2">
          <div className="w-7/12 px-4">
            <h1 className="font-semibold text-lg lg:text-left md:text-left text-center">
              All Clients
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
            Total Clients <span>360</span>
          </h1>
        </div>
        <div className="h-screen overflow-y-auto px-4">
          {data?.map((obj, i) => (
            <div key={obj?.id} className="py-3 bg">
              <hr className="mb-6" />
              <div className="lg:flex lg:flex-row  md:flex items-center justify-between block p-5">
                <div className="flex ">
                  <div>
                    <p className="text-base font-normal text-gray-500">Name</p>
                    <p className="text-base font-normal text-gray-500">Email</p>
                    <p className="text-base font-normal text-gray-500">
                      License key
                    </p>
                    <p className="text-base font-normal text-gray-500">
                      Contact
                    </p>
                    <p className="text-base font-normal text-gray-500">
                      Cont-Rate
                    </p>
                    <p className="text-base font-normal text-gray-500">
                      Client Rate
                    </p>
                  </div>
                  <div className="ml-5">
                    <p className=" text-base font-medium">{obj.name}</p>
                    <p className=" text-base font-medium">{obj.email}</p>
                    <p className=" text-base font-medium">{obj.licenseKey}</p>
                    <p className=" text-base font-medium">{obj.contact}</p>
                    <p className=" text-base font-medium">{obj.ContRate}</p>
                    <p className=" text-base font-medium">{obj.ClientRate}</p>

                  </div>
                </div>
                <div className=" lg:mt-0 md:mt-0 mt-5 flex lg:items-end md:items-end lg:flex-col md:flex-col lg:justify-evenly md:justify-evenly  justify-start  lg:h-32 md:h-32">
                  <div className="flex justify-center items-center">
                    <p className="font-normal text-xs">Edit</p>
                    <img
                      src={edit}
                      alt="edit"
                      className="h-5 w-5 ml-2 lg:mr-0 md:mr-0 mr-5"
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <span className="font-normal text-xs">
                      Show Contractor to Client
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer ml-3 -z-0">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer "
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
