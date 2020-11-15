import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import PrenotaStack from '../navigation/PrenotaStack';
import DonaStack from '../navigation/DonaStack';
import ProfiloStack from '../navigation/ProfiloStack';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import IlmioProfilo from '../screens/IlMioProfilo';
import DonaTempo from '../screens/DonaTempo';
import { HeaderBackground } from '@react-navigation/stack';
import ScegliVol from '../screens/ScegliVolontario2';


const Tab = createBottomTabNavigator();
const utente=1;

const renderContentUtente = () => {
  return (
    <Tab.Screen name="Prenota" component={PrenotaStack} />  
  );
};

const renderContentOperatore = () => {
  return (
    <Tab.Screen name="Dona tempo" component={DonaStack} />    
  );
};

export default function HomeTabNavigator() {
    return (          
          <Tab.Navigator 
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused ? 'ios-home' : 'ios-home';
                } else if (route.name === 'Prenota') {
                  iconName = focused ? 'ios-list-box' : 'ios-list-box';
                }else if (route.name === 'Il mio Profilo') {
                  iconName = focused ? 'ios-list' : 'ios-list';
                }else if (route.name === 'Dona tempo') {
                  iconName = focused ? 'ios-time' : 'ios-time';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: '#1979a9',
              activeBackgroundColor: '#1979a9'
            }}>
              <Tab.Screen name="Home" component={HomeScreen} />
              {utente==1 ? renderContentUtente() : renderContentOperatore() } 
              <Tab.Screen name="Il mio Profilo" component={ProfiloStack} />
          </Tab.Navigator>         
        
      );                          // sopra {user ? <HomeStack /> : <AuthStack />} aggiungere <HomeStack>
    }
