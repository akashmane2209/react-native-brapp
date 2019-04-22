//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

// create a component
class CustomerDetails extends Component {

    constructor(props){
        super(props)
    
        this.state = ({
            name:'',
            email:'',
            mobile:'',
            address:'',
            city:'',
            state:''
        })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled style={styles.container}>
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
                        secureTextEntry
                        onChangeText={(email) => this.setState({email})}
                        />
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder='Mobile Number' 
                        placeholderTextColor='gray'
                        secureTextEntry
                        onChangeText={(mobile) => this.setState({mobile})}
                        />
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder='Address' 
                        placeholderTextColor='gray'
                        secureTextEntry
                        onChangeText={(address) => this.setState({address})}
                        />
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder='City' 
                        placeholderTextColor='gray'
                        secureTextEntry
                        onChangeText={(city) => this.setState({city})}
                        />
                    <TextInput style={styles.inputBox} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder='State' 
                        placeholderTextColor='gray'
                        secureTextEntry
                        onChangeText={(state) => this.setState({state})}
                        />
                   
            </KeyboardAvoidingView>
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
});

//make this component available to the app
export default CustomerDetails;
