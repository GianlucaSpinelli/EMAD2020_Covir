import React, { useState/*, useContext*/ } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Swiper from 'react-native-swiper';
import { BorderlessButton } from 'react-native-gesture-handler';

//import { AuthContext } from '../navigation/AuthProvider';

export default function Login({navigation}) {
    //const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
      <View style={styles.container}>
      <View style={styles.container1}>
        <Swiper style={styles.swiper} showsButtons={false} loop={true} autoplay={true} >
          <View testID="Hello" style={styles.slide1}>
            <Text style={styles.text}>Cerchi compagnia? Prenota un incontro virtuale</Text>
          </View>
          <View testID="Beautiful" style={styles.slide2}>
            <Text style={styles.text}>Vuoi offrire il tuo tempo libero per aiutare a combattere la solitudine del COVID?</Text>
          </View>
          <View testID="Simple" style={styles.slide3}>
            <Text style={styles.text}>Comunicazione Virtuale, sconfiggiamo la solitudine, insieme si può! </Text>
          </View>
        </Swiper>
        </View>
        <View style= {styles.container2}>
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
          onPress={() => navigation.navigate('HomeTab')}  //{() => login(email, password)}
        />
        <Text style={styles.register}
        onPress={() => navigation.navigate('')}>Nuovo utente? Registrati qui </Text>
        </View>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    register:{
      fontSize: 17,
      marginBottom: 10,
      marginTop: 15,
      textAlign: 'center',
      color: '#9ca2ad',
      textDecorationLine: 'underline'
      
    },
    titleText: {
      fontSize: 24,
      marginBottom: 10,
      marginTop: 25,
      textAlign: 'center'
    },
    loginButtonLabel: {
      fontSize: 22,
      marginLeft: '41%'
    },
    navButtonText: {
      fontSize: 16
    },
    container1: {
      flex: 1
    },
    container2: {
      flex: 2.5
    },
    swiper: {
      alignItems: 'flex-start'
    },
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
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: '10%',
      marginRight:'10%'
    }
  });