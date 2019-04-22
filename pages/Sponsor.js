//import liraries
import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Firebase from '../config/firebase';
import {Checkbox} from 'react-native-paper';
import {Header} from 'react-navigation';


// create a component
class Sponsor extends Component {

    

    constructor(props){
        super(props)
    
        this.state = ({
            email:'',
            name:'',
            phone:'',
            company:'',
            title:'',
            description:'',
            errorMessage:'',
            checked:''
        })
    }


    sponsorRequest = (name,email,phone,title,company,description,checked) => {
        console.log(this.state);

        emailregex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        phoneregex=/^^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
        console.log(phoneregex.test(phone))
        if(phoneregex.test(phone) && emailregex.test(email) && name!=" " && title!=" " & company!=" " && description!=" " && checked==true)
        {

            requestID = Firebase.database().ref().child('Sponsor-Request').push().key;
            ref = '/Sponsor-Request/'+requestID;

            Firebase.database().ref(ref).set(
                {
                    name: name,
                    email: email,
                    phone: phone,
                    company: company,
                    title: title,
                    description: description
                }
            ).then(() =>{
                Alert.alert("Request sent successfully!", "Thank You for your response we will get back to you soon")
            }).catch((error) => {
                Alert.alert(error)
                console.log(error)
            });

            this.props.navigation.navigate('Sponsor')
        }
        else{
            Alert.alert("Invalid input data or failed to agree to Terms and Conditions")
        }
    }

    render() {
        
        return (
            
            <View style={styles.container}>
                <Text style={styles.title}>Partner with us!</Text>

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
                    placeholder='Phone Number' 
                    placeholderTextColor='gray'
                    onChangeText={(phone) => this.setState({phone})}
                />

                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder='Company Name' 
                    placeholderTextColor='gray'
                    onChangeText={(company) => this.setState({company})}
                />
                <KeyboardAvoidingView
                    keyboardVerticalOffset = {Header.HEIGHT + 20}
                    behavior = "padding" >
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder='Title' 
                    placeholderTextColor='gray'
                    onChangeText={(title) => this.setState({title})}
                />

                <TextInput style={styles.description} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder='How can we help you?' 
                    placeholderTextColor='gray'   
                    onChangeText={(description) => this.setState({description})}
                    multiline  
                />
                </KeyboardAvoidingView>

                <View style={styles.agreement}>
                    <Checkbox
                        status={this.state.checked ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: !this.state.checked }); }}
                        color='#fcc429'
                        uncheckedColor='gray'
                    />
                    <Text style={{color:'gray',}}>I agree to Terms & Conditions</Text>
                </View>

                <TouchableOpacity style={styles.button} 
                    onPress={() => this.sponsorRequest(this.state.name,this.state.email,this.state.phone,this.state.title,this.state.company,this.state.description,this.state.checked)}
                    >
                        <Text style={styles.buttonText}>Send Request</Text>
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
    }
});

//make this component available to the app
export default Sponsor;
