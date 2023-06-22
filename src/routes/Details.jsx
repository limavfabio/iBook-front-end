import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import { Rings } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import DetailRow from '../components/DetailRow';
import ReserveButton from '../components/ReserveButton';
import Header from '../components/layout/Header';
import MobileSidebar from '../components/layout/MobileSidebar';
import Sidebar from '../components/layout/Sidebar';
import { fetchProductWithId } from '../redux/productsSlice';

function Details() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.value);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    dispatch(fetchProductWithId(productId));
  }, [dispatch, productId]);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex">
        <Sidebar />
        {isSidebarOpen && <MobileSidebar />}

        <div className="relative flex mt-5 sm:mt-0 flex-col sm:flex-row w-full justify-between items-center">
          {/* Left Side Full Screen Image */}

          <div className="mb-5 sm:mb-0 flex-1">
            { product ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-2/3 mx-auto"
              />
            ) : (
              <Rings
                height="80"
                width="80"
                color="#97BF0F"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible
                ariaLabel="rings-loading"
              />
            )}

          </div>
          {/* Right Side Details Panel */}
          <div className="flex h-full w-full sm:w-1/3 min-w-fit flex-col justify-center px-5 text-end">
            <h2 className="mb-1 text-4xl">
              {' '}
              {product.name}
              {' '}
            </h2>
            <p className="mb-5">
              {' '}
              {product.description}
              {' '}
            </p>
            <div className="mb-5 flex flex-col justify-between">
              <DetailRow
                label="Package price"
                value={product.price}
                isGrayBackground
              />
              <DetailRow label="Date" value={new Date(product.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })} />
            </div>
            <Link to="/products">
              <p className="flex items-center self-end font-bold">
                DISCOVER MORE MODELS
                {' '}
                <ChevronRightIcon className="h-5 text-[#97BF0F]" />
                {' '}
              </p>
            </Link>
            <ReserveButton className="mt-5" product={product} />

          </div>
          <button type="button" className="bg-[#97BF0F] pl-8 pr-2 py-4 rounded-r-full absolute left-0 bottom-0 m-5" onClick={() => navigate(-1)}>
            <BsPlay className="text-white rotate-180 text-xl" />
          </button>
        </div>

      </div>
    </>
  );
}

export default Details;
