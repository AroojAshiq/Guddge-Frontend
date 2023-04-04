import React from "react";
import gruddge from "../../assests/guddgeLogo.svg";
import cyber from "../../assests/Cyber.svg";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Api";
import Swal from "sweetalert2";
import { useUserContext } from "../../context";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string().required("License key is required"),
});

export default function LoginByEmail() {
  const navigation = useNavigate();
  const { setUser } = useUserContext();
  return (
    <div className="w-full flex justify-center items-center bg-[#F5F5F5] p-5 ">
      <div className="max-w-[700px] bg-white rounded-2xl flex justify-center py-12 lg:px-16 px-8   shadow-lg">
        <div className="max-w-[550px]">
          <div>
            <img src={gruddge} alt="logo" className="h-10" />
          </div>
          <div className="w-full flex justify-center items-center my-4">
            <img src={cyber} alt="CyberSecurity" />
          </div>
          <div className="mt-4 text-[14px] text-[#666666] ">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={async (values) => {
                try {
                  const res = await loginUser(values);
                  if (res?.data?.success) {
                    localStorage.setItem("user", JSON.stringify(res?.data));
                    setUser({ isAuth: true, ...res?.data });
                    Swal.fire({
                      width: "20em",
                      height: "20em",
                      position: "top-end",
                      icon: "success",
                      title: "Signedup successfully",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigation("/dashboard");
                  }
                } catch (error) {
                  Swal.fire({
                    width: "20em",
                    height: "20em",
                    title: `${error?.data?.message}`,
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                }
              }}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <Field
                      name="email"
                      placeholder="someone@example.com"
                      className={`border-2 border-[#818181] rounded mt-1 h-[35px] pl-2 outline-none  ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="text-red-700 font-normal font-base text-left"
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={`border-2 border-[#818181] rounded mt-1 h-[35px] pl-2 outline-none  ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="text-red-700 font-normal font-base text-left"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-normal w-full bg-black h-[35px] mt-3 text-white rounded"
                  >
                    Submit
                  </button>
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
