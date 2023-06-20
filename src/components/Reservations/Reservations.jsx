import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchReservations } from "../../redux/reservationSlice";

const Reservations = () => {
  const { user_id } = useParams();
  const dispatch = useDispatch();
  const {state} = useLocation()
  const data = useSelector((state) => state.reservations.value);

  useEffect(() => {
    dispatch(fetchReservations(user_id));
  }, []);
  console.log(state);
  return (
    <div>
      <div>
        <section class="bg-blueGray-50 py-1">
          <div class="mx-auto mb-12 mt-24 w-full px-4 xl:mb-0 xl:w-8/12">
            <div class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg ">
              <div class="block w-full overflow-x-auto">
                <table class="w-full border-collapse border  items-center bg-transparent ">
                  <thead>
                    <tr>
                      <th class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                        Product name
                      </th>
                      <th class="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                        Visits
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((item) => (
                          <tr key={item.id}>
                            <th class="text-blueGray-700 whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                              {state.data.name}
                            </th>
                            <td class="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
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
  );
};

export default Reservations;
