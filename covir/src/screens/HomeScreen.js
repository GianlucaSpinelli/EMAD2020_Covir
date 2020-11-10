import React /*, { useContext }*/ from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
//import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';

export default function HomeScreen({navigation}) {
    //const { user, logout } = useContext(AuthContext);
  
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <Title style={styles.titolo}>Ciao Vincenzo</Title> 
        <Title style={styles.frase}>Prenota il tuo incontro virtuale con un volontario</Title>
        </View>
        <View style={styles.container}>
        <Title style={styles.frase2}>Sono disponibili:</Title> 
        <Title style={styles.titolo}>34 slot</Title>
        <FormButton 
          modeValue='contained'
          title='Prenota'
          onPress={() => navigation.navigate('Login')} // logout()
        />
        </View>
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
    },
    frase: {
       fontSize: 17
    },
    frase2: {
      fontSize: 22
   },
  });