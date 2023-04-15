import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/HomePageComponents/NavBar/NabBar";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ServicePage from "./pages/ServicePage";
import ClientPage from "./pages/ClientPage";
import PortfolioPage from "./pages/PortfolioPage";
import CareerPage from "./pages/CareerPage";
import TeamMembersPage from "./pages/TeamMembersPage";
import ViewArticle from "./components/Article/ViewArticle";
import useDarkSide from "./components/HomePageComponents/NavBar/useDarkSide";
import Footer from "./components/HomePageComponents/Footer/Footer";
import "./App.css";

import {
  Home,
  LoginByEmail,
  LoginBymsOffice,
  RegisterByEmail,
  Supervisors,
  Contractors,
  Clients,
  Projects,
  ViewProject,
  Rates,
  Admin,
  Employ,
  ProfileSetting,
  Setting,
  TimeSheet,
  TSheetAproval,
  TSheetAproved,
  TimeViewSheets,
  CalenderPage,
} from "./components/timeSheet";
// import ProtectedRouted from "./components/timeSheet/ProtectedRoutes";
import TimeSheetPage from "./pages/TimeSheetPage";
import ErrorMessage from "./components/ErrorMessage";
import { UserContextProvider } from "./context";

function App() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };
  return (
    <>
      <UserContextProvider>
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          colorTheme={colorTheme}
          setTheme={setTheme}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                colorTheme={colorTheme}
                setTheme={setTheme}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/team-members" element={<TeamMembersPage />} />
          <Route path="/article-view" element={<ViewArticle />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/timesheet" element={<LoginBymsOffice />} />
          <Route path="/loginbyemail" element={<LoginByEmail />} />
          <Route path="/registerbyemail" element={<RegisterByEmail />} />
          {/* <Route path="/" element={<ProtectedRouted />}> */}
          <Route path="dashboard" element={<TimeSheetPage />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="admin" element={<Admin />} />
            <Route path="employ" element={<Employ />} />
            <Route path="supervisors" element={<Supervisors />} />
            <Route path="contractors" element={<Contractors />} />
            <Route path="clients" element={<Clients />} />
            <Route path="projects" element={<Projects />} />
            <Route path="viewproject" element={<ViewProject />} />
            <Route path="projects" element={<Projects />} />
            <Route path="rates" element={<Rates />} />
            <Route path="timesheets" element={<TimeSheet />}>
              <Route index element={<TSheetAproval />} />
              <Route path="approval" element={<TSheetAproval />} />
              <Route path="approved" element={<TSheetAproved />} />
            </Route>
            <Route path="calender" element={<CalenderPage />} />
            <Route path="view-time-sheets" element={<TimeViewSheets />} />
            <Route path="setting" element={<Setting />} />
            <Route path="profile-setting" element={<ProfileSetting />} />
          </Route>
          {/* </Route> */}
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}
export default App;
