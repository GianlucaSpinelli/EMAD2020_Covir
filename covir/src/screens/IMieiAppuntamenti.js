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


  useEffect(() => {     //per far partire la fetch appena viene creato lo screen, senno la chiamavo sull on press di un button la getWallet
    caricaDati();
  }, []);

   async function caricaDati(){
    console.log(user.email);
 
    var list = await db.getAllAppuntamentiByUtente(user.email);
    console.log(list[0].piattaforma);

    
    setLoading(false);
    setResult( list/*oldArray => [...oldArray, {
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
                            title={item.piattaforma}
                            titleStyle={styles.testo}
                            subtitle={item.info}
                            left={(props) => <Avatar.Icon icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/date.png' }} style={styles.icona} />}
                            leftStyle={styles.bottoneLeft}
                            right={(props) => <IconButton icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/trash.png' }} style={styles.bottoneRight} onPress={() => navigation.navigate('ConfermaAppuntamento')} />} />} />

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

