import React, { useState,useContext/*, useContext*/ } from 'react';
import { View, StyleSheet, Text, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Swiper from 'react-native-swiper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthContext, AuthProvider } from '../navigation/AuthProvider';
import { db } from '../common/crud';


//import { AuthContext } from '../navigation/AuthProvider';

export default function CambioPassword({navigation}) {
    //const { login } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordvecchia, setPasswordvecchia] = useState('');
    const {cambiopassword} = useContext(AuthContext);
    const {user,setUser} = useContext(AuthContext);


    return (
      <TouchableWithoutFeedback onPress= {() => {Keyboard.dismiss();}}>
      <View style={styles.container}>
        <View style= {styles.container2}>
        <Title style={styles.titleText}>Cambio Password</Title>
        
        <FormInput
          labelName='Vecchia Password'
          value={passwordvecchia}
          secureTextEntry={true}
          onChangeText={userPassword3 => setPasswordvecchia(userPassword3)}
          
        />

        <FormInput
          labelName='Nuova Password'
          value={password}
          secureTextEntry={true}
          onChangeText={userPassword => setPassword(userPassword)}
          
        />
        <FormInput
          labelName='Conferma Password'
          value={password2}
          secureTextEntry={true}
          onChangeText={userPassword2 => setPassword2(userPassword2)}
        />
        <FormButton
          title='Conferma'
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          onPress={ () => {conferma();  navigation.navigate('HomeTab');}}
        />
        </View>
      </View>
      </TouchableWithoutFeedback>
    );

    async function conferma(nuovapassword){
          
          if(password==password2){
                  var utente = await db.getUtenteByMail(user.email);
                  var ps = utente.password;
                  if(ps==passwordvecchia){
                        cambiopassword(user.email,nuovapassword);
                        alert("operazione riuscita con successo");
                  }
                  else{
                         alert("La vecchia password che ci hai fornito non coincide con la tua reale password");
                  }
          }
          else{
            alert("La nuova password e la sua conferma non coincidono");
          }
    }

  }
  
 
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:120
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
      fontSize: 15,
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