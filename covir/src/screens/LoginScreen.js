import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
//import { AuthContext } from '../navigation/AuthProvider';

export default function Login({navigation}) {
    //const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
      <View style={styles.container}>
        <Title style={styles.titleText}>Benvenuto su Covir</Title>
        <FormInput
          labelName='Email'
          value={email}
          autoCapitalize='none'
          onChangeText={userEmail => setEmail(userEmail)}
        />
        <FormInput
          labelName='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={userPassword => setPassword(userPassword)}
        />
        <FormButton
          title='Accedi'
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          onPress={() => navigation.navigate('Home')}  //{() => login(email, password)}
        />
        <FormButton
          title='Nuovo utente? Registrati'
          modeValue='text'
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleText: {
      fontSize: 24,
      marginBottom: 10
    },
    loginButtonLabel: {
      fontSize: 22
    },
    navButtonText: {
      fontSize: 16
    }
  });