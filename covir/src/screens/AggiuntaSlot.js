// React Native Time Picker – To Pick the Time using Native Time Picker
// https://aboutreact.com/react-native-timepicker/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, Text, View, Dimensions, Platform, Button} from 'react-native';

//import TimePicker from the package we installed
import TimePicker from 'react-native-simple-time-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Card, Icon } from 'react-native-elements';import { color } from 'react-native-reanimated';
const { width, height } = Dimensions.get('screen');


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
      <View containerStyle={styles.container1}>
        <Text  style={styles.scelta}>SCEGLI LA PIATTAFORMA</Text>
        <Card containerStyle={styles.card}>
          </Card>
      </View>
      <View >  
      <Button  
           mode="date"
          customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          }}}
          onPress={showDatepicker} title="Giorno:" />
      <Button 
           mode="date"
          customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          }}}
          onPress={showTimepicker} title="Dalle ore:" />
      <Button 
             mode="date"
            customStyles={{
            dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          }}}
          onPress={showTimepicker} title="Alle ore:" />
      

        </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          minuteInterval={30}
        />
      )}

    
    </View>
  );
};



const styles = StyleSheet.create({
    scelta: {
        fontSize: 26,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 10,
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
      flex:1
    },
    container2: {
      flex:2,
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