/* @flow */
'use strict';
import React ,{Component} from 'react'
import TitleBar from './TitleBar'
import {
	BarChart,
	CombinedChart
} from '../index'
import {StyleSheet,
    View,
    Text} from 'react-native'

export default class BarChartC extends Component{

    constructor(props){
        super(props)
        this.getBarData = this.getBarData.bind(this)
        this.getRandomData = this.getRandomData.bind(this)
    }

	getBarData () {
		var data={
			xValues:['1','2','3'],
			yValues:[
				{
					data:[4.0,5.0,6.0],
					label:'test1',
					config:{
						color:'blue'
					}
				},
				{
					data:[4.0,5.0,6.0],
					label:'test2',
					config:{
						color:'red'
					}
				},
				{
					data:[4.0,5.0,6.0],
					label:'test2',
					config:{
						color:'yellow'
					}
				}
			]
		};	
		return data;
	}

	getRandomData() {
		var data={};
		data['xValues']=[];
		data['yValues']=[
			{
				data:[],
				label:'test1',
				config:{
					color:'blue'
				}
			}
		];
		for (var i = 0; i < 500; i++) {
			data.xValues.push(i+'');
			data.yValues[0].data.push(Math.random()*100);
		};
		return data;
	}

	render() {
		return (
			<View style={styles.container}>
				<TitleBar/>
				<View style={styles.chartContainer}>
					<BarChart style={{flex:1}} data={this.getBarData()}/>
					<BarChart 
						style={{flex:1}} 
						data={this.getRandomData()}
						visibleXRange={[0,30]}
						maxVisibleValueCount={50} 
				        xAxis={{drawGridLines:false,gridLineWidth:1,position:"BOTTOM"}}
				        yAxisRight={{enable:false}} 
				        yAxis={{startAtZero:false,drawGridLines:false,position:"INSIDE_CHART"}}
				        drawGridBackground={false}
				        backgroundColor={"WHITE"} 
				        description={"测试"}
				        legend={{enable:true,position:'ABOVE_CHART_LEFT',direction:"LEFT_TO_RIGHT"}}
						/>
				</View>
			</View>
		)
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


