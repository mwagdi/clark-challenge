/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, waitFor } from '@testing-library/react-native';
import React from 'react';

import ProductListingScreen from './ProductListingScreen';

import { useFetchProducts } from '@/hooks';

jest.mock('@/hooks');

const mockUseFetchProducts = useFetchProducts as jest.MockedFunction<
  typeof useFetchProducts
>;

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

describe('ProductListingScreen', () => {
  const mockProducts = [
    { id: 1, name: 'Product 1', price: 100, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 150, image: 'image2.jpg' },
  ];

  beforeEach(() => {
    mockUseFetchProducts.mockReturnValue({
      products: mockProducts,
      loading: false,
      error: undefined,
    });
  });

  it('renders loading state', () => {
    mockUseFetchProducts.mockReturnValue({
      products: [],
      loading: true,
      error: undefined,
    });

    const { getByTestId } = render(
      // @ts-ignore
      <ProductListingScreen navigation={mockNavigation} />,
    );
    const loadingIndicator = getByTestId('loading-indicator');

    expect(loadingIndicator).toBeTruthy();
  });

  it('renders error state', () => {
    mockUseFetchProducts.mockReturnValue({
      products: [],
      loading: false,
      error: new Error('An error has occurred'),
    });

    const { getByText } = render(
      // @ts-ignore
      <ProductListingScreen navigation={mockNavigation} />,
    );
    const errorText = getByText('An error has occurred');

    expect(errorText).toBeTruthy();
  });

  it('renders products', async () => {
    const { getByText, getByTestId } = render(
      // @ts-ignore
      <ProductListingScreen navigation={mockNavigation} />,
    );

    await waitFor(() => {
      expect(getByTestId('product-list')).toBeTruthy();
      expect(getByText('Product 1')).toBeTruthy();
      expect(getByText('Product 2')).toBeTruthy();
    });
  });
});
