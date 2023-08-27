/* eslint-disable @typescript-eslint/ban-ts-comment */
import { renderHook, waitFor } from '@testing-library/react-native';

import { useFetchProductDetails } from './useFetchProductDetails';

describe('useFetchProductDetails', () => {
  it('should fetch product and manage loading state', async () => {
    // @ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 1, name: 'Product 1' }),
      }),
    );

    const { result } = renderHook(() => useFetchProductDetails(1));

    expect(result.current.loading).toBe(true);
    expect(result.current.product).toBeUndefined();
    expect(result.current.error).toBeUndefined();

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.product).toEqual({ id: 1, name: 'Product 1' });
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

    const { result } = renderHook(() => useFetchProductDetails(1));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.product).toEqual(undefined);
    expect(result.current.error).toEqual(new Error('Failed to fetch product'));
  });
});
