import React, { useState } from 'react';

const Reserve = () => {
  const bgImg = {
    backgroundImage: 'url("https://vespaindia.com/images/classic/vxl_yellow.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={bgImg}>
      <div className="flex flex-col items-center justify-center w-full h-screen text-center text-white bg-[#96BF01] bg-opacity-90">
        <h2 className="font-bold text-2xl uppercase tracking-[.6rem]">book a vespa test-drive</h2>
        <hr className="my-5 w-2/3 border-[#A1C839]" />
        <p className="w-1/2 text-xs leading-6">
          There are 34 different versions of the Vespa. Today five series are in production: the
        </p>

        <div className="flex justify-center items-center mt-5 gap-5">
          <div className="relative inline-block ">
            <button
              type="button"
              className="bg-[#97BF0F] py-2 px-6 text-xs rounded-full border-2 border-[#BED86B] flex justify-between items-center gap-5"
              onClick={toggleDropdown}
            >
              <p>Select City</p>
              {
                        isOpen
                          ? <img width="22" height="22" src="https://img.icons8.com/windows/32/sort-up.png" alt="sort-up" />
                          : <img width="22" height="22" src="https://img.icons8.com/windows/32/sort-down.png" alt="sort-down" />
                    }

            </button>
            {isOpen && (
            <ul className="absolute bg-transparent rounded-lg text-left shadow-lg mt-2 w-full">
              <li className="px-4 py-2 hover:bg-[#97BF0F]">City 1</li>
              <li className="px-4 py-2 hover:bg-[#97BF0F]">City 2</li>
              <li className="px-4 py-2 hover:bg-[#97BF0F]">City 3</li>
            </ul>
            )}
          </div>
          <button
            type="button"
            className="text-[#97BF0F] bg-white  py-2 px-8 rounded-full text-xs border-2 border-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
