import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import { ProductItem } from '@/components';
import { useFetchProducts } from '@/hooks';
import { ScreenProps } from '@/types';

const ProductListingScreen = ({
  navigation,
}: ScreenProps<'ProductListing'>): JSX.Element => {
  const { products, loading, error } = useFetchProducts();

  const handlePress = (id: number) => () => {
    navigation.navigate('ProductDetails', { id });
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator />}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem {...item} onPress={handlePress(item.id)} />
        )}
        keyExtractor={item => `${item.id}`}
        refreshControl={<RefreshControl refreshing={loading} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ProductListingScreen;
