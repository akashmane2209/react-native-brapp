//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { createStackNavigator, createAppContainer } from "react-navigation";


const firebaseConfig = {
    apiKey: "AIzaSyCeNt2-ejsjDNkBU3MCFFBwQtDIcj5UnVE",
    authDomain: "mumbai-runners.firebaseapp.com",
    databaseURL: "https://mumbai-runners.firebaseio.com",
    projectId: "mumbai-runners",
    storageBucket: "",
  };
  
  firebase.initializeApp(firebaseConfig);

// create a component
class Forn extends Component {

    constructor(props){
        super(props)

        this.state = ({
            email:'',
            password:''
        })
    }

    signUpUser = (email,password) => {

    }

    logInUser = (email,password) => {


    }


    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled style={styles.container}>
                <ScrollView>
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder='Email' 
                        placeholderTextColor='gray'
                        onChangeText={(email) => this.setState({email})}
                        />

                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder='Password' 
                        placeholderTextColor='gray'
                        secureTextEntry
                        onChangeText={(password) => this.setState({password})}
                        />
                    <TouchableOpacity style={styles.button} 
                    onPress={() => this.logInUser(this.state.email,this.state.password)}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.signUpCont}>
                        <Text style={styles.signUpText}>Don't have an account yet?</Text>
                        <TouchableOpacity style={styles.signUpButton}>
                            <Text style={styles.signUpText1}> Sign Up!</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
      screen: Forn
    }
  });

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:250
        
    },
    inputBox:{
        width:300,
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
    signUpCont:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop:80,
        
    },
    signUpText:{
        color:'gray',
        fontSize:16,
    },
    signUpText1:{
        fontWeight:'500',
        color:'#fcc429',
        fontSize:16,
    }
});

//make this component available to the app
export default Forn;
