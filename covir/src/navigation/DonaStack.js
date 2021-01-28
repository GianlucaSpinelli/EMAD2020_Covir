import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/Registrazione';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ScegliSlot from '../screens/ScegliSlotTempo';
import CambioPassword from '../screens/cambioPassword';
import ConfermaPrenot from '../screens/ConfermaPrenotazione';
import ScegliVolontario2 from '../screens/ScegliVolontario2'
import Appuntamenti from '../screens/IMieiAppuntamenti';
import MieiSlot from '../screens/MieiSlot';
import AggiuntaSlot from '../screens/AggiuntaSlot';
import { View, Text, Image,LogBox } from 'react-native';


const Stack = createStackNavigator();
LogBox.ignoreLogs(['Warning: ...', 'Require cycle:']);
function Header() {
  return (
    <Image style={{ width: 50, height: 50 }}
      source={require('../images/logo.png')} />
  )
}

export default function DonaStack() {
  LogBox.ignoreLogs(['Warning: ...', 'Require cycle:']);
  return (
    <Stack.Navigator initialRouteName='AggiuntaSlot'>
      <Stack.Screen name='AggiuntaSlot' component={AggiuntaSlot} options={{
        title: 'Nuovo slot',
        headerStyle: {
          backgroundColor: '#1979a9',
        },
        headerTintColor: '#fff',
      }} />
      <Stack.Screen name='MieiSlot' component={MieiSlot}
        options={{
          title: 'Miei slot',
          headerStyle: {
            backgroundColor: '#1979a9',
          },
          headerTintColor: '#fff',
        }} />



    </Stack.Navigator>
  );
}