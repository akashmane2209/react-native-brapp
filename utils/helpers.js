// External Dependencies
import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

// Our Dependencies
import { white, red, orange, blue, lightPurp, pink } from './colors';

const NOTIFICATION_KEY = 'Fitness:notifications'

export function isBetween (num, x, y) {
  if (num >= x && num <= y) {
    return true
  }

  return false
}



export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

// Styles
const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
})

export function getMetricMetaInfo (metric) {
  const info = {
    run: {
      displayName: 'Run',
      max: 50,
      unit: 'KM',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: red }]}>
            <MaterialIcons 
              name='directions-run'
              color={'white'}
              size={35}
            />
          </View>
        )
      }
    },
    bike: {
      displayName: 'Bike',
      max: 100,
      unit: 'KM',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: orange }]}>
            <MaterialCommunityIcons 
              name='bike'
              color={'white'}
              size={35}
            />
          </View>
        )
      }
    },
    swim: {
      displayName: 'Swim',
      max: 9000,
      unit: 'meters',
      step: 1,
      type: 'steppers',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: lightPurp }]}>
            <MaterialCommunityIcons 
              name='swim'
              color={'white'}
              size={35}
            />
          </View>
        )
      }
    },
    sleep: {
      displayName: 'Sleep',
      max: 24,
      unit: 'hours',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: blue }]}>
            <FontAwesome 
              name='bed'
              color={'white'}
              size={35}
            />
          </View>
        )
      }
    },
    eat: {
      displayName: 'Eat',
      max: 10,
      unit: 'rating',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: pink }]}>
            <MaterialCommunityIcons 
              name='food'
              color={'white'}
              size={35}
            />
          </View>
        )
      }
    }
  }

  return typeof metric === 'undefined'
    ? info
    : info[metric]
}

export const getDailyReminderValue = () => {
  return {
    today: '👋 Don\'t  forget to log your data today!'
  }
}

// Notifications

export const createNotification = () => ({
  title: 'Log Your Stats',
  body: '👋 Don\'t  forget to log your data today!',
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true
  }
})

export const clearLocalNotification = () => (
  AysncStorage
    .removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)

)

export const setLocalNotification = () => {
  AsyncStorage
    .getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions
          .askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(), {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AysncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
