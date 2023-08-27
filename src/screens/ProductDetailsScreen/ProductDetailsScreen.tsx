import { Text, View } from 'react-native';

import { TextExample } from '@/components';
import { ScreenProps } from '@/types';

const ProductDetailsScreen = ({
  route,
  navigation,
}: ScreenProps<'ProductDetails'>) => {
  const { id } = route.params;

  return (
    <View>
      <Text>Product ID: {id}</Text>
      <TextExample />
    </View>
  );
};

export default ProductDetailsScreen;
