import React, { useState/*, useContext*/ } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Swiper from 'react-native-swiper'
//import { AuthContext } from '../navigation/AuthProvider';

export default function Login({navigation}) {
    //const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
      <View style={styles.container}>
        <Swiper style={styles.swiper} showsButtons={false} loop={true} autoplay={true} >
          <View testID="Hello" style={styles.slide1}>
            <Text style={styles.text}>Cerchi compagnia? Prenota un incontro virtuale</Text>
          </View>
          <View testID="Beautiful" style={styles.slide2}>
            <Text style={styles.text}>Vuoi offrire il tuo tempo libero per aiutare a combattere la solitudine del COVID?</Text>
          </View>
          <View testID="Simple" style={styles.slide3}>
            <Text style={styles.text}>CO municazione VIR tuale, sconfiggiamo la solitudine insieme! </Text>
          </View>
        </Swiper>
        <Title style={styles.titleText}>Scopri Covir</Title>
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
      flex: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 24,
      marginBottom: 10,
      marginTop: 10
    },
    loginButtonLabel: {
      fontSize: 22
    },
    navButtonText: {
      fontSize: 16
    },
    swiper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  });