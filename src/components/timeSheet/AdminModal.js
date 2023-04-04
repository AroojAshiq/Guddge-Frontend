import React from "react";
import cancel from "../../assests/cancelIcon.svg";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import create from "../../assests/createTick.svg";
// import moment from "moment";

const adminSchema = Yup.object().shape({
  adminName: Yup.string().label("adminName").required("Admin name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  jobTitle: Yup.string().required("Job title required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  DOB: Yup.date().required("Date of Birth is required"),
  joiningDate: Yup.date().required("Joining date is required"),
  totalYearExperince: Yup.number().required("Total year of experince required"),
  guddgeEmailPlan: Yup.string().required("Mail plan is required"),
  agreement: Yup.string().required("Agreement required"),
  agreementEndDate: Yup.date().required("Agreement end date is required"),
  shore: Yup.string().required("Please select value"),
  admin: Yup.string().required("Please select value"),
});

export default function AdminModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative lg:w-[538px] md:w-[400px] my-6 mx-auto max-w-3xl">
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
                    <h1 className="font-medium font-lg">Creating Admin</h1>
                    <p className="text-gray-500 text-base">
                      You are creating role to this projectYou are creating role
                      to this projectYou are creating role to this projectYou
                      are creating role to this project
                    </p>
                  </div>
                  <div className="mt-4 text-[14px] text-[#666666] ">
                    <Formik
                      initialValues={{
                        adminName: "",
                        email: "",
                        phoneNumber: "",
                        jobTitle: "",
                        DOB: new Date(),
                        joiningDate: new Date(),
                        totalYearExperince: 0,
                        guddgeEmailPlan: "",
                        agreement: "",
                        agreementEndDate: new Date(),
                        shore: "",
                        admin: "",
                      }}
                      validationSchema={adminSchema}
                      onSubmit={async (values) => {
                        if (!values) {
                          setShowModal(true);
                        }
                        console.log(values);
                        setShowModal(false);
                      }}
                    >
                      {({ isSubmitting, errors, touched, setValues }) => (
                        <Form>
                          <div className="flex flex-col py-3">
                            <label
                              htmlFor="adminName"
                              className="text-[#7A7A79]"
                            >
                              Name of Admin
                            </label>
                            <Field
                              name="adminName"
                              placeholder="Enter Admin Name"
                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.adminName && errors.adminName
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="adminName"
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
                            <label htmlFor="DOB" className="text-[#7A7A79]">
                              Date of Birth
                            </label>
                            <Field
                              name="DOB"
                              type="date"
                              onChange={(e) => setValues(e.target.value)}
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

                          <div className="flex flex-col py-3">
                            <label
                              htmlFor="jobTitle"
                              className="text-[#7A7A79]"
                            >
                              Job Title
                            </label>
                            <Field
                              name="jobTitle"
                              placeholder="Enter Job Title"
                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.jobTitle && errors.jobTitle
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="jobTitle"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>

                          <div className="flex flex-col mt-3 py-3">
                            <label
                              htmlFor="joiningDate"
                              className="text-[#7A7A79]"
                            >
                              Joining Date
                            </label>
                            <Field
                              name="joiningDate"
                              type="date"
                              className={`border text-[#11141C] border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.joiningDate && errors.joiningDate
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="joiningDate"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>

                          <div className="flex flex-col mt-3 py-3">
                            <label
                              htmlFor="totalYearExperince"
                              className="text-[#7A7A79]"
                            >
                              Total Years of Experince
                            </label>
                            <Field
                              name="totalYearExperince"
                              // placeholder="Enter Total Year Experince"
                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.totalYearExperince &&
                                errors.totalYearExperince
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="totalYearExperince"
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

                          <div className="flex flex-col py-3">
                            <label
                              htmlFor="guddgeEmailPlan"
                              className="text-[#7A7A79]"
                            >
                              Guddge Email Plan
                            </label>
                            <Field
                              name="guddgeEmailPlan"
                              placeholder="Enter Guddge Email Plan"
                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.guddgeEmailPlan &&
                                errors.guddgeEmailPlan
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="guddgeEmailPlan"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>

                          <div className="flex flex-col py-3">
                            <label
                              htmlFor="agreement"
                              className="text-[#7A7A79]"
                            >
                              Agreement
                            </label>
                            <Field
                              name="agreement"
                              placeholder="Enter Agreement"
                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.agreement && errors.agreement
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="agreement"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>

                          <div className="flex flex-col mt-3 py-3">
                            <label
                              htmlFor="agreementEndDate"
                              className="text-[#7A7A79]"
                            >
                              Agreement End Date
                            </label>
                            <Field
                              name="agreementEndDate"
                              type="date"
                              className={`border text-[#11141C] border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.agreementEndDate &&
                                errors.agreementEndDate
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="agreementEndDate"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>

                          <div className="flex flex-col mt-3 py-3">
                            <label htmlFor="shore" className="text-[#7A7A79]">
                              ONSHORE/OFFSHORE
                            </label>
                            <Field
                              as="select"
                              name="shore"
                              className={`border text-[#11141C] border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.shore && errors.shore
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <option>Select</option>
                              <option value="onShore">onShore</option>
                              <option value="offShore">offShore</option>
                            </Field>
                            <ErrorMessage
                              component="div"
                              name="shore"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>

                          <div className="flex flex-col mt-3 py-3">
                            <label htmlFor="admin" className="text-[#7A7A79]">
                              Select Role
                            </label>
                            <Field
                              as="select"
                              name="admin"
                              className={`border text-[#11141C] border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.admin && errors.admin
                                  ? "is-invalid"
                                  : ""
                              }`}
                            >
                              <option>Select</option>
                              <option value="Admin">Admin</option>
                              <option value="Super Admin">Super Admin</option>
                            </Field>
                            <ErrorMessage
                              component="div"
                              name="admin"
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
                              className="flex items-center justify-center font-normal text-sm h-[44px] w-full bg-black  mt-3 text-white rounded"
                            >
                              <img src={create} alt="create" />
                              <p className="ml-2">Create admin</p>
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
