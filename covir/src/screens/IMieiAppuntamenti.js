import React, { useState, useContext, useEffect } from 'react';
import { Title } from 'react-native-paper';
import { IconButton,Portal,Paragraph,Dialog, Card, Avatar } from 'react-native-paper';
import { View, Text, Image, StyleSheet, VirtualizedList,ActivityIndicator } from 'react-native'
import {ListItem, Button, Icon, SocialIcon } from 'react-native-elements'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../common/crud'; 
import { AuthContext } from '../navigation/AuthProvider';
import { set } from 'react-native-reanimated';

export default function IMieiAppuntamenti({navigation}) {
  
  const [loading,setLoading] = useState(true);
  const [result,setResult] = useState([]);
  const { user, setUser } = useContext(AuthContext); 
  const [visible, setVisible] = useState(false);
  const [ids,setid] = useState("");
  function showDialog(id){ setVisible(true); setid(id);};                         
  function confermaDialog(){ hideDialog(); db.removeAppuntamento(chiaveSlot,ids); caricaDati();};
  function hideDialog(){ setVisible(false)};    
  const [chiaveSlot, setChiaveSlot] = useState("");

  useEffect(() => {
    const f = navigation.addListener("focus",() => {caricaDati()});
    setVisible(false);     //per far partire la fetch appena viene creato lo screen, senno la chiamavo sull on press di un button la getWallet
    //caricaDati();
  }, []);

   async function caricaDati(){
    console.log(user.email); 
 
    var list = await db.getAllAppuntamentiByUtente(user.email);
    console.log("lista app:" +list);
    var listaslot = [];
    console.log(list[0].piattaforma);
    for(i=0;i<list.length;i++){
      var chiave= list[i].idslot;
      console.log(chiave);
      console.log("id uguale"+ids);
      var slot= await db.getSlot(chiave);
      var x = await db.getSlotObj(chiave);
      setChiaveSlot(x.id);
      const datajs = slot.dataorainizio.toDate();
      var dataoggi= new Date(Date.now()+(10*60*1000));
      console.log(slot.documentID);
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
    setResult( listaslot)};

  
  const renderContent =()=>{
  if(loading){
    return (
      <ActivityIndicator size="small" color={"#000000"}/>
    )
  }else{
    return(
      <View> 
      <View>
      <Portal>
  <Dialog visible={visible}  onDismiss={hideDialog}>
    <Dialog.Title>CONFERMA</Dialog.Title>
    <Dialog.Content>
      <Paragraph>Sei sicuro di voler eliminare questo appuntamento?</Paragraph>
    </Dialog.Content>
    <Dialog.Actions>
      <Button buttonStyle ={styles.botton} onPress={hideDialog}>No</Button>
      <Button style={styles.botton} onPress={ () => {confermaDialog();}}>Sì</Button>
    </Dialog.Actions>
  </Dialog>
</Portal>
              <Text style={styles.scelta}>APPUNTAMENTI FISSATI:</Text>
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
                      right={(props) => <IconButton icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/trash.png' }} style={styles.bottoneRight} onPress={() => showDialog(item.id)} />} />} />
          </View>
</View>
    )
  }
}

  return (
    <View>
    {renderContent()}
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

    botton:{
      height: '10%',
      width: '10%',
      padding: '10%'
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

