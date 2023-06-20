import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../redux/productsSlice';

// Import Swiper styles
import 'swiper/css';

const MainHome = () => {
  // Fetch products from the store
  const products = useSelector((state) => state.products.value);
  const username = useSelector((state) => state.user.username);
  const userId = useSelector((state) => state.user.id);
  console.log(username);
  console.log(userId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const swiperRef = useRef();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="mx-auto flex h-screen gap-5 items-center justify-center text-center">
      <button type="button" className={`swiper-button-prev ${isBeginning ? 'bg-[#E4E5E9]' : 'bg-[#97BF0F]'}  pl-7 pr-2 py-3 rounded-r-full`} disabled={isBeginning} onClick={() => swiperRef.current?.slidePrev()}>
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/play--v1.png"
          alt="play--v1"
          className="rotate-180"
        />
      </button>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,

          },
          550: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        allowTouchMove={false}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="w-full"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {
          products && products.map((product) => (
            <SwiperSlide key={product.id} className="cursor-pointer">
              <Link to={`/details/${product.id}`}>
                <div
                  className={`mx-auto flex h-[200px] w-[200px] items-center justify-center rounded-full bg-${product.bgColor}`}
                >
                  <img src={product.image} alt="img" className="rounded-full hover:cursor-pointer" />
                </div>
                <h2 className="my-5 font-bold hover:cursor-pointer">{product.name}</h2>
                <p className="mb-10 text-[#D2D2D2]">{product.description}</p>
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <button type="button" className={`swiper-button-next ${!isEnd ? 'bg-[#97BF0F]' : 'bg-[#E4E5E9]'} pl-2 pr-7 py-3 rounded-l-full`} disabled={isEnd} onClick={() => swiperRef.current?.slideNext()}>
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/play--v1.png"
          alt="play--v1"
        />
      </button>
    </div>
  );
};

export default MainHome;
