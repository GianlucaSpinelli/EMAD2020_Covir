import React from 'react';
import { Title } from 'react-native-paper';
import { IconButton, List, Card, Avatar } from 'react-native-paper';
import { View, Text, Image, StyleSheet, VirtualizedList } from 'react-native'
import {ListItem, Button, Icon, SocialIcon } from 'react-native-elements'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient'; 
import { color } from 'react-native-reanimated';



 

export default function ScegliSlotTempo({navigation}) { //non legge immagin
    return (
    
    <View>
        
        <Text style={styles.scelta}>APPUNTAMENTI DISPONIBILI:</Text>
        <FlatList 
        scrollEnabled={true}
            title="APPUNTAMENTI DISPONIBILI"
            containerStyle={styles.app}
            data={[
                {key: '01', title: 'Lunedì 20 Novembre', subtitle: '12:00 - 13:00'},
                {key: '02', title: 'Lunedì 20 Novembre', subtitle: '11:00 - 12:00'},
                {key: '03', title: 'Lunedì 20 Novembre', subtitle: '10:00 - 11:00'},
                {key: '04', title: 'Lunedì 20 Novembre', subtitle: '12:00 - 13:00'},
                {key: '05', title: 'Lunedì 20 Novembre', subtitle: '12:00 - 13:00'},
                {key: '06', title: 'Lunedì 20 Novembre', subtitle: '12:00 - 13:00'},
                {key: '07', title: 'Lunedì 20 Novembre', subtitle: '12:00 - 13:00'},
                {key: '08', title: 'Lunedì 20 Novembre', subtitle: '12:00 - 13:00'},
                {key: '09', title: 'Lunedì 20 Novembre', subtitle: '12:00 - 13:00'},
                {key: '10', title: 'Lunedì 20 Novembre', subtitle: '12:00 - 13:00'},
              ]}
              renderItem={({item}) => <Card.Title 
                                            style={styles.card}
                                            title={item.title}
                                            titleStyle={styles.testo}
                                            subtitle={item.subtitle}
                                            left={(props) => <Avatar.Icon  icon={{ uri:'https://simpleicon.com/wp-content/uploads/Calendar-3.png'}} style={styles.icona} />}
                                            leftStyle={styles.bottoneLeft}
                                            right={(props) => <IconButton icon={{uri:'https://simpleicon.com/wp-content/uploads/arrow-35.png'}} style={styles.bottoneRight} onPress={() => navigation.navigate('ConfermaAppuntamento')} />}/> }/>      
     
      </View>
  
    );
        
}

const styles = StyleSheet.create({
    scelta: {
        fontSize: 26,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 20,
        color:'#1979a9',
        fontWeight: "bold"

    },
    icona:{
        backgroundColor: '#007AFF',
        borderRadius:18
    },
    app:{
        height: '45%',
        borderColor: '#1979a9'

    },
    bottoneLeft:{
        paddingLeft: '0%',
        marginRight: '10%'
    },
    card: {
        borderColor: 'rgb(33,82,114)',
        borderTopWidth: 1.5,
        marginTop: '0%'
    },
    testo: {
        color:'rgb(33,82,114)'
    }
});
