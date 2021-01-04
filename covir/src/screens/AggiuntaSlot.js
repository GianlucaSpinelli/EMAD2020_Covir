// React Native Time Picker – To Pick the Time using Native Time Picker
// https://aboutreact.com/react-native-timepicker/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View, Dimensions, Platform, Button } from 'react-native';

//import TimePicker from the package we installed
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Card, Icon } from 'react-native-elements'; import { color } from 'react-native-reanimated';
const { width, height } = Dimensions.get('screen');


export default function AggiuntaSlot({ navigation }) {
  /*const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);*/

  const [dateG, setDateG] = useState(new Date());
  const [dateDO, setDateDO] = useState(new Date());
  const [dateAO, setDateAO] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [showG, setShowG] = useState(false);
  const [showDO, setShowDO] = useState(false);
  const [showAO, setShowAO] = useState(false);

  const onChangeG = (event, selectedDate) => {
    const currentDate = selectedDate || dateG;
    setDateG(currentDate);
    setShowG(false);
    console.log("GIORNO " + dateG + " showG " + showG);
  };

  const onChangeDO = (event, selectedDate) => {
    const currentDate = selectedDate || dateDO;
    setDateDO(currentDate);
    setShowDO(false);
    console.log("DALLE ORE " + dateDO + " showDO " + showDO);
  };

  const onChangeAO = (event, selectedDate) => {
    const currentDate = selectedDate || dateAO;
    setDateAO(currentDate);
    setShowAO(false);
    console.log("ALLE ORE " + dateAO + " showAO " + showAO);
  };

  const showMode = (currentMode) => {
    setMode(currentMode);
  };

  const showDatepickerG = () => {
    setShowG(true);
    showMode('date');
  };

  const showTimepickerDO = () => {
    setShowDO(true);
    showMode('time');
  };

  const showTimepickerAO = () => {
    setShowAO(true);
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <View containerStyle={styles.container1}>
        <Text style={styles.scelta}>SCEGLI LA PIATTAFORMA</Text>
        <Card containerStyle={styles.card}>
        </Card>
      </View>
      <View >
        <Button onPress={showDatepickerG} title="Giorno:" />
        <Text testID="Giorno">
          {dateG !== undefined ? moment(dateG).format('DD/MM/YYYY') : moment.format('DD/MM/YYYY')}
        </Text>
        <Button onPress={showTimepickerDO} title="Dalle ore:" />
        <Text testID="DalleOre">
          {dateDO !== undefined ? moment(dateDO).format('HH:mm') : moment.format('HH:mm')}
        </Text>
        <Button onPress={showTimepickerAO} title="Alle ore:" />
        <Text testID="AlleOre">
          {dateAO !== undefined ? moment(dateAO).format('HH:mm') : moment.format('HH:mm')}
        </Text>
      </View>
      {showG && (
        <DateTimePicker
          testID="dateTimePickerG"
          value={dateG}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChangeG}
          minuteInterval={30}
        />
      )}
      {showDO && (
        <DateTimePicker
          testID="dateTimePickerDO"
          value={dateDO}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChangeDO}
          minuteInterval={30}
        />
      )}
      {showAO && (
        <DateTimePicker
          testID="dateTimePickerAO"
          value={dateAO}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChangeAO}
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
    color: '#1979a9',
    fontWeight: "bold"
  },
  card: {
    backgroundColor: '#1979a9',
    borderWidth: 0,
    height: 30,
    width: '100%',
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
    alignItems: 'stretch',

    justifyContent: 'center'
  },
  container1: {
    marginTop: '20%',
    flex: 1
  },
  container2: {
    flex: 2,
    width: '70%',

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