import React from "react";
import gruddge from "../../assests/guddgeLogo.svg";
import cyber from "../../assests/Cyber.svg";
import * as Yup from "yup";
import msoffice from "../../assests/msoffice.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

const msOfficeSchema = Yup.object().shape({
  msmail: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  licensekey: Yup.string().required("License key is required"),
});

export default function LoginBymsOffice() {
  return (
    <div className="w-full flex justify-center items-center bg-[#F5F5F5] p-5 ">
      <div className="max-w-[700px] bg-white rounded-2xl flex justify-center py-12 lg:px-16 px-8   shadow-lg">
        <div className="max-w-[550px]">
          <div>
            <img src={gruddge} alt="logo" />
          </div>
          <div className="w-full flex justify-center items-center my-4">
            <img src={cyber} alt="CyberSecurity" />
          </div>
          <div>
            <img src={msoffice} alt="CyberSecurity" />
            <p className="text-[#076976] text-left text-base max-w-[550px] font-normal">
              Your security is our top priority. We take every measure to
              protect your data and keep it safe. Our website uses
              industry-standard security protocols to encrypt your data and
              prevent unauthorized access. Rest assured that your personal
              information and time sheet data are protected with the highest
              level of security. Thank you for trusting us with your
              information.
            </p>
          </div>
          <div className="mt-4 text-[14px] text-[#666666]">
            <Formik
              initialValues={{
                msmail: "",
                licensekey: "",
              }}
              validationSchema={msOfficeSchema}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <div className="flex flex-col">
                    <label htmlFor="msmail">Your Ms365 Email</label>
                    <Field
                      name="msmail"
                      placeholder="James@outlook.com"
                      className={` border-2 border-[#818181] rounded mt-1 h-[35px] pl-2 outline-none  ${
                        touched.msmail && errors.msmail ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="msmail"
                      className="text-red-700 font-normal font-base text-left"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label htmlFor="licensekey">License key</label>
                    <Field
                      name="licensekey"
                      placeholder="License key"
                      className={` border-2 border-[#818181] rounded mt-1 h-[35px] pl-2 outline-none  ${
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
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-normal w-full bg-black h-[35px] mt-3 text-white rounded hover:bg-[#34A2B2]"
                  >
                    Submit
                  </button>
                  <Link to="/loginbyemail">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="font-normal w-full bg-black h-[35px] mt-3 text-white rounded hover:bg-[#34A2B2]"
                    >
                      SignIn By Email
                    </button>
                  </Link>
                  <Link to="/registerbyemail">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="font-normal w-full bg-black h-[35px] mt-3 text-white rounded hover:bg-[#34A2B2]"
                    >
                      SignUp By Email
                    </button>
                  </Link>
                  <div className="mt-5 flex justify-center items-center">
                    <p className="font-normal text-[#075964] text-[14px]">
                      Privacy & Terms
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
