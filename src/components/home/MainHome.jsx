import React, { useEffect, useRef, useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchProducts } from '../../redux/productsSlice';

// Import Swiper styles
import 'swiper/css';

const MainHome = () => {
  // Fetch products from the store
  const { products } = useSelector((state) => state.products.value);
  const username = useSelector((state) => state.user.username);
  const userId = useSelector((state) => state.user.id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const swiperRef = useRef();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="h-screen mt-20">
      <div className="text-center my-5">
        <h2 className="text-3xl font-bold uppercase">latest models</h2>
        <p className="text-[#B9B9B9] text-sm">Please select a model</p>
      </div>
      <div className="mx-auto flex  gap-5 items-center justify-center text-center">
        <button type="button" className={`swiper-button-prev ${isBeginning ? 'bg-[#E4E5E9]' : 'bg-[#97BF0F]'} pl-8 pr-2 py-4 rounded-r-full`} disabled={isBeginning} onClick={() => swiperRef.current?.slidePrev()}>
          <BsPlay className="rotate-180 text-white" />
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
                <Link to={`/products/${product.id}`}>
                  <div
                    className={`mx-auto flex h-[200px] w-[200px] items-center justify-center rounded-full bg-${product.bgColor}`}
                  >
                    <img src={product.image} alt="img" className="rounded-full hover:cursor-pointer" />
                  </div>
                  <h2 className="my-5 font-bold hover:cursor-pointer">{product.name}</h2>
                  <p className="mb-10 text-[#B9B9B9]">{product.description}</p>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>

        <button type="button" className={`swiper-button-next ${!isEnd ? 'bg-[#97BF0F]' : 'bg-[#E4E5E9]'} pl-2 pr-8 py-4 rounded-l-full`} disabled={isEnd} onClick={() => swiperRef.current?.slideNext()}>
          <BsPlay className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default MainHome;
