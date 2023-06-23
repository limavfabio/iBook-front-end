import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const ReserveCalendar = ({ handleCalendar }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [value, setValue] = useState(new Date());
  const date = new Date(value).toJSON().slice(0, 10);
  const currentDate = new Date().toISOString().split('T')[0];
  const openCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  useEffect(() => {
    handleCalendar(date);
  }, [cityValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-between gap-3 rounded-full border-2 border-[#BED86B] bg-[#97BF0F] px-4 py-2 text-xs"
        onClick={openCalendar}
      >
        <input
          type="date"
          value={date}
          className=" appearance-none border-none bg-transparent text-black outline-none"
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none',
            outline: 'none',
            border: 'none',
          }}
          min={currentDate}
          onChange={handleChange}
        />
      </button>
    </div>
  );
};

ReserveCalendar.propTypes = {
  handleCalendar: PropTypes.func.isRequired,
};

export default ReserveCalendar;
