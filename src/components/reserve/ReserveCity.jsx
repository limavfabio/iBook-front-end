import React, { useState } from 'react';
import { BsPlay } from 'react-icons/bs';

const ReserveCity = () => {
    const [isCityOpen, setCityIsOpen] = useState(false);
    const [cityValue, setCityValue]= useState('London')
    
    const toggleDropdown = () => {
        setCityIsOpen(!isCityOpen);
      };
     
  return (
    <div className="relative inline-block ">
            <button
              type="button"
              className="flex items-center justify-between gap-2 rounded-full border-2 border-[#BED86B] bg-[#97BF0F] px-6 py-2 text-xs"
              onClick={toggleDropdown}
            >
              <p>{cityValue}</p>
              {isCityOpen ? (
                <BsPlay className='text-xl -rotate-90'/>
              ) : (
                <BsPlay className='text-xl rotate-90'/>

              )}
            </button>
            {isCityOpen && (
              <ul className="absolute mt-2 w-full rounded-lg bg-transparent text-left shadow-lg">
                <li className="px-4 py-2 hover:bg-[#97BF0F]" onClick={()=> setCityValue('city1')}>City 1</li>
                <li className="px-4 py-2 hover:bg-[#97BF0F]" onClick={()=> setCityValue('city2')}>City 2</li>
                <li className="px-4 py-2 hover:bg-[#97BF0F]" onClick={()=> setCityValue('city3')}>City 3</li>
              </ul>
            )}
          </div>
  )
}

export default ReserveCity