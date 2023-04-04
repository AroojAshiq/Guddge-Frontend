import React from "react";
import profile from "../../assests/profile.svg";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const loginSchema = Yup.object().shape({
  name: Yup.string().label("name").required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  licensekey: Yup.string().required("License key is required"),
  DOB: Yup.date().required("Date of Birth is required"),
});

export default function ProfileSetting() {
  return (
    <div className="max-w-[900px] md:px-5">
      <div className="mt-4 text-[14px] text-[#666666] ">
        <Formik
          initialValues={{
            name: "",
            email: "",
            licensekey: "",
            DOB: "",
          }}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <div className="flex items-center border-b pb-5 lg:justify-between lg:flex-row md:justify-between md:flex-row  flex-col justify-center my-2">
                <div className="w-7/12 px-4">
                  <h1 className="font-semibold text-lg lg:text-left md:text-left text-center">
                    Profile Setting
                  </h1>
                  <p className="text-base font-normal text-gray-500 lg:text-left md-text-left text-center">
                    You can create multiple role based on license or give role
                    to someone blah blah
                  </p>
                </div>
                <div className="flex gap-x-5 items-end  h-20 rounded-lg lg:mt-0 mt-5">
                  <button
                    type="button"
                    className="w-[88px] h-[35px] rounded-md border text-xs font-normal"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[102px] h-[35px] rounded-md border text-white bg-black  text-xs font-normal"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
              <div className="h-[200px] w-full flex justify-center items-center my-3">
                <div className="h-[180px] w-[180px] rounded-full border">
                  <img src={profile} alt="profile-pic" />
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-row flex-col gap-x-8 lg:px-0 md:px-0 px-9">
                <div className="flex w-full flex-col py-3 ">
                  <label htmlFor="name" className="text-[#7A7A79]">
                    Name
                  </label>
                  <Field
                    name="name"
                    placeholder="Enter Name"
                    className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                      touched.name && errors.name ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="text-red-700 font-normal font-base text-left"
                  />
                </div>

                <div className="flex w-full flex-col mt-3">
                  <label htmlFor="email" className="text-[#7A7A79]">
                    Email
                  </label>
                  <Field
                    name="email"
                    placeholder="someone@example.com"
                    className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-700 font-normal font-base text-left"
                  />
                </div>
              </div>

              <div className="flex lg:flex-row md:flex-row flex-col gap-x-8 lg:px-0 md:px-0 px-9">
                <div className="flex w-full flex-col mt-3 py-3">
                  <label htmlFor="licensekey" className="text-[#7A7A79]">
                    License key
                  </label>
                  <Field
                    name="licensekey"
                    placeholder="Enter License key"
                    className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                      touched.licensekey && errors.licensekey
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="licensekey"
                    className="text-red-700 font-normal font-base text-left"
                  />
                </div>

                <div className="flex w-full flex-col mt-3 py-3">
                  <label htmlFor="DOB" className="text-[#7A7A79]">
                    Date of Birth
                  </label>
                  <Field
                    name="DOB"
                    type="date"
                    className={`border text-[#11141C] border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                      touched.DOB && errors.DOB ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="DOB"
                    className="text-red-700 font-normal font-base text-left"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
