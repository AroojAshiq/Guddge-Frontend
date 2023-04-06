import React from "react";

export default function ErrorMessage() {
  return (
    <div className="w-full h-[50vh] flex flex-col justify-center items-center">
      <div>
        <h1 className="text-black font-bold text-5xl">404</h1>
        <p className="text-xl font-medium mt-2">Sorry! page not found...</p>
      </div>
    </div>
  );
}
