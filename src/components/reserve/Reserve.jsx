import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postReservation } from "../../redux/reservationSlice";
import ReserveCalender from "./ReserveCalender";
import ReserveCity from "./ReserveCity";
import { fetchProductWithId } from "../../redux/productsSlice";

const Reserve = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch user from redux store
  const user = useSelector((state) => state.user);

  // Fetch product based on the parameter id
  const { productId } = useParams();
  const product = useSelector((state) => state.products.value);
  useEffect(() => {
    dispatch(fetchProductWithId(productId));
  }, [dispatch]);

  const [date, setDate] = useState(null);

  const handleCalender = (date) => {
    setDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      date,
      user_id: user.id,
      product_id: product.id,
    };

    // Create a new reservation
    dispatch(postReservation({ postData }));

    // Navigate to the user's reservations page
    navigate(`/users/${user.id}/reservations`);
  };

  const bgImg = {
    backgroundImage: `url(${product.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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

        <div className="mt-5 flex flex-col items-center justify-center gap-5 md:flex-row">
          <ReserveCalender handleCalender={handleCalender} />
          <ReserveCity />

          <button
            type="button"
            className="rounded-full border-2  border-white bg-white px-8 py-2 text-xs text-[#97BF0F] transition delay-150 duration-200 ease-in-out  hover:-translate-y-1 hover:scale-110  hover:bg-[#97BF0F] hover:text-white"
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
