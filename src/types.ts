import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  ProductListing: undefined;
  ProductDetails: undefined;
};

export type ScreenProps<ScreenName extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, ScreenName>;
