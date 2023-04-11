import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  return (
    <section className=" bg-[#F5F5F5] dark:bg-[#04505B] text-black-600 body-font  flex justify-center items-center  ">
      <div className="container py-24  flex  justify-center items-center    ">
        <div className=" w-full flex justify-center items-center lg:flex-row flex-col space-y-8 xl:ml-6 lg:ml-9 md:ml-0  ml-0  ">
          <div className="xl:w-[850px] lg:w-[550px] md:w-[600px] w-11/12 p-4   mt-8 bg-white dark:bg-[#0E292D] rounded-lg shadow-lg  flex justify-center items-center flex-col  relative overflow-hidden ">
            <div className="flex  p-4 justify-start   w-full  flex-col ">
              <h1 className="xl:text-3xl text-2xl leading-[36px] font-bold   mb-2 text-[#093E46] dark:text-white lg:text-start md:text-start text-center">
                Need Help? Or Want To See Us in Action ?
              </h1>
              <p className=" leading-[24px] text-base font-medium  text-[#515151]   dark:text-[#959CB1] lg:text-start md:text-start text-center mt-2 ">
                Our support team will get back to you ASAP via email.
              </p>
            </div>

            <div className="absolute xl:left-[560px] xl:top-[430px] lg:left-[270px] lg:top-[420px] md:left-[330px] md:top-[430px] xl:block lg:block md:block hidden dark:hidden">
              <img
                alt="gallery"
                className="w-full object-cover h-full  object-center block"
                src="./svg.svg"
              />
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
                  className=" w-full xl:space-y-7 md:space-y-7 space-y-16 dark:xl:space-y-7 md:space-y-7 space-y-24  "
                >
                  <div className="w-full h-[90px] p-4 flex items-center lg:flex-row md:flex-row flex-col lg:justify-start xl:gap-7 md:gap-7 gap-2 ">
                    <div className=" lg:w-6/12 md:w-6/12 w-full space-y-2 ">
                      <label className=" hidden dark:block text-black dark:text-white text-sm font-medium leading-[20px]">
                        {" "}
                        Your Name
                      </label>
                      <input
                        id="name"
                        placeholder="Enter your name"
                        className="  bg-[#DDEBED] border-[#DDEBED] dark:bg-[#04505B] dark:border-[#04505B] h-[50px] text-black dark:text-white w-full rounded-md"
                        type="text"
                        {...formik.getFieldProps("name")}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500">{formik.errors.name}</div>
                      ) : null}
                    </div>
                    <div className="lg:w-6/12 md:w-6/12 w-full space-y-2  ">
                      <label className="hidden dark:block text-black dark:text-white text-sm font-medium leading-[20px]">
                        {" "}
                        Your Email
                      </label>
                      <input
                        id="email"
                        placeholder="Enter your email"
                        className="bg-[#DDEBED] border-[#DDEBED] dark:bg-[#04505B] dark:border-[#04505B] h-[50px] text-black dark:text-white w-full rounded-md"
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
                  <div className="w-full h-40 p-4 flex justify-center">
                    <div className=" w-full hfull  space-y-2 xl:mt-0 lg:mt-0 md:mt-0 mt-12">
                      <label className="hidden dark:block text-black dark:text-white text-sm font-medium leading-[20px]">
                        {" "}
                        Your Message
                      </label>
                      <textarea
                        id="text"
                        className=" w-full h-full bg-[#DDEBED] border-[#DDEBED] dark:bg-[#04505B] dark:border-[#04505B]  text-black dark:text-white rounded-md "
                        type="text"
                        {...formik.getFieldProps("text")}
                      />
                      {formik.touched.text && formik.errors.text ? (
                        <div className="text-red-500 ">
                          {formik.errors.text}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="p-4 flex lg:justify-start md:justify-start justify-center  ">
                    <button
                      type="submit"
                      className=" text-white mt-6  w-[124px] h-[56px] bg-[#0E5761] dark:bg-[#04505B] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-base leading-[24px] px-[35px] py-[16px] text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className=" lg:w-[450px] lg:h-[625px] md:w-[450px] md:h-[600px] xl:block lg:block md:block hidden  flex justify-center items-center   ">
            <img
              alt="gallery"
              className="  h-[625px] object-cover rounded-lg  object-center block mt-7 lg:ml-0 md:ml-0 ml-0 "
              src="./help-desk.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignupForm;
