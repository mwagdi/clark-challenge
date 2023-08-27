import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { useFetchProducts } from '@/hooks';
import { Product, ScreenProps } from '@/types';

type Props = Omit<Product, 'id'> & { onPress: () => void };

const Item = ({ name, image, price, onPress }: Props) => (
  <View>
    <Pressable onPress={onPress}>
      <Text>{name}</Text>
    </Pressable>
  </View>
);

const ProductListingScreen = ({
  navigation,
}: ScreenProps<'ProductListing'>): JSX.Element => {
  const { products, loading, error } = useFetchProducts();

  const handlePress = (id: number) => () => {
    navigation.navigate('ProductDetails', { id });
  };

  return (
    <SafeAreaView>
      {loading && <ActivityIndicator />}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Item {...item} onPress={handlePress(item.id)} />
        )}
        keyExtractor={item => `${item.id}`}
        refreshControl={<RefreshControl refreshing={loading} />}
      />
    </SafeAreaView>
  );
};

export default ProductListingScreen;
