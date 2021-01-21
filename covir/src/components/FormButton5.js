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
      contentStyle={styles.buttonContainer}
    >
      {title}
    </Button>
    
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1979a9',
    borderRadius: 7,
    marginLeft: 40,
    marginRight: 2
    

  },
  buttonContainer: {
    width: width / 6,
    height: height / 22,
    
  }
});