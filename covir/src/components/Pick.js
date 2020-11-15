import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import {
  StyleSheet,
  Text,
  View,
  PanResponder
} from 'react-native';
 
export default class Pick extends Component {
  constructor(props){
    super(props)
    this.state = {date:""}
  }
 
  render(){
    return (
    <View>  
      <Text style={styles.instructions}>Giorno: {this.state.date}</Text>
      <DatePicker
        style={{width: 250, justifyContent:'center', position:'relative'}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={new Date(Date.now()+(10 * 60 * 1000))}
        maxDate="2025-06-01"
        confirmBtnText="Conferma"
        cancelBtnText="Cancella"
        customStyles={{
          dateIcon: {
            position: 'relative',
            left: 0,
            top: 0,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 30,
            
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <Text style={styles.instructions}>Dalle ore: {this.state.time}</Text>
        <DatePicker
          style={{width: 220}}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Conferma"
          cancelBtnText="Cancella"
          minuteInterval={30}
          onDateChange={(time) => {this.setState({time: time});}}
        />
        <Text style={styles.instructions}>Alle ore: {this.state.time}</Text>
        <DatePicker
          style={{width: 220}}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Conferma"
          cancelBtnText="Cancella"
          minuteInterval={30}
          minTime={this.state.time}
          onDateChange={(time) => {this.setState({time: time});}}
        />
        
    </View>  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});