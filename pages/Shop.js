//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, ListView, WebView, ScrollView, BackHandler } from 'react-native';

import Product from '../components/Product';
import Firebase from '../config/firebase';

var ref = Firebase.database().ref('Products');
var data = []

// create a component
class Shop extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            products: [],
            enablePTR: true
        }
    }

    getProducts() {
        var items = [];
        var joined;
        query = Firebase.database().ref('Products/').orderByKey();
        query.once('value', (snap) => {
            snap.forEach((child) => {

                joined = this.state.products.concat(child.val());
                this.setState({ products: joined })

            }
            );
        }
        )
        this.setState({ products: items });
        console.log(this.state.products);
    }

    componentDidMount() {
        this.getProducts();
    }


    _renderItem = ({ item }) => (
        <Product
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
        />
    );


    
    webView = {
        canGoBack: false,
        ref: null,
      }
    
      onAndroidBackPress = () => {
        if (this.webView.canGoBack && this.webView.ref) {
          this.webView.ref.goBack();
          return true;
        }
        return false;
      }
    
      componentWillMount() {
        if (Platform.OS === 'android') {
          BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
        }
      }
    
      componentWillUnmount() {
        if (Platform.OS === 'android') {
          BackHandler.removeEventListener('hardwareBackPress');
        }
      }
    
      render() {
        return (

            <View style={{flex:1,backgroundColor:'#3e3c3f'}}>
                <WebView
                    source={{ uri: "https://bombay-running.myshopify.com/" }}
                    ref={(webView) => { this.webView.ref = webView; }}
                    onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
                    style={{marginTop:20}}

                />
          </View>
        );
      }


    /* return (
        https://shop-bombayrunning.myshopify.com/collections/all
         <View style={styles.container}>
             <StatusBar
                 barStyle="light-content"
             />
             <FlatList
                 data={this.state.products}
                 renderItem={this._renderItem}
                 style = {{ flex: 1 }}
             />
         </View>
     );*/

}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3e3c3f',
        paddingTop: 25
    }
});

//make this component available to the app
export default Shop;
