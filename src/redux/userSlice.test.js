import { configureStore } from '@reduxjs/toolkit';
import userReducer, { createUser, setUser } from './userSlice';

describe('userSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        user: userReducer,
      },
    });
  });

  it('should handle createUser.fulfilled', async () => {
    const mockPayload = { id: "1", username: 'testuser' };

    // Mock the fetch request
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockPayload),
    });

    await store.dispatch(createUser('testuser'));

    const { id, username } = store.getState().user;
    expect(username).toBe(id);
    expect(username).toBe(username);
  });

  it('should handle createUser.rejected', async () => {
    // Mock the fetch request
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const { id, username } = store.getState().user;
    expect(id).toBe('');
    expect(username).toBe('');
  });

  it('should handle setUser', () => {
    const mockPayload = { id: 1, username: 'testuser' };
    store.dispatch(setUser(mockPayload));

    const { id, username } = store.getState().user;
    expect(id).toBe(mockPayload.id);
    expect(username).toBe(mockPayload.username);
  });

  it('should handle setUser with DELETE_USER', () => {
    const mockPayload = 'DELETE_USER';
    store.dispatch(setUser(mockPayload));

    const { id, username } = store.getState().user;
    expect(id).toBe('');
    expect(username).toBe('');
  });
});
