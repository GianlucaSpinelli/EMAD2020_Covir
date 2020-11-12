import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/Registrazione';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ScegliSlot from '../screens/ScegliSlotTempo';
import CambioPassword from '../screens/cambioPassword';
import ConfermaPrenot from '../screens/ConfermaPrenotazione';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignUpScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='ScegliTempo' component={ScegliSlot}
        />
        <Stack.Screen name='cambioPassword' component={CambioPassword} />
        <Stack.Screen name='ConfermaAppuntamento' component={ConfermaPrenot}/>
      </Stack.Navigator>
    );
  }