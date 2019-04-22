//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Logo from '../components/Logo';


// create a component
class SignUp extends Component {

    constructor(props){
        super(props)

        this.state = ({
            email:'',
            password:'',
            errorMessage:''
        })
    }

    signUpUser = (email,password) => {

        if(password.length > 6){
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => this.setState({ errorMessage: error.message }))
        }
        else
        {
            Alert.alert("Sign Up Failed","Password should be greater than 6 characters!")
        }
}



    render() {
        return (
            <View style={styles.container}>
            <Logo/>
            <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
                <ScrollView>
                <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder='Name' 
                        placeholderTextColor='gray'
                        onChangeText={(name) => this.setState({name})}
                        />

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
                    onPress={() => this.signUpUser(this.state.email,this.state.password)}
                    >
                        <Text style={styles.buttonText}>Join the Crew</Text>
                    </TouchableOpacity>

                    <View style={styles.signUpCont}>
                        <Text style={styles.signUpText}>Already have an account?</Text>
                        <TouchableOpacity style={styles.signUpButton} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.signUpText1}> Sign In!</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
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
export default SignUp;
