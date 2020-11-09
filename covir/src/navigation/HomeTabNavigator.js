import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';

import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
    return (          
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                } else if (route.name === 'Registrati') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
              <Tab.Screen name="Home" component={HomeScreen} />
          </Tab.Navigator>         
        
      );                          // sopra {user ? <HomeStack /> : <AuthStack />} aggiungere <HomeStack>
    }