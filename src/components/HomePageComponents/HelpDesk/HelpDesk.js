import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  return (
    <section className=" bg-[#F5F5F5] dark:bg-[#04505B] text-black-600 body-font  flex justify-center items-center  ">
      <div className="container py-24  flex  justify-center items-center    ">
        <div className=" w-full flex justify-center items-center lg:flex-row flex-col space-y-8 lg:px-0 md:px-0 px-4   ">
          <div className="xl:w-[800px] lg:w-[550px] md:w-[600px] sm:w-3/5 p-4  mt-8 bg-white dark:bg-[#0E292D] rounded-lg shadow-lg  flex justify-center items-center flex-col ">
            <div className="flex  p-4 justify-start   w-full  flex-col ">
              <h1 className="sm:text-2xl text-base  font-bold  mb-2 text-[#093E46] dark:text-white lg:text-start md:text-start text-center">
                Need Help? Or Want To See Us in Action ?
              </h1>
              <p className=" leading-relaxed text-sm font-normal text-[#515151]   dark:text-[#959CB1] lg:text-start md:text-start text-center mt-2 ">
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
                  className=" w-full space-y-8  "
                >
                  <div className="w-full h-auto p-4 flex items-center lg:flex-row md:flex-row flex-col lg:justify-start gap-2 ">
                    <div className=" lg:w-6/12 md:w-6/12 w-full">
                      <input
                        id="name"
                        placeholder="Enter your name"
                        className="  bg-[#DDEBED] dark:bg-[#04505B] text-black dark:text-white w-full"
                        type="text"
                        {...formik.getFieldProps("name")}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500">{formik.errors.name}</div>
                      ) : null}
                    </div>
                    <div className="lg:w-6/12 md:w-6/12 w-full  ">
                      <input
                        id="email"
                        placeholder="email"
                        className="bg-[#DDEBED] dark:bg-[#04505B] text-black dark:text-white w-full"
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
                    <div className=" w-full hfull ">
                      <textarea
                        id="text"
                        className=" w-full h-full bg-[#DDEBED] dark:bg-[#04505B] text-black dark:text-white "
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
                      className=" text-white  bg-[#0E5761] dark:bg-[#04505B] hover:text-white hover:bg-gradient-to-b from-[#3799CC] to-[#374BCC] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className=" lg:w-[450px] lg:h-[600px] md:w-[450px] md:h-[600px] w-[full]   flex justify-center items-center   ">
           
              <img
                alt="gallery"
                className="  h-[570px] object-cover  object-center block mt-12  "
                src="./help-desk.svg"
              />
         
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignupForm;
