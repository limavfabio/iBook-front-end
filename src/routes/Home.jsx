import { useState } from "react";

import MainHome from "../components/home/MainHome";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import MobileSidebar from "../components/layout/MobileSidebar";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar />
        {isSidebarOpen && <MobileSidebar />}
        <div className="min-w-0">
          <div className="mx-auto w-11/12 lg:w-4/5">
            <MainHome />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
