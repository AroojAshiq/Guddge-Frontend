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
              <div className="flex flex-wrap w-11/12  mb-8 flex-col items-start ">
                <h1 className=" text-sm font-medium font-bold title-font mb-2 text-[#959CB1]">
                  Home{" > "}
                  <span className="text-sm font-medium font-bold title-font mb-2 text-black dark:text-[#959CB1]">
                   
                    Articles  {" > "}
                  </span>
                  <span className="text-sm font-medium font-bold title-font mb-2 text-black dark:text-white">
                    {" "}
                    Article Open
                  </span>
                </h1>
                <h1 className=" xl:text-4xl  lg:text-3xl md:text-2xl text-xl font-bold title-font mb-2 text-[#4B4B4B]  dark:text-white">
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
                    <h1 className=" text-black  dark:text-[#959CB1] text-sm ml-6 mr-6 mb-4 mt-4 text-blue-500  rounded-lg ">
                      Musharof Chy
                    </h1>
                  </div>
                </div>
                <div className=" w-1/2 flex justify-end ">
                  <div className=" rounded-lg px-6 flex items-center  bg-[#E7E7E7] dark:bg-[#022C32] ">
                    <h1 className=" text-black  dark: text-white text-md mr-2 ml-2 mb-4 mt-4 text-blue-500  rounded-lg ">
                      05:34 min to read
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap w-full xl:text-left lg:text-left  text-center text-black dark:text-[#959CB1]  space-y-8 font-normal xl:text-lg md:text-base text-sm">
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
                  etiam sit amet. Ligula ullamcorpermalesuadaproin libero nunc
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

                <p className="xl:text-2xl  md:text-2xl text-xl font-bold  w-full text-black dark:text-white">
                  The Right Business Intelligence Tool
                </p>

                <p>
                  consectetur adipiscing elit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  mattis vulputate cupidatat.
                </p>

                <ul className="list-reset text-black space-y-4    text-grey-darker rounded ">
                  <li className="flex items-center mb-1  text-[#959CB1] ">
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

                  <li className="flex items-center mb-1 text-[#959CB1] ">
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

                  <li className="flex items-center mb-1  text-[#959CB1] ">
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

                  <li className="flex items-center mb-1  text-[#959CB1] ">
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

                <div className=" text-center p-6 bg-[#022C32] text-white dark:text-[#959CB1]">
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

                <div className="">
                  <h1>Share this post :</h1>
                  <div className="flex space-x-4 p-4 ">
                    <Link
                      to="/"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className=" rounded-md bi bi-linkedin"
                        viewBox="0 0 16 16"
                        id="IconChangeColor"
                      >
                        {" "}
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                          id="mainIconPathAttribute"
                          fill="#03989e"
                        ></path>{" "}
                      </svg>
                    </Link>

                    <Link
                      to="/"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="bg-[#03989e] rounded-md"
                        width="30"
                        height="30"
                        fill="white"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="bg-[#03989e] rounded-md"
                        width="30"
                        height="30"
                        fill="white"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
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
