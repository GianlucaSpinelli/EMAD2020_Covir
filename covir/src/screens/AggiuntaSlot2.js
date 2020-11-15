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

  return (
    <View style={styles.container}>  
      <View containerStyle={styles.container1} >
        <Image
          style={{ width: 100, height: 100, borderRadius: 100, marginBottom: '20%',marginTop: '7%', marginLeft:'7%' }}
          source={require('../images/anziano1.jpg')}
          />
        <Text  style={styles.scelta}>SCEGLI LA PIATTAFORMA</Text>
      </View>
      <View>
        <Card containerStyle={styles.card}>
          </Card>
      </View>
        <Datepic></Datepic>   
    </View>
  );
};



const styles = StyleSheet.create({
    scelta: {
        fontSize: 26,
        textAlign: "center",
        marginTop: 0,
        marginBottom: 10,
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
        padding: 7,
        marginBottom: '0%',
        marginLeft: '0%'
            
            
    },
    loginButtonLabel: {
        fontSize: 22,
        marginLeft: '0%',
        textAlign: 'center'
    },
    container: {
      backgroundColor: '#f5f5f5',
      alignItems:'stretch',
      
      justifyContent: 'center'
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
    }
        
});