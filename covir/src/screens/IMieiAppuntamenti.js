import React, { useState, useContext, useEffect } from 'react';
import { Title } from 'react-native-paper';
import { IconButton,Portal,Paragraph,Dialog, Card, Avatar } from 'react-native-paper';
import { View, Text, Image, StyleSheet, VirtualizedList,ActivityIndicator, Linking, LogBox } from 'react-native'
import {ListItem, Button, Icon, SocialIcon } from 'react-native-elements'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../common/crud'; 
import DialogButton from '../components/FormButton5';
import { AuthContext } from '../navigation/AuthProvider';
import { set } from 'react-native-reanimated';
import { RefreshControl } from 'react-native';
import FormButton2 from '../components/FormButton2';

export default function IMieiAppuntamenti({navigation}) {
  console.log("ENTR NELLA PAGE");
  LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

  const { emailU, setEmailU } = useContext(AuthContext);
  const [loading,setLoading] = useState(true);
  const [result,setResult] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [ids,setid] = useState("");
  const [da, setDa] = useState(null);
  const [a, setA] = useState(null);
  var mesi = new Array(12);
mesi[0] = "Gennaio";
                        mesi[1] = "Febbraio";
                        mesi[2] = "Marzo";
                        mesi[3] = "Aprile";
                        mesi[4] = "Maggio";
                        mesi[5] = "Giugno";
                        mesi[6] = "Luglio";
                        mesi[7] = "Agosto";
                        mesi[8] = "Settembre";
                        mesi[9] = "Ottobre";
                        mesi[10] = "Novembre";
                        mesi[11] = "Dicembre";
  const [p, setP] = useState(null);
  const [link, setLink] = useState(null);
  function showDialog(id){ setVisible(true); setid(id);};       
  function showDialog1(id){ setVisible1(true);setid(id);};
  function showDialog2(id){ setVisible2(true);setid(id);};                 
  function hideDialog1(){ setVisible1(false); caricaDati();};     
  function hideDialog2(){ setVisible2(false)};             
  async function confermaDialog(){ hideDialog(); await db.removeAppuntamento(chiaveSlot,ids);  caricaDati();};
  function hideDialog(){ setVisible(false)};    
  const [chiaveSlot, setChiaveSlot] = useState("");
  const { user, setUser } = useContext(AuthContext); 

  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

    const f = navigation.addListener("focus",() => {caricaDati()});
    setVisible(false);     //per far partire la fetch appena viene creato lo screen, senno la chiamavo sull on press di un button la getWallet
    //caricaDati();
  }, []);

   async function caricaDati(){
    LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

    console.log("ENTRO NELLA FUNZIONE CARICA DATI");
    

    console.log(emailU);
    var list = await db.getAllAppuntamentiByUtente(user.email);
    console.log("11111111111111");
    console.log("lista app:" +list);
    if (list != null && list.length != 0 ) {

    var listaslot = [];
    console.log(list[0].piattaforma);
    for(i=0;i<list.length;i++){
      var chiave= list[i].idslot;
      console.log(chiave);
      console.log("id uguale"+ids);
      var slot= await db.getSlot(chiave);
      console.log("222222222");
      var x = await db.getSlotObj(chiave);
      console.log("3333333");
      setChiaveSlot(x.id);
      const datajs = slot.dataorainizio.toDate();
      const orafine = slot.fine.toDate();
      datajs.setHours(orafine.getHours());
      datajs.setMinutes(orafine.getMinutes());
      var dataoggi= new Date(Date.now()+(10*60*1000));
      console.log(slot.documentID);
      console.log(dataoggi);
      if(datajs>dataoggi){
        if (list[i].AppuntamentoIniziato == null && list[i].AppuntamentoIniziato != true)
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
  } 
    setLoading(false);
    setResult( listaslot);
  };

  
  const renderContent =()=>{
    LogBox.ignoreLogs(['Warning: ...', 'Require cycle:', ' @firebase/database:, FIREBASE WARNING:']);

  if(loading){
    return (
      <ActivityIndicator size="small" color={"#000000"}/>
    )
  }else if (result != null){
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
    <DialogButton title=' No' modeValue='contained' labelStyle={styles.loginButtonLabel} onPress={hideDialog}/>
      <DialogButton title=' Si' modeValue='contained' labelStyle={styles.loginButtonLabel}onPress={ () => {confermaDialog();  navigation.navigate('ImieiAppuntamenti');}}/>
    </Dialog.Actions>
  </Dialog>
</Portal>

<Portal>
  <Dialog visible={visible1}  onDismiss={hideDialog1}>
    <Dialog.Title>INFORMAZIONI APPUNTAMENTO</Dialog.Title>
    <Dialog.Content>
      <Paragraph>Dalle: {da} alle: {a}; {"\n"}Piattaforma: {p}; {"\n"}</Paragraph>
      <View style={ {width:'70%', marginRight:'25%', marginLeft:'15%'}}>
      <FormButton2
          title='  START CALL'
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          onPress={async () =>{if (link != null && link.length != "") { Linking.openURL(link); await db.setAppIniziato(ids); } else alert("Il volontario non ha ancora avviato la videochiamata, riprova tra un istante.");}} 
        /></View>
    </Dialog.Content>
    <Dialog.Actions>
    <DialogButton style={{height:'105%', width:'22%', backgroundColor: '#e2020e',borderRadius: 7}} title=' Chiudi' modeValue='contained' labelStyle={{fontSize:10, fontWeight:'bold'}} onPress={ () =>{hideDialog1();}}/>
    </Dialog.Actions>
  </Dialog>
</Portal>

<Portal>
  <Dialog visible={visible2}  onDismiss={hideDialog2}>
    <Dialog.Title>INFORMAZIONI APPUNTAMENTO</Dialog.Title>
    <Dialog.Content>
      <Paragraph>Dalle: {da} alle: {a}; {"\n"}Piattaforma: {p}; {"\n"}</Paragraph>
    </Dialog.Content>
    <Dialog.Actions>
     
    <DialogButton style={{height:'105%', width:'22%', backgroundColor: '#e2020e',borderRadius: 7,}} title=' Chiudi' modeValue='contained' labelStyle={{fontSize:10, fontWeight:'bold'}} onPress={hideDialog2}/>
    
    </Dialog.Actions>
  </Dialog>
</Portal>
              <Text style={styles.scelta}>APPUNTAMENTI FISSATI</Text>
              <FlatList
                  scrollEnabled={true}
                  title="APPUNTAMENTI DISPONIBILI"
                  containerStyle={styles.app}
                  data={result}
                  renderItem={({ item }) => <Card.Title
                      style={styles.card}
                      title={item.inizio.toDate().getDate()+' '+ mesi[item.inizio.toDate().getMonth()]+' '+item.inizio.toDate().getFullYear()}
                      titleStyle={styles.testo}
                      subtitle={item.chiavevolontario}
                      left={(props) => <IconButton icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/EMAD2020_Covir/main/covir/src/images/info.png' }} style={styles.icona} onPress={ async () =>
                      {
                        var appuntamento;
                        var utentebyApp;
                        appuntamento = await db.getAppBySlot(item.id);
                        console.log("sono qui dopo l'app");
                        console.log(appuntamento);
                        if(appuntamento != null) {
                        var piatt = appuntamento.piattaforma;
                        setDa(item.inizio.toDate().getHours()+":"+item.inizio.toDate().getMinutes());
                        setA(item.fine.toDate().getHours()+":"+item.fine.toDate().getMinutes());
                        setP(piatt);

                        if (piatt =="GoogleMeet") {  
                          setLink(appuntamento.linkCall);
                          showDialog1(item.id);
                          //alert("Piattaforma: "+ piatt+";\n"+"Link Videochiamata: "+ Linking.openURL(appuntamento.link)+ "\n"+ "Ore "++":"+item.inizio.toDate().getMinutes()+" - "+); 
                        } else {
                          showDialog2();
                        }
                      }
                      }} />} 
                      leftStyle={styles.bottoneLeft}
                      right={(props) => <IconButton icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/trash.png' }} style={styles.bottoneRight} onPress={() => showDialog(item.id)} />} />} />
          </View>
</View>
    )
  } else {
    return(
      <Text style={styles.scelta}>NON HAI NESSUN APPUNTAMENTO FISSATO</Text>
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
    loginButtonLabel: {
      fontSize: 17,
      marginLeft:'-2%'
    },
    botton:{
      height: '10%',
      width: '10%',
      padding: '10%'
    },
    icona:{
        backgroundColor: '#009bd6',
        borderRadius:0,
        marginLeft: '-40%',
        height: '177%',
        width:'110%'

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
        borderColor: '#009bd6',
        borderTopWidth: 4,
        borderBottomWidth: 4,
        marginTop: '0%'
    },
    testo: {
      fontWeight: "bold",
      color:'rgb(33,82,114)'
    }
});

