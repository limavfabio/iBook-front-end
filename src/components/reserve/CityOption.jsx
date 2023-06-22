import React from 'react';
import PropTypes from 'prop-types';

const CityOption = ({ city, openCity }) => (
  <li className="w-full">
    <button
      type="button"
      className="cursor-pointer text-start w-full px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
      onClick={() => openCity(city)}
    >
      {city}
    </button>
  </li>
);

CityOption.propTypes = {
  city: PropTypes.string.isRequired,
  openCity: PropTypes.func.isRequired,
};

export default CityOption;
