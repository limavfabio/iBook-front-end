import React, { useState } from 'react';
import { BsPlay } from 'react-icons/bs';

const ReserveCity = () => {
  const [isCityOpen, setCityIsOpen] = useState(false);
  const [cityValue, setCityValue] = useState('New York');

  const toggleDropdown = () => {
    setCityIsOpen(!isCityOpen);
  };
  const handleCity = (city) => {
    setCityValue(city);
    setCityIsOpen(!isCityOpen);
  };

  return (
    <div className=" inline-block ">
      {isCityOpen && (
        <ul className="absolute top-1/2 z-10 mt-2 h-2/5  w-1/4 overflow-auto rounded-lg bg-white text-left text-[#97BF0F] shadow-lg">
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('New York')}
          >
            New York
          </li>
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('Chicago')}
          >
            Chicago
          </li>
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('Washington, D.C.')}
          >
            Washington, D.C.
          </li>
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('Boston')}
          >
            Boston
            {' '}
          </li>
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('Los Angeles')}
          >
            Los Angeles
          </li>
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('San Francisco')}
          >
            San Francisco
          </li>
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('Houston')}
          >
            Houston
          </li>
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('Dallas')}
          >
            Dallas
          </li>
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('Philadelphia')}
          >
            Philadelphia
          </li>
          <li
            className="cursor-pointer px-4 py-2 hover:bg-[#97BF0F] hover:text-white"
            onClick={() => handleCity('Miami')}
          >
            Miami
          </li>
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

export default ReserveCity;
