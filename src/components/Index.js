/* @flow */
'use strict';
import React ,{Component} from 'react'
import CombinedChart from './CombinedChart'
import Button from './Button'
import CandleChart from './CandleChart'
import LineChart from './LineChart'
import BarChart from './BarChart'

import { StyleSheet,
    View,
    TouchableOpacity,
    Text,
    NativeAppEventEmitter} from 'react-native'

import {Navigator} from 'react-native-deprecated-custom-components'

export default class Index extends Component {

	constructor(props){
		super(props)
		this.onBack = this.onBack.bind(this)
		this.renderScene = this.renderScene.bind(this)
		this.bindSelect = this.bindSelect.bind(this)
		this.onSelect = this.onSelect.bind(this)
	}


	onBack () {
    	this._nav.pop();
  	}


	componentWillMount() {
		NativeAppEventEmitter.addListener('back', this.onBack);
	}


	renderScene(route, navigator) {
		switch(route.name){
			case "main":
				return(
					<View style={styles.container}>
						<Button text={'Bar Chart'} onPress={this.bindSelect('bar')}/>
						<Button text={'Line Chart'} onPress={this.bindSelect('line')}/>
						<Button text={'CandleStick Chart'} onPress={this.bindSelect('candle')}/>
						<Button text={'Combined Chart'} onPress={this.bindSelect('combined')}/>
					</View>
	            );
			break;
			case "bar":
				return (<BarChart nav={navigator}/>)
			break;
			case "line":
				return (<LineChart nav={navigator}/>)
			break;
			case "candle":
				return (<CandleChart nav={navigator}/>)
			break;
			case "combined":
				return (<CombinedChart nav={navigator}/>)
			break;
		}
	}

	bindSelect (name) {
		var me=this;
		return function(){
			me.onSelect(name);
		};
	}

	onSelect (name) {
		this._nav.push({name:name})
	}


  	render() {
	    return (
	    	<Navigator
	            ref={(n)=>this._nav=n}
	            debugOverlay={false}
	            style={{flex:1}}
	            configureScene={(route) => Navigator.SceneConfigs.PushFromRight}
	            initialRoute={{name:'main'}}
	            renderScene={this.renderScene}/>

	    );
  	}
}


var styles = StyleSheet.create({
	container:{
		flex:1
	}
});


