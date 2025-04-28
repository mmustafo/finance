import style from "./MainLeyaut.module.scss";
import SideBar from "../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import FsideBar from "../components/sideBar/FsideBar";
import { useState } from "react";

function MainLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={`main-leyout ${showSidebar ? "sidebar" :""}`}>
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main>
        <Outlet />
      </main>
      <FsideBar />
    </div>
  );
}

export default MainLayout;
