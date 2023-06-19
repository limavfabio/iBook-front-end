import { useEffect, useState } from "react";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ConfigureButton from "../components/ConfigureButton";
import DetailRow from "../components/DetailRow";
import Header from "../components/layout/Header";
import MobileSidebar from "../components/layout/MobileSidebar";
import Sidebar from "../components/layout/Sidebar";
import { fetchProductWithId } from "../redux/productsSlice";

function Details() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {id} =useParams()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.value);
  console.log(data);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    dispatch(fetchProductWithId(id));
  }, [dispatch]);

  // const date = new Date(data.created_at)
  // const formatedDate= date.toLocalString()
  // console.log(formatedDate);

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
              src={data.image}
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
                label="Package price"
                value={data.price}
                isGrayBackground
              />
              <DetailRow label="Date" value={new Date(data.created_at).toLocaleDateString(undefined,{ year: 'numeric', month: 'long', day: 'numeric' })} />
              <DetailRow label="Start Time" value={`${new Date(data.created_at).getHours()}:00`} isGrayBackground />
              <DetailRow label="End Time" value={`${new Date(data.updated_at).getHours()}:00`} />
              <DetailRow label="Duration" value={new Date(data.updated_at).getHours() - new Date(data.created_at).getHours()} isGrayBackground />
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
