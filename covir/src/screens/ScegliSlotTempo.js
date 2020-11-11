import React from 'react';
import { Title } from 'react-native-paper';
import { IconButton, List, Card, Avatar } from 'react-native-paper';
import { View, Text, Image, StyleSheet } from 'react-native'
import {ListItem, Button, Icon } from 'react-native-elements'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient'; 



 

export default function ScegliSlotTempo({navigation}) { //non legge immagin
    return (
    <View>
        <Text style={styles.scelta}>APPUNTAMENTI DISPONIBILI:</Text>
        <FlatList 
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
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            left={(props) => <Avatar.Icon   />}
                                            leftStyle={styles.bottoneLeft}
                                            right={(props) => <IconButton style={styles.bottoneRight} onPress={() => {}} />}/> }/>      
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
    app:{
        height: '45%'
    },
    bottoneLeft:{
        paddingLeft: '0%',
        marginRight: '10%'
    }
});
