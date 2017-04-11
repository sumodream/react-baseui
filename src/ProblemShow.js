import React from 'react'
import ProblemShowKeGuanTi from './ProblemShowKeGuanTi';
import ProblemShowZhuGuanTi from './ProblemShowZhuGuanTi';
module.exports =  React.createClass({
	getInitialState(){
		return {};
	},
	render() {

		if (!this.props.data) return null;
		return this.props.data.choices?<ProblemShowKeGuanTi data={this.props.data} quesNum={this.props.quesNum}/>:<ProblemShowZhuGuanTi data={this.props.data} quesNum={this.props.quesNum}/>;
	}
})
