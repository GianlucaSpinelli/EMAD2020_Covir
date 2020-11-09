import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AuthStack from './AuthStack';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='Auth'>
      <Stack.Screen name='Auth' component={AuthStack} />
      <Stack.Screen name='HomeTab' component={HomeTabNavigator} />
    </Stack.Navigator>
  );
}