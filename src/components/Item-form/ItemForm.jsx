import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../layout/Header';
import MobileSidebar from '../layout/MobileSidebar';
import Sidebar from '../layout/Sidebar';
import FormInput from './FormInput';

const ItemForm = () => {
  const URL = 'https://venom-precision.onrender.com/api/v1';

  const user = useSelector((state) => state.user);

  const redirect = useNavigate();
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
      owner_id: user.id,
    };

    fetch(`${URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the successful response
        const product = result.details;
        redirect(`/products/${product.id}`);
        toast.success('Add Product successfully!!');
      })
      .catch((error) => {
        // Handle the error
        throw new Error(error);
      });
  };

  // State for sidebar
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
        <div className=" flex h-screen w-full flex-col items-center justify-center bg-white">
          <form
            onSubmit={handleSubmit}
            className="border border-[#9CA3AF] bg-white px-8 py-10 shadow-2xl"
          >
            <h2 className=" text-center font-bold uppercase">Add New Item</h2>
            <div className="w-72 md:w-96">

              <FormInput
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Marker Kit"
              />

              <FormInput
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A nice marker kit"
              />

              <FormInput
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="URL for the image"
              />

              <FormInput
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />

              <button
                type="submit"
                className="mt-4 bg-[#97BF0F] px-6 py-2 text-white hover:bg-[#85a80d] focus:bg-[#6d8a0a]"
              >
                Submit
              </button>
              <button
                type="button"
                className="ml-5 mt-4 bg-[#E4E5E9] px-6 py-2 text-black hover:bg-[#cacacc] focus:bg-[#9a9a9c]"
                onClick={() => redirect(-1)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ItemForm;
