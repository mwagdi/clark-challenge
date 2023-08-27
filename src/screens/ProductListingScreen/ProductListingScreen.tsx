import { Pressable, Text, View } from 'react-native';

import { ScreenProps } from '@/types';

const ProductListingScreen = ({
  navigation,
}: ScreenProps<'ProductListing'>) => {
  const handlePress = () => {
    navigation.navigate('ProductDetails');
  };

  return (
    <View>
      <Text>Welcome to the product listing screen</Text>
      <Pressable onPress={handlePress}>
        <Text>Go to PD Screen!</Text>
      </Pressable>
    </View>
  );
};

export default ProductListingScreen;
