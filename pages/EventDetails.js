//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class EventDetails extends Component {

    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title', 'NO-ID');
        const description = navigation.getParam('description', 'some default value');
        const time = navigation.getParam('time', 'some default value');
        const location = navigation.getParam('location', 'some default value');

        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(title)}</Text>
                <Text>Description</Text>
                <Text> {JSON.stringify(description)}</Text>
                <Text>Location</Text>
                <Text> {JSON.stringify(location)}</Text>
                <Text>Time</Text>
                <Text> {JSON.stringify(time)}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#3e3c3f',
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          
        },
});

//make this component available to the app
export default EventDetails;
