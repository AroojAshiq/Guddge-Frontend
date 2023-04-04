import React, { useState } from "react";
import search from "../../assests/searchIcon.svg";
import plus from "../../assests/plusIcon.svg";
import edit from "../../assests/editIcon.svg";
import ClientModal from "./ClientModal";

export default function Clients() {
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      id: 1,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      hourlyRate: "$50",
    },
    {
      id: 2,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      hourlyRate: "$50",
    },
    {
      id: 3,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      hourlyRate: "$50",
    },
    {
      id: 4,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      hourlyRate: "$50",
    },
    {
      id: 5,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      hourlyRate: "$50",
    },
    {
      id: 6,
      name: "Mark Nelson",
      email: "marknelson@hotmail.com",
      licenseKey: "12718181626microsft",
      contact: "+91 5336 363 82",
      hourlyRate: "$50",
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
          <button
            className="w-[155px] h-[44px] bg-black rounded-lg flex items-center justify-center lg:mt-0 mt-3"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <img src={plus} alt="create" />
            <p className="text-white text-xs font-normal pl-1">Create Client</p>
          </button>
        </div>
        <div className="h-screen overflow-y-auto px-4">
          {data?.map((obj, i) => (
            <div key={obj?.id} className="py-3 ">
              <hr className="mb-6" />
              <div className="lg:flex md:flex items-center justify-between">
                <div className="flex">
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
                      Hourly Rate
                    </p>
                  </div>
                  <div className="ml-5">
                    <p className=" text-base font-medium">{obj.name}</p>
                    <p className=" text-base font-medium">{obj.email}</p>
                    <p className=" text-base font-medium">{obj.licenseKey}</p>
                    <p className=" text-base font-medium">{obj.contact}</p>
                    <p className=" text-base font-medium">{obj.hourlyRate}</p>
                  </div>
                </div>
                <div className="lg:mr-10 md:mr-10  lg:mt-0 md:mt-0 mt-5 lg:block md:block flex justify-end">
                  <img src={edit} alt="edit" />
                </div>
              </div>
            </div>
          ))}
          <ClientModal setShowModal={setShowModal} showModal={showModal} />
        </div>
      </div>
    </>
  );
}
