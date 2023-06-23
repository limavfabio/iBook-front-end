// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { RouterProvider } from 'react-router-dom';
// import configureStore from 'redux-mock-store';
// import { ToastContainer } from 'react-toastify';
// import Details from './Details';
// import router from '../router';

// // Mock the Redux store
// const mockStore = configureStore([]);

// describe('Details component', () => {
//   it('renders product details correctly', () => {
//     // Mock the product data
//     const mockProduct = {
//       name: 'Test Product',
//       description: 'Test description',
//       price: 10,
//       created_at: Date.now(),
//       image: 'test-image-url',
//     };

//     // Create a mock Redux store with the product data
//     const store = mockStore({
//       products: {
//         value: mockProduct,
//       },
//     });

//     // Render the Details component within the mocked store and router
//     const { getByText, getByAltText } = render(
//       <Provider store={store}>
//         <ToastContainer />
//         <RouterProvider router={router} />
//       </Provider>
//     );

//     // <MemoryRouter initialEntries={['/products/1']}>
//     //   <Route path="/products/:productId">
//     //     <Details />
//     //   </Route>
//     // </MemoryRouter>


//     // Assert that the product details are rendered correctly
//     expect(getByText(mockProduct.name)).toBeInTheDocument();
//     expect(getByText(mockProduct.description)).toBeInTheDocument();
//     expect(getByText(`$${mockProduct.price}`)).toBeInTheDocument();
//     expect(getByAltText(mockProduct.name)).toHaveAttribute('src', mockProduct.image);
//   });
// });
