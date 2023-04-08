import React from "react";
import Calender from "./Calender";
import Holidays from "./Holidays";

export default function CalenderPage() {
  return (
    <div className="w-full ">
      <Calender />
      <Holidays/>
    </div>
  );
}
