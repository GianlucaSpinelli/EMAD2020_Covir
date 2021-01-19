import React, { useState, useContext, useEffect } from 'react';
import { Portal,IconButton,Paragraph,Dialog } from 'react-native-paper';
import { View, Text, Image, StyleSheet, TouchableOpacity, ViewPropTypes  } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Divider, Card, Button, Icon } from 'react-native-elements';
import FormButton from '../components/FormButton3';
import DialogButton from '../components/FormButton4';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import { db } from '../common/crud'; 


export default function ConfermaPrenotazione({navigation,route}) { //non legge immagin
    const {user,setUser} = useContext(AuthContext);
    const id = route.params.idSlot;
    const mailV = route.params.emailvolontario;
    const mailric = user.email;
    const [mailVol,setMailVol] = useState("");
    const [visible, setVisible] = useState(false);
    const [info, setInfo] = useState('la tua informazione');
    const [value, setValue] = React.useState('Cellulare');
    const app = {idslot:id, mailrichiedente:mailric, mailvolontario: mailV, piattaforma:value,informazione:info};
    const [slot, setSlot] = useState("");
    const [checked, setChecked] = useState('first');
    


    useEffect(() => {
        prelevaSlot();
      }, []);
    
    async function prelevaSlot(){
        var x = await db.getSlotObj(id);
        console.log(x.id);
        setSlot(x);
    };

    function showDialog(id){ setVisible(true);};                         
    function confermaDialog(){hideDialog(); db.addAppuntamento(slot.id,app);};
    function hideDialog(){setVisible(false);};
    
    
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
      <DialogButton title=' Si' modeValue='contained' labelStyle={styles.loginButtonLabel} onPress={ () => {confermaDialog(); navigation.navigate('Il mio Profilo');}}/>
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
        <View style={{marginLeft:'25%', marginBottom:'10%'}}><RadioButton value="Cellulare"
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
        <View style={{marginLeft:'23%', marginBottom:'10%'}}><RadioButton value="Whatsapp"
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
        <View style={{marginLeft:'30%', marginBottom:'10%'}}><RadioButton value="E-mail" 
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
        <View style={{marginLeft:'31%', marginBottom:'10%'}}><RadioButton value="Skype" 
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