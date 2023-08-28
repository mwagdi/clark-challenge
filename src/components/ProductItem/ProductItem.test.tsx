import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';

import { ProductItem } from './ProductItem';

const mockProduct = {
  name: 'Test Product',
  image: 'https://example.com/image.jpg',
  price: 100,
};

describe('ProductItem', () => {
  it('renders correctly', () => {
    const onPressMock = jest.fn();
    const { getByText, getByTestId } = render(
      <ProductItem {...mockProduct} onPress={onPressMock} />,
    );

    const nameText = getByText('Test Product');
    const priceText = getByText('€100');

    expect(nameText).toBeTruthy();
    expect(priceText).toBeTruthy();

    const image = getByTestId('product-image');
    expect(image.props.source.uri).toBe('https://example.com/image.jpg');
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ProductItem {...mockProduct} onPress={onPressMock} />,
    );

    const container = getByTestId('product-container');
    fireEvent.press(container);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
