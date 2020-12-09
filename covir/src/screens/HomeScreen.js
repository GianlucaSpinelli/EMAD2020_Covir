import React, { useContext } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Title } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import { Divider } from 'react-native-elements';


var utente=2;

const renderContentUtente = (navigation) => {
  return (
    <View style={styles.container}>
    <View style={styles.container}>
    <Image
    style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 30,marginTop: 70}}
    source={require('../images/anziano1.jpg')}
    />
    <Title style={styles.titolo}>Ciao {}</Title> 
    <Title style={styles.frase}>Prenota il tuo incontro</Title>
    </View>
    <Divider style={{ backgroundColor: '#6b7070',height: 2, width: 310, marginTop: 80}} />
    <View style={styles.container}>
    <Title style={styles.frase2}>Sono disponibili:</Title> 
    <Title style={styles.titolo}>34 slot</Title>
    <FormButton 
      backgroundColor= '#2196F3'
      modeValue='contained'
      title='Prenota'
      onPress={() => navigation.navigate('Prenota')} // logout()
    />
    </View>
  </View>
  );
};

const renderContentOperatore = (navigation) => {
  return (
    <View style={styles.container}>
    <View style={styles.container}>
    <Image
    style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 30,marginTop: 70}}
    source={require('../images/anziano2.jpg')}
    />
    <Title style={styles.titolo}>Ciao Vincenzo!</Title> 
    <Title style={styles.frase}>Dona il tuo tempo per aiutare</Title>
    <Title style={styles.frasesotto}>chi cerca compagnia</Title>
    </View>
    <Divider style={{ backgroundColor: '#6b7070',height: 2, width: 310, marginTop: 80}} />
    <View style={styles.container}>
    <Title style={styles.frase2}>Hai messo a disposzione:</Title> 
    <Title style={styles.titolo}>4 slot</Title>
    <FormButton 
      backgroundColor= '#2196F3'
      modeValue='contained'
      title='DonaTempo'
      onPress={() => navigation.navigate('Dona tempo')} // logout()
    />
    </View>
  </View>
  );
};


export default function HomeScreen({navigation}) {
    const { user, logout } = useContext(AuthContext);
    return (
     <View style={styles.container}>
      {utente==1 ? renderContentUtente(navigation) : renderContentOperatore(navigation) }
      </View> 
    ); // {{user.uid}}
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titolo: {
      fontSize: 30,
      color: '#1979a9'
    },
    frase: {
       fontSize: 22,
       color: '#1979a9'
    },
    frase2: {
      fontSize: 22,
      color: '#1979a9',
      marginTop: -50
   },
   frasesotto:{
    fontSize: 22,
    color: '#1979a9',
    marginTop: -10
   }
  });