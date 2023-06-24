import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, useLocation } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Reserve from '../reserve/Reserve';

const mockStore = configureStore([]);

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));
describe('Reserve tests', () => {
  it('expects to initially set reserve as an empty object', () => {
    const initialState = {
      products: {
        value: '',
        ifSucceed: false,
        ifLoading: false,
      },
    };
    const store = mockStore(initialState);
    const state = store.getState().products;
    expect(state).toEqual(initialState.products);
  });

  test('Check if render', () => {
    const product = {
      created_at: '2023-06-20T20:29:01.048Z',
      description: 'Adds extra protection for head',
      id: 3,
      image:
        'https://i.pinimg.com/736x/bb/e6/37/bbe6374b29f0a0d18d5e5072cd6667e4.jpg',
      name: 'War Helmet',
      owner_id: 3,
      price: '430.0',
      updated_at: '2023-06-20T20:29:01.048Z',
    };

    const state = {
      user: {
        id: 1,
        username: 'user1',
      },
      products: {
        value: product,
        ifLoading: false,
      },
    };

    const store = mockStore(state);
    const mockLocation = {
      state: { data: 1 },
    };
    useLocation.mockReturnValue(mockLocation);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Reserve />
        </Provider>
      </BrowserRouter>,
    );

    const reservation = screen.getByRole('heading', {
      name: 'book a Awesome Weapon',
    });

    expect(reservation).toBeInTheDocument();
    expect(useEffect).toHaveBeenCalled();
  });
});
