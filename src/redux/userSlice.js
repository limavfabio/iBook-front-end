import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: localStorage.getItem('userId') || '',
  username: localStorage.getItem('username') || '',
};

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
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
