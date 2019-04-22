//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
import Forn from '../components/Form';

// create a component
class Login extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: 'float',
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <Forn/>

                
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container : {
      
    },

    signUpCont:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop:100,
    },
    signUpText:{
        color:'#fcc429',
        fontSize:16,
        
    },
    signUpText1:{
        fontWeight:'500',
        color:'#fcc429',
        fontSize:16,
    }
  
    
  });
//make this component available to the app
export default Login;
