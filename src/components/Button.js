/* @flow */
'use strict';
import React, {Component} from 'react'
import { StyleSheet,
    View,
    TouchableOpacity,
    Text } from 'react-native'


class  Button extends Component{


	render() {
		return (
			<TouchableOpacity activeOpacity ={0.5} underlayColor="#B5B5B5" onPress={this.props.onPress}>
		        <View  style={[styles.button,this.props.style]}>
		        	<Text>{this.props.text}</Text>
		        </View>       
      		</TouchableOpacity >
		);
	}

}


var styles = StyleSheet.create({
	button:{
		height:50,
		justifyContent:'center',
		alignItems: 'center',
		borderBottomWidth:1,
		borderBottomColor:'#e5e5e5'
	}
});


export default Button
