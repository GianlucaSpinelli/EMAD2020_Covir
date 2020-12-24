import React, { useState, useContext, useEffect } from 'react';
import { Title } from 'react-native-paper';
import { IconButton, List, Card, Avatar } from 'react-native-paper';
import { View, Text, Image, StyleSheet, VirtualizedList,ActivityIndicator } from 'react-native'
import {ListItem, Button, Icon, SocialIcon } from 'react-native-elements'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../common/crud'; 
import { AuthContext } from '../navigation/AuthProvider';

export default function IMieiAppuntamenti({navigation}) {
  const [loading,setLoading] = useState(true);
  const [result,setResult] = useState([]);
  const { user, setUser } = useContext(AuthContext); 
  const [chiave,setChiave] = useState("");


  useEffect(() => {     //per far partire la fetch appena viene creato lo screen, senno la chiamavo sull on press di un button la getWallet
    caricaDati();
  }, []);

   async function caricaDati(){
    console.log(user.email);
 
    var list = await db.getAllAppuntamentiByUtente(user.email);
    var listaslot = [];
    console.log(list[0].piattaforma);
    for(i=0;i<list.length;i++){
      var chiaveslot= list[0].chiaveslot;
      var slot= await db.getSlot(chiaveslot);
      const datajs = slot.dataorainizio.toDate();
      var dataoggi= new Date(Date.now()+(10*60*1000));
      console.log(slot.documentID);
      setChiave(slot.documentID);
      console.log(dataoggi);
      if(datajs>dataoggi){
        listaslot.push(slot); 
      }  
      /*
      const datajs = slot.dataorainizio.toDate().toDateString();
      const inizio = slot.inizio;
      const fine = slot.fine;
      console.log(datajs);
      console.log(inizio);
      console.log(fine);
      */
    }
    setLoading(false);
    setResult( listaslot/*oldArray => [...oldArray, {
      piattaforma: list[0].piattaforma,
      mailvolontario: list[0].mailvolontario,
      info: list[0].info
    }]*/
    )};

  
/*const renderContent =()=>{
  if(loading){
    return (
      <ActivityIndicator size="small" color={"#000000"}/>
    )
  }else{
    return(
        <View>
                    <Text style={styles.scelta}>APPUNTAMENTI DISPONIBILI:</Text>
                    <FlatList
                        scrollEnabled={true}
                        title="APPUNTAMENTI DISPONIBILI"
                        containerStyle={styles.app}
                        
                        data={result}
                        renderItem={({ item }) => <Card.Title
                            style={styles.card}
                            title={item.piattaforma}
                            titleStyle={styles.testo}
                            subtitle={item.mailvolontario}
                            left={(props) => <Avatar.Icon icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/date.png' }} style={styles.icona} />}
                            leftStyle={styles.bottoneLeft}
                            right={(props) => <IconButton icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/trash.png' }} style={styles.bottoneRight} onPress={() => navigation.navigate('ConfermaAppuntamento')} />} />} />

                </View>
    )
  }
}*/

  return (
    <View> 
            <View>
                    <Text style={styles.scelta}>APPUNTAMENTI DISPONIBILI:</Text>
                    <FlatList
                        scrollEnabled={true}
                        title="APPUNTAMENTI DISPONIBILI"
                        containerStyle={styles.app}
                        
                        data={result}
                        renderItem={({ item }) => <Card.Title
                            style={styles.card}
                            title={item.dataorainizio.toDate().toDateString()}
                            titleStyle={styles.testo}
                            subtitle={item.chiavevolontario}
                            left={(props) => <Avatar.Icon icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/date.png' }} style={styles.icona} />}
                            leftStyle={styles.bottoneLeft}
                            right={(props) => <IconButton icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/trash.png' }} style={styles.bottoneRight} onPress={() => db.removeAppuntamento(item.id)} />} />} />

                </View>
    </View>
  );
  }

const styles = StyleSheet.create({
    scelta: {
        fontSize: 26,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 20,
        color:'#1979a9',
        fontWeight: "bold"

    },
    icona:{
        backgroundColor: 'rgba(172, 213, 211, 1)',
        borderRadius:0,
        marginLeft: '-40%',
        height: '177%'

    },
    app:{
        height: '45%',
        borderColor: '#1979a9'

    },
    bottoneLeft:{
        paddingLeft: '0%',
        marginRight: '10%'
    },
    card: {
        borderColor: 'rgba(172, 213, 211, 1)',
        borderTopWidth: 4,
        borderBottomWidth: 4,
        marginTop: '0%'
    },
    testo: {
        color:'rgb(33,82,114)'
    }
});

