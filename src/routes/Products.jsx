import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/layout/Header';
import MobileSidebar from '../components/layout/MobileSidebar';
import Sidebar from '../components/layout/Sidebar';
import { fetchProducts } from '../redux/productsSlice';

function Products() {
  const URL = 'https://venom-precision.onrender.com/api/v1';
  // const URL = 'http://127.0.0.1:3000/api/v1';

  // Fetch data from the store
  const products = useSelector((state) => state.products.value.products);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // State for sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function handleDelete(id) {
    fetch(`${URL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: user.id }),
    })
      .then()
      .then(() => {
        dispatch(fetchProducts());
      })
      .catch((error) => {
        throw new Error('Error:', error);
      });
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar />
        {isSidebarOpen && <MobileSidebar />}
        {/* Table */}
        <div className="w-full max-h-screen overflow-y-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products ? (
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{product.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {
                        Number(user.id) === product.owner_id ? (
                          // Delete button when the user IS the owner of the product
                          <button
                            onClick={() => handleDelete(product.id)}
                            type="button"
                            className="px-3 py-1 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded-md hover:bg-red-500 hover:text-white"
                          >
                            Delete
                          </button>
                        ) : (
                          // Delete button when the user is NOT the owner of the product
                          <button
                            type="button"
                            disabled
                            className="px-3 py-1 text-sm font-medium text-gray-400 bg-transparent border border-gray-400 rounded-md"
                          >
                            Delete
                          </button>
                        )
                      }
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Products;
