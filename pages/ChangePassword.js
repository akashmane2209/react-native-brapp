//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, AlertIOS, Alert } from 'react-native';
import Firebase from '../config/firebase';

import * as firebase from 'firebase';




// create a component
class ChangePassword extends Component {

    constructor(props)
    {
        super(props)
        state={
            currentPassword:'',
            newPassword:'',
        }
    }

    reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        user.reauthenticateAndRetrieveDataWithCredential(cred).then(()=>{
            user.updatePassword(this.state.newPassword).then(() => {
                Alert.alert("Password changed","Log in again with new password");
                firebase.auth().signOut().then(function() {
                    this.props.navigation.navigate('Login')
              })
              }).catch((error) => { Alert.alert(error.message); });
            }).catch((error) => { Alert.alert(error.message) });
        
            
      }
    
      // Changes user's password...
    /*  onChangePasswordPress = () => {
        this.reauthenticate(this.state.currentPassword).then(() => {
          var user = Firebase.auth().currentUser;
          user.updatePassword(this.state.newPassword).then(() => {
            Alert.alert("Password was changed");
          }).catch((error) => { console.log(error.message); });
        }).catch((error) => { console.log(error.message) });
      }*/

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Change Password</Text>
                

                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder='Current Password' 
                    placeholderTextColor='gray'   
                    secureTextEntry
                    onChangeText={(currentPassword) => this.setState({currentPassword})}  
                />

                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder='New Password' 
                    placeholderTextColor='gray' 
                    secureTextEntry  
                    onChangeText={(newPassword) => this.setState({newPassword})}  
                />

                <TouchableOpacity style={styles.button} 
                    onPress={() => this.reauthenticate(this.state.currentPassword)}
                    >
                        <Text style={styles.buttonText}>Change Password</Text>
                </TouchableOpacity>

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
        paddingHorizontal:10,
    
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
export default ChangePassword;
