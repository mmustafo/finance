import style from "./MainLeyaut.module.scss";
import SideBar from "../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import FsideBar from "../components/sideBar/FsideBar";

function MainLayout() {
  return (
    <>
      <SideBar />
      <main>
        <Outlet />
      </main>
      <FsideBar/>
    </>
  );
}

export default MainLayout;
