import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import menu from "../assests/menuIcon.svg";
import profile from "../assests/profilePic.svg";
import logout from "../assests/logoutIcon.svg";
import { SideBar } from "../components/timeSheet";
import {
  HomeIcon,
  UserIcon,
  ArrowIcon,
  ProjectIcon,
  SettingIcon,
  CalenderIcon,
} from "../components/iconComponent/Icon";

export default function TimeSheetPage() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/loginbyemail");
  };
  return (
    <div className="bg-[#F5F5F5] w-full flex lg:flex-row flex-col items-center justify-center">
      <div className="mt-10 self-start relative z-50 h-10 w-10">
        <img
          src={menu}
          alt="menu bar"
          className="left-10 cursor-pointer lg:hidden visible absolute"
          onClick={() => {
            setShow(true);
          }}
        />
        <div className={show ? "lg:hidden visible fixed top-0" : "invisible"}>
          <SideBar setShow={setShow} show={show} />
        </div>
      </div>
      <div className="lg:flex xl:flex w-full items-start xl:justify-center gap-x-0  lg:my-10 mb-10 mt-4 ">
        <div className="shadow-lg max-w-[318px] xl:w-[318px] lg:flex items-center justify-center flex-col bg-white lg:visible hidden ">
          <div className=" w-[282px] flex items-center mt-4 px-4">
            <img src={menu} alt="menu bar" />
            <p className=" font-normal text-[14px] text-gray-500 ml-5">
              James Smith Project
            </p>
          </div>
          <div className=" w-[290px] flex items-center justify-around flex-col py-6  px-3">
            <div className="w-[103px] h-[103px] rounded-lg ">
              <img src={profile} alt="menu bar" className="h-full w-full" />
            </div>
            <h2 className="font-extrabold text-lg mt-2">Mark Salmn</h2>
            <p className="text-xs font-semibold text-gray-400 uppercase">
              Admin
            </p>
          </div>
          <ul className="w-full ">
            <NavLink to="/dashboard/home">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                      ? "bg-[#34A2B2] text-white"
                      : "bg-white text-[#64748B]"
                  }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                    <HomeIcon />
                    <p className="font-normal text-[14px] ml-5 ">Home</p>
                  </div>
                </li>
              )}
            </NavLink>

            <li className="w-full">
              <div className="w-full ">
                <div className="relative w-full h-auto overflow-hidden">
                  <input
                    type="checkbox"
                    className="peer absolute top-0 insert-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className=" h-12 w-full pl-5 flex items-center text-[#64748B]  peer-checked:text-white peer-checked:bg-[#34A2B2]">
                    <UserIcon />
                    <p className="font-normal text-[14px]  ml-5  ">Users</p>
                  </div>

                  <div className="absolute top-3 mr-5 right-3 text-[#64748B] peer-checked:text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180 ">
                    <ArrowIcon className="transition-transform -rotate-90" />
                  </div>

                  <div className=" bg-white transition-all duration-500 overflow-hidden max-h-0 peer-checked:max-h-64 pl-10 ">
                    <div className="px-2 pt-2">
                      <NavLink to="/dashboard/admin">
                        {({ isActive }) => (
                          <button
                            className={`w-full ${
                              isActive ? "bg-[#F0FAFC]" : ""
                            } flex items-center  py-3 rounded-md`}
                          >
                            <div className="h-2 w-2 bg-[#07377C] rounded-full ml-3"></div>

                            <li className="ml-3 text-[#07377C] font-normal text-sm">
                              Admin
                            </li>
                          </button>
                        )}
                      </NavLink>
                    </div>

                    {/* <div className="px-2 pt-2">
                      <NavLink to="/dashboard/supervisors">
                        {({ isActive }) => (
                          <button
                            className={`w-full ${
                              isActive ? "bg-[#F0FAFC]" : ""
                            } flex items-center  py-3 rounded-md`}
                          >
                            <div className="h-2 w-2 bg-[#07377C] rounded-full ml-3"></div>

                            <li className="ml-3 text-[#07377C] font-normal text-sm">
                              Supervisors
                            </li>
                          </button>
                        )}
                      </NavLink>
                    </div> */}
                    <div className="px-2">
                      <NavLink to="/dashboard/contractors">
                        {({ isActive }) => (
                          <button
                            className={`w-full ${
                              isActive ? "bg-[#F0FAFC]" : ""
                            } flex items-center  py-3 rounded-md`}
                          >
                            <div className="h-2 w-2 bg-[#07377C] rounded-full ml-3"></div>

                            <li className="ml-3 text-[#07377C] font-normal text-sm">
                              Contractors
                            </li>
                          </button>
                        )}
                      </NavLink>
                    </div>
                    <div className="px-2">
                      <NavLink to="/dashboard/clients">
                        {({ isActive }) => (
                          <button
                            className={`w-full ${
                              isActive ? "bg-[#F0FAFC]" : ""
                            } flex items-center  py-3 rounded-md`}
                          >
                            <div className="h-2 w-2 bg-[#07377C] rounded-full ml-3"></div>

                            <li className="ml-3 text-[#07377C] font-normal text-sm">
                              Clients
                            </li>
                          </button>
                        )}
                      </NavLink>
                    </div>

                    {/* <div className="px-2 pt-2">
                      <NavLink to="/dashboard/employ">
                        {({ isActive }) => (
                          <button
                            className={`w-full ${
                              isActive ? "bg-[#F0FAFC]" : ""
                            } flex items-center  py-3 rounded-md`}
                          >
                            <div className="h-2 w-2 bg-[#07377C] rounded-full ml-3"></div>

                            <li className="ml-3 text-[#07377C] font-normal text-sm">
                              Employ
                            </li>
                          </button>
                        )}
                      </NavLink>
                    </div> */}
                  </div>
                </div>
              </div>
            </li>

            <NavLink to="/dashboard/timesheets">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                      ? "bg-[#34A2B2] text-white"
                      : "bg-white text-[#64748B]"
                  }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                    <ProjectIcon />
                    <p className="font-normal text-[14px] ml-5 ">Timesheets</p>
                  </div>
                </li>
              )}
            </NavLink>

            <NavLink to="/dashboard/projects">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                      ? "bg-[#34A2B2] text-white"
                      : "bg-white text-[#64748B]"
                  }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                    <ProjectIcon />
                    <p className="font-normal text-[14px] ml-5 ">Projects</p>
                  </div>
                </li>
              )}
            </NavLink>

            <NavLink to="/dashboard/rates">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                      ? "bg-[#34A2B2] text-white"
                      : "bg-white text-[#64748B]"
                  }  justify-center hover:bg-[#34A2B2] hover:text-white px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                    <SettingIcon />
                    <p className="font-normal text-[14px] ml-5 ">Rates</p>
                  </div>
                </li>
              )}
            </NavLink>

            <NavLink to="/dashboard/calender">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                      ? "bg-[#34A2B2] text-white"
                      : "bg-white text-[#64748B]"
                  }  justify-center hover:bg-[#34A2B2] hover:text-white px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                    <CalenderIcon />
                    <p className="font-normal text-[14px] ml-5 ">Calendar</p>
                  </div>
                </li>
              )}
            </NavLink>

            <NavLink to="/dashboard/setting">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                      ? "bg-[#34A2B2] text-white"
                      : "bg-white text-[#64748B]"
                  }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                    <SettingIcon />
                    <p className="font-normal text-[14px] ml-5 ">Setting</p>
                  </div>
                </li>
              )}
            </NavLink>

            <NavLink to="/dashboard/profileSetting">
              {({ isActive }) => (
                <li
                  className={`flex items-center ${
                    isActive
                      ? "bg-[#34A2B2] text-white"
                      : "bg-white text-[#64748B]"
                  }  justify-center hover:bg-[#34A2B2] hover:text-white  px-4`}
                >
                  <div className="w-[282px] h-[52px] flex items-center">
                    <SettingIcon />
                    <p className="font-normal text-[14px] ml-5 ">
                      Profile Setting
                    </p>
                  </div>
                </li>
              )}
            </NavLink>
          </ul>

          <div
            className=" w-[282px] flex items-center py-14 cursor-pointer"
            onClick={() => {
              handleLogout();
            }}
          >
            <img src={logout} alt="menu bar" />
            <p className=" font-normal text-[14px] text-[#CD2424] ml-5">
              Logout
            </p>
          </div>
        </div>
        <div className="lg:w-[742px] xl:w-[1026px ] max-w-[950px] lg:mx-5 flex items-center justify-center bg-white py-5 px-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
