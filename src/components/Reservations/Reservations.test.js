import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Reservations from './Reservations';

// Create a mock store function
const mockStore = configureStore();

// Mock the react-router-dom module
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({ pathname: '/mock-path' }),
  useNavigate: jest.fn(),
}));

describe('Reservations test', () => {
  test('renders the component without errors', () => {
    const initialState = {
      user: {
        id: 1,
      },
      reservations: {
        value: [],
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Reservations />
      </Provider>
    );

    // Add your assertions here to verify the component behavior

    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });
});
