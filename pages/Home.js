//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to Bombay Running</Text>
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
export default Home;
