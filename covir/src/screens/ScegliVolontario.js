import React from 'react';
import { Title } from 'react-native-paper';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


export default function ScegliVolontario({navigation}) { //non legge immagin
    return (
    <ScrollView>
    <View>


        
    <Card containerStyle={styles.card}>
         
        <Card.Image source={{uri:'https://lopinabile.it/wp-content/uploads/2018/07/portrait-of-an-elderly-man-sticking-his-tongue-out-X7WHRG-678x381.jpg'}} containerStyle={styles.immagine} onPress={() => navigation.navigate('Login')} /> 
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VOLONTARIO OVER 18' />
    </Card>
    <Card containerStyle={styles.card}>
        <Card.Image source={{uri:'anziano3.jpg'}} containerStyle={styles.immagine} onPress={() => navigation.navigate('Login')}/>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VOLONTARIO OVER 30' />
    </Card>
    <Card containerStyle={styles.card}>
        <Card.Image source={require('./anziano3.jpg')} containerStyle={styles.immagine} onPress={() => navigation.navigate('Login')}/>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VOLONTARIO OVER 50' />
    </Card>
    <Card containerStyle={styles.card}>
        <Card.Image source={require('./anziano3.jpg')} containerStyle={styles.immagine} onPress={() => navigation.navigate('Login')}/>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VOLONTARIO OVER 60' />
    </Card>
    </View>
    </ScrollView>
    );
        
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'rgba(56, 172, 236, 1)',
        borderWidth:0,
        borderRadius:20,
        height:145,
        padding: 7,
        marginBottom: -3,
    },
    immagine:{
        backgroundColor:'rgba(56, 172, 236, 1)',
        borderWidth:0,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        height:90
    }
});