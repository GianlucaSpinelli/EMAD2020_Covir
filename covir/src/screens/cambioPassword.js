import React, { useState,useContext/*, useContext*/ } from 'react';
import { View, StyleSheet, Text, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Swiper from 'react-native-swiper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AuthContext, AuthProvider } from '../navigation/AuthProvider';
import { db } from '../common/crud';
import { auth,us,authProvider } from '../common/firebase';
import { Alert } from 'react-native';


//import { AuthContext } from '../navigation/AuthProvider';

export default function CambioPassword({navigation}) {
    //const { login } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordvecchia, setCurrentPassword] = useState('');

    reauthenticate = (currpass) => {
      var user = auth.currentUser;
      var cred = authProvider.EmailAuthProvider.credential(user.email,currpass);
      return user.reauthenticateWithCredential(cred);
    }

     function conferma(){

      reauthenticate(passwordvecchia).then( () => {
        
        var user = auth.currentUser;
        console.log(user.password);
        user.updatePassword(password2).then(async () => {
          alert('Password cambiata');
          await db.updatePass(user.email,password2);
          navigation.navigate('Home');
        }).catch( (error) => {
          alert(error.message);
        }); 
      }).catch((error) =>{
        alert(error.message);
      });

      /* reauthenticate(passwordvecchia).then( async () => {
        if(password==password2){
                    
                      var utente = await db.getUtenteByMail(user.email);
                      var ps = utente.password;
                      if(ps==passwordvecchia){
                        
                            user.updatePassword(password2).then(async () => {
                            alert('Operazione riuscita con successo');
                            await db.updatePass(user.email,password2);
                            reauthenticate();
                            navigation.navigate('HomeTab');
                          }).catch( (error) => {
                            if (error == "Password should be at least 6 characters\n") alert("La password deve essere lunga almeno 6 caratteri");
                            else alert(error.message);
                          });
                      } else{
                            alert("La vecchia password che ci hai fornito non coincide con la tua reale password");
                      }
              }
              else{
                alert("La nuova password e la sua conferma non coincidono");
              }
      }).catch((error) => {
        alert(error.message);
      });
 */


          
    }


    return (
      <TouchableWithoutFeedback onPress= {() => {Keyboard.dismiss();}}>
      <View style={styles.container}>
        <View style= {styles.container2}>
        <Title style={styles.titleText}>Cambio Password</Title>
        
        <FormInput
          labelName='Vecchia Password'
          value={passwordvecchia}
          secureTextEntry={true}
          onChangeText={userPassword3 => setCurrentPassword(userPassword3)}
          
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
          onPress={ () => {if (passwordvecchia != us.password) alert ('La vecchia password è sbagliata'); else if (password.length < 6) alert ('La password deve essere lunga almeno 6 caratteri');
                            else if (password != password2) alert ('La nuova password e la sua conferma non coincidono'); else conferma();}}
        />
        </View>
      </View>
      </TouchableWithoutFeedback>
    );

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