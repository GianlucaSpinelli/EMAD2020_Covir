import React /*, { useContext }*/ from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Title } from 'react-native-paper';
//import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import { Divider } from 'react-native-elements';

var utente=1;

const renderContentUtente = () => {
  return (
    <View style={styles.container}>
        <View style={styles.welcome}>
            <View style={styles.welcome2}>
                <Image
                style={{ width: 150, height: 150, borderRadius: 100,marginTop: 15,marginLeft: 10}}
                source={require('../images/anziano2.jpg')}
                />
            </View>
            <View style={styles.welcome2}>
                <Title style={styles.frase}>Gaetano Ansanelli</Title> 
                <Title style={styles.frase2}>g.ansanelli@gmail.com</Title> 
                <Title style={styles.frase2}>Viale Sandro Pertini, 21</Title> 
            </View>
        </View>
           
        <View style={styles.welcome3}>
        <Title style={styles.frasesotto2}>Ciao, mi chiamo Nicola Ansanelli e ho 64 anni, vivo a Baronissi, un piccolo paesino in provincia di Salerno. In questo periodo per via della pandemia mi sento spesso molto solo, mi piacerebbe che qualuno ogni tanto potesse tenermi compagnia.</Title> 
            <FormButton 
            backgroundColor= '#2196F3'
            modeValue='contained'
            title='Cambia Password'
            onPress={() => navigation.navigate('Prenota')} // logout()
            />
            <FormButton 
             backgroundColor= '#2196F3'
            modeValue='contained'
            title='I miei appuntamenti'
            onPress={() => navigation.navigate('Prenota')} // logout()
            />
        </View>
    </View>
  );
};

const renderContentOperatore = () => {
  return (
    <View style={styles.container}>
        <View style={styles.welcome}></View>
        <View style={styles.welcome}></View>
    </View>
  );
};


export default function IlMioProfilo({navigation}) {
    //const { user, logout } = useContext(AuthContext);
    return (
     <View style={styles.container}>
      {utente==1 ? renderContentUtente() : renderContentOperatore() }
      </View> 
    ); // {{user.uid}}
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      flex: 1,
      margin: 20,
      margin: 10,
      textAlign: 'center',
      flexDirection: 'row',
    },
      welcome2: {
        flex: 1,
        marginTop: 50
      },
      titolo: {
        fontSize: 30,
        color: '#4d5354'
      },
      frase: {
         fontSize: 22,
         color: '#4d5354',
         marginTop: 20
      },
      frasesotto2:{
        fontSize: 18,
        color: '#4d5354',
        marginLeft: 10
      },
      frase2: {
        fontSize: 17,
        color: '#4d5354',
        marginTop: 20
     },
     frasesotto:{
      fontSize: 22,
      color: '#1979a9',
      marginTop: -10
     },
     welcome3:{
        backgroundColor: '#d1f8ff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -160
         }
  });