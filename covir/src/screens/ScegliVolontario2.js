import React from 'react';
import { Title } from 'react-native-paper';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient'; 

export default function ScegliVolontario({navigation}) { //non legge immagin
    return (
    <View>
        <ListItem containerStyle={styles.card} onPress={() => navigation.navigate('Login')}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} 
            linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: { x: 1, y: 0 },
            end: { x: 0.2, y: 0 },}}
            ViewComponent={LinearGradient} // Only if no expo
            >
            <Avatar rounded source={{ uri: 'https://lopinabile.it/wp-content/uploads/2018/07/portrait-of-an-elderly-man-sticking-his-tongue-out-X7WHRG-678x381.jpg' }} containerStyle={styles.immagine}/>
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}><Text>PER OVER 18</Text></ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}><Text>20 disponibili</Text></ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="white" />
        </ListItem>  
        <ListItem containerStyle={styles.card} onPress={() => navigation.navigate('Login')}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} 
            linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: { x: 1, y: 0 },
            end: { x: 0.2, y: 0 },}}
            ViewComponent={LinearGradient} // Only if no expo
            >
            <Avatar rounded source={{ uri: 'https://lopinabile.it/wp-content/uploads/2018/07/portrait-of-an-elderly-man-sticking-his-tongue-out-X7WHRG-678x381.jpg' }} containerStyle={styles.immagine}/>
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}><Text>PER OVER 30</Text></ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}><Text>12 disponibili</Text></ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="white" />
        </ListItem> 
        <ListItem containerStyle={styles.card} onPress={() => navigation.navigate('Login')}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} 
            linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: { x: 1, y: 0 },
            end: { x: 0.2, y: 0 },}}
            ViewComponent={LinearGradient} // Only if no expo
            >
            <Avatar rounded source={{ uri: 'https://lopinabile.it/wp-content/uploads/2018/07/portrait-of-an-elderly-man-sticking-his-tongue-out-X7WHRG-678x381.jpg' }} containerStyle={styles.immagine}  />
            <ListItem.Content>
                <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}><Text>PER OVER 40</Text></ListItem.Title>
                <ListItem.Subtitle style={{ color: 'white' }}><Text>30 disponibili</Text></ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron color="white" />
        </ListItem> 
        <ListItem containerStyle={styles.card} onPress={() => navigation.navigate('Login')}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} 
            linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: { x: 1, y: 0 },
            end: { x: 0.2, y: 0 },}}
            ViewComponent={LinearGradient} // Only if no expo
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
    card:{
        height:145,
        marginLeft:10,
        marginBottom: 3,
        borderRadius: 10,
        width: '95%',
        marginTop: 10
               
    },
    immagine:{
        backgroundColor:'rgba(56, 172, 236, 1)',
        borderWidth:0,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        height:90,
        width:90,
        flex:1,
        marginLeft: '0%'
    }
});