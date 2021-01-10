import React , { useContext,useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Title } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import { Divider } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BaseRouter } from '@react-navigation/native';
import FormInput from '../components/FormInput';

const renderContentOperatore = (navigation,logout) => {
  
  const [descrizione, setDescrizione] = useState(" ");
  const { user, setUser } = useContext(AuthContext); 
  const { tipo, setTipo } = useContext(AuthContext);
  const { nome, setNome } = useContext(AuthContext);
  const { cognome, setCognome } = useContext(AuthContext);
  const { email, setEmail } = useContext(AuthContext);
  const { dataN, setDataN } = useContext(AuthContext);
  const { associazione, setAssociazione } = useContext(AuthContext);
  const {cellulare,setCellulare} = useContext(AuthContext);
  console.log(cognome+" RENDER CONTENT OPERATORE");
  return (
    <View style={styles.container}>
        <View style={styles.welcome}>
            <View style={styles.welcome2}>
                <Image
                style={{ width: 150, height: 150, borderRadius: 100,marginTop: 15,marginLeft: 0}}
                source={require('../images/user.png')}
                />
            </View>
            <View style={styles.welcome2}>
                <Title style={styles.frase}>{nome+" "+cognome}</Title> 
                <Title style={styles.frase2}>{user.email}</Title> 
                <Title style={styles.frase2}>{cellulare}</Title> 
            </View>
        </View>
        <View style={styles.welcome4}>
        <View style={styles.welcome8}>
          <FormInput
          style={styles.descri}
          labelName='Dicci qualcosa su di te...'
          value={descrizione}
          autoCapitalize='none'
          onChangeText={userDescrizione => setDescrizione(userDescrizione)}
          />
          <Button
              icon={
                <Icon
                  name="arrow-right"
                  size={10}
                  color="white"
                />
              }
              title="  Conferma descrizione              "
              buttonStyle={styles.bottone1}
              onPress={() => navigation.navigate('CambioPass')}
            />
        </View>
          <View style={styles.welcome5}>
           <Button
              icon={
                <Icon
                  name="arrow-right"
                  size={10}
                  color="white"
                />
              }
              title="  Cambio Password              "
              buttonStyle={styles.bottone}
              onPress={() => navigation.navigate('CambioPass')}
            />
            </View>
            <View style={styles.welcome6}>
            <Button
              icon={
                <Icon
                  name="arrow-right"
                  size={10}
                  color="white"
                />
              }
              buttonStyle={styles.bottone}
              title="  Slot messi a disposizione "
              onPress={() => navigation.navigate('MieiSlot')}
            />
            </View>
            <View style={styles.welcome7}>
            <Button
              icon={
                <Icon
                  name="arrow-right"
                  size={10}
                  color="white"
                />
              }
              buttonStyle={styles.bottone}
              title="  Log-out                                "
              onPress={() => logout()}
            />
            </View>
        </View>
    </View>
  );
};

const renderContentUtente = (navigation,logout) => {
  const [descrizione, setDescrizione] = useState(" ");
  const { user, setUser } = useContext(AuthContext); 
  const { tipo, setTipo } = useContext(AuthContext);
  const { nome, setNome } = useContext(AuthContext);
  const { cognome, setCognome } = useContext(AuthContext);
  const { email, setEmail } = useContext(AuthContext);
  const { dataN, setDataN } = useContext(AuthContext);
  const { associazione, setAssociazione } = useContext(AuthContext);
  const {cellulare,setCellulare} = useContext(AuthContext);
  console.log(cognome+" RENDER CONTENT UTENTE");

  function aggiornaDescrizione(desc){
    
  }

  return (
    <View style={styles.container}>
        <View style={styles.welcome}>
            <View style={styles.welcome2}>
                <Image
                style={{ width: 150, height: 150, borderRadius: 100,marginTop: 15,marginLeft: 0}}
                source={require('../images/user.png')}
                />
            </View>
            <View style={styles.welcome2}>
                <Title style={styles.frase}>{nome+" "+cognome}</Title> 
                <Title style={styles.frase2}>{user.email}</Title> 
                <Title style={styles.frase2}>{cellulare}</Title> 
            </View>
        </View>
        <View style={styles.welcome4}>
        <View style={styles.welcome8}>
          <FormInput
          style={styles.descri}
          labelName='Dicci qualcosa su di te...'
          value={descrizione}
          autoCapitalize='none'
          onChangeText={userDescrizione => setDescrizione(userDescrizione)}
          />
          <Button
              icon={
                <Icon
                  name="arrow-right"
                  size={10}
                  color="white"
                />
              }
              title="  Conferma descrizione              "
              buttonStyle={styles.bottone1}
              onPress={() => aggiornaDescrizione(descrizione)}
            />
        </View>
          <View style={styles.welcome5}>
           <Button
              icon={
                <Icon
                  name="arrow-right"
                  size={10}
                  color="white"
                />
              }
              title="  Cambia Password    "
              buttonStyle={styles.bottone}
              onPress={() => navigation.navigate('CambioPass')}
            />
            </View>
            <View style={styles.welcome6}>
            <Button
              icon={
                <Icon
                  name="arrow-right"
                  size={10}
                  color="white"
                />
              }
              buttonStyle={styles.bottone}
              title="  I Miei Appuntamenti "
              onPress={() => navigation.navigate('ImieiAppuntamenti')}
            />
            </View>
            <View style={styles.welcome7}>
            <Button
              icon={
                <Icon
                  name="arrow-right"
                  size={10}
                  color="white"
                />
              }
              buttonStyle={styles.bottone}
              title="  Log-out                       "
              onPress={() => {logout(); }}
            />
            </View>
        </View>
    </View>
  );
};


export default function IlMioProfilo({navigation}) {
    const { logout } = useContext(AuthContext);
    const { user, setUser } = useContext(AuthContext); 
  const { tipo, setTipo } = useContext(AuthContext);
  const { nome, setNome } = useContext(AuthContext);
  const { cognome, setCognome } = useContext(AuthContext);
  const { email, setEmail } = useContext(AuthContext);
  const { dataN, setDataN } = useContext(AuthContext);
  const { associazione, setAssociazione } = useContext(AuthContext);
  const {cellulare,setCellulare} = useContext(AuthContext);
    console.log(cognome);

    console.log(user);
    return (
     <View style={styles.container}>
      {tipo=="richiedente" ? renderContentUtente(navigation,logout) : renderContentOperatore(navigation,logout) }
      </View> 
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    bottone: {
      borderRadius: 10,
      backgroundColor:'rgb(172,213,211)',
      fontWeight: "bold" 
    },
    bottone1: {
      borderRadius: 10,
      backgroundColor:'#1979a9',
      fontWeight: "bold"
    },
    welcome: {
      flex: 1,
      margin: 10,
      marginTop: 0,
      textAlign: 'center',
      flexDirection: 'row',
    },
      welcome2: {
        flex: 1,
        marginTop: '5%'
      },
      titolo: {
        fontSize: 30,
        color: '#4d5354'
      },
      frase: {
         fontSize: 21,
         color: '#4d5354',
         marginTop: 35,
         fontWeight: "bold",
         marginLeft: '-6%'
         
      },
      frasesotto2:{
        fontSize: 15,
        color: '#ffffff',
        marginLeft: 30,
        marginRight:20,
        marginTop:-10

      },
      frase2: {
        fontSize: 15,
        color: '#4d5354',
        marginTop: 2,
        marginLeft: '-6%'
     },
     frasesotto:{
      fontSize: 22,
      color: '#1979a9',
      marginTop: -10
     },
     welcome3:{
        backgroundColor: '#1979a9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        marginLeft: '3%',
        marginRight: '3%',
        paddingTop: '5%',
        paddingBottom: '5%',
        borderRadius: 15
         },
      welcome4:{
          flex: 1, 
          alignItems: "flex-start",
      },
      welcome5:{
        flex: 1,
        marginTop: '3%',
        marginLeft: '3%',
        width: '94%'
    },
      welcome6:{
        flex: 1,
        marginTop: '-5%',
        marginLeft: '3%',
        width: '94%'
    },
      welcome7:{
        flex: 1,
        marginTop: '-5%',
        marginLeft: '3%',
        width: '94%'
    },
      welcome8:{
        flex: 1,
        marginBottom: '20%',
        marginLeft: '3%',
        marginTop: -110,
        width: '94%'
    },
    descri:{
      marginBottom: 5,
      height: 100,
      backgroundColor: '#a6dbed',
      color: '#FFFFFF'
  }
  });