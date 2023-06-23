import React, { useEffect, useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations } from "../../redux/reservationSlice";
import Header from "../layout/Header";
import MobileSidebar from "../layout/MobileSidebar";
import Sidebar from "../layout/Sidebar";

const Reservations = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const { reservations } = useSelector((state) => state.reservations.value);
  useEffect(() => {
    dispatch(fetchReservations(parseInt(userId, 10)));
  }, [dispatch, userId]);

  // State for sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(userId, reservations);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar />
        {isSidebarOpen && <MobileSidebar />}

        <div className="h-screen w-full flex-1 overflow-y-auto bg-gray-200 pt-[3rem]">
          <h2 className="my-5 text-center text-3xl font-bold uppercase">
            My Reservations
          </h2>
          <section className="bg-blueGray-50 ">
            <div className="mx-auto mb-12 mt-5 w-full px-10 xl:mb-0">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded  shadow-lg ">
                <div className="block w-full overflow-x-auto">
                  <table className="w-full border-collapse items-center  rounded border bg-transparent">
                    <thead className="bg-gray-500 text-white">
                      <tr>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          <span className="inline-block pr-2 align-middle text-xl">
                            <GiModernCity />
                          </span>
                          City
                        </th>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          <span className="inline-block pr-2 align-middle text-xl">
                            <MdProductionQuantityLimits />{" "}
                          </span>
                          Product
                        </th>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          <span className="inline-block pr-2 align-middle text-xl">
                            <FaPlaneDeparture />{" "}
                          </span>{" "}
                          Visits
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {reservations &&
                      Array.isArray(reservations) &&
                      reservations.length > 0 ? (
                        reservations.map((item) => (
                          <tr key={item.reserver_at}>
                            <th className="text-blueGray-700 whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                              {item.city}
                            </th>
                            <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                              {item.product_name}
                            </td>
                            <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                              {item.date}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="px-6 py-4 text-center">
                            Reservations not found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Reservations;
