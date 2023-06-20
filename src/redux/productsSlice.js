import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://venom-precision.onrender.com/api/v1/';

const initialState = {
  value: '',
  ifSucceed: false,
  ifLoading: false,
  errors: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await fetch(`${URL}/products`);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
})

export const fetchProductWithId = createAsyncThunk('productsId/fetchProductWithId', async (id)=>{
  try {
    const response = await fetch(`${URL}/products/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error.message)
  }
})

export const postReservation = createAsyncThunk('reservation/postReservation', async ({ data})=>{
  try {
    console.log( data);
    const response = await fetch(`${URL}/users/${data.user_id}/reservations`, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    const responseData = await response.json()
    return responseData
  } catch (error) {
    throw new Error(error.message)
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
      }))
      .addCase(fetchProductWithId.pending, (state)=>({
        ...state,
        isLoading:true
      }))
      .addCase(fetchProductWithId.fulfilled, (state, action)=>({
        ...state,
        isLoading:false,
        value:action.payload
      }))
      .addCase(fetchProductWithId.rejected, (state)=>({
        ...state,
        isLoading:false
      }))
      .addCase(postReservation.pending, (state)=>({
        ...state,
        isLoading:true
      }))
      .addCase(postReservation.fulfilled, (state, action)=>({
        ...state,
        isLoading:false,
        value:action.payload
      }))
      .addCase(postReservation.rejected, (state)=>({
        ...state,
        isLoading:false
      }))
  },
})

export default productsSlice.reducer;
