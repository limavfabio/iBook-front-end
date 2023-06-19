import { useState } from "react";

import DetailRow from "../components/DetailRow";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ConfigureButton from "../components/ConfigureButton";
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
        <div className="flex w-full items-center">
          {/* Left Side Full Screen Image */}
          <div className="w-full">
            <img
              src="https://vespaindia.com/images/classic/vxl_yellow.webp"
              alt="Vespa"
            />
          </div>
          {/* Right Side Details Panel */}
          <div className="flex h-full w-1/3 min-w-fit flex-col justify-center px-5 text-end">
            <h2 className="mb-1 text-4xl">Package name</h2>
            <p className="mb-5">Package description</p>
            {/* Table */}
            <div className="mb-5 flex flex-col justify-between">
              <DetailRow
                label={"Package price"}
                value={"$150.00"}
                isGrayBackground
              />
              <DetailRow label={"Date"} value={"May 15"} />
              <DetailRow label={"Start Time"} value={"9:00"} isGrayBackground />
              <DetailRow label={"End Time"} value={"11:00"} />
              <DetailRow label={"Duration"} value={"1 Hour"} isGrayBackground />
            </div>
            <p className="flex items-center self-end font-bold">
              DISCOVER MORE MODELS{" "}
              <ChevronRightIcon className="h-5 text-[#97BF0F]" />{" "}
            </p>
            <ConfigureButton className="mt-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
