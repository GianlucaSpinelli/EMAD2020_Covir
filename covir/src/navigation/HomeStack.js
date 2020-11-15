import React from 'react';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AuthStack from './AuthStack';
import HomeTabNavigator from './HomeTabNavigator';
import { View, Text, Image } from 'react-native';
import PrenotaStack from '../navigation/PrenotaStack';
import { Button} from 'react-native-paper';


const Stack = createStackNavigator();


function Header() {
  return(
    <Image style={{ width: 50, height: 50}} 
    source= { require('../images/logo.png')}/>
  )
}

export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName='Auth' screenOptions={({ route, navigation }) => ({
      headerLeft: () => {
        let backButton = null;

        if (route.state) {
          if (route.state.routeNames[route.state.index] == "Home") {
            backButton = <Button icon="logout" color="#1979a9"  onPress={() => { logout() }}></Button>
          } else {
            backButton = <Button icon="keyboard-backspace" color="#1979a9"  onPress={() => { navigation.goBack() }}></Button>
          }
        } 
        return backButton;
      }
    })}>

    <Stack.Screen name='Auth' component={AuthStack} />
    <Stack.Screen name='HomeTab' component={HomeTabNavigator} />

    </Stack.Navigator>
  );
}