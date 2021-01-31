import React, { useState, useContext, useEffect } from 'react';
import { Portal,IconButton,Paragraph,Dialog } from 'react-native-paper';
import { View, Text, Image, StyleSheet, TouchableOpacity, ViewPropTypes  } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Divider, Card, Button, Icon, CheckBox } from 'react-native-elements';
import FormButton from '../components/FormButton3';
import DialogButton from '../components/FormButton4';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import { db } from '../common/crud'; 
import { Alert, LogBox } from 'react-native';



export default function ConfermaPrenotazione({navigation,route}) { //non legge immagin
  LogBox.ignoreLogs(['Warning: ...', 'Require cycle:']);
    const {user,setUser} = useContext(AuthContext);
    const id = route.params.idSlot;
    const mailV = route.params.emailvolontario;
    const mailric = user.email;
    const [mailVol,setMailVol] = useState("");
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [info, setInfo] = useState('la tua informazione');
    const [value, setValue] = React.useState('Cellulare');
    const [anonimo, setAnonimo] = React.useState(false);
    const [disattivato1, setDissativato1] = useState(false);
    const [disattivato2, setDissativato2] = useState(false);
    const [disattivato3, setDissativato3] = useState(false);
    const [disattivato4, setDissativato4] = useState(false);
    const [flagAlert, setFlagAlert] = useState(false);
    const app = {idslot:id, mailrichiedente:mailric, mailvolontario: mailV, piattaforma:value,informazione:info, anonimo:anonimo};
    const [slot, setSlot] = useState("");
    const [checked, setChecked] = useState('first');

    useEffect(() => {
      LogBox.ignoreLogs(['Warning: ...']);
        prelevaSlot();
      }, []);
    
    async function prelevaSlot(){
      LogBox.ignoreLogs(['Warning: ...']);
        var x = await db.getSlotObj(id);
        console.log(x.id);
        setSlot(x);
    };

    function disattivaScelte(){
      LogBox.ignoreLogs(['Warning: ...', 'Require cycle:']);
      setDissativato1(!disattivato1);
      setDissativato2(!disattivato2);
      setDissativato3(!disattivato3);
      setDissativato4(!disattivato4);
    };

    function showDialog(id){ setVisible(true);};    
    function showDialog2(id){ setVisible2(true);};                                              
    function confermaDialog(){hideDialog(); db.addAppuntamento(slot.id,app);};
    function hideDialog(){setVisible(false);};
    function hideDialog2(){setVisible2(false);};
    LogBox.ignoreLogs(['Warning: ...', 'Require cycle:']);
    
    
    return (
    <View>
     <Portal>
  <Dialog visible={visible}  onDismiss={hideDialog}>
    <Dialog.Title>CONFERMA</Dialog.Title>
    <Dialog.Content>
      <Paragraph>Sei sicuro di voler prenotare questo appuntamento?</Paragraph>
    </Dialog.Content>
    <Dialog.Actions>
      <DialogButton title=' No' modeValue='contained' labelStyle={styles.loginButtonLabel}  onPress={hideDialog}/>
      <DialogButton title=' Si' modeValue='contained' labelStyle={styles.loginButtonLabel} onPress={ () => {confermaDialog(); showDialog2();}}/>
    </Dialog.Actions>
  </Dialog>
</Portal> 

<Portal>
  <Dialog visible={visible2}  onDismiss={hideDialog2}>
    <Dialog.Title style={{color:'#00719c', fontWeight:'bold', fontSize: 18}}>PRENOTAZIONE CONFERMATA</Dialog.Title>
    <Dialog.Content>
    <Paragraph style={{ marginBottom:0, textAlign:'center', color:'#00719c', fontWeight:'bold'}}>A presto!</Paragraph>
    <Image
              style={{ width: 120, height: 120, resizeMode: 'stretch', alignContent:'center', alignItems:'center', marginLeft:'28%' }}
              source={{ uri: 'https://raw.githubusercontent.com/enzop9898/EMAD2020_Covir/main/covir/src/images/animation_500_kk9o4cxi.gif' }}
            />
      
    </Dialog.Content>
    <Dialog.Actions>
      <DialogButton title='Chiudi' modeValue='contained' labelStyle={styles.loginButtonLabel} onPress={ () => {hideDialog2(); navigation.navigate('Home');}}/>
    </Dialog.Actions>
  </Dialog>
</Portal> 

    <View style={styles.container}>
        <Text  style={styles.scelta}>SCEGLI LA PIATTAFORMA</Text>
        
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={{ flexDirection: 'row'}}>
        
        <View>
        <Image
                style={{ width: 45, height: 45, marginLeft:'15%'}}
                source={require('../images/phone.png')}
                />
      </View>
        <View >
        <Text style={styles.piat}>Cellulare</Text></View>
        <View style={{ marginLeft:'23.2%', marginBottom:'10%'}}><RadioButton disabled={disattivato1} value="Cellulare"
            color='#1979a9'
        /></View>
        </View>
        <View style={{ flexDirection: 'row'}}>
        <View>
        <Image
                style={{ width: 45, height: 45, marginLeft:'10%', marginRight:'4%'}}
                source={require('../images/whatsapp.png')}
                />
      </View>
        <View><Text style={styles.piat}>Whatsapp</Text></View>
        <View style={{marginLeft:'21.5%', marginBottom:'10%'}}><RadioButton disabled={disattivato2} value="Whatsapp"
             color='#1979a9'
        />
        </View></View><View style={{ flexDirection: 'row'}}>
        <View>
        <Image
                style={{ width: 40, height: 40, marginLeft:'15%', marginRight:'3%'}}
                source={require('../images/email.png')}
                />
      </View>
        <View><Text style={styles.piat}>E-mail</Text></View>
        <View style={{marginLeft:'29.3%', marginBottom:'10%'}}><RadioButton disabled={disattivato3} value="E-mail" 
            color='#1979a9'
        />
        </View></View>
        <View style={{ flexDirection: 'row'}}>
        <View>
        <Image
                style={{ width: 40, height: 40, marginLeft:'15%', marginRight:'3%'}}
                source={require('../images/skype.png')}
                /> 
      </View>
        <View><Text style={styles.piat}>Skype</Text></View>
        <View style={{marginLeft:'30.3%', marginBottom:'10%'}}><RadioButton disabled={disattivato4} value="Skype" 
             color='#1979a9'
        /></View>
        </View>
        <View style={{ flexDirection: 'row'}}>
        <View>
        <Image
                style={{ width: 40, height: 40, marginLeft:'15%', marginRight:'3%'}}
                source={require('../images/meet.png')}
                /> 
      </View>
        <View><Text style={styles.piat}>Google Meet</Text></View>
        <View style={{marginLeft:'12%', marginBottom:'10%'}}><RadioButton value="GoogleMeet" 
             color='#1979a9'
        /></View>
        </View>
        
        </RadioButton.Group>
    </View>
    <View tyle={styles.container1}>

    <CheckBox
          textStyle={{color:'#00415a', fontWeight:'bold', fontSize:15}}
          center
          title='Prenota in anonimo'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          containerStyle={styles.chekky}
          checked={anonimo}
          onPress= {() => {setAnonimo(!anonimo); disattivaScelte(); if (flagAlert== false) { alert('Selezionando "Prenota in anonimo" nascondi tutti i duoi dati al volontario. L\'unica piattaforma selezionabile è Google Meet.'); setFlagAlert(true);}}}
        />
        <FormButton
          containerStyle={styles.bottone}
          title='Conferma'
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          onPress={() => showDialog()}  //{() => login(email, password)}
        />
    </View>
    </View>
    );
}

const styles = StyleSheet.create({
    scelta: {
        fontSize: 26,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 60,
        marginLeft: '10%',
        marginRight: '10%',
        color:'#1979a9',
        fontWeight: "bold"
    },
    loginButtonLabel: {
        fontSize: 22,
    
      },
    card:{
        backgroundColor:'#1979a9',
        borderWidth:0,
        height:30,
        width:'100%', 
        padding: 7,
        marginBottom: '-15%',
        marginLeft: '0%'
            
            
    },
    chekky: {
        marginBottom: '-23%',
        marginTop: '12%'
    },
    loginButtonLabel: {
        fontSize: 15,
        marginLeft: '0%',
        textAlign: 'center',
        color: '#ffffff'
    },
    container: {
        marginBottom:'-15%',
        marginRight:'5%',
        marginLeft:'5%',
        marginTop:'7%'
    },
    container1: {
        flex:1
        
    },
    bottone:  {
        backgroundColor:'#1979a9',
        width: 10,
        height:10
    },
    rad:{
        marginLeft: 40,
    },
    piat:{
      fontSize: 20,
      marginBottom: 10,
      marginLeft: '10%',
      fontWeight: "bold"
    },
    bot: {
      marginLeft:100
    }
        
});