/* @flow */
'use strict';
import React, {Component} from 'react'
import {  StyleSheet,
    View,
    NativeAppEventEmitter} from 'react-native'
import Button from './Button'


export default class TitleBar extends Component {

	constructor(props){
		super(props)
		this.onBack = this.onBack.bind(this)
	}

	onBack() {
		 NativeAppEventEmitter.emit('back');
	}

	render() {
		return (
		  <View style={styles.container}>
		  	<Button text={"返回"} style={styles.button} onPress={this.onBack}/>
		  </View>
		);
	}
}



var styles = StyleSheet.create({
	container:{
		height:50,
		justifyContent:'flex-start',
		borderBottomWidth:1,
		borderBottomColor:'#e5e5e5'
	},
	button:{
		width:80
	}
});

