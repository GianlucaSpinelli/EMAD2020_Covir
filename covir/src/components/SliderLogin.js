import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Slideshow from 'react-native-slideshow';

export default function SliderLogin() {
    return (
        <Slideshow 
          dataSource={[
            { url:'http://placeimg.com/640/480/any' },
            { url:'http://placeimg.com/640/480/any' },
            { url:'http://placeimg.com/640/480/any' }
        ]}/>
      );
  }
  
  const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });