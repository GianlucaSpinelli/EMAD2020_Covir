import React from 'react';
import { Title } from 'react-native-paper';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient'; 

export default function ScegliVolontario({navigation}) { //non legge immagin
    return (
    <View>
        <Text style={styles.scelta}> SCEGLI L'OPERATORE IN BASE ALLA FASCIA D'ETÀ</Text>
        <ListItem containerStyle={styles.card1} onPress={() => navigation.navigate('ScegliSlot')}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} 
             // Only if no expo
            >
            <Avatar source={{uri: '../images/lente.png'}} rounded  containerStyle={styles.immagine}/>
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}><Text>PER OVER 18</Text></ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}><Text>20 disponibili</Text></ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="white" />
        </ListItem>  
        <ListItem containerStyle={styles.card2} onPress={() => navigation.navigate('Login')}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95}
             // Only if no expo
            >
            <Avatar rounded source={{ uri: 'https://lopinabile.it/wp-content/uploads/2018/07/portrait-of-an-elderly-man-sticking-his-tongue-out-X7WHRG-678x381.jpg' }} containerStyle={styles.immagine}/>
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}><Text>PER OVER 30</Text></ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}><Text>12 disponibili</Text></ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="white" />
        </ListItem> 
        <ListItem containerStyle={styles.card3} onPress={() => navigation.navigate('Login')}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} 
            // Only if no expo
            >
            <Avatar rounded source={{ uri: 'https://lopinabile.it/wp-content/uploads/2018/07/portrait-of-an-elderly-man-sticking-his-tongue-out-X7WHRG-678x381.jpg' }} containerStyle={styles.immagine}  />
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}><Text>PER OVER 40</Text></ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}><Text>30 disponibili</Text></ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="white" />
        </ListItem> 
        <ListItem containerStyle={styles.card4} onPress={() => navigation.navigate('Login')}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} 
             // Only if no expo
            >
            <Avatar rounded source={{ uri: 'https://lopinabile.it/wp-content/uploads/2018/07/portrait-of-an-elderly-man-sticking-his-tongue-out-X7WHRG-678x381.jpg' }} containerStyle={styles.immagine}/>
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}><Text>PER OVER 60</Text></ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}><Text>1 disponibili</Text></ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="white" />
        </ListItem> 
    </View>
    );
        
}

const styles = StyleSheet.create({
    card1:{
        height:110,
        marginLeft:10,
        marginBottom: 3,
        borderRadius: 10,
        width: '95%',
        marginTop: 10,
        backgroundColor: 'rgb(182,223,221)'
               
    },
    card2:{
        height:110,
        marginLeft:10,
        marginBottom: 3,
        borderRadius: 10,
        width: '95%',
        marginTop: 10,
        backgroundColor: 'rgb(66,156,195)'
               
    },
    card3:{
        height:110,
        marginLeft:10,
        marginBottom: 3,
        borderRadius: 10,
        width: '95%',
        marginTop: 10,
        backgroundColor: 'rgb(51,123,168)'
               
    },
    card4:{
        height:110,
        marginLeft:10,
        marginBottom: 3,
        borderRadius: 10,
        width: '95%',
        marginTop: 10,
        backgroundColor: 'rgb(33,82,114)'
               
    },
    immagine:{
        backgroundColor:'rgba(56, 172, 236, 1)',
        borderWidth:0,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        height: '110%',
        flex:1,
        marginLeft: '0%'
    },
    scelta: {
        fontSize: 26,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 20,
        color:'#1979a9',
        fontWeight: "bold"

    }
});