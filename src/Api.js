import instance from "axios";
import Swal from "sweetalert2";

const axios = instance.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    //deleting the token from header
    delete axios.defaults.headers.common["Authorization"];
  }
};

axios.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user?.token}`;
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const signupUser = async (form) => {
  try {
    const res = await axios.post(`/registerbyemail`, form);
    return res;
  } catch (error) {
    Swal.fire({
      width: "20em",
      height: "20em",
      position: "top-end",
      icon: "error",
      title: "Oops...",
      text: `${error?.response?.data?.message}`,
    });
    return error;
  }
};

export const loginUser = async (user) => {
  try {
    const res = await axios.post(`/loginbyemail`, user);
    return res;
  } catch (error) {
    Swal.fire({
      width: "20em",
      height: "20em",
      position: "top-end",
      icon: "error",
      title: "Oops...",
      text: ` ${error?.response?.data?.message}`,
    });
    return error;
  }
};

export const userContractor = async (data) => {
  try {
    const res = await axios.post(`/dashboard/contractors`, data);
    return res;
  } catch (error) {
    Swal.fire({
      width: "20em",
      height: "20em",
      position: "top-end",
      icon: "error",
      title: "Oops...",
      text: ` ${error?.response?.data?.message}`,
    });
    return error;
  }
};

export const userClient = async (data) => {
  try {
    const res = await axios.post(`/dashboard/clients`, data);
    return res;
  } catch (error) {
    Swal.fire({
      width: "20em",
      height: "20em",
      position: "top-end",
      icon: "error",
      title: "Oops...",
      text: ` ${error?.response?.data?.message}`,
    });
    return error;
  }
};

export const timeSheetData = async (data) => {
  try {
    const res = await axios.post(`/dashboard/view-time-sheets`, data);
    return res;
  } catch (error) {
    Swal.fire({
      width: "20em",
      height: "20em",
      position: "top-end",
      icon: "error",
      title: "Oops...",
      text: ` ${error?.response?.data?.message}`,
    });
    return error;
  }
};

export const userAdmin = async (data) => {
  try {
    const res = await axios.post(`/dashboard/admin`, data);
    return res;
  } catch (error) {
    Swal.fire({
      width: "20em",
      height: "20em",
      position: "top-end",
      icon: "error",
      title: "Oops...",
      text: ` ${error?.response?.data?.message}`,
    });
    return error;
  }
};
