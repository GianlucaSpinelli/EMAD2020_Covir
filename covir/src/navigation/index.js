import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...', 'Require cycle:']);
/**
 * Wrap all providers here
 */

export default function Providers() {
  LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

  return (
    <PaperProvider>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      
    </PaperProvider>
  );
}       //aggiungere <AuthProvider> per l'autenticazione