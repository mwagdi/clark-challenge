import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  ProductListing: undefined;
  ProductDetails: { id: number };
};

export type ScreenProps<ScreenName extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, ScreenName>;

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
};
