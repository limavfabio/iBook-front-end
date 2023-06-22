import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://venom-precision.onrender.com/api/v1';
// const API_URL = 'http://127.0.0.1:3000/api/v1';

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

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const fetchProductWithId = createAsyncThunk(
  'productsId/fetchProductWithId',
  async (id) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

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
      .addCase(fetchProductWithId.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchProductWithId.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        value: action.payload,
      }))
      .addCase(fetchProductWithId.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default productsSlice.reducer;
