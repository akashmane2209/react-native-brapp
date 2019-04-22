//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TouchableHighlight, Alert, TextInput, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';


// create a component
class Product extends Component {

    state = {
        modalVisible: false,
        name: '',
        address: '',
        city: '',
        pincode: ''
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }


    _onBuy = () => {
        console.log("Press");
        this.props.navigation.navigate('CustomerDetails')
    }

    render() {
        return (
            <View>
                <View style={styles.modalContainer}>
                    <Modal

                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Use Cancel to go back');
                        }}>
                        <View style={styles.modalContainer}>
                            <View>
                                <Text style={{ color: '#fcc429', fontSize: 27, fontWeight: 'bold', alignSelf: 'center', marginBottom: 15 }}>Payment Details</Text>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder='Name'
                                    placeholderTextColor='gray'
                                    onChangeText={(name) => this.setState({ name })}
                                />

                                <TextInput style={styles.description}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder='Address'
                                    placeholderTextColor='gray'
                                    onChangeText={(address) => this.setState({ address })}
                                    multiline
                                />

                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder='City'
                                    placeholderTextColor='gray'
                                    onChangeText={(city) => this.setState({ city })}
                                />

                                <Text style={styles.text}>Product : {this.props.title}</Text>
                                <Text style={styles.text}>Price : {this.props.price}</Text>

                                <TouchableOpacity style={styles.button}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={styles.buttonText}>Pay Now!</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.button}
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <View style={styles.rowContainer}>
                        <Image source={{ uri: this.props.thumbnail }}
                            style={styles.thumbnail}
                            resizeMode="contain" />
                        <View style={styles.rowText}>
                            <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>
                                {this.props.title}
                            </Text>
                            <Text style={styles.price} numberOfLines={1} ellipsizeMode={'tail'}>
                                {this.props.price}
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: 200,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset: { width: 1, height: 1, },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1
    },
    title: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(255,255,255)'
    },
    description: {
        width: Dimensions.get('window').width - 60,
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'gray',
        marginVertical: 10
    },
    modalContainer: {
        backgroundColor: '#3e3c3f',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: '#fcc429',
        fontSize: 18,
        fontWeight: 'bold'
    },
    price: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: 'rgb(255,255,255)'
    },
    thumbnail: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    rowText: {
        flex: 2,
        flexDirection: 'column'
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
    inputBox: {
        width: Dimensions.get('window').width - 60,
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 25,
        paddingHorizontal: 12,
        fontSize: 16,
        color: 'gray',
        marginVertical: 10
    },
});

//make this component available to the app
export default Product;
