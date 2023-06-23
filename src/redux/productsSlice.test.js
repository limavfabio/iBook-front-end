import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { fetchProductWithId, fetchProducts } from './productsSlice';

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
  it('should handle fetchProducts.pending', () => {
    store.dispatch(fetchProducts());
    const { isLoading } = store.getState().products;
    expect(isLoading).toBe(true);
  });
  it('should handle fetchProductWithId.fulfilled', () => {
    const mockPayload = { id: 1, name: 'Product 1', description: 'Product description' };
    store.dispatch(fetchProductWithId.fulfilled(mockPayload));
    const { isLoading, value } = store.getState().products;
    expect(isLoading).toBe(false);
    expect(value).toEqual(mockPayload);
  });

  it('should handle fetchProductWithId.rejected', () => {
    store.dispatch(fetchProductWithId.rejected());
    const { isLoading } = store.getState().products;
    expect(isLoading).toBe(false);
  });
});
