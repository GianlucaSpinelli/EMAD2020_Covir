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
      <Text style={styles.instructions}>Data disponibilità: {this.state.date}</Text>
        
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
    marginTop: 10,
    marginBottom: 30
  }
});