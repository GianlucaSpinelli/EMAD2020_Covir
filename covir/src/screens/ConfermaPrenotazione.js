import React, { useState, useContext } from 'react';
import { Title, Checkbox } from 'react-native-paper';
import { IconButton, List, Avatar } from 'react-native-paper';
import { View, Text, Image, StyleSheet, TouchableOpacity, ViewPropTypes  } from 'react-native'
import RadioButton from '../components/Radio';
import { Divider, Card, Button, Icon } from 'react-native-elements';
import FormButton from '../components/FormButton3';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
 

export default function ConfermaPrenotazione({navigation,route}) { //non legge immagin
    const [checked, setChecked] = React.useState(false);
    const {user,setUser} = useContext(AuthContext);
    const [id,setId] = useState("");
    const [mailric,setMailRic] = useState("");
    const [mailVol,setMailVol] = useState("");
    const [piatt,setPiatt] = useState("");

    setId(route.params.idSlot);
    setMailRic(user.email);
    setMailVol(route.params.emailvolontario);

    const app = {idslot:id, mailrichiedente:mailric, mailvolontario: mailVol, piattaforma:piatt};

    return (
    <View>
    <View containerStyle={styles.container}>
        <Text  style={styles.scelta}>SCEGLI LA PIATTAFORMA</Text>
        <Card containerStyle={styles.card}>
        </Card>
        <RadioButton></RadioButton>
    </View>
    <View containerStyle={styles.container1}>
        <FormButton
          containerStyle={styles.bottone}
          title='Conferma'
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          onPress={() => navigation.navigate('HomeTab')}  //{() => login(email, password)}
        />
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
        marginLeft: '10%',
        marginRight: '10%',
        color:'#1979a9',
        fontWeight: "bold"
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
        fontSize: 22,
        marginLeft: '0%',
        textAlign: 'center',
        color: '#ffffff'
    },
    container: {
        flex:1
    },
    container1: {
        flex:1
    }
        
});