
import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { View, Platform, StatusBar } from 'react-native'
import { TabNavigator, createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import devToolsEnhancer from 'remote-redux-devtools';

import { purple, white } from '../utils/colors'
import { setLocalNotification } from '../utils/helpers'

import Track from '../pages/Track';
import Train from '../pages/Train';
import AddEntry from '../components/AddEntry'
import History from '../components/History'
import Live from '../components/Live'
import EntryDetail from '../components/EntryDetail'
import CustomerDetails from '../pages/CustomerDetails'


import reducer from '../reducers' 
// create a component


// define your styles

//make this component available to the app
const TabsNavigator =  createMaterialTopTabNavigator({
    History: {
        screen: History,
        navigationOptions: {
          tabBarLabel: 'History',
          tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        }
      },
      AddEntry: {
        screen: AddEntry,
        navigationOptions: {
          tabBarLabel: 'Add Entry',
          tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        },
      },
      Live: {
        screen: Live,
        navigationOptions: {
          tabBarLabel: 'Live',
          tabBarIcon: ({ tintColor }) => <Ionicons name='ios-speedometer' size={30} color={tintColor} />
        },
      },   
    Train: { screen: Train,
        navigationOptions:{
            tabBarLabel:'Train',
            tabBarIcon: ({tintColor}) =>
            <Ionicons name="md-fitness" color={tintColor} size={28} />, 
        }
    },
  }, 
  {
  tabBarOptions: {
    activeTintColor :'#fcc429',
    labelStyle: {
      fontSize: 14, 
    },
    tabStyle: {
        flexDirection:'row',
        padding:10,
        marginTop:20,
    },
    showIcon: true ,
    
    style: {
      backgroundColor: '#3e3c3f',
    },
  }
},
{
    headerMode:'float'
});

const MainNavigator = createStackNavigator({
    Home: {
      screen: TabsNavigator,
    },
   
    CustomerDetails:{
      screen:CustomerDetails
    }
  },
  {
      headerMode:'float',
      backgroundColor :'red'
  }
  )

const FitnessScreen = createAppContainer(TabsNavigator)

  const FitnessStatusBar = ({ backgroundColor, props }) => (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor}
        { ...props }
      />
    </View>
  )

  const store = createStore(reducer, devToolsEnhancer());

  export default class Fitness extends Component {
    componentDidMount () {
      setLocalNotification()
    }
    render() {
        return (
          <Provider store={store}>
            <View style={{flex: 1, backgroundColor:'#3e3c3f', marginTop:5}}>
            
              <FitnessScreen />
            </View>
          </Provider>
        )
      }
    }