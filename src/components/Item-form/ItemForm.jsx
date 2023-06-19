import React, { useState } from "react";

const ItemForm = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPhoto("");
    setVehicle("");
    setRate("");
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#E4E5E9] container">
      <form
        onSubmit={handleSubmit}
        className="border border-[#9CA3AF] py-10 px-8 shadow-2xl bg-white"
      >
      <h2 className=" font-bold uppercase text-center">Add New Item</h2>
        <div className="w-72 md:w-96">
          <label htmlFor="name" className="mb-2 block">
            <p className="font-semibold">Name</p>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Fabio Lima"
              className="my-2 w-full border border-[#BFD872] px-6 py-2 focus:outline-none focus:bg-white focus:border-[#85a80d]"
              required
            />
          </label>
          <label htmlFor="photo" className="mb-2 block">
          <p className="font-semibold">Photo</p>

            <input
              type="text"
              id="photo"
              value={photo}
              placeholder="https://vespaindia.com/images/classic/vxl_yellow.webp"
              onChange={(e) => setPhoto(e.target.value)}
              className="my-2 w-full border border-[#BFD872] px-6 py-2 focus:outline-none focus:bg-white focus:border-[#85a80d]"
              required
            />
          </label>
          <label htmlFor="vehicle" className="mb-2 block">
          <p className="font-semibold">Vehicle</p>

            <input
              type="text"
              id="vehicle"
              value={vehicle}
              placeholder="Audi A8"
              onChange={(e) => setVehicle(e.target.value)}
              className="my-2 w-full border border-[#BFD872] px-6 py-2 focus:outline-none focus:bg-white focus:border-[#85a80d]"
              required
            />
          </label>
          <label htmlFor="rate" className="mb-2 block">
          <p className="font-semibold">Rate</p>

            <input
              type="number"
              id="rate"
              value={rate}
              placeholder="5"
              onChange={(e) => setRate(e.target.value)}
              className="my-2 w-full border border-[#BFD872] px-6 py-2 focus:outline-none focus:bg-white focus:border-[#85a80d]"
              required
            />
          </label>
          <button
            type="submit"
            className="mt-4 bg-[#97BF0F] px-6 py-2 text-white hover:bg-[#85a80d] focus:bg-[#6d8a0a]"
          >
            Submit
          </button>
          <button
            type="submit"
            className="mt-4 ml-5 bg-[#E4E5E9] px-6 py-2 text-black hover:bg-[#cacacc] focus:bg-[#9a9a9c]"
          >
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
