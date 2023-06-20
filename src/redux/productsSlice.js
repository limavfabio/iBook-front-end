import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'http://localhost:3000/api/v1/products';

const initialState = {
  value: '',
  ifSucceed: false,
  ifLoading: false,
  errors: null,
  selectedProduct: null,
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
});

// Async thunk for fetching a single product
export const fetchProductById = createAsyncThunk('products/fetchProductById', async (productId) => {
  try {
    const response = await fetch(`${URL}/${productId}`);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

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
      }))
      .addCase(fetchProductById.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchProductById.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        ifSucceed: true,
        selectedProduct: action.payload, // Update the selected product
      }))
      .addCase(fetchProductById.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default productsSlice.reducer;
