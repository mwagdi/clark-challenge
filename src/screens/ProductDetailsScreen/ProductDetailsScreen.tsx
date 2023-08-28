import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { formatCurrency } from 'react-native-format-currency';

import { useFetchProductDetails } from '@/hooks';
import { ScreenProps } from '@/types';

const ProductDetailsScreen = ({ route }: ScreenProps<'ProductDetails'>) => {
  const { id } = route.params;
  const { product, loading, error } = useFetchProductDetails(id);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator testID="loading-indicator" />}
      {error && <Text>An error has occurred</Text>}
      {!!product && (
        <View testID="product-image" style={styles.wrapper}>
          <Text>{product.name}</Text>
          <Image style={styles.image} source={{ uri: product.image }} />
          <Text>
            Price: {formatCurrency({ amount: product.price, code: 'EUR' })[0]}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 4,
    overflow: 'hidden',
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

export default ProductDetailsScreen;
