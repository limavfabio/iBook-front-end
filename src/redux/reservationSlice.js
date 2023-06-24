import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://venom-precision.onrender.com/api/v1';
// const API_URL = 'http://127.0.0.1:3000/api/v1';
const initialState = {
  value: '',
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async (userId) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}/reservations`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const postReservation = createAsyncThunk('reservation/postReservation', async ({ postData }) => {
  try {
    const response = await fetch(`${API_URL}/users/${postData.user_id}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
});

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        value: action.payload,
      }))
      .addCase(fetchReservations.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        errors: action.payload.error,
      }))

      .addCase(postReservation.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(postReservation.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        value: action.payload,
      }))
      .addCase(postReservation.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default reservationSlice.reducer;
