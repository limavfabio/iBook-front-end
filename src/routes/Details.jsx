import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { BsPlay } from "react-icons/bs";
import { Rings } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import DetailRow from "../components/DetailRow";
import ReserveButton from "../components/ReserveButton";
import Header from "../components/layout/Header";
import MobileSidebar from "../components/layout/MobileSidebar";
import Sidebar from "../components/layout/Sidebar";
import { fetchProductWithId } from "../redux/productsSlice";

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

        <div className="relative mt-5 flex w-full flex-col items-center justify-between sm:mt-0 sm:flex-row">
          {/* Left Side Full Screen Image */}

          <div className="mb-5 flex-1 sm:mb-0">
            {product ? (
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto w-2/3"
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
          <div className="flex h-full w-full min-w-fit flex-col justify-center px-5 text-end sm:w-1/3">
            <h2 className="mb-1 text-4xl"> {product.name} </h2>
            <p className="mb-5"> {product.description} </p>
            {product.price && (
              <div className="mb-5 flex flex-col justify-between">
                <DetailRow
                  label="Package price"
                  value={product.price.toString()}
                  isGrayBackground
                />
                <DetailRow
                  label="Date"
                  value={new Date(product.created_at).toLocaleDateString(
                    undefined,
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                />
              </div>
            )}
            <Link to="/products">
              <p className="flex items-center self-end font-bold">
                DISCOVER MORE MODELS{" "}
                <ChevronRightIcon className="h-5 text-[#97BF0F]" />{" "}
              </p>
            </Link>
            <ReserveButton className="mt-5" product={product} />
          </div>
          <button
            type="button"
            className="absolute bottom-0 left-0 m-5 rounded-r-full bg-[#97BF0F] py-4 pl-8 pr-2"
            onClick={() => navigate(-1)}
          >
            <BsPlay className="rotate-180 text-xl text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Details;
