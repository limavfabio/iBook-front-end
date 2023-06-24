import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import reservationReducer from './reservationSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    reservations: reservationReducer,
    user: userReducer,
  },
});

export default store;
