import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Firebase from '../config/firebase';
import { FileSystem, WebBrowser } from 'expo';




// create a component
class Train extends Component {

    state = {
        result: null,
      };

      getTrainingPlan5KM = async () => {
        let result = await WebBrowser.openBrowserAsync('https://firebasestorage.googleapis.com/v0/b/mumbai-runners-fcd30.appspot.com/o/Training%20Plan%2F5%20KM%20in%208%20weeks.pdf?alt=media&token=ce997894-cdfb-4521-b4d7-eb2d65c663b5');
        this.setState({ result });
      };

      getTrainingPlan10KM = async () => {
        let result = await WebBrowser.openBrowserAsync('https://firebasestorage.googleapis.com/v0/b/mumbai-runners-fcd30.appspot.com/o/Training%20Plan%2F10%20KM%20in%208%20weeks.pdf?alt=media&token=da60d26c-c116-4a54-96af-d62b7e48a979');
        this.setState({ result });
      };



	render() {
		return (
			<View style={styles.container}>
				<View style={styles.card}>
                    <Text style={styles.cardText}>5KM in 8 weeks</Text>
                        <TouchableOpacity onPress={this.getTrainingPlan5KM}>
                            <ImageBackground source={require('../images/3-months.png')} style={{height:140,width:375,marginTop:10}} />
                        </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardText}>Get Marathon Ready in 8 weeks</Text>
                    <TouchableOpacity onPress={this.getTrainingPlan10KM}>
                        <ImageBackground source={require('../images/6-months.png')} style={{height:140,width:375,marginTop:10}} />
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                <Text style={{color:'white',fontSize:18, fontWeight:'500',paddingVertical:8}}>Disclaimer</Text>
                    <Text style={styles.cardDisclaimer}>To reduce the risk of injury, before before begining this 
                                                        or any exercise program, please consult a health care 
                                                        provider for appropriate excercise prescription and
                                                        safety precautions. The excercise instruction and advise
                                                        presented are in no way intended as a subsitute for 
                                                        medical consultation</Text>
                </View>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
        backgroundColor: '#3e3c3f',
        
    },
    card:{
        flex:2  ,
        padding:15,
    },
    cardText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    },
    cardDisclaimer:{
        color:'gray',
        fontSize:14
    }
});

//make this component available to the app
export default Train;