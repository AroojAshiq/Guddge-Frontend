import React from "react";

export default function Holidays() {
  return (
    <div className="w-96 border mt-10 flex items-center  flex-col">
      <div className="w-[370px] border">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-semibold text-base ">Holidays</h1>
          <button className="w-24 h-9 bg-[#01464F] text-white rounded-sm">
            Add Holiday
          </button>
        </div>
        <div className="w-full flex mt-4">
          <button className="w-36 h-8 bg-[#01464F] text-white rounded-sm">
            Add Holiday
          </button>
          <button className="w-36 ml-4 h-8 bg-[#01464F] text-white rounded-sm">
            Add Holiday
          </button>
        </div>
      </div>
    </div>
  );
}
