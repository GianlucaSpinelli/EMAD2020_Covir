import React from 'react';
import { Title } from 'react-native-paper';
import { IconButton, List, Card, Avatar } from 'react-native-paper';
import { View, Text, Image, StyleSheet, VirtualizedList } from 'react-native'
import {ListItem, Button, Icon, SocialIcon } from 'react-native-elements'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient'; 


export default function IMieiAppuntamenti({navigation}) { //non legge immagin
    return (
    
    <View>
        
        <Text style={styles.scelta}>APPUNTAMENTI CONFERMATI:</Text>
        <FlatList 
        scrollEnabled={true}
            title="I MIEI APPUNTAMENTI"
            containerStyle={styles.app}
            data={[
                {key: '01', title: 'Lunedì 20 Novembre', subtitle: '12:00 - 13:00'},
                {key: '02', title: 'Venerdi 25 Novembre', subtitle: '11:00 - 12:00'},
                {key: '03', title: 'Sabato 26 Novembre', subtitle: '10:00 - 11:00'},
              ]}
              renderItem={({item}) => <Card.Title 
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            left={(props) => <Avatar.Icon  icon={{ uri:'https://simpleicon.com/wp-content/uploads/calling-150x150.png'}} style={styles.icona} />}
                                            leftStyle={styles.bottoneLeft}
                                            right={(props) => <IconButton icon={{uri:'https://simpleicon.com/wp-content/uploads/cross-64x64.png'}} style={styles.bottoneRight} onPress={() => navigation.navigate('IMieiAppuntamenti')} />}/> }/>     
     
      </View>
  
    );
        
}

const styles = StyleSheet.create({
    scelta: {
        fontSize: 23,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 20,
        color:'#1979a9',
        fontWeight: "bold"

    },
    icona:{
        backgroundColor: '#1979a9'
    },
    app:{
        height: '45%'
    },
    bottoneLeft:{
        paddingLeft: '0%',
        marginRight: '10%'
    }
});
