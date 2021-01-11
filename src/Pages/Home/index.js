import { useState } from "react";
import Main from "../Main/index";
import Navbar from "../../Components/Navbar/navbar";
/*import Sidebar from "../../Components/Sidebar/sidebar";*/
import './index.css'

const Home = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  /*const closeSidebar = () => {
    setsidebarOpen(false);
  };*/
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      {/*<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />*/}
    </div>
  );
};

export default Home;
