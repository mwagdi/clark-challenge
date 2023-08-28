/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render, waitFor } from '@testing-library/react-native';
import React from 'react';

import ProductDetailsScreen from './ProductDetailsScreen';

import { useFetchProductDetails } from '@/hooks';

jest.mock('@/hooks');

const mockUseFetchProductDetails =
  useFetchProductDetails as jest.MockedFunction<typeof useFetchProductDetails>;

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

describe('ProductDetailsScreen', () => {
  const mockProduct = {
    id: 1,
    name: 'Product Name',
    price: 100,
    image: 'image.jpg',
  };

  beforeEach(() => {
    mockUseFetchProductDetails.mockReturnValue({
      product: mockProduct,
      loading: false,
      error: undefined,
    });
  });

  it('renders loading state', () => {
    mockUseFetchProductDetails.mockReturnValue({
      product: undefined,
      loading: true,
      error: undefined,
    });

    const { getByTestId } = render(
      // @ts-ignore
      <ProductDetailsScreen
        navigation={mockNavigation}
        route={{ params: { id: 1 } }}
      />,
    );
    const loadingIndicator = getByTestId('loading-indicator');

    expect(loadingIndicator).toBeTruthy();
  });

  it('renders error state', () => {
    mockUseFetchProductDetails.mockReturnValue({
      product: undefined,
      loading: false,
      error: new Error('An error has occurred'),
    });

    const { getByText } = render(
      // @ts-ignore
      <ProductDetailsScreen
        navigation={mockNavigation}
        route={{ params: { id: 1 } }}
      />,
    );
    const errorText = getByText('An error has occurred');

    expect(errorText).toBeTruthy();
  });

  it('renders products', async () => {
    const { getByText, getByTestId } = render(
      // @ts-ignore
      <ProductDetailsScreen
        navigation={mockNavigation}
        route={{ params: { id: 1 } }}
      />,
    );

    await waitFor(() => {
      expect(getByTestId('product-image')).toBeTruthy();
      expect(getByText('Product Name')).toBeTruthy();
      expect(getByText('Price: €100')).toBeTruthy();
    });
  });
});
