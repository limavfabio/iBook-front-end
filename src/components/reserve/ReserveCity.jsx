import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import CityOption from './CityOption';

const ReserveCity = ({ handleCity }) => {
  const [isCityOpen, setCityIsOpen] = useState(false);
  const [cityValue, setCityValue] = useState('New York');

  const toggleDropdown = () => {
    setCityIsOpen(!isCityOpen);
  };
  const openCity = (city) => {
    setCityValue(city);
    setCityIsOpen(!isCityOpen);
  };

  useEffect(() => {
    handleCity(cityValue);
  }, [cityValue]);

  const cityOptions = [
    'New York',
    'Chicago',
    'Washington, D.C.',
    'San Francisco',
    'Los Angeles',
    'Boston',
    'Seattle',
    'Miami',
    'Denver',
    'Philadelphia',
    'Atlanta',
  ];

  return (
    <div className=" inline-block ">
      {isCityOpen && (
        <ul className="absolute top-1/2 z-10 mt-2 h-2/5  w-1/4 overflow-auto rounded-lg bg-white text-left text-[#97BF0F] shadow-lg">

          {
            cityOptions.map((city) => (
              <CityOption key={city} city={city} openCity={openCity} />))
          }

        </ul>
      )}
      <button
        type="button"
        className="flex items-center justify-between gap-2 rounded-full border-2 border-[#BED86B] bg-[#97BF0F] px-6 py-2 text-xs"
        onClick={toggleDropdown}
      >
        <p>{cityValue}</p>
        <BsPlay className="rotate-90 text-xl" />
      </button>
    </div>
  );
};

ReserveCity.propTypes = {
  handleCity: PropTypes.func.isRequired,
};

export default ReserveCity;
