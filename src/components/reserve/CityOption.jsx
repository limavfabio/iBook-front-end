import React from 'react';

const CityOption = ({ city, openCity }) => (
  <li
    role="button"
    tabIndex={0}
    className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
    onClick={() => openCity(city)}
  >
    {city}
  </li>
);

export default CityOption;
