import React from 'react';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AuthStack from './AuthStack';
import HomeTabNavigator from './HomeTabNavigator';
import { View, Text, Image } from 'react-native';
import PrenotaStack from '../navigation/PrenotaStack';

const Stack = createStackNavigator();


function Header() {
  return(
    <Image style={{ width: 50, height: 50}} 
    source= { require('../images/logo.png')}/>
  )
}

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName='HomeTab'>
    

    </Stack.Navigator>
  );
}