import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

import Event from '../components/Event';
import Firebase from '../config/firebase';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[
        {
          date:'28th Feb 2019',
          description:'console.log(items)',
          icon:'https://firebasestorage.googleapis.com/v0/b/mumbai-runners-fcd30.appspot.com/o/Icons%2FHIIT.png?alt=media&token=0121e4f0-c0c6-4dde-96bb-e7a7688b0ca7',
          location:'Bandra Fort',
          time:'7:30 am to 9:30 am',
          title:'High intensity interval training'
        }
      ],
      books: [
        {
          id: 1,
          title: 'Harry Potter and the Goblet of Fire',
          author: 'J. K. Rowling',
          thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
        },
        {
          id: 2,
          title: 'The Hobbit',
          author: 'J. R. R. Tolkien',
          thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
        },
        {
          id: 3,
          title: '1984',
          author: 'George Orwell',
          thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
        }
      ]
    }
  }

  getEvents(){
    var items = [];
    var joined;
    query = Firebase.database().ref('Events/').orderByKey();
    query.once ('value', (snap) => {
        snap.forEach ( (child) => {
            
          joined = this.state.events.concat(child.val());
          this.setState({ events: joined })
            
        }
    );
    console.log(this.state.events)
}

)  
  //  this.setState({events: items});
    console.log(this.state.events);
}

componentDidMount() {
this.getEvents();
}

  _renderItem = ({item}) => (
    <Event
      date={item.date}
      description={item.description}
      icon={item.icon}
      location={item.location}
      time={item.time}
      title={item.title}
    />
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.events}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          style = {{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e3c3f',
    marginTop:25,
  }
});