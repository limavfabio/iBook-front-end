import React, { useState } from 'react';

const ItemForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      description,
      image,
      price,
      owner_id: 1,
    };

    fetch('http://localhost:3001/api/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the successful response
        console.log('Product created:', result);
        // Reset the form fields
        setName('');
        setDescription('');
        setImage('');
        setPrice('');
      })
      .catch((error) => {
        // Handle the error
        console.error('Error creating product:', error);
      });
  };

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center bg-[#E4E5E9]">
      <form
        onSubmit={handleSubmit}
        className="border border-[#9CA3AF] bg-white px-8 py-10 shadow-2xl"
      >
        <h2 className=" text-center font-bold uppercase">Add New Item</h2>
        <div className="w-72 md:w-96">
          <label htmlFor="name" className="mb-2 block">
            <p className="font-semibold">Name</p>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="my-2 w-full border border-[#BFD872] px-6 py-2 focus:border-[#85a80d] focus:bg-white focus:outline-none"
              required
            />
          </label>
          <label htmlFor="description" className="mb-2 block">
            <p className="font-semibold">Description</p>

            <input
              type="text"
              id="description"
              value={description}
              placeholder="A nice marker kit"
              onChange={(e) => setDescription(e.target.value)}
              className="my-2 w-full border border-[#BFD872] px-6 py-2 focus:border-[#85a80d] focus:bg-white focus:outline-none"
              required
            />
          </label>
          <label htmlFor="image" className="mb-2 block">
            <p className="font-semibold">Image</p>

            <input
              type="text"
              id="image"
              value={image}
              placeholder="https://vespaindia.com/images/classic/vxl_yellow.webp"
              onChange={(e) => setImage(e.target.value)}
              className="my-2 w-full border border-[#BFD872] px-6 py-2 focus:border-[#85a80d] focus:bg-white focus:outline-none"
              required
            />
          </label>
          <label htmlFor="price" className="mb-2 block">
            <p className="font-semibold">Price</p>

            <input
              type="text"
              id="price"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              className="my-2 w-full border border-[#BFD872] px-6 py-2 focus:border-[#85a80d] focus:bg-white focus:outline-none"
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
            type="button"
            className="ml-5 mt-4 bg-[#E4E5E9] px-6 py-2 text-black hover:bg-[#cacacc] focus:bg-[#9a9a9c]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
