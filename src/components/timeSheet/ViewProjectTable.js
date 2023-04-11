import React, { useState } from "react";
import { AddIcon, ExcelLogo, ShareIcon } from "../iconComponent/Icon";
import { Formik, Field, Form, FieldArray } from "formik";
import { getDaysInMonth, getYear, getDate, getMonth } from "date-fns";

export default function ViewProjectTable() {
  const [isCliked, setIsClicked] = useState(false);
  let days = getDaysInMonth(new Date());
  const hanldePush = (push, dataSheet) => {
    for (let i = 0; i < days; i++) {
      push({
        changeDate: `${getDate(new Date())}-${getMonth(new Date())}-${getYear(
          new Date()
        )}`,
        ID: "",
        invoiceCategory: "",
        project: "",
        task: "",
        comments: "",
      });
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          dataSheet: [
            {
              changeDate: `${getDate(new Date())}-${getMonth(
                new Date()
              )}-${getYear(new Date())}`,
              ID: "",
              invoiceCategory: "",
              project: "",
              task: "",
              comments: "",
            },
          ],
        }}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
            <div>
              <div>
                <hr className="w-full pb-5" />
                <p className="font-medium text-sm text-[#075A66] py-2">
                  Time sheet name
                </p>
                <div className="flex flex-col ">
                  <div className="sm:-mx-6 lg:-mx-8">
                    <div className=" py-2 sm:px-6 lg:px-8">
                      <FieldArray name="dataSheet">
                        {({ insert, remove, push }) => (
                          <div className="overflow-x-auto rounded-lg">
                            <table className="table-auto text-left text-sm font-light w-full">
                              <thead className="border-b bg-[#E3E8EF] font-medium rounded-lg dark:border-neutral-500">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                                  >
                                    Changes Date
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                                  >
                                    ID
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                                  >
                                    INVOICE CATEGORIES
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                                  >
                                    PROJECT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                                  >
                                    TASK
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                                  >
                                    COMMENTS (include risks, issues, details as
                                    applicable)
                                  </th>
                                </tr>
                              </thead>
                              {values?.dataSheet?.length > 0 &&
                                values?.dataSheet?.map((dataSheet, index) => (
                                  <tbody key={index} className="w-full">
                                    <>
                                      <tr className="border-b dark:border-neutral-500">
                                        <td
                                          width="20%"
                                          className="whitespace-nowrap text-center "
                                        >
                                          <Field
                                            name={`dataSheet.${index}.changeDate`}
                                            value={
                                              values?.dataSheet?.[index]
                                                ?.changeDate
                                            }
                                            className="h-full border-none outline-none w-full px-6 py-4"
                                            placeholder="12-06-2021"
                                          />
                                        </td>
                                        <td className="whitespace-nowrap text-center ">
                                          <Field
                                            name={`dataSheet.${index}.ID`}
                                            className="h-full border-none outline-none w-full px-6 py-4"
                                            placeholder="126106"
                                          />
                                        </td>
                                        <td className="whitespace-nowrap text-center ">
                                          <Field
                                            name={`dataSheet.${index}.invoiceCategory`}
                                            className="h-full border-none outline-none w-full px-6 py-4"
                                            placeholder="DFAS"
                                          />
                                        </td>
                                        <td className="whitespace-nowrap text-center ">
                                          <Field
                                            name={`dataSheet.${index}.project`}
                                            className="h-full border-none outline-none w-full px-6 py-4"
                                            placeholder="Data Foundation"
                                          />
                                        </td>
                                        <td className="whitespace-nowrap text-center ">
                                          <Field
                                            name={`dataSheet.${index}.task`}
                                            className="h-full border-none outline-none w-full px-6 py-4"
                                            placeholder="Added a new View"
                                          />
                                        </td>
                                        <td className="whitespace-nowrap text-center">
                                          <Field
                                            name={`dataSheet.${index}.comments`}
                                            className="h-full border-none outline-none w-full px-6 py-4"
                                            placeholder="Include October hours"
                                          />
                                        </td>
                                      </tr>
                                    </>
                                  </tbody>
                                ))}
                            </table>
                            <div className=" flex justify-center pb-6 items-center mt-7">
                              <button
                                type="button"
                                disabled={isCliked}
                                onClick={() => {
                                  hanldePush(push, values?.dataSheet);
                                  setIsClicked(true);
                                }}
                                className={`w-[166px] h-[36px]  flex justify-center items-center gap-x-2 border border-dotted border-black rounded-[4px]`}
                              >
                                <AddIcon />
                                <p>Add Row</p>
                              </button>
                            </div>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pb-7 flex flex-col gap-x-3 mt-14 lg:flex lg:flex-row md:flex-row  md:flex lg:justify-end md:justify-end justify-center items-center">
                <button className="lg:mt-0 md:mt-0 gap-x-2 mt-4 w-[134px] h-[44px] border rounded-md flex justify-center items-center">
                  <ExcelLogo />
                  <p className="text-xs">Save as .xlsx</p>
                </button>
                <button className="w-[170px] gap-x-2 text-white h-[44px] bg-[#34A2B2] rounded-md flex justify-center items-center">
                  <ShareIcon />
                  <p className="text-xs">Share with Contractor</p>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="font-normal w-full bg-black h-[35px] mt-3 text-white rounded"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {/* <div>
        <div>
          <hr className="w-full pb-5" />

          <p className="font-medium text-sm text-[#075A66] py-2">
            Time sheet name
          </p>
          <div className="flex flex-col ">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className=" py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto rounded-lg">
                  <table className="table-auto text-left text-sm font-light w-full">
                    <thead className="border-b bg-[#E3E8EF] font-medium rounded-lg dark:border-neutral-500">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                        >
                          Changes Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          INVOICE CATEGORIES
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          PROJECT
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap font-semibold text-sm text-[#104083]"
                        >
                          TASK
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 whitespace-nowrap  font-semibold text-sm text-[#104083]"
                        >
                          COMMENTS (include risks, issues, details as
                          applicable)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b dark:border-neutral-500">
                        <td
                          width="20%"
                          className="whitespace-nowrap text-center px-6 py-4"
                        >
                          12-06-2021
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          126106
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          DFAS
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Data Foundation
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Added a new View
                        </td>
                        <td className="whitespace-nowrap text-center px-6 py-4">
                          Include October hours
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="w-full flex justify-center pb-6 items-center mt-7">
                    <button className="w-[166px] h-[36px] flex justify-center items-center gap-x-2 border border-dotted border-black rounded-[4px]">
                      <AddIcon />
                      <p>Add Row</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-7 flex flex-col gap-x-3 mt-14 lg:flex lg:flex-row md:flex-row  md:flex lg:justify-end md:justify-end justify-center items-center">
          <button className="lg:mt-0 md:mt-0 gap-x-2 mt-4 w-[134px] h-[44px] border rounded-md flex justify-center items-center">
            <ExcelLogo />
            <p className="text-xs">Save as .xlsx</p>
          </button>
          <button className="w-[170px] gap-x-2 text-white h-[44px] bg-[#34A2B2] rounded-md flex justify-center items-center">
            <ShareIcon />
            <p className="text-xs">Share with Contractor</p>
          </button>
        </div>
      </div> */}
    </>
  );
}
