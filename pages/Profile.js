
import Firebase from '../config/firebase';
import React, { Component, } from 'react';
import { View, Image, Text, StyleSheet, Alert, TouchableOpacity, Dimensions, WebView, Modal } from 'react-native';
import { Icon } from 'native-base';

import getTheme from '../theme/components';
import commonColor from '../theme/variables/commonColor';
import { Font } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';



const storage = Firebase.storage();
const ref = storage.refFromURL('gs://mumbai-runners-fcd30.appspot.com/Images/Bombay-Running.jpg');
ref.getDownloadURL().then(function (url) {
    profile = url;
});






// create a component
class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            visible: false,
            email: '',
            modalVisible: false,
        })

        const user = Firebase.auth().currentUser;
        if (user != null) {
            this.state.email = user.email;

        }
    }


    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    verifyUser = () => {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function () {

        }).catch(function (error) {
            // An error happened.
        });

    }

    signOutUser = () => {
        Firebase.auth().signOut().then(function () {

            setTimeout(() => {
                //this.props.navigation.navigate('Login')
            }, 2000)
        })
    }




    render() {
        return (
            <View style={styles.container}>
                <View >
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Use Cancel to go back');
                        }}>
                            <ScrollView style={styles.modalContainer}>
                            <View style={styles.text}>
                                <Text style={{color:'white',}}>
                                Terms & Conditions
                                </Text>
                                <Text style={{color:'white',}}>
By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Mumbai Runners.
                                </Text><Text style={{color:'white',}}>
Mumbai Runners is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.
</Text><Text style={{color:'white',}}>
The Bombay Running app stores and processes personal data that you have provided to us, in order to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Bombay Running app won’t work properly or at all.
</Text><Text style={{color:'white',}}>                     
You should be aware that there are certain things that Mumbai Runners will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Mumbai Runners cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.
</Text><Text style={{color:'white',}}>
If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
</Text><Text style={{color:'white',}}>
Along the same lines, Mumbai Runners cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Mumbai Runners cannot accept responsibility.
</Text><Text style={{color:'white',}}>
With respect to Mumbai Runners’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Mumbai Runners accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
</Text><Text style={{color:'white',}}>
At some point, we may wish to update the app. The app is currently available on Android & iOS – the requirements for both systems(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Mumbai Runners does not promise that it will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
</Text><Text style={{color:'white',}}>
Changes to This Terms and Conditions
</Text><Text style={{color:'white',}}>
We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page. These changes are effective immediately after they are posted on this page.
</Text><Text style={{color:'white',}}>
Contact Us
</Text>
<Text style={{color:'white',}}>
If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us.
                                </Text>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={styles.buttonText}>Close</Text>
                                </TouchableOpacity>
                                </View>
                            </ScrollView>
                    </Modal>
                </View>
                <View style={styles.profile}>
                    <Image source={{ uri: profile }} style={{ width: 100, height: 100 }}></Image>
                </View>
                <View style={styles.ListItem}></View>
                <View style={styles.ListItem}>
                    <Text style={styles.ListItemText}>Email</Text>
                    <Text>      </Text>
                    <Text style={styles.ListItemText}>{this.state.email}</Text>
                </View>

                <View style={styles.ListItem}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TouchableOpacity style={{ width: Dimensions.get('window').width - 60 }} onPress={() => this.props.navigation.navigate('ChangePassword')}>
                            <Text style={styles.ListItemText}>Change Password</Text>
                        </TouchableOpacity>
                        <Icon active name="arrow-forward" style={{ color: '#fcc429' }} />

                    </View>
                </View>

                <View style={styles.ListItem}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TouchableOpacity style={{ width: Dimensions.get('window').width - 60 }} onPress={() => this.props.navigation.navigate('Sponsor')}>
                            <Text style={styles.ListItemText}>Partner with Us</Text>
                        </TouchableOpacity>
                        <Icon active name="arrow-forward" style={{ color: '#fcc429' }} />

                    </View>
                </View>

                <View style={styles.ListItem}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TouchableOpacity style={{ width: Dimensions.get('window').width - 60 }} onPress={() => this.props.navigation.navigate('Feedback')}>
                            <Text style={styles.ListItemText}>Your Feedback</Text>
                        </TouchableOpacity>
                        <Icon active name="arrow-forward" style={{ color: '#fcc429' }} />

                    </View>
                </View>

                <View style={styles.ListItem}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TouchableOpacity style={{ width: Dimensions.get('window').width - 60 }} onPress={() => this.props.navigation.navigate('Contact')}>
                            <Text style={styles.ListItemText}>Contact Us</Text>
                        </TouchableOpacity>
                        <Icon active name="arrow-forward" style={{ color: '#fcc429' }} />

                    </View>
                </View>

                <View style={styles.ListItem}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TouchableOpacity style={{ width: Dimensions.get('window').width - 60 }} onPress={() => this.signOutUser()}>
                            <Text style={styles.ListItemText}>Sign Out</Text>
                        </TouchableOpacity>
                        <Icon active name="arrow-forward" style={{ color: '#fcc429', justifyContent: 'flex-end' }} />
                    </View>

                </View>
                <View style={styles.ListItem}>
                    <TouchableOpacity  onPress={() => {
                        this.setModalVisible(true);
                    }}>
                        <Text style={{color:"#fcc429", alignSelf:'center'}}>Terms and Conditions</Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3e3c3f',
        paddingTop: 50,
        alignItems:'center'
    },
    modalContainer: {
        backgroundColor: '#3e3c3f',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        color:'white',

    },
    icons: {
        backgroundColor: '#fcc429'
    },
    profile: {
        alignItems: 'center',
        padding: 25,
        justifyContent: 'center',
    },
    text:{
        fontSize:12,
        marginTop:25,
        color:'white',
        padding:15
    },
    button: {
        width: Dimensions.get('window').width - 60,
        height: 50,
        backgroundColor: '#fcc429',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000'
    },
    ListItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#fcc429',
        padding: 10,
        borderColor: "#232224",
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    ListItemText: {
        textAlign: 'left',
        fontSize: 20,
        color: 'white',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    }
});


//make this component available to the app
export default Profile;
