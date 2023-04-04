import React from "react";

import Slide from "../components/HomePageComponents/Slide/Slide";
import Features from "../components/HomePageComponents/Features/Features";
import Companies from "../components/HomePageComponents/Companies/Companies";
import Users from "../components/HomePageComponents/Users/Users";
import HelpDesk from "../components/HomePageComponents/HelpDesk/HelpDesk";
import Footer from "../components/HomePageComponents/Footer/Footer";
import ShowCase from "../components/ShowCase/ShowCase";
import HomeServices from "../components/HomePageComponents/HomeServices/HomeServices";
import OurClients from "../components/HomePageComponents/OurClients/OurClients"
function HomePage({ darkMode, setDarkMode }) {
  // console.log(darkMode, "dfghjk");
  return (
    <>
      <Slide setDarkMode={setDarkMode} darkMode={darkMode} />
      <Features setDarkMode={setDarkMode} darkMode={darkMode}  />
      <Companies></Companies>
      <Users></Users>
      <HomeServices/>
      <ShowCase/>
      <OurClients/>
      <HelpDesk></HelpDesk>
    </>
  );
}

export default HomePage;
