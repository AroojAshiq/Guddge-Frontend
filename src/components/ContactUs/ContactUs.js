import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Frame1, Frame2 } from "../iconComponent/Slide";

const SignupForm = () => {
  return (
    <section className=" bg-[#F5F5F5] dark:bg-[#07343A] text-black-600 body-font flex justify-center items-center relative z-0 overflow-hidden">
      <div className="w-full absolute flex justify-end items-end">
        <div className="xl:block lg:block md:block hidden xl:w-[470px]  xl:h-[500px]  lg:w-[400px] lg:h-[380px]  md:w-[470px] md:h-[390px]  w-[280px] h-[250px] relative xl:-top-[250px] lg:-top-[280px] md:-top-[520px] -top-[850px] ">
          <Frame1 />
        </div>
      </div>
      <div className="w-full absolute flex justify-start xl:block lg:block md:block hidden">
        <div className=" xl:w-[420px] xl:h-[700px]  lg:w-[280px] lg:h-[485px] md:w-[270px] md:h-[420px] w-[220px] h-[400px] relative xl:-top-6 lg:-top-12 md:-top-[350px] -top-[600px] bg-gradient-to-t  ">
          <Frame2 />
        </div>
      </div>
      <div className="container  w-full  px-6 py-16 mx-auto relative z-20  ">
        <div className="flex flex-wrap w-full  mb-8 flex-col ">
          <h1 className=" text-base leading-[24px] font-medium  mb-2 text-[#959CB1]">
            Home{" > "}
            <span className="text-base leading-[24px] font-medium mb-2 text-black dark:text-white">
              {" "}
              Contact Us
            </span>
          </h1>
          <h1 className="xl:text-[45px] text-4xl leading-[56px] font-bold   lg:text-start md:text-start text-center  font-medium font-bold title-font mb-2 text-[#4B4B4B] dark:text-white">
            Contact Us
          </h1>
        </div>
        <div className=" w-full flex justify-center items-center lg:flex-row flex-col space-y-8 mb-8    ">
          <div className="xl:w-[800px] lg:w-[550px] md:w-[600px] sm:w-4/5 p-4   mt-8 bg-white dark:bg-[#04505B] rounded-lg shadow-lg  flex justify-center items-center flex-col ">
            <div className="flex  p-4 justify-start   w-full  flex-col ">
              <h1 className=" xl:text-3xl lg:text-3xl text-2xl leading-[36px] font-bold   mb-2 text-[#093E46] dark:text-white lg:text-start md:text-start text-center">
                Need Help? Or Want To See Us in Action ?
              </h1>
              <p className=" leading-[24px] text-base font-medium text-[#515151] dark:text-[#959CB1] lg:text-start md:text-start text-center mt-2 ">
                Our support team will get back to you ASAP via email.
              </p>
            </div>

            <Formik
              initialValues={{ name: "", email: "", text: "" }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("Required"),

                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                text: Yup.string()
                  .max(20, "Must be 50 characters or less")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <form
                  onSubmit={formik.handleSubmit}
                  className=" w-full space-y-6  "
                >
                  <div className="w-full h-auto p-4 flex items-center lg:flex-row md:flex-row flex-col lg:justify-start gap-2 ">
                    <div className=" lg:w-6/12 md:w-6/12 w-full  space-y-2">
                      <label className="text-black dark:text-white text-sm font-medium leading-[20px]">
                        {" "}
                        Your Name
                      </label>

                      <input
                        id="name"
                        placeholder="Enter youe name"
                        className="  bg-[#DDEBED] border-[#DDEBED] dark:bg-[#0E292D] dark:border-[#04505B] h-[50px] text-white dark:text-white w-full rounded-md"
                        type="text"
                        {...formik.getFieldProps("name")}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500">{formik.errors.name}</div>
                      ) : null}
                    </div>
                    <div className="lg:w-6/12 md:w-6/12 w-full space-y-2  ">
                      <label className="text-black dark:text-white text-sm font-medium leading-[20px]">
                        {" "}
                        Your{" "}
                      </label>

                      <input
                        id="email"
                        placeholder="Enter your email"
                        className="bg-[#DDEBED] border-[#DDEBED] dark:bg-[#0E292D] dark:border-[#04505B] h-[50px]  text-white dark:text-white w-full rounded-md"
                        type="email"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-full h-40 p-4  flex justify-center">
                    <div className=" w-full h-full  space-y-2">
                      <label className="text-black dark:text-white text-sm font-medium leading-[20px]">
                        {" "}
                        Your Message
                      </label>

                      <textarea
                        id="text"
                        className=" w-full h-full bg-[#DDEBED] border-[#DDEBED] dark:bg-[#0E292D] dark:border-[#04505B]   text-white dark:text-white  rounded-md"
                        type="text"
                        {...formik.getFieldProps("text")}
                      />
                      {formik.touched.text && formik.errors.text ? (
                        <div className="text-red-500">{formik.errors.text}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-4 flex lg:justify-start md:justify-start justify-center">
                    <button
                      type="submit"
                      className=" text-white  w-[124px] h-[56px] bg-[#4BA9B6] dark:bg-[#4BA9B6] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-base leading-[24px] px-[35px] py-[16px] text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className=" xl:w-[450px] xl:h-[560px] lg:w-[450px] lg:h-[590px] md:w-[450px] md:h-[500px] w-[9/12]  h-[500px] lg:ml-16  ml-0 lg:p-0 md:p-0 p-6   flex justify-center items-center rounded-lg bg-[#04505B] ">
            <div className="w-72 h-96 ">
              <h1 className=" text-2xl  font-bold leading-[32px] title-font mb-2 text-white  ">
                Contact Us
              </h1>

              <ul className="list-reset text-black space-y-2 mt-2 mb-12 text-grey-darker rounded ">
                <li className="flex items-center mb-1 text-base font-medium leading-[20px] text-[#959CB1] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-house-door mr-2 "
                    viewBox="0 0 16 16"
                    id="IconChangeColor"
                  >
                    {" "}
                    <path
                      d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                      id="mainIconPathAttribute"
                      fill="#959CB1"
                    ></path>{" "}
                  </svg>
                  Address: Juhu, Mumbai 400049
                </li>

                <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-telephone mr-2 "
                    viewBox="0 0 16 16"
                    id="IconChangeColor"
                  >
                    {" "}
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      id="mainIconPathAttribute"
                      fill="#959CB1"
                    ></path>{" "}
                  </svg>
                  Phone: (510) 408-7574
                </li>

                <li className="flex items-center mb-1 text-base font-medium leading-[20px] text-[#959CB1] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="IconChangeColor"
                    height="24"
                    width="24"
                    className="cls-2 mr-2 "
                  >
                    <path
                      d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                      id="mainIconPathAttribute"
                      fill="#959CB1"
                    ></path>
                  </svg>
                  Email: info@guddge.com
                </li>
              </ul>

              <hr className=" w-72 border-[#828282] mb-12 sm:mx-auto  " />

              <h1 className=" text-2xl  font-bold leading-[32px] title-font mb-2 text-white ">
                Contact Us
              </h1>

              <ul className="list-reset text-black space-y-2 mt-2 text-grey-darker rounded ">
                <li className="flex items-center mb-1 text-base font-medium leading-[20px]  text-[#959CB1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-house-door mr-2  "
                    viewBox="0 0 16 16"
                    id="IconChangeColor"
                  >
                    {" "}
                    <path
                      d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                      id="mainIconPathAttribute"
                      fill="#959CB1"
                    ></path>{" "}
                  </svg>
                  Address: Juhu, Mumbai 400049
                </li>

                <li className="flex items-center mb-1 text-base font-medium leading-[20px] text-[#959CB1] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-telephone mr-2 "
                    viewBox="0 0 16 16"
                    id="IconChangeColor"
                  >
                    {" "}
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      id="mainIconPathAttribute"
                      fill="#959CB1"
                    ></path>{" "}
                  </svg>
                  Phone: (510) 408-7574
                </li>

                <li className="flex items-center mb-1 text-base font-medium leading-[20px] text-[#959CB1] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="IconChangeColor"
                    height="24"
                    width="24"
                    className="cls-2 mr-2 "
                  >
                    {" "}
                    <path
                      d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z"
                      id="mainIconPathAttribute"
                      fill="#959CB1"
                    ></path>
                  </svg>
                  Email: info@guddge.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignupForm;
