import React /*, { useContext, useState, useEffect }*/ from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
/*import HomeStack from './HomeStack';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';*/
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeStack from './HomeStack';
import HomeTabNavigator from './HomeTabNavigator';

const Tab = createBottomTabNavigator();
const aut=false;

export default function Routes() {
  /*const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Loading />;
  }*/
  

  return (
    <NavigationContainer>
      {aut ? <HomeTabNavigator /> : <HomeStack />}      
    </NavigationContainer>
  );                          // sopra {user ? <HomeStack /> : <AuthStack />} aggiungere <HomeStack>
}