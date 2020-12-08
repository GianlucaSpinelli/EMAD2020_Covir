import React from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { color } from 'react-native-reanimated';

const { width, height } = Dimensions.get('screen');

export default function FormButton({ title, modeValue, ...rest }) {
  return (
    <Button
      mode={modeValue}
      {...rest}
      style={styles.button}
      contentStyle={styles.buttonContainer}
      
    >
      {title}
    </Button>
    
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 43,
    backgroundColor: '#1979a9',
    borderRadius: 9,
    

  },
  buttonContainer: {
    width: width / 2.0,
    height: height / 15
  },
  colore: {
    color: '#ffffff'
  }

});