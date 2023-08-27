import { renderHook } from '@testing-library/react-native';

import { useFetchProducts } from './useFetchProducts';

describe('useFetchProducts', () => {
  it('should return empty products list', () => {
    const { result } = renderHook(() => useFetchProducts());

    expect(result.current.products).toEqual([]);
  });
});
