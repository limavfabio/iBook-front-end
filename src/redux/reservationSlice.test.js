import { configureStore } from '@reduxjs/toolkit';
import reservationReducer, { fetchReservations } from './reservationSlice';

describe('reservationSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        reservations: reservationReducer,
      },
    });
  });

  test('fetchReservations action should update state correctly on success', async () => {
    const userId = '123';
    const responseData = ['reservation1', 'reservation2'];

    // Mock the fetch function used in the async action
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(responseData),
    });

    await store.dispatch(fetchReservations(userId));

    const state = store.getState().reservations;

    expect(state.isLoading).toBe(false);
    expect(state.value).toEqual(responseData);
    expect(state.errors).toBeNull();
  });
});
