import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { ProductDetailsScreen, ProductListingScreen } from '@/screens';
import { StackParamList } from '@/types';

const Stack = createNativeStackNavigator<StackParamList>();

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ProductListing"
            component={ProductListingScreen}
            options={{ title: 'Our Products' }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={({ route }) => ({
              title: `ID: ${route.params.id}`,
              headerBackTitle: 'Back',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

registerRootComponent(App);
