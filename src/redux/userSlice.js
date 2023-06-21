import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/users';

const initialState = {
  id: localStorage.getItem('userId') || '',
  username: localStorage.getItem('username') || '',
};

// Async thunk for creating a user
export const createUser = createAsyncThunk(
  'user/createUser',
  async (username) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload === 'DELETE_USER') {
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
        state.id = '';
        state.username = '';
      } else {
        state.id = action.payload.id;
        state.username = action.payload.username;
        localStorage.setItem('userId', state.id);
        localStorage.setItem('username', state.username);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      // Handle the successful creation of the user
      // You can update the state or perform any necessary actions

    });
    builder.addCase(createUser.rejected, (state, action) => {
      // Handle the failure of creating the user
      // You can update the state or perform any necessary actions
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
