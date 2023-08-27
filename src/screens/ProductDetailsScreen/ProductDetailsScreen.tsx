import { Text, View } from 'react-native';

import { ScreenProps } from '@/types';

const ProductDetailsScreen = ({
  route,
  navigation,
}: ScreenProps<'ProductDetails'>) => {
  const { id } = route.params;

  return (
    <View>
      <Text>Product ID: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
