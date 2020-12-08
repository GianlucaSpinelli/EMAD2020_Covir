import { HeaderBackground } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Dimensions, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');


export default function FormInput({ labelName, ...rest }) {
    return (
    
        <TextInput 
          label={labelName}
          style={styles.input}
          numberOfLines={1}
          {...rest}
          theme={{
            colors: {
                       placeholder: '#1979a9', text: '#444444', primary: 'rgb(28, 77, 124)',
                       underlineColor: '#9a73ef', background: '#ff0000'
               }
         }}
        />
       
      
    
    );
  }
  
const styles = StyleSheet.create({
    input: {
      backgroundColor: 'rgb(231,231,231)',
      marginTop: 10,
      marginBottom: 10,
      width: width / 1.5,
      height: height / 15
    }

  });
