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
import DialogButton from '../components/FormButton5';
import { app } from 'firebase';
import { Linking } from 'react-native';
import FormButton5 from '../components/FormButton6';
import FormInput from '../components/StartCallForm';


export default function MieiSlot({navigation}) {
  
  const [loading,setLoading] = useState(true);
  const [result,setResult] = useState([]);
  const { user, setUser } = useContext(AuthContext); 
  const [chiave,setChiave] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible1a, setVisible1a] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [appuntamento, setAppuntamento] = useState(null);
  const [ids,setid] = useState("");
  const { emailU, setEmailU } = useContext(AuthContext);
  const [giorno, setGiorno] = useState(null);
  const [mese, setMese] = useState(null);
  const [da, setDa] = useState(null);
  const [a, setA] = useState(null);
  const [conN, setConN] = useState(null);
  const [conC, setConC] = useState(null);
  const [conE, setConE] = useState(null);
  const [conCell, setConCEll] = useState(null);
  const [p, setP] = useState(null);
  const [link, setLink] = useState(null);  

  function showDialog(id){ setVisible(true); setid(id);};  
  function showDialog1(id){ setVisible1(true);setid(id);};  
  function showDialog1a(id){ setVisible1a(true);setid(id);};  
  function showDialog2(id){ setVisible2(true);setid(id);};                                                
  async function confermaDialog(){ hideDialog(); await db.removeAppuntamentoBS(ids); await db.removeSlot(ids); caricaDati();};
  function hideDialog(){ setVisible(false)};    
  function hideDialog1(){ setVisible1(false)}; 
  function hideDialog1a(){ setVisible1a(false)};   
  function hideDialog2(){ setVisible2(false)};  


  useEffect(() => {
    const f = navigation.addListener("focus",() => {caricaDati()});
    setVisible(false);     //per far partire la fetch appena viene creato lo screen, senno la chiamavo sull on press di un button la getWallet
    //caricaDati();
  }, []);

  async function caricaDati(){
    
    var listaslot=[];
    var slot= await db.getAllSlotByVol(user.email);
    console.log(slot);
    if (slot != null && slot.length != 0){

    
    var i=0;
    var dataoggi= new Date(Date.now()+(10*60*1000));
    for(i=0;i<slot.length;i++){
      const datajs = slot[i].dataorainizio.toDate();
      console.log("dataaaaaaa");
      console.log(datajs);
      if(datajs>dataoggi){
          listaslot.push(slot[i]); 
    }
    }
  }
    /*
    const datajs = slot.dataorainizio.toDate().toDateString();
    const inizio = slot.inizio;
    const fine = slot.fine;
    console.log(datajs);
    console.log(inizio);
    console.log(fine);
    */
  setResult( listaslot);
  setLoading(false);
  console.log("listaslot");
  console.log(listaslot);
  
 };

  
  const renderContent =()=>{
    

  if(loading){
    return (
      <ActivityIndicator size="small" color={"#000000"}/>
    )
  }else if (result != null && result.length != 0){
    return(
      <View> 
      <View>
      <Portal>
  <Dialog visible={visible}  onDismiss={hideDialog}>
    <Dialog.Title>CONFERMA</Dialog.Title>
    <Dialog.Content>
      <Paragraph>Sei sicuro di voler eliminare questo slot?</Paragraph>

    </Dialog.Content>
    <Dialog.Actions>
    <DialogButton title=' No' modeValue='contained' labelStyle={styles.loginButtonLabel} onPress={hideDialog}/>
      <DialogButton title=' Si' modeValue='contained' labelStyle={styles.loginButtonLabel}onPress={ () => {confermaDialog(); navigation.navigate('MieiSlot');}}/>
    </Dialog.Actions>
  </Dialog>
</Portal>
<Portal>
  <Dialog visible={visible1}  onDismiss={hideDialog1}>

    <Dialog.Title style={{color:'#00719c', fontWeight:'bold'}}>          INFORMAZIONI</Dialog.Title>
    <Dialog.Content>
      <View style={{marginLeft:'5%',marginBottom: '6%'}}>
      <Paragraph style={{fontWeight:'bold', fontSize:15}}>Sarai impegnato il:{"\n"}{"\n"}
       Giorno:              {giorno} {mese}; {"\n"} 
       Dalle:                 {da};{"\n"}
       Alle:                   {a}; {"\n"} 
       Nome:                {conN};{"\n"}
        Cognome:         {conC};{"\n"}
         Email:                {conE};{"\n"} 
         Cellulare:          {conCell}; {"\n"}
          Piattaforma:     {p}; </Paragraph>
      </View>
      <View style={{marginLeft:'20%'}}>
      <FormButton5
         
          title='START CALL'
          modeValue='contained'
          labelStyle={styles.loginButtonLabelStart}
          onPress={() =>{Linking.openURL('http://meet.google.com/new')}} 
        />
      
        <FormInput
          labelName='Link invito'
          value={link}
          autoCapitalize='none'
          onChangeText={newLink => setLink(newLink)}
        />
        <FormButton5
          title='Invia'
          modeValue='contained'
          labelStyle={styles.loginButtonLabelStart}
          onPress={async() =>{ var chiave= await db.getAppBySlotOBJ(ids); await db.addCallLink(chiave.id,link); hideDialog1();}} 
        />
        </View>
    </Dialog.Content>
    <Dialog.Actions>
    <DialogButton style={{height:'105%', width:'22%', backgroundColor: '#e2020e',borderRadius: 7,}} title='CHIUDI' modeValue='contained' labelStyle={{fontSize:10, fontWeight:'bold'}} onPress={hideDialog1}/>
    </Dialog.Actions>
  </Dialog>
</Portal>

<Portal>
  <Dialog visible={visible1a}  onDismiss={hideDialog1a}>

    <Dialog.Title style={{color:'#00719c', fontWeight:'bold'}}>          INFORMAZIONI</Dialog.Title>
    <Dialog.Content>
      <View style={{marginLeft:'5%',marginBottom: '6%'}}>
      <Paragraph style={{fontWeight:'bold', fontSize:15}}>Sarai impegnato il:{"\n"}{"\n"}
       Giorno:              {giorno} {mese}; {"\n"} 
       Dalle:                 {da};{"\n"}
       Alle:                   {a}; {"\n"} 
       Utente anonimo.</Paragraph>
      </View>
      <View style={{marginLeft:'20%'}}>
      <FormButton5
         
          title='START CALL'
          modeValue='contained'
          labelStyle={styles.loginButtonLabelStart}
          onPress={() =>{Linking.openURL('http://meet.google.com/new')}} 
        />
      
        <FormInput
          labelName='Link invito'
          value={link}
          autoCapitalize='none'
          onChangeText={newLink => setLink(newLink)}
        />
        <FormButton5
          title='Invia'
          modeValue='contained'
          labelStyle={styles.loginButtonLabelStart}
          onPress={async() =>{ var chiave= await db.getAppBySlotOBJ(ids); await db.addCallLink(chiave.id,link); hideDialog1a();}} 
        />
        </View>
    </Dialog.Content>
    <Dialog.Actions>
    <DialogButton style={{height:'105%', width:'22%', backgroundColor: '#e2020e',borderRadius: 7,}} title='CHIUDI' modeValue='contained' labelStyle={{fontSize:10, fontWeight:'bold'}} onPress={hideDialog1a}/>
    </Dialog.Actions>
  </Dialog>
</Portal>

<Portal>
  <Dialog visible={visible2}  onDismiss={hideDialog2}>
    <Dialog.Title>INFORMAZIONI</Dialog.Title>
    <Dialog.Content>
      <Paragraph>Sarai impegnato il:{"\n"} Giorno: {giorno}/{mese}; {"\n"} Dalle: {da} alle: {a}; {"\n"} Nome: {conN};{"\n"} Cognome: {conC};{"\n"} Email: {conE};{"\n"} Cellulare: {conCell}; {"\n"} Piattaforma: {p} </Paragraph>
    </Dialog.Content>
    <Dialog.Actions>
    <DialogButton style={{height:'105%', width:'22%', backgroundColor: '#e2020e',borderRadius: 7,}} title='CHIUDI' modeValue='contained' labelStyle={{fontSize:10, fontWeight:'bold'}} onPress={hideDialog2}/>
    </Dialog.Actions>
  </Dialog>
</Portal>

              <Text style={styles.scelta}>SLOT MESSI A DISPOSIZIONE</Text>
              <FlatList
                  scrollEnabled={true}
                  title="SLOT MESSI A DISPOSIZIONE"
                  containerStyle={styles.app}
                  data={result}
                  renderItem={({item}) => <Card.Title
                      style={styles.card}
                      title={item.dataorainizio.toDate().toDateString()}
                      titleStyle={styles.testo}
                      subtitle={item.inizio.toDate().getHours()+":"+item.inizio.toDate().getMinutes()+" - "+item.fine.toDate().getHours()+":"+item.fine.toDate().getMinutes() + (item.occupato != true ? " libero" : " occupato")}
                      left={(props) => <IconButton icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/info.png' }} style={styles.icona} onPress={ async () => 
                      { var appuntamento;
                        var utentebyApp;
                        appuntamento = await db.getAppBySlot(item.id);
                        console.log("sono qui dopo l'app");
                        console.log(appuntamento);
                        if(appuntamento != null) {
                        var piatt = appuntamento.piattaforma;
                        utentebyApp = await db.getUtenteByMail(appuntamento.mailrichiedente);
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
                        var n = mesi[item.inizio.toDate().getMonth()];
                        setGiorno(item.inizio.toDate().getDate());
                        setMese(n);
                        setDa(item.inizio.toDate().getHours());
                        setA(item.fine.toDate().getHours());
                        setConN(utentebyApp.nome);
                        setConC(utentebyApp.cognome);
                        setConE(utentebyApp.email);
                        setConCEll(utentebyApp.cellulare);
                        setP(piatt);
                        if (piatt =="GoogleMeet" && appuntamento.anonimo==false) {  
                          showDialog1(item.id);
                        //alert('Sarai impegnato il '+item.inizio.toDate().getDate()+' '+n+' dalle ore '+ item.inizio.toDate().getHours() +' fino a '+item.fine.toDate().getHours()+ " con: \n"+ "Nome: "+ utentebyApp.nome+"\n"+ "Cognome: "+ utentebyApp.cognome+"\n"+"Email: "+utentebyApp.email+"\n"+"Cellulare: "+utentebyApp.cellulare+"\n"+"Piattaforma: "+ piatt+"\n"); 
                        } else if (appuntamento.anonimo==true){
                          showDialog1a(item.id);
                        } else {
                          showDialog2();
                          }
                      } else {
                        alert('Questo slot ancora non è stato prenotato!'); 
                      }
                      }} />} 
                      leftStyle={styles.bottoneLeft}
                      right={(props) => <IconButton icon={{ uri: 'https://raw.githubusercontent.com/enzop9898/Covir/main/covir/src/images/trash.png' }} style={styles.bottoneRight} onPress={() => showDialog(item.id)} />
                      } />} />
          </View>
</View>
    )
  } else {
    return(
      <Text style={styles.scelta}>NON HAI MESSO A DISPOSIZIONE NESSUNO SLOT</Text>

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
        fontSize: 17
      },
    loginButtonLabelStart:{
      fontSize:16,
      marginLeft:'-1%'
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
        height: '200%',
        width:'140%'

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
        color:'rgb(33,82,114)'
    }
});



































































































































































































































































































