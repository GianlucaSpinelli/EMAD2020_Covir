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
      <Text style={styles.instructions}>Data disponibilità: {this.state.date}</Text>
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
            borderRadius: 10
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      
      <Text style={styles.instructions}>Dalle ore: {this.state.time}</Text>
        <DatePicker
          style={{width: 250,justifyContent:'center', position:'relative'}}
          date={'09:00'}
          mode="time"
          format="HH:mm"
          confirmBtnText="Conferma"
          cancelBtnText="Cancella"
          minuteInterval={30}
          onDateChange={(time) => {this.setState({time: time});}}
          customStyles={{
            dateIcon: {
              position: 'relative',
              left: 0,
              top: 0,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 30,
              borderRadius: 10
            }
            // ... You can check the source to find the other keys.
          }}
        />
        <Text style={styles.instructions}>Alle ore: {this.state.time}</Text>
        <DatePicker
          style={{width: 250,justifyContent:'center', position:'relative'}}
          date={'09:30'}
          mode="time"
          format="HH:mm"
          confirmBtnText="Conferma"
          cancelBtnText="Cancella"
          minuteInterval={30}
          minTime={this.state.time}
          onDateChange={(time) => {this.setState({time: time});}}
          customStyles={{
            dateIcon: {
              position: 'relative',
              left: 0,
              top: 0,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 30,
              borderRadius: 10
              
            }
            // ... You can check the source to find the other keys.
          }}
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
    color: '#1979a9',
    marginBottom: 5,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
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
});