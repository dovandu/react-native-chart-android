/* @flow */
'use strict';
import React ,{Component} from 'react'
import TitleBar from './TitleBar'
import {
    RadarChart,
} from '../index'
import {StyleSheet,
    View,
    Text} from 'react-native'

export default class RadarChartC extends Component{

    constructor(props){
        super(props)
        this.getRadarData = this.getRadarData.bind(this)
        this.getRandomData = this.getRandomData.bind(this)
    }

	getRadarData () {
	    var radarData={
			name:'2016-11-4',
			data:[0.5,0.6,0.7,0.4,0.55],
			parties:['Sugar','Carl','Vitamin','Water','Others'],
		};	
		return radarData;
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.chartContainer}>
					<RadarChart 
					style={{flex:1}}
					data={this.getLineData()}
					webLineWidth={1}
					/>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1
	},
	chartContainer:{
		flex:1
	},
	chart:{
		flex:1
	}
});

