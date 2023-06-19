import React from "react";
import { useParams } from "react-router-dom";
import ReserveCalender from "./ReserveCalender";
import ReserveCity from "./ReserveCity";

const Reserve = () => {
  const { user_id } = useParams();

  const bgImg = {
    backgroundImage:
      'url("https://vespaindia.com/images/classic/vxl_yellow.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center",
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

        <div className="mt-5 flex items-center justify-center gap-5">
          <ReserveCalender />
          <ReserveCity />

          <button
            type="button"
            className="rounded-full border-2  border-white bg-white px-8 py-2 text-xs text-[#97BF0F]"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
