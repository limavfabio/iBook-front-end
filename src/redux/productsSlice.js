import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'http://localhost:3000/api/v1/products';

const initialState = {
  value: '',
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchProducts.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        ifSucceed: true,
        value: action.payload,
      }))
      .addCase(fetchProducts.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
})

export default productsSlice.reducer;
