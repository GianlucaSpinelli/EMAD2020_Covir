import React /*, { useContext }*/ from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Title } from 'react-native-paper';
//import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import { Divider } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';

var utente=1;

const renderContentOperatore = (navigation) => {
  return (
    <View style={styles.container}>
        <View style={styles.welcome}>
            <View style={styles.welcome2}>
                <Image
                style={{ width: 150, height: 150, borderRadius: 100,marginTop: 15,marginLeft: 10}}
                source={require('../images/user.png')}
                />
            </View>
            <View style={styles.welcome2}>
                <Title style={styles.frase}>Vincenzo Pecoraro</Title> 
                <Title style={styles.frase2}>vpec998@gmail.com</Title> 
                <Title style={styles.frase2}>+39/3206613981</Title> 
            </View>
        </View>
           
        <View style={styles.welcome3}>
            <Title style={styles.frasesotto2}>Ciao, mi chiamo Vincenzo Pecoraro e ho 22 anni. Lavoro per l'associazione MAI SOLI, la quale si occupa di tenere compagnia agli anziani sul territori di Salerno.</Title> 
        </View>
        <View style={styles.welcome4}>
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
              buttonStyle={{borderRadius: 10,backgroundColor: '#1979a9'}}
              onPress={() => navigation.navigate('cambioPassword')}
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
              buttonStyle={{borderRadius: 10,backgroundColor: '#1979a9'}}
              title="  Slot messi a disposizione "
              onPress={() => navigation.navigate('MieiSlot')}
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
              buttonStyle={{borderRadius: 10,backgroundColor: '#1979a9'}}
              title="  Log-out                                "
              onPress={() => navigation.navigate('Login')}
            />
            </View>
        </View>
    </View>
  );
};

const renderContentUtente = (navigation) => {
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
                <Title style={styles.frase}>Gaetano Ansanelli</Title> 
                <Title style={styles.frase2}>g.ansanelli@gmail.com</Title> 
                <Title style={styles.frase2}>+39/3318095598</Title> 
            </View>
        </View>
           
        <View style={styles.welcome3}>
            <Title style={styles.frasesotto2}>Ciao, mi chiamo Gaetano Ansanelli e ho 64 anni, vivo a Baronissi, un piccolo paesino in provincia di Salerno. In questo periodo per via della pandemia mi sento spesso molto solo, mi piacerebbe che qualuno ogni tanto potesse tenermi compagnia.</Title> 
        </View>
        <View style={styles.welcome4}>
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
              onPress={() => navigation.navigate('cambioPassword')}
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
              onPress={() => navigation.navigate('IMieiAppuntamenti')}
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
              onPress={() => navigation.navigate('Login')}
            />
            </View>
        </View>
    </View>
  );
};


export default function IlMioProfilo({navigation}) {
    //const { user, logout } = useContext(AuthContext);
    return (
     <View style={styles.container}>
      {utente==1 ? renderContentUtente(navigation) : renderContentOperatore(navigation) }
      </View> 
    ); // {{user.uid}}
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
    welcome: {
      flex: 1,
      margin: 10,
      marginTop: -10,
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
    }
  });