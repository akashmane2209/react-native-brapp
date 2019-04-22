//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Shop from '../pages/Shop';
import CustomerDetails from '../pages/CustomerDetails'


const MainNavigator2 = createStackNavigator({
    Home: {
      screen: Shop,
    },
    CustomerDetails: {
      screen: CustomerDetails,
    }
  },
  {
      initialRouteName: 'CustomerDetails',
      headerMode:'float',
      backgroundColor :'red'
  }
  )

const EcommerceScreen = createAppContainer(MainNavigator2)

// create a component
class Ecommerce extends Component {
    render() {
        return (
            <View style={styles.container}>
                <EcommerceScreen/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcc429',
    },
});

//make this component available to the app
export default Ecommerce;
