import { useState } from "react";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import MobileSidebar from "../components/layout/MobileSidebar";

function Details() {
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
        <div className="flex w-full">
          {/* Left Side Full Screen Image */}
          <div className="w-full">Left side image of package</div>
          {/* Right Side Details Panel */}
          <div className="w-1/3 min-w-fit bg-red-100 px-5 text-end">
            <h2 className="text-3xl">Package name</h2>
            <p className="text-sm">Package description</p>
            <div className="flex justify-between text-sm">
              <p>Package price</p>
              <p>$10.00</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Duration</p>
              <p>1 Hour</p>
            </div>
            <p>DISCOVER MORE MODELS</p>
            <button type="button">Configure</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
