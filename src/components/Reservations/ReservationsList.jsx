import React from 'react';

const ReservationsList = ({ reservations }) => (
  <div>
    {reservations
      && Array.isArray(reservations)
      && reservations.length > 0 ? (
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
  </div>
);

export default ReservationsList;
