import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { fetchProducts } from './productsSlice';

describe('productsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        products: productsReducer,
      },
    });
  });

  it('should handle fetchProducts.fulfilled', () => {
    const mockPayload = { id: 1, name: 'Product 1', description: 'Product description' };
    store.dispatch(fetchProducts.fulfilled(mockPayload));
    const { isLoading, ifSucceed, value } = store.getState().products;
    expect(isLoading).toBe(false);
    expect(ifSucceed).toBe(true);
    expect(value).toEqual(mockPayload);
  });
});
