import React from "react";
import cancel from "../../assests/cancelIcon.svg";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import create from "../../assests/createTick.svg";

const loginSchema = Yup.object().shape({
  clientName: Yup.string()
    .label("clientName")
    .required("Client name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .min(4, "Password must be 4 characters at minimum")
    .required("Phone Number is required"),
});

export default function ClientModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative max-w-[538px] my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <img src={cancel} alt="cancel" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <div>
                    <h1 className="font-medium font-lg">Creating Client</h1>
                    <p className="text-gray-500 text-base">
                      You are creating role to this projectYou are creating role
                      to this projectYou are creating role to this projectYou
                      are creating role to this project
                    </p>
                  </div>
                  <div className="mt-4 text-[14px] text-[#666666] ">
                    <Formik
                      initialValues={{
                        clientName: "",
                        email: "",
                        phoneNumber: "",
                      }}
                      validationSchema={loginSchema}
                      onSubmit={async (values) => {
                        if (!values) {
                          setShowModal(true);
                        }
                        console.log(values);
                        setShowModal(false);
                      }}
                    >
                      {({ isSubmitting, errors, touched }) => (
                        <Form>
                          <div className="flex flex-col py-3">
                            <label
                              htmlFor="clientName"
                              className="text-[#7A7A79]"
                            >
                              Name of Client
                            </label>
                            <Field
                              name="clientName"
                              placeholder="Enter Client Name"
                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.clientName && errors.clientName
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="clientName"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>

                          <div className="flex flex-col mt-3">
                            <label htmlFor="email" className="text-[#7A7A79]">
                              Email
                            </label>
                            <Field
                              name="email"
                              placeholder="someone@example.com"
                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.email && errors.email
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="email"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>
                          <div className="flex flex-col mt-3 py-3">
                            <label
                              htmlFor="phoneNumber"
                              className="text-[#7A7A79]"
                            >
                              Phone Number
                            </label>
                            <Field
                              name="phoneNumber"
                              placeholder="Enter Phone Number"
                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.phoneNumber && errors.phoneNumber
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="phoneNumber"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>

                          <div className="flex justify-between gap-4 py-3">
                            <button
                              type="button"
                              className="font-normal text-sm w-full h-[44px] mt-3 border border-gray-500 rounded"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex items-center justify-center font-normal text-sm h-[44px] w-full bg-black h-[35px] mt-3 text-white rounded"
                            >
                              <img src={create} alt="create" />
                              <p className="ml-2">Create Client</p>
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
