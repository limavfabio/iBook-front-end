import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Details from '../../routes/Details'

// Mock the Redux store
const mockStore = configureStore([]);

// Mock useEffect
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: jest.fn(),
}));

describe('Details component', () => {

  it("expects to initially set reservations as an empty object", () => {
    const initialState = {
      value: {
        id: null,
        name: '',
        description: '',
        image: '',
        price: '',
        owner_id: null,
        created_at: '',
        updated_at: '',
      },
      ifSucceed: false,
      ifLoading: false,
      errors: null,
      selectedProduct: null,
    };

    const store = mockStore(initialState);
    const state = store.getState().value;
    expect(state).toEqual(initialState.value);
  });



  it('renders product details correctly', () => {
    // Mock the product data
    const mockProduct = {
      name: 'Test product',
      description: 'Test description',
      price: 10,
      created_at: Date.now(),
      image: 'test-image-url',
    };

    // Create a mock Redux store with the product data
    const store = mockStore({
      products: {
        value: mockProduct,
      },
      user: {
        id: 1,
        username: 'test-user',
      }
    });

    // Get state from mock store
    const state = store.getState().products;

    // Expect the state to match the mock product
    expect(state.value).toEqual(mockProduct);

    // Render the Details component within the mocked store and router
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>
    );

    // Assert that the product details are rendered correctly
    expect(getByText(mockProduct.name)).toBeInTheDocument();
    expect(getByText(mockProduct.description)).toBeInTheDocument();
    expect(getByText(mockProduct.price)).toBeInTheDocument();
    expect(getByAltText(mockProduct.name)).toHaveAttribute('src', mockProduct.image);

  });
});
