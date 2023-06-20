import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { postReservation } from '../../redux/reservationSlice';
import ReserveCalender from './ReserveCalender';
import ReserveCity from './ReserveCity';

const Reserve = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const history = useLocation();
  const { data } = history.state;
  const navigate = useNavigate();
  const handleCalender = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      date,
      user_id: data.owner_id,
      product_id: data.id,
    };
    dispatch(postReservation({ postData }));
    navigate(`/users/${data.owner_id}/reservations`, { state: { data } });
  };
  const bgImg = {
    backgroundImage:
      `url(${data.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={bgImg}>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-[#96BF01] bg-opacity-90 text-center text-white">
        <h2 className="text-2xl font-bold uppercase tracking-[.6rem]">
          book a vespa test-drive
        </h2>
        <hr className="my-5 w-2/3 border-[#A1C839]" />
        <p className="w-1/2 text-xs leading-6">
          There are 34 different versions of the Vespa. Today five series are in
          production: the
        </p>

        <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-5">

          <ReserveCalender handleCalender={handleCalender} />
          <ReserveCity />

          <button
            type="button"
            className="rounded-full border-2  border-white bg-white px-8 py-2 text-xs text-[#97BF0F] hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-200 hover:bg-[#97BF0F]"
            onClick={handleSubmit}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
