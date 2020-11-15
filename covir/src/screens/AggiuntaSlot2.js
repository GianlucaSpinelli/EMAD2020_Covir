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
      
      <Text  style={styles.scelta}>in che giorno sei disponibile?</Text>
      <Datepic></Datepic> 
      <Text  style={styles.scelta}>A che ora?</Text>
      <View>
      <Text style={styles.testo}>09:00-10:00</Text>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style={styles.testo}>10:00-11:00</Text>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style={styles.testo}>11:00-12:00</Text>
      <RadioButton
        value="terzo"
        status={ checked === 'terzo' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('terzo')}
      />
      <Text style={styles.testo}>12:00-13:00</Text>
      <RadioButton
        value="quarto"
        status={ checked === 'quarto' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('quarto')}
      /> 
      <Text style={styles.testo}>13:00-14:00</Text>
      <RadioButton
        value="quinto"
        status={ checked === 'quinto' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('quinto')}
      />   
      <Text style={styles.testo}>15:00-16:00</Text>
      <RadioButton
        value="sesto"
        status={ checked === 'sesto' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('sesto')}
      />
      <Text style={styles.testo}>17:00-18:00</Text>
      <RadioButton
        value="settimo"
        status={ checked === 'settimo' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('settimo')}
      />
      <Text style={styles.testo}>18:00-19:00</Text>
      <RadioButton
        value="s"
        status={ checked === 's' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('s')}
      />
      <Text style={styles.testo}>19:00-20:00</Text>
      <RadioButton
        value="si"
        status={ checked === 'si' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('si')}
      />
      <Text style={styles.testo}>20:00-21:00</Text>
      <RadioButton
        value="sim"
        status={ checked === 'sim' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('sim')}
      />
      </View>
    </View>
    </ScrollView>
        
      
          
    
  );
};



const styles = StyleSheet.create({
    scelta: {
        fontSize: 26,
        textAlign: "center",
        marginTop: 0,
        marginBottom: 20,
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
      
      alignItems:'center',
      justifyContent:'center',
      
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
    }
        
});