// React Native Time Picker – To Pick the Time using Native Time Picker
// https://aboutreact.com/react-native-timepicker/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import { StyleSheet, Text, View, Dimensions, Platform, Button, Image} from 'react-native';

//import TimePicker from the package we installed
import TimePicker from 'react-native-simple-time-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Card, Icon } from 'react-native-elements';import { color } from 'react-native-reanimated';
const { width, height } = Dimensions.get('screen');
import Datepic from '../components/Pick';
import DatePicker from 'react-native-datepicker'
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import FormButton from '../components/FormButton';


export default function AggiuntaSlot({navigation}) {
  /*const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);*/

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  
  const [checked, setChecked] = React.useState('first');

  return (
    <ScrollView>
    <View style={styles.container}>  
      
      <Text  style={styles.scelta}>In che giorno sei disponibile?</Text>
      <Card containerStyle={styles.card}></Card>
      <Datepic></Datepic> 
      <FormButton
          title='CONFERMA'
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          onPress={() => navigation.navigate('HomeTab')}  //{() => login(email, password)}
        />
    </View>
    </ScrollView>
        
      
          
    
  );
};



const styles = StyleSheet.create({
    scelta: {
        fontSize: 26,
        textAlign: "center",
        marginTop: 0,
        marginBottom: '5%',
        marginLeft: '10%',
        marginRight: '10%',
        color:'#1979a9',
        fontWeight: "bold",
        alignItems: 'center'
    },
    card:{
        backgroundColor:'#1979a9',
        borderWidth:0,
        height:30,
        width:'100%',
        marginBottom: '3%',
        marginLeft: '0%',
        marginRight: '0%',
        alignContent: 'center'
            
            
    },
    loginButtonLabel: {
        fontSize: 15,
        marginLeft: '0%',
        textAlign: 'center'
    },
    container: {
      
      alignItems:'center',
      justifyContent:'center',
      marginTop: '10%'      
    },
    container1: {
      marginTop:'20%',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center'
    },
    container2: {
    
      width:'70%',
      
    },
    coloreBott: {
      marginTop: 20,
      backgroundColor: '#1979a9',
      borderRadius: 9,
      width: width / 1.5,
      height: height / 16,
      justifyContent: 'center',
      alignItems: 'center'
    },
    welcome: {
      flex: 1,
      textAlign: 'center',
      flexDirection: 'row',
    },
    testo:{
        fontSize: 20,
        textAlign: "center",
        marginRight: '10%',
        color:'#1979a9',
        fontWeight: "bold",
        alignItems: 'center'
    },
    loginButtonLabel: {
      fontSize: 22,
      
    },     
});