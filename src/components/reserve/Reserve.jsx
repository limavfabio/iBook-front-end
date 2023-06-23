import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProductWithId } from "../../redux/productsSlice";
import { postReservation } from "../../redux/reservationSlice";
import ReserveCalendar from "./ReserveCalendar";
import ReserveCity from "./ReserveCity";

const Reserve = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();

  // Fetch user from redux store
  const user = useSelector((state) => state.user);

  // Fetch product based on the parameter id
  const { productId } = useParams();
  const product = useSelector((state) => state.products.value);
  useEffect(() => {
    dispatch(fetchProductWithId(productId));
  }, [productId, dispatch]);

  // Redirect to login page if user is not logged in
  useEffect(() => {
    if (!user.id) {
      redirect("/login");
      toast.error("Failed to add reservation!!", { theme: "dark" });
    }
  }, [user, redirect]);

  const [date, setDate] = useState(null);
  const [city, setCity] = useState(null);
  const history = useLocation();
  const { data } = history.state;
  const userId = useSelector((state) => state.user.id);

  const navigate = useNavigate();

  const handleCalendar = (date) => {
    setDate(date);
  };
  const handleCity = (city) => {
    setCity(city);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      date,
      user_id: parseInt(userId, 10),
      product_id: data.id,
      city,
    };

    // Create a new reservation
    dispatch(postReservation({ postData }));
    toast.success("Reservation added successfully", { theme: "dark" });
    navigate("/reservations", { state: { userId, data } });
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
          book a Awesome Weapon
        </h2>
        <hr className="my-5 w-2/3 border-[#A1C839]" />
        <p className="w-1/2 text-xs leading-6">
          We have a wide range of weapons and accessories for you to choose from. You can book
          your product for as long as you wish.
        </p>

        <div className="mt-5 flex flex-col items-center justify-center gap-5 md:flex-row">
          <ReserveCalendar handleCalendar={handleCalendar} />

          <ReserveCity handleCity={handleCity} />

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
