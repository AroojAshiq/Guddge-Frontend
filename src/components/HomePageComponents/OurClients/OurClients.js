import React from "react";

import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();


  return (
    <section className=" bg-[#29575E]  dark:bg-[#07343A] text-black-600 body-font flex justify-center items-center  ">
      <div className="choose container py-24 px-5 space-y-16 ">
        <div className="flex flex-wrap w-full  mb-8 flex-col items-center">
          <h1 className="sm:text-3xl text-4xl font-lg font-bold title-font mb-2 text-white ">
          Our Clients
          </h1>
          <p className="lg:w-1/2 leading-relaxed text-[#E9E9E9] dark:text-[#959CB1]  mt-4 text-center ">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="flex flex-wrap   justify-center justify-items-center   grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 xl-gap-x-12 xl:gap-y-12 lg:gap-x-4 lg:gap-y-20 md:gap-x-20 sm:gap-y-8  ">

       
    
       <div className="xl:w-[300px] xl:h-auto lg:w-[400px] lg:h-auto md:w-[330px] md:h-auto w-[350px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white  shadow-lg  xl:h-96 md:h-72  bg-[#F5FEFF]  dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./client-2.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-lg text-black dark:text-white  rounded-lg font-medium title-font mb-6 text-center ">
                Amtrak <br></br> <span className="text-[#444444] dark:text-[#5F8388] text-md"> Client</span>
              </h2>

              <p className=" text-black dark:text-[#959CB1] text-base font-normal mb-6 mt-6 text-center ">
              Business Description  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet, consectetur ...
              </p>
            </div>
          </div>

              
       <div className="xl:w-[300px] xl:h-auto lg:w-[400px] lg:h-auto md:w-[330px] md:h-auto w-[350px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white  shadow-lg  xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./client-3.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-lg text-black dark:text-white  rounded-lg font-medium title-font mb-6 text-center ">
              Barclay’s Capital <br></br> <span className="text-[#444444]  dark:text-[#5F8388] text-md"> Client</span>
              </h2>

              <p className=" text-black dark:text-[#959CB1] text-base font-normal mb-6 mt-6 text-center ">
              Business Description  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet, consectetur ...
              </p>
            </div>
          </div>


    
          <div className="xl:w-[300px] xl:h-auto lg:w-[400px] lg:h-auto md:w-[330px] md:h-auto w-[350px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white  shadow-lg xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./client-8.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-lg text-black dark:text-white  rounded-lg font-medium title-font mb-6 text-center ">
              Enterprise Products Partners L.P. <br></br> <span className="text-[#444444] dark:text-[#5F8388] text-md"> Company</span>
              </h2>

              <p className=" text-black dark:text-[#959CB1] text-base font-normal mb-6 mt-6 text-center ">
              Business Description  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet, consectetur ...
              </p>
            </div>
          </div>

    
          <div className="xl:w-[300px] xl:h-auto lg:w-[400px] lg:h-auto md:w-[330px] md:h-auto w-[350px] h-auto p-4 mt-8 rounded-lg bg-white-900 text-white  shadow-lg xl:h-96 md:h-72  bg-[#F5FEFF] dark:bg-[#04505B] ">
            <div className=" rounded-lg flex justify-center items-center   ">
              <div className="  ">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./client-9.svg"
                />
              </div>
            </div>
            <div className="w-full ">
              <h2 className="  text-lg text-black dark:text-white  rounded-lg font-medium title-font mb-6 text-center ">
              Lucent Technologies <br></br> <span className="text-[#444444] dark:text-[#5F8388] text-md"> Client</span>
              </h2>

              <p className=" text-black  dark:text-[#959CB1] text-base font-normal mb-6 mt-6 text-center ">
              Business Description  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.Lorem ipsum dolor sit amet, consectetur ...
              </p>
            </div>
          </div>



    


        

          </div>
        <div className=" w-full flex justify-center  ">
          <button
            type="submit"
            onClick={() => {
              navigate("/portfolio");
            }}
            className=" text-[#076978] adrk:text-white  w-36 bg-[#FFFFFF] dark:bg-[#4BA9B6]  hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC]  rounded-md text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-500  mb-2 "
          >
            View All
          </button>
        </div>
      </div>
     
    </section>
  );
};

export default Choose;
