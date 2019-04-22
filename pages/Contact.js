//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Firebase from '../config/firebase';

import { Ionicons } from '@expo/vector-icons';


// create a component

const storage = Firebase.storage();
const ref = storage.refFromURL('gs://mumbai-runners-fcd30.appspot.com/Images/contact-us-image.png');
 ref.getDownloadURL().then(function(url) {
    link = url;
  });

class Contact extends Component {

    

    render() {
        return (
    
                <View style={styles.container}>
                    <View style={styles.image}>
                        <Image source = {{uri:link}} style={{height:300,width:300}}></Image>
                    </View>
                    <View style={styles.contactInfo}>
                        <Ionicons name='md-mail' color='#fcc429' size={30}/>
                        <Text style={{fontSize:20, fontWeight:'200', color:'rgba(255,255,255,0.5)'}}>    hello@bombayrunning.com</Text>
                    </View>

                    <View style={styles.contactInfo}>
                        <Ionicons name='md-call' color='#fcc429' size={30}/>
                        <Text style={{fontSize:20, fontWeight:'200', color:'rgba(255,255,255,0.5)'}}>    +022 22566842</Text>
                    </View>

                    <View style={styles.contactInfo}>
                        <Ionicons name='md-globe' color='#fcc429' size={30}/>
                        <Text style={{fontSize:20, fontWeight:'200', color:'rgba(255,255,255,0.5)'}}>    www.bombayrunning.com</Text>
                    </View>

                    <View style={styles.contactInfo}>
                        <Ionicons name='logo-instagram' color='#fcc429' size={30}/>
                        <Text style={{fontSize:20, fontWeight:'200', color:'rgba(255,255,255,0.5)'}}>    @bombayrunning</Text>
                    </View>

                    <View style={styles.contactInfo}>
                        <Ionicons name='logo-facebook' color='#fcc429' size={30}/>
                        <Text style={{fontSize:20, fontWeight:'200', color:'rgba(255,255,255,0.5)'}}>    /bombayrunning</Text>
                    </View>

                </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      backgroundColor:'#3e3c3f',
      flex:1,
      alignItems:'flex-start',
      justifyContent:'flex-start',
      paddingLeft:50
    
    },
    image:{
        paddingHorizontal:5,
        paddingBottom:50,
        alignItems:'flex-start',
        justifyContent:'center',
    },
    inputBox:{
        width:350,
        height:50,
        backgroundColor:'rgba(0,0,0,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'gray',
        marginVertical:10
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#000000'
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
        justifyContent:'center'
    },
    header:{
        backgroundColor:"#fcc429",
        justifyContent:'center',
        flex:1,
        flexDirection:'row',
        fontSize:18,

    },
    description:{
        width:350,
        height:100,
        backgroundColor:'rgba(0,0,0,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'gray',
        marginVertical:10
    },
    title:{
        fontSize: 35,
        fontWeight:'bold',
        color:"#fcc429",
        paddingBottom:10,
    },
    agreement:{
        flexDirection:'row',
        fontSize:10,
        color:'gray',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    contactInfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:20,
    }
});


//make this component available to the app
export default Contact;