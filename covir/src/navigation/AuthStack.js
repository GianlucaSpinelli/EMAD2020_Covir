import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/Registrazione';
import LoginScreen from '../screens/LoginScreen';
import { View, Text, Image, LogBox } from 'react-native';
import HomeTabNavigator from './HomeTabNavigator';


const Stack = createStackNavigator();
LogBox.ignoreLogs(['Warning: ...', 'Require cycle:']);
function Header() {
  return(
    <Image style={{ width: 50, height: 50}} 
    source= { require('../images/logo.png')}/>
  )
}

export default function AuthStack() {
  LogBox.ignoreLogs(['Warning: ...', 'Require cycle:']);
    return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#1979a9',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name='Signup' component={SignUpScreen}
        options={{
          title: 'Registrati',
          headerStyle: {
            backgroundColor: '#1979a9',
          },
          headerTintColor: '#fff',
        }} />
      


      </Stack.Navigator>
    );
}