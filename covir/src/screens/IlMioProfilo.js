import React , { useContext,useState,useEffect } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Title } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import { Divider } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BaseRouter } from '@react-navigation/native';
import FormInput from '../components/FormInput';
import { db } from '../common/crud';

const renderContentOperatore = (navigation,logout,tipo,nome,cognome,emailU,dataN,cellulare,associazione,descrizioneUtente) => {
  
  console.log(cellulare);
  console.log("ENTRO IN RENDER CONTENT OPERATORE");
  const [descrizione, setDescrizione] = useState(" ");



  async function confermaDescrizione(){
     const ut = await db.getUtenteObj(emailU);
     db.setDescrizione(ut.id,descrizione);
     descrizioneUtente=descrizione;
     setDescrizione("");
  }

  return (
    <View style={styles.container}>
        <View style={styles.welcome}>
            <View style={styles.welcome2}>
                <Image
                style={{ width: 150, height: 150, borderRadius: 100,marginTop: 15,marginLeft: 0}}
                source={require('../images/PROFILEMAN.png')}
                />
            </View>
            <View style={styles.welcome2}>
                <Title style={styles.frase}>{nome+" "+cognome}</Title> 
                <Title style={styles.frase2}>{emailU}</Title> 
                <Title style={styles.frase2}>{cellulare}</Title> 
            </View>
        </View>
        <View style={styles.welcome4}>
        <View style={styles.welcome8}>
          <Title style={styles.frase10}>{descrizioneUtente}</Title> 
          <FormInput
          style={styles.descri}
          labelName='Aggiorna le informazioni su di te...'
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
              onPress={ () => {confermaDescrizione();}}
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

const renderContentUtente = (navigation,logout,tipo,nome,cognome,emailU,dataN,cellulare,descrizioneU) => {
  const [descrizione, setDescrizione] = useState("");
  async function confermaDescrizione(){

    const ut = await db.getUtenteObj(emailU);
    db.setDescrizione(ut.id,descrizione);
    descrizioneUtente=descrizione;
    setDescrizione("");
 }

  return (
    <View style={styles.container}>
        <View style={styles.welcome}>
            <View style={styles.welcome2}>
                <Image
                style={{ width: 150, height: 150, borderRadius: 100,marginTop: 15,marginLeft: 0}}
                source={require('../images/PROFILEMAN.png')}
                />
            </View>
            <View style={styles.welcome2}>
                <Title style={styles.frase}>{nome+" "+cognome}</Title> 
                <Title style={styles.frase2}>{emailU}</Title> 
                <Title style={styles.frase2}>{cellulare}</Title> 
            </View>
        </View>
        <View style={styles.welcome4}>
        <View style={styles.welcome8}>
          <Title style={styles.frase10}>{descrizioneU}</Title> 
          <FormInput
          style={styles.descri}
          labelName='Dicci un po di te...'
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
              onPress={ () => {confermaDescrizione();}}
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
  const [ tipo, setTipo ] = useState("");
  const [ nome, setNome ] = useState("");
  const [ descrizioneU, setDescrizioneU ] = useState("");
  const [ cognome, setCognome ] = useState("");
  const [ emailU, setEmailU ] = useState("");
  const [ dataN, setDataN ] = useState("");
  const [ associazione, setAssociazione ] = useState("");
  const [ cellulare,setCellulare ] = useState("");
  const { user, setUser } = useContext(AuthContext); 

  useEffect(() => {
    console.log("ENTRO NELLA USE EFFECT DI IL MIO PROFILO");
    caricaDati();
  }, []);

  async function caricaDati(){
    console.log(emailU);
    var temp = await db.getUtenteByMail(user.email);
    console.log("STAMPO L'UTENTE");
    console.log(temp);
    setTipo(temp.tipo);
    setNome(temp.nome);
    setCognome(temp.cognome);
    setEmailU(temp.email);
    setDataN(temp.datanascita);
    setCellulare(temp.cellulare);
    setAssociazione(temp.associazione);
    setDescrizioneU(temp.descrizioneUtente);
    console.log("333333333333 "+descrizioneU);
    }
    return (
     <View style={styles.container}>
      {tipo=="richiedente" ? renderContentUtente(navigation,logout,tipo,nome,cognome,emailU,dataN,cellulare,descrizioneU) : renderContentOperatore(navigation,logout,tipo,nome,cognome,emailU,dataN,cellulare,associazione,descrizioneU) }
      </View> 
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    bottone: {
      borderRadius: 4,
      backgroundColor:'#009bd6',
      fontWeight: "bold" 
    },
    bottone1: {
      borderRadius: 4,
      backgroundColor:'#00719c',
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
         fontWeight: '800',
         color: '#00415a',
         marginTop: 35,
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
        fontWeight: 'bold',
        color: '#4d5354',
        marginTop: 2,
        marginLeft: '-6%'
     },
     frase10:{
      fontSize: 14,
      color: '#4d5354',
      marginTop: -25,
      marginBottom: -25
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
        marginTop: '15%',
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
        marginBottom: '23%',
        marginLeft: '3%',
        marginTop: -90,
        width: '94%'
    },
    descri:{
      marginBottom: 5,
      height: 100,
      backgroundColor: '#a6dbed',
      color: '#FFFFFF'
  }
  });