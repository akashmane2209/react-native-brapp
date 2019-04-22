//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

import Events from '../pages/Events';
import Fitness from '../pages/Fitness';
import Ecommerce from '../pages/Ecommerce';
import Shop from '../pages/Shop';
import Profile from '../pages/Profile';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// create a component
class Dashboard extends Component {

    state = { currentUser: null }
    componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

    render() {
        return (
            <View style={styles.container}>
                <Text>Dashboard</Text>
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


export default createMaterialBottomTabNavigator({
    Events: { screen: Events,
            navigationOptions:{
                    tabBarLabel:'Events',
                    tabBarIcon: ({tintColor}) =>
                    <Ionicons name="md-planet" color={tintColor} size={26} />,
                } 
    },
    Fitness: { screen: Fitness,
        navigationOptions:{
            tabBarLabel:'Fitness',
            tabBarIcon: ({tintColor}) =>
            <Ionicons name="md-body" color={tintColor} size={26} />, 
        }
    },
    Shop: { screen: Shop,
        navigationOptions:{
            tabBarLabel:'Shop',
            tabBarIcon: ({tintColor}) =>
            <Ionicons name="md-cart" color={tintColor} size={26} />, 
        }
     },
    Profile: { screen: Profile,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon: ({tintColor}) =>
            <Ionicons name="md-person" color={tintColor} size={26} />, 
        }
     },
  }, {
    initialRouteName: 'Events',
    activeColor: '#fcc429',
  inactiveColor: '#8e8e8e',
    barStyle: { backgroundColor: '#252426', },
    shifting:'true',
    labeled :'true'
  });
