import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { fetchProductById } from '../redux/productsSlice';

import DetailRow from '../components/DetailRow';
import ConfigureButton from '../components/ConfigureButton';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import MobileSidebar from '../components/layout/MobileSidebar';

function Product() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.products.selectedProduct);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, []);

  console.log(product);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex">
        <Sidebar />
        {isSidebarOpen && <MobileSidebar />}
        <div className="flex w-full items-center">
          {/* Left Side Full Screen Image */}
          {product ? (
            <div className="w-full">
              <img
                src={product.image}
                alt="Vespa"
              />
            </div>
          ) : (
            <div className="w-full">Loading Image</div>
          )}
          {/* Right Side Details Panel */}
          <div className="flex h-full w-1/3 min-w-fit flex-col justify-center px-5 text-end">
            {product ? (
              <h2 className="mb-1 text-4xl">{product.name}</h2>
            ) : (
              <h2 className="mb-1 text-4xl">Loading</h2>
            )}
            {product ? (
              <p className="mb-5">
                {' '}
                {product.description}
                {' '}
              </p>
            ) : (
              <p className="mb-5">Loading</p>
            )}

            {product ? (
              <div className="mb-5 flex flex-col justify-between">
                <DetailRow label="Price" value="45" />
                <DetailRow label="Start Time" value="9:00" isGrayBackground />
                <DetailRow label="End Time" value="11:00" />
                <DetailRow label="Duration" value="1 Hour" isGrayBackground />
              </div>
            ) : (
              <p className="mb-5">Loading</p>
            )}

            <p className="flex items-center self-end font-bold">
              DISCOVER MORE MODELS
              {' '}
              <ChevronRightIcon className="h-5 text-[#97BF0F]" />
              {' '}
            </p>
            <ConfigureButton className="mt-5" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
