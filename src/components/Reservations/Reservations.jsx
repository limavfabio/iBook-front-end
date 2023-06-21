import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../../redux/reservationSlice';
import Header from '../layout/Header';
import MobileSidebar from '../layout/MobileSidebar';
import Sidebar from '../layout/Sidebar';

const Reservations = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const { reservations } = useSelector((state) => state.reservations.value);
  useEffect(() => {
    dispatch(fetchReservations(parseInt(userId)));
  }, []);

  // State for sidebar
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

        <div>
          <h2 className="text-center my-5 font-bold text-3xl uppercase">My Reservations</h2>
          <section className="bg-blueGray-50 py-1">
            <div className="mx-auto mb-12 mt-10 w-full px-4 xl:mb-0">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded  shadow-lg ">
                <div className="block w-full overflow-x-auto">
                  <table className="w-full border-collapse border  items-center bg-transparent ">
                    <thead className='bg-[#97BF0F] text-white'>
                      <tr>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          City
                        </th>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          Product name
                        </th>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          Visits
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                      {reservations
                        && reservations.map((item) => (
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
                        ))}
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
