import React from "react";
import { Link } from "react-router-dom";
function ViewArticle() {
  return (
    <section className=" bg-[#F5F5F5]  dark:bg-[#07343A] text-black-600 body-font relative z-0   ">
      <div className=" xl:w-[550px]  xl:h-[500px]  lg:w-[380px] lg:h-[380px]  md:w-[470px] md:h-[390px]  w-[280px] h-[250px] absolute   xl:left-[898px] lg:left-[643px]  md:left-[438px] left-[130px]  z-10">
        <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block"
          src="./Frame 915.svg"
        />
      </div>

      <div className=" xl:w-[400px] xl:h-[700px]  lg:w-[240px] lg:h-[440px] md:w-[240px] md:h-[420px] w-[220px] h-[400px] xl:top-[200px] lg:top-[160px] md:top-[180px] top-[270px] absolute  z-10  bg-gradient-to-t ">
        <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block  "
          src="./Frame 916.svg"
        />
      </div>
      <div className="container w-full  px-6 py-24 mx-auto ">
        <div className="flex  justify-center relative z-20 mb-8">
          <div className=" flex flex-wrap w-10/12 py-8 rounded-2xl justify-center space-y-6  mb-8 bg-[#E7E7E7] dark:bg-[#00343C] border border-[#E7E7E7] dark:border-[#08616CF7]">
            <div className="  w-11/12  p-6 space-y-12 rounded-2xl ">
              <div className="flex flex-wrap w-11/12  mb-8 flex-col items-start gap-6 ">
                <h1 className=" text-base font-medium leading-[24px] mb-2 text-[#959CB1]">
                  Home{" > "}
                  <span className="text-base font-medium leading-[24px] mb-2 text-black dark:text-[#959CB1]">
                   
                    Articles  {" > "}
                  </span>
                  <span className="text-base font-medium leading-[24px] mb-2 text-black dark:text-white">
                    {" "}
                    Article Open
                  </span>
                </h1>
                <h1 className=" xl:text-4xl  lg:text-3xl md:text-2xl text-xl font-bold leading-[45px] mb-2 text-[#4B4B4B]  dark:text-white">
                  5 Ways to Improve Your Information Management Strategy
                </h1>
              </div>

              <div className="flex flex-wrap w-full items-between ">
                <div className=" w-1/2   rounded-lg flex justify-items-between   ">
                  <div className=" xl:w-12 rounded-lg  mb-2 mt-2  ml-4   ">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block "
                      src="./eng-6.svg"
                    />
                  </div>
                  <div className=" rounded-lg  flex items-center ">
                    <h1 className=" text-black  dark:text-[#959CB1] text-base font-medium leading-[24px] ml-6 mr-6 mb-4 mt-4 text-blue-500  rounded-lg ">
                      Musharof Chy
                    </h1>
                  </div>
                </div>
                <div className=" w-1/2  flex justify-end  flex justify-end items-center">
                  <div className=" rounded-lg w-[160px] h-[36px] px-[16px] py-[8px]  flex items-center  bg-[#E7E7E7] dark:bg-[#022C32] ">
                    <h1 className=" text-black  dark: text-white text-sm font-normal leading-[20px] mr-2 ml-2 mb-4 mt-4 text-blue-500  rounded-lg ">
                      05:34 min to read
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap w-full xl:text-left lg:text-left  text-center text-black dark:text-[#959CB1]  space-y-8 font-medium xl:text-lg md:text-base text-sm leading-[29px]">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>

                <div>
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block "
                    src="./article-view.svg"
                  />
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis enim lobortis scelerisque fermentum. Neque sodales ut
                  etiam sit amet. Ligula ullamcorper<span className="font-bold dark:text-white">malesuada</span>proin libero nunc
                  consequat interdum varius. Quam pellentesque nec nam aliquam
                  sem et tortor consequat. Pellentesque adipiscing commodo elit
                  at imperdiet.
                </p>

                <p>
                  Semper auctor neque vitae tempus quam pellentesque nec.Amet
                  dictum sit amet justodonec enim diam. Varius sit amet mattis
                  vulputate enim nulla aliquet porttitor. Odio pellentesque diam
                  volutpat commodo sed.
                </p>

                <p className="xl:text-2xl  md:text-2xl text-xl font-bold leading-[32px]  w-full text-black dark:text-white">
                  The Right Business Intelligence Tool
                </p>

                <p>
                  consectetur adipiscing elit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  mattis vulputate cupidatat.
                </p>

                <ul className="list-reset text-black space-y-4    text-grey-darker rounded ">
                  <li className="flex items-center mb-1 leading-[28px] text-black dark:text-[#959CB1] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="#02A2B9"
                      className="bi bi-circle-fill mr-2"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <circle cx="8" cy="8" r="8"></circle>{" "}
                    </svg>
                    Consectetur adipiscing elit in voluptate velit.
                  </li>

                  <li className="flex items-center mb-1 leading-[28px] text-black dark:text-[#959CB1] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="#02A2B9"
                      className="bi bi-circle-fill mr-2"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <circle cx="8" cy="8" r="8"></circle>{" "}
                    </svg>
                    Mattis vulputate cupidatat.
                  </li>

                  <li className="flex items-center mb-1 leading-[28px] text-black dark:text-[#959CB1] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="#02A2B9"
                      className="bi bi-circle-fill mr-2"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <circle cx="8" cy="8" r="8"></circle>{" "}
                    </svg>
                    Vulputate enim nulla aliquet porttitor odio pellentesque
                  </li>

                  <li className="flex items-center mb-1 leading-[28px]  text-black dark:text-[#959CB1] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="#02A2B9"
                      className="bi bi-circle-fill mr-2"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <circle cx="8" cy="8" r="8"></circle>{" "}
                    </svg>
                    Ligula ullamcorper malesuada proin
                  </li>
                </ul>

                <div className=" text-center p-6 bg-[#022C32] text-lg font-medium italic leading-[24px] text-white dark:text-[#959CB1]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod incididunt utionals labore et dolore magna aliqua.
                  Quis lobortis scelerisque fermentum, The Neque ut etiam sit
                  amet.
                </div>

                <p>
                  consectetur adipiscing elit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  mattis vulputate cupidatat.
                </p>

                <div className=" text-sm font-medium leading-[20px]">
                  <h1>Share this post :</h1>
                  <div className="flex space-x-4 p-4 ">
                    <Link
                      to="/"
                      className="bg-[#078CA0] dark:bg-[#4A6CF71A] rounded-lg  text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                     <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block  "
          src="./in.svg"
        />
                    </Link>

                    <Link
                      to="/"
                      className="bg-[#078CA0] dark:bg-[#4A6CF71A] rounded-lg  hover:text-gray-900 dark:hover:text-white"
                    >
                             <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block  "
          src="./twitter.svg"
        />
                    </Link>
                    <Link
                      to="/"
                      className="bg-[#078CA0] dark:bg-[#4A6CF71A] rounded-lg hover:text-gray-900 dark:hover:text-white"
                    >
                             <img
          alt="gallery"
          className="w-full object-cover h-full  object-center block  "
          src="./fb.svg"
        />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewArticle;
