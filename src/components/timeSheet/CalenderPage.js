import React from "react";
import Calender from "./Calender";
import Holidays from "./Holidays";

export default function CalenderPage() {
  return (
    <div className="w-full">
      <div className="flex items-center px-4 lg:justify-between lg:flex-row flex-col md:justify-between md:flex-row  justify-center my-2">
        <div className="w-full border-b-2 pb-3">
          <h1 className="font-semibold text-lg lg:text-left md:text-left text-center">
            Calendar
          </h1>
          <p className="text-base w-full font-normal text-gray-500 lg:text-left md:text-left text-center">
            You can create multiple role based on license or give role to
            someone blah blah
          </p>
        </div>
      </div>
      <div className="border ">
        <Calender />
      </div>
      <Holidays />
    </div>
  );
}
