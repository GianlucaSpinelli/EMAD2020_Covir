import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {auth} from '../common/firebase';
import AuthStack from './AuthStack';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';
import { Text, View, LogBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeTabNavigator from './HomeTabNavigator';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();
const aut=false;
LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

export default function Routes() {
  LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

  const { user, setUser } = useContext(AuthContext);  //COME QUA
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);
  console.log(user);
  

  // Handle user state changes
  function onAuthStateChanged(user) {
    LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }
  
  LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

  return (
    <NavigationContainer>
      {user  ? <HomeTabNavigator />  : <AuthStack/>}      
    </NavigationContainer>
  );                          // sopra {user ? <HomeStack /> : <AuthStack />} aggiungere <HomeStack>
}