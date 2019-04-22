// External Components
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { NavigationActions } from  'react-navigation'
import { View, Text, TouchableOpacity, StyleSheet, Platform, AsyncStorage } from 'react-native'


// Our Components
import DateHeader from '../DateHeader'
import TextButton from '../TextButton'
import FitnessSlider from '../FitnessSlider'
import FitnessStepper from '../FitnessStepper'
import SubmitButton from './components/SubmitButton'

// Our Helpers
import { 
  getMetricMetaInfo, 
  timeToString, 
  getDailyReminderValue, 
  clearLocalNotification, 
  setLocalNotification
} from '../../utils/helpers'

import { white } from '../../utils/colors'
import { submitEntry, removeEntry } from '../../utils/api'

// Our Actions
import { addEntry } from '../../actions'

class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }

  // Methods

  increment = (metric) => {
    const { max, step }= getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric]:  (count > max) ? max : count
      }
    })
  }
 
  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        [metric]:  (count < 0) ? 0 : count
      }
    })
  }

  slide = (metric, value) => this.setState({ [ metric ]: value })

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({
      key: 'AddEntry'
    }))
  }

  submit = () => {
    console.log("1")
    const key = timeToString()
    const entry = this.state
    

    this.props.dispatch(addEntry({
      [key]: entry,
      
    }))
    console.log("2")

    this.setState({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    })
    console.log("3")

    this.toHome()
    console.log("4")

    submitEntry({ key, entry })

    console.log("5")

  }

  reset = () => {
    const key = timeToString();
   
    // We want to:
    
    this.props.dispatch(addEntry({
      [key]: getDailyReminderValue(),
    }))

    this.toHome()
    removeEntry(key)
  }

  render () {
    const metaInfo = getMetricMetaInfo();

    if (this.props.isLogged) {
      return (
        <View style={styles.center}>
          <Ionicons style={{color:'white'}}
            name= {Platform.OS === 'ios' ? 'ios-happy-outline' : 'md-happy'}
            size={100} 
          />
          <Text style={{color:'white',padding:10,}}> You alread logged your information for today</Text>
          <TextButton onPress={this.reset}> Reset </TextButton>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <DateHeader date={new Date().toLocaleDateString()} />
        { Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key]

          return (
            <View key={key} style={styles.row}>
              {getIcon()}
              { type === 'slider' 
                  ? <FitnessSlider
                      value={value}
                      onChange={value => this.slide(key, value)}
                      { ...rest }
                    />
                  : <FitnessStepper
                      value={value}
                      onIncrement={() => this.increment(key)}
                      onDecrement={() => this.decrement(key)}
                      { ...rest }
                    />
              }
            </View>
          )
        })}
        <SubmitButton onPress={this.submit} />
      </View>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:white,
    padding:10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor:white,
  }
})

// Redux
export const mapStateToProps = (state = {}) => {
  const key = timeToString();
  
  return {
    isLogged: state[key] && typeof state[key].today === 'undefined',
  }
}

export default connect(
  mapStateToProps,
)(AddEntry)