import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';


export default class Event extends Component {
    render() {
        return(
          <View style={styles.rowContainer}>
            <Image source={{uri: this.props.icon}}
            style={styles.thumbnail}
            resizeMode="contain" />
            <View style={styles.rowText}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                {this.props.title}
              </Text>
    
              <Text style={styles.price} numberOfLines={1} ellipsizeMode ={'tail'}> Date: 
                {this.props.date}
              </Text>

              <Text style={styles.price} numberOfLines={1} ellipsizeMode ={'tail'}> Location: 
                {this.props.location}
              </Text>

              <Text style={styles.price} numberOfLines={1} ellipsizeMode ={'tail'}> Time: 
                {this.props.time}
              </Text>

              
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor:'rgba(0,0,0,0.2)',
        height: 120,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1
    },
    title: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(255,255,255)'
    },
    price: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: 'rgb(255,255,255)'
    },
    thumbnail: {
        flex: 1,
        alignItems:'center',
        height: 100,
        width: 100
    },
    rowText: {
        flex: 2,
        flexDirection: 'column'
    },
    button:{
        width:300,
        height:50,
        backgroundColor:'#fcc429',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },
  });