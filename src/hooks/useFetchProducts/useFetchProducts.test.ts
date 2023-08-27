/* eslint-disable @typescript-eslint/ban-ts-comment */
import { renderHook, waitFor } from '@testing-library/react-native';

import { useFetchProducts } from './useFetchProducts';

describe('useFetchProducts', () => {
  it('should fetch products and manage loading state', async () => {
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, name: 'Product 1' }]),
      }),
    );

    const { result } = renderHook(() => useFetchProducts());

    expect(result.current.loading).toBe(true);
    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBeUndefined();

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.products).toEqual([{ id: 1, name: 'Product 1' }]);
    expect(result.current.error).toBeUndefined();
  });

  it('should handle fetch error', async () => {
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Not Found',
      }),
    );

    const { result } = renderHook(() => useFetchProducts());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.products).toEqual([]);
    expect(result.current.error).toEqual(new Error('Failed to fetch products'));
  });
});
