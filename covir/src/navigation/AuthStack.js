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
        <Stack.Screen name='Prenota' component={ScegliVolontario2}/>
        <Stack.Screen name='IMieiAppuntamenti' component={Appuntamenti}/>
        <Stack.Screen name='MieiSlot' component={MieiSlot}/>
        <Stack.Screen name='AggiuntaSlot' component={AggiuntaSlot}/>
        

      </Stack.Navigator>
    );
  }