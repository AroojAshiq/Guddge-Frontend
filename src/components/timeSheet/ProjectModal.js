import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { AddIcon, CreateIcon, CancelIcon } from "../iconComponent/Icon";

const loginSchema = Yup.object().shape({
  projectName: Yup.string()
    .label("projectName")
    .required("Project name is required"),
  supervisor: Yup.array().of(Yup.string()).label("supervisor"),
  contractor: Yup.array()
    .label("Select Contractor")
    .of(Yup.string().required("Contractor is required")),
  employ: Yup.array().of(Yup.string()).label("employ"),
  client: Yup.array()
    .label("Select Client")
    .of(Yup.string().required("Client is required")),
});

export default function ProjectModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="h-auto overflow-y-auto overflow-hidden fixed inset-y-0 z-50 outline-none focus:outline-none">
            <div className="relative max-w-[538px] h-auto my-3 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg h-auto  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5">
                {/*header*/}
                <div className="flex items-start justify-between px-5 ">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-[#FF0000] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <CancelIcon />
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
                  <div className="mt-2 text-[14px] text-[#666666] ">
                    <Formik
                      initialValues={{
                        projectName: "",
                        supervisor: [""],
                        contractor: [""],
                        employ: [""],
                        client: [""],
                      }}
                      validationSchema={loginSchema}
                      onSubmit={async (values) => {
                        if (!values) {
                          setShowModal(true);
                        }
                        console.log(values);
                        // setShowModal(false);
                      }}
                    >
                      {({ isSubmitting, errors, touched, values }) => (
                        <Form>
                          <div className="flex flex-col py-2">
                            <label
                              htmlFor="projectName"
                              className="text-[#7A7A79]"
                            >
                              Name of Project
                            </label>
                            <Field
                              name="projectName"
                              placeholder="Enter Project Name"
                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                touched.projectName && errors.projectName
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="projectName"
                              className="text-red-700 font-normal font-base text-left"
                            />
                          </div>

                          <div className="flex justify-center flex-col">
                            <FieldArray name="supervisor">
                              {({ insert, remove, push }) => (
                                <>
                                  {values?.supervisor.length > 0 &&
                                    values?.supervisor?.map(
                                      (supervisor, index) => (
                                        <>
                                          <div
                                            key={index}
                                            className="flex flex-col py-2"
                                          >
                                            <label
                                              htmlFor={`supervisor`}
                                              className="text-[#7A7A79]"
                                            >
                                              Select Supervisor (Optional)
                                            </label>
                                            <Field
                                              type="text"
                                              name={`supervisor.${index}`}
                                              list={`supervisors`}
                                              id={`supervisor`}
                                              placeholder="Select Supervisor"
                                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                                touched.projectName &&
                                                errors.projectName
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                            />
                                            <datalist id={`supervisors`}>
                                              <option>sami</option>
                                              <option>arooj</option>
                                              <option>shaoib</option>
                                              <option>lilly</option>
                                              <option>john</option>
                                            </datalist>
                                            <ErrorMessage
                                              component="div"
                                              name={`supervisor.${index}`}
                                              className="text-red-700 font-normal font-base text-left"
                                            />
                                          </div>
                                        </>
                                      )
                                    )}
                                  <button
                                    type="button"
                                    onClick={() => push("")}
                                    className="flex justify-center items-center  text-black mt-1 hover:border h-[35px] hover:bg-black rounded hover:text-white"
                                  >
                                    <p className="font-medium text-sm mr-1">
                                      Add Another Supervisor
                                    </p>
                                    <AddIcon />
                                  </button>
                                </>
                              )}
                            </FieldArray>
                          </div>

                          <div className="flex justify-center flex-col">
                            <FieldArray name="contractor">
                              {({ insert, remove, push }) => (
                                <>
                                  {values?.contractor?.length > 0 &&
                                    values?.contractor?.map(
                                      (contractor, index) => (
                                        <>
                                          <div
                                            key={index}
                                            className="flex flex-col py-2"
                                          >
                                            <label
                                              htmlFor={`contractor`}
                                              className="text-[#7A7A79]"
                                            >
                                              Select Contractor
                                              <span className="text-[#CD2424]">
                                                *
                                              </span>
                                            </label>
                                            <Field
                                              type="text"
                                              name={`contractor.${index}`}
                                              list={`contractors`}
                                              id={`contractor`}
                                              placeholder="Select contractor"
                                              className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                                touched.projectName &&
                                                errors.projectName
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                            />
                                            <datalist id={`contractors`}>
                                              <option>sami</option>
                                              <option>arooj</option>
                                              <option>shaoib</option>
                                              <option>lilly</option>
                                              <option>john</option>
                                            </datalist>
                                            <ErrorMessage
                                              component="div"
                                              name={`contractor.${index}`}
                                              className="text-red-700 font-normal font-base text-left"
                                            />
                                          </div>
                                        </>
                                      )
                                    )}
                                  <button
                                    type="button"
                                    onClick={() => push("")}
                                    className="flex justify-center items-center  text-black mt-1 hover:border h-[35px] hover:bg-black rounded hover:text-white"
                                  >
                                    <p className="font-medium text-sm mr-1">
                                      Add Another Contractor
                                    </p>
                                    <AddIcon />
                                  </button>
                                </>
                              )}
                            </FieldArray>
                          </div>

                          <div className="flex justify-center flex-col">
                            <FieldArray name="employ">
                              {({ insert, remove, push }) => (
                                <>
                                  {values?.employ?.length > 0 &&
                                    values?.employ?.map((employ, index) => (
                                      <>
                                        <div
                                          key={index}
                                          className="flex flex-col py-2"
                                        >
                                          <label
                                            htmlFor={`employ`}
                                            className="text-[#7A7A79]"
                                          >
                                            Select Employ (Optional)
                                          </label>
                                          <Field
                                            type="text"
                                            name={`employ.${index}`}
                                            list={`employs`}
                                            id={`employ`}
                                            placeholder="Select Employ"
                                            className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                              touched.projectName &&
                                              errors.projectName
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name={`employ.${index}`}
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                          <datalist id={`employs`}>
                                            <option>sami</option>
                                            <option>arooj</option>
                                            <option>shaoib</option>
                                            <option>lilly</option>
                                            <option>john</option>
                                          </datalist>
                                        </div>
                                      </>
                                    ))}
                                  <button
                                    type="button"
                                    onClick={() => push("")}
                                    className="flex justify-center items-center  text-black mt-1 hover:border h-[35px] hover:bg-black rounded hover:text-white"
                                  >
                                    <p className="font-medium text-sm mr-1">
                                      Add Another Supervisor
                                    </p>
                                    <AddIcon />
                                  </button>
                                </>
                              )}
                            </FieldArray>
                          </div>

                          <div className="flex justify-center flex-col">
                            <FieldArray name="client">
                              {({ insert, remove, push }) => (
                                <>
                                  {values?.client?.length > 0 &&
                                    values?.client?.map((supervisor, index) => (
                                      <>
                                        <div
                                          key={index}
                                          className="flex flex-col py-"
                                        >
                                          <label
                                            htmlFor={`client`}
                                            className="text-[#7A7A79]"
                                          >
                                            Select client
                                            <span className="text-[#CD2424]">
                                              *
                                            </span>
                                          </label>
                                          <Field
                                            type="text"
                                            name={`client.${index}`}
                                            list={`clients`}
                                            id={`client`}
                                            placeholder="Select client"
                                            className={`border border-1 border-[#B8B7B6] rounded mt-1 h-[35px] pl-2 outline-none  ${
                                              touched.projectName &&
                                              errors.projectName
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                          />
                                          <ErrorMessage
                                            component="div"
                                            name={`client.${index}`}
                                            className="text-red-700 font-normal font-base text-left"
                                          />
                                          <datalist id={`clients`}>
                                            <option>sami</option>
                                            <option>arooj</option>
                                            <option>shaoib</option>
                                            <option>lilly</option>
                                            <option>john</option>
                                          </datalist>
                                        </div>
                                      </>
                                    ))}
                                  <button
                                    type="button"
                                    onClick={() => push("")}
                                    className="flex justify-center items-center  text-black mt-1 hover:border h-[35px] hover:bg-black rounded hover:text-white"
                                  >
                                    <p className="font-medium text-sm mr-1">
                                      Add Another Contractor
                                    </p>
                                    <AddIcon />
                                  </button>
                                </>
                              )}
                            </FieldArray>
                          </div>

                          <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-4 py-2">
                            <button
                              type="button"
                              className="font-normal text-sm w-full h-[44px] border border-gray-500 rounded"
                              onClick={() => setShowModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="font-normal flex items-center justify-center gap-1 bg-[#C5F8FF] text-sm w-full h-[44px] rounded"
                            >
                              <AddIcon />
                              <p>Create Subproject</p>
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex items-center justify-center font-normal text-sm h-[44px] w-full bg-black text-white rounded"
                            >
                              <CreateIcon />
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
          <div className="opacity-60  fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
