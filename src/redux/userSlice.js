import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1/users';

const initialState = JSON.parse(localStorage.getItem('user')) || {
  id: '',
  username: '',
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
        localStorage.removeItem('user');
        state.id = '';
        state.username = '';
        state.loggedIn = false;
      } else {
        state.id = action.payload.id;
        state.username = action.payload.username;
        const user = {
          id: state.id,
          username: state.username,
        };
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
  },

});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
