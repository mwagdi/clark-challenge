import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { formatCurrency } from 'react-native-format-currency';

import { Product } from '@/types';

type Props = Omit<Product, 'id'> & { onPress: () => void };
export const ProductItem = ({ name, image, price, onPress }: Props) => {
  const [formattedPrice] = formatCurrency({ amount: price, code: 'EUR' });

  return (
    <Pressable
      testID="product-container"
      style={styles.container}
      onPress={onPress}>
      <Image
        testID="product-image"
        style={styles.image}
        source={{ uri: image }}
      />
      <View style={styles.textContainer}>
        <Text>{name}</Text>
        <Text>{formattedPrice}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    padding: 20,
  },
});
