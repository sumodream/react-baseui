import YXReactUIBase from '../framework/uibase'
import React from 'react'
var color = require('../common/color');
class PlateSwitch extends YXReactUIBase{
	static get propTypes() {
		return {
			values: React.PropTypes.arrayOf(React.PropTypes.string),
			disabled:React.PropTypes.arrayOf(React.PropTypes.bool),
			default: React.PropTypes.number,
			onChange: React.PropTypes.func,
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlack','infoWhite','infoGray','disabled']),
		}
	}
	static get defaultProps() {
	    return {
	    	values: ['对比班级','对比年级'],
	    	theme:'primary'
	    }
	}
	constructor(props){
		super(props);
		this.state={
			activeIndex:props.default?props.default:0,
			theme : PlateSwitch.theme[props.theme]
		}
	}
	itemChange(index){
		if(this.props.onChange){
			this.props.onChange(index);
		}
		if(this.state.activeIndex != index &&(!this.props.disabled || !this.props.disabled[index]) ){
			this.setState({
				activeIndex: index
			})
		}
	}
	render(){
		let objStyle=this.state.theme;
		let wrapStyle = this.style({
				position: 'relative',
				width: 170,
				height: 26,
				borderRadius: 20,
				border: '1px solid',
				borderColor: objStyle.color,
				boxSizing:'border-box',
				fontSize: 12,
				textAlign: 'center',
				WebkitUserSelect: 'none'
			});


		var style = {
			wrap:{
				position: 'relative',
				width: 170,
				height: 26,
				borderRadius: 20,
				border: '1px solid',
				borderColor: objStyle.color,
				boxSizing:'border-box',
				fontSize: 12,
				textAlign: 'center',
				WebkitUserSelect: 'none'
			},
			bg:{
				position: 'absolute',
				top: 0,
				left:this.state.activeIndex?wrapStyle.width/2:-1,
				width: wrapStyle.width/2-1,
				height: wrapStyle.height-2,
				backgroundColor: objStyle.color,
				borderRadius: 20
			},
			itemFirst:{
				display:'flex',
				position: 'absolute',
				top: 0,
				left:0,
				width: wrapStyle.width/2,
				height: wrapStyle.height,
				alignItems:'center',
				justifyContent:'center',
				cursor: 'pointer',
				boxSizing:'border-box',
				color: this.state.activeIndex?objStyle.color:'#ffffff'
			},
			itemLast:{
				display:'flex',
				position: 'absolute',
				top: 0,
				right:0,
				width: wrapStyle.width/2,
				height: wrapStyle.height,
				alignItems:'center',
				justifyContent:'center',
				cursor: 'pointer',
				boxSizing:'border-box',
				color: this.state.activeIndex?'#ffffff':objStyle.color
			}
  
		}
		return (
			<div style={this.style(wrapStyle)}>
				<div {...this.props} style={style.bg}/>
				<span style={style.itemFirst} onClick={this.itemChange.bind(this,0)}>{this.props.values[0]}</span>
				<span style={style.itemLast} onClick={this.itemChange.bind(this,1)}>{this.props.values[1]}</span>
			</div>
			)
	}
}
PlateSwitch.theme = {
			primary:{
				color: color.b03,
			},
			danger:{
				color: color.b08,
			},
			success:{
				color: color.b04,
			},
			warning:{
				color: color.b06,
			},
			info:{
				color: color.c03,
			},
			default:{
				color: color.a06,
			},
			infoBlack:{
				color: color.c01,
			},
			infoWhite:{
				color: color.c13,
			},
			infoGray:{
				color: color.c15,
			},
			disabled:{
				color: color.c03,
			}
		};
module.exports = PlateSwitch;