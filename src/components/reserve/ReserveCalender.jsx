import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from 'react-icons/fa';

const ReserveCalender = () => {
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);

  const [value, onChange] = useState(new Date());

  const openCalendar = () => {
    setIsCalenderOpen(!isCalenderOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-between gap-3 rounded-full border-2 border-[#BED86B] bg-[#97BF0F] px-4 py-2 text-xs"
        onClick={openCalendar}
      >
        <span>Open Calendar</span>
        <FaCalendarAlt/>
      </button>
      {isCalenderOpen && (
        <div className="absolute">
          <div className="  text-black shadow-lg">
            <Calendar className="w-full mt-2 w-80 h-48 overflow-auto" onChange={onChange} value={value} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReserveCalender;
