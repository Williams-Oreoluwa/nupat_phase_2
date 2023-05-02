import React from "react";
import SideBar from "./side-bar";
import TopNavbar from "./top-navbar";
import "./index.css";
import Home from "./background";
import BottomNav from "./bottom-nav-bar";
import MenuBtn from "./menu-btn";
import SmSidemenu from "./Sm-SideMenu";

const App = () => {
  return (
    <div>
      <BottomNav />
      <SideBar />
      <TopNavbar />
      <Home />
      <MenuBtn/>
      <SmSidemenu/>
    </div>
  );
};

export default App;
