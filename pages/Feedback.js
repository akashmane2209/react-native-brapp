//import liraries
import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Firebase from '../config/firebase';
import {Checkbox} from 'react-native-paper';



// create a component
class Feedback extends Component {

    

    constructor(props){
        super(props)
    
        this.state = ({
            email:'',
            name:'',
            title:'',
            description:'',
            errorMessage:'',

            checked: false,
        })
    }


    feedbackRequest = (name,email,title,description,checked) => {

        console.log(name)
        console.log(email)
        console.log(title)
        console.log(description)
        console.log(checked)
        emailregex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        console.log(emailregex.test(email))
        if(emailregex.test(email) && name!=" " && title!=" " && description!=" " && checked==true)
        {
            requestID = Firebase.database().ref().child('Feedback-Request').push().key;
            ref = '/Feedback-Request/'+requestID;

            Firebase.database().ref(ref).set(
                {
                    name: name,
                    email: email,   
                    title: title,
                    description: description
                }
            ).then(() =>{
                Alert.alert("Request sent successfully!", "Thank You for your response we will get back to you soon")
            }).catch((error) => {
                Alert.alert(error)
                console.log(error)
            });

            this.props.navigation.navigate('Feedback')
        }
        else{
            Alert.alert("Error","Invalid Email ID or some fields are empty or You have not agreed to the Terms & Conditions")
        }

        
    }

    render() {
        
        

        return (
            

            
            

            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>Queries Here</Text>

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
                    placeholder='Title' 
                    placeholderTextColor='gray'
                    onChangeText={(title) => this.setState({title})}
                />

                <TextInput style={styles.description} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder='Description' 
                    placeholderTextColor='gray'   
                    onChangeText={(description) => this.setState({description})}  
                />
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
                    onPress={() => this.feedbackRequest(this.state.name,this.state.email,this.state.title,this.state.description,this.state.checked)}
                    >
                        <Text style={styles.buttonText}>Write to Us</Text>
                </TouchableOpacity>

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
      paddingHorizontal:10,
        
    },
    inputBox:{
        width:350,
        height:50,
        backgroundColor:'rgba(0,0,0,0.2)',
        borderRadius: 25,
        paddingHorizontal:12,
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
        height:200,
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
        paddingBottom:25,
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
export default Feedback;
