import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import OrganizationScreen from './src/screens/OrganizationScreen';
import RegisterClientScreen from './src/screens/RegisterClientScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  Organization: undefined;
  RegisterClient: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterClient" component={RegisterClientScreen} options={{
          title: 'Voltar para os cadastros',
          headerStyle: { backgroundColor: '#00492A' },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Organization" component={OrganizationScreen} options={{
          title: 'Organização',
          headerStyle: { backgroundColor: '#00492A' },
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
