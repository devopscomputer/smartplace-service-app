import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

// Telas
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import ProfileScreen from './screens/ProfileScreen';
import CheckoutScreen from './screens/CheckoutScreen'; // ✅ Agora usando uma única tela de checkout
import PaymentConfirmation from './screens/PaymentConfirmation';
import LoadingScreen from './screens/LoadingScreen';
import UserProfileScreen from './screens/components/UserProfileScreen';


const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loadingTimeoutRef = useRef(null);

  useEffect(() => {
    loadingTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeoutRef.current);
  }, []);

  const handleNavigationChange = () => {
    setIsLoading(true);

    clearTimeout(loadingTimeoutRef.current);
    loadingTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer onStateChange={handleNavigationChange}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Second" 
            component={SecondScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="UserProfile" 
            component={UserProfileScreen} 
            options={{ headerShown: false }}
          />

          {/* ✅ NOVA TELA DE CHECKOUT UNIFICADA */}
          <Stack.Screen 
            name="Checkout" 
            component={CheckoutScreen} 
            options={{ headerShown: false, }}
          />

          <Stack.Screen 
            name="PaymentConfirmation" 
            component={PaymentConfirmation} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {isLoading && <LoadingScreen />}
    </View>
  );
}
