import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Track extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Track</Text>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3e3c3f'
	},
});

//make this component available to the app
export default Track;