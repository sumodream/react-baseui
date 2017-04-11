import YXReactUIBase from '../framework/uibase';
import React from 'react'
import HorizontalLayout from './HorizontalLayout'
import VerticalLayout from './VerticalLayout'
import Text from './Text'
var color = require('../common/color');
class Popover extends YXReactUIBase{
	static get propTypes() {
		return {
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlack','infoWhite','infoGray','warningRev']),
			width:React.PropTypes.number,
			icon:React.PropTypes.string,
			title:React.PropTypes.oneOfType([
				React.PropTypes.string,
				React.PropTypes.element
			]),
			trigger:React.PropTypes.oneOf(['hover','click']),
			content:React.PropTypes.object,
			placement:React.PropTypes.oneOf(['left','center','right']),
		}
	}
	static get defaultProps() {
	    return {
			width:250,
			title: '气泡',
			theme: 'primary',
			trigger:'hover',
			placement:'center',
			content:<VerticalLayout style={{width: 250}}>
					    <Text>默认气泡卡片</Text>
					    <Text>嗯,我是默认不带图标的滑入式气泡泡~~</Text>
					</VerticalLayout>
		}
	}
	constructor(props) {
	    super(props);
		this.renderPopup.bind(this);
		this.state = {
			theme : Popover.theme[props.theme],
			placement : Popover.placement[props.placement]
		};
	}
	renderPopup(elem,ui,src){
		var bodyrect = document.body.getBoundingClientRect();
		var pos = ReactDOM.findDOMNode(this.refs[ui]).getBoundingClientRect();
		ReactDOM.render((
			<div>
				{this.props.trigger=='click'?
				<div onClick={this.cancel.bind(this)}  style={{position:'absolute',left:window.pageXOffset,top:(window.pageYOffset+pos.top+pos.height+10)/2,width:bodyrect.width,height:bodyrect.height, display:'flex',flexDirection:'column',paddingTop:(window.pageYOffset+pos.top+pos.height+10)/2}}>
					<VerticalLayout style={{position:'absolute',left:pos.left-(this.props.width+40-pos.width)/2,display:'flex',flexDirection:'column',alignSelf:'center'}}>
						<VerticalLayout style={{
						        width: this.props.width,
						        background: this.state.theme.bg,
						        borderRadius: 5,
						        border: `1px solid ${this.state.theme.bg}`,
						        boxShadow:'0 0 12px rgba(0, 0, 0, .5)',
								padding:20,
								lineHeight:1.2,
								position: 'relative',
								color:this.state.theme.color,
								textAlign: 'justify',
								fontSize:14,
								marginLeft:this.state.placement.marginLeft
							}}>
							{this.props.content}
							<Text style={{
					                width: 0,
					                height: 0,
					                borderStyle: 'solid',
					                borderWidth: '0 10px 10px 10px',
					                borderColor: `transparent transparent ${this.state.theme.bg} transparent`,
					                position: 'absolute',
					                marginLeft:this.props.width/this.state.placement.position,
					                marginTop:-(this.props.width/8.33)
					           }}></Text>
						</VerticalLayout>
					</VerticalLayout>
				</div>:
				<VerticalLayout style={{position:'absolute',left:pos.left-(this.props.width+40-pos.width)/2,top:window.pageYOffset+pos.top+pos.height+10, display:'flex',flexDirection:'column',alignSelf:'center'}}>
					<VerticalLayout style={{
					        width: this.props.width,
					        background: this.state.theme.bg,
					        borderRadius: 5,
					        border: `1px solid ${this.state.theme.bg}`,
					        boxShadow:'0 0 12px rgba(0, 0, 0, .5)',
							padding: 20,
							lineHeight:1.2,
							position: 'relative',
							color:this.state.theme.color,
							textAlign: 'justify',
							fontSize:14,
							marginLeft:this.state.placement.marginLeft
						}}>
						{this.props.content}
						<Text style={{
				                width: 0,
				                height: 0,
				                borderStyle: 'solid',
				                borderWidth: '0 10px 10px 10px',
				                borderColor: `transparent transparent ${this.state.theme.bg} transparent`,
				                position: 'absolute',
				                marginLeft:this.props.width/this.state.placement.position,
				                marginTop:-(this.props.width/8.33)
				           }}></Text>
					</VerticalLayout>
				</VerticalLayout>}
			</div>
			),elem);
		this.popElem
	}
	popMouseOver(){
		if(typeof this.popElem == 'undefined'){
			this.popElem = document.createElement('div');
			document.body.appendChild(this.popElem);
		}
		this.renderPopup(this.popElem,'popui',this.props.content);
	}
	popMouseOut(){
		ReactDOM.unmountComponentAtNode(this.popElem);
		this.popElem=undefined;
	}
	cancel(e) {
        if (typeof this.popElem == 'undefined') return;
        ReactDOM.unmountComponentAtNode(this.popElem);
        this.popElem.parentNode.removeChild(this.popElem);
        this.popElem = undefined;
    }
	changPop(e){
		if(typeof this.popElem == 'undefined'){
			this.popElem = document.createElement('div');
			document.body.appendChild(this.popElem);
		}
		this.renderPopup(this.popElem,'popui',this.props.content);
		e.preventDefault();
        e.stopPropagation();
	}
	render(){
		var styles = {
			Popover:{
			    alignItems:'center',
				alignSelf:'stretch',
				justifycontentent:'center',
				cursor:'pointer',
			}
		}
		return (
			<VerticalLayout style={this.style(styles)}>
				<HorizontalLayout style={styles.Popover}>
				{this.props.trigger=='click'?
					<div ref='popui' onClick={this.changPop.bind(this)}> 
						{this.props.icon?<i className={"fontello  "+this.props.icon}></i>:''}
						{this.props.title?<span>{this.props.title}</span>:''}
						{this.props.children}
					</div>:
					<div ref='popui' onMouseOver={this.popMouseOver.bind(this)} onMouseOut={this.popMouseOut.bind(this)}> 
						{this.props.icon?<i className={"fontello  "+this.props.icon}></i>:''}
						{this.props.title?<span>{this.props.title}</span>:''}
						{this.props.children}
					</div>}
				</HorizontalLayout>
			</VerticalLayout>
		)
	} 
}
Popover.placement = {
		right:{
			position:1.1,
			marginLeft:-114
		},
		center:{
			position:2.232,
			marginLeft:0
		},
		left:{
			position:91.67,
			marginLeft:114
		}
	};
Popover.theme = {
			primary:{
				bg: color.b03,
				color:color.c01
			},
			danger:{
				bg: color.b08,
				color:color.c01
			},
			success:{
				bg: color.b04,
				color:color.c01
			},
			warning:{
				bg: color.b06,
				color:color.c01
			},
			warningRev:{
				bg: color.c01,
				color:color.b06
			},
			info:{
				bg: color.c03,
				color:color.c01
			},
			default:{
				bg: color.a06,
				color:color.c01
			},
			infoBlack:{
				bg: color.c01,
				color:color.c11
			},
			infoWhite:{
				bg: color.c13,
				color:color.c01
			},
			infoGray:{
				bg: color.c15,
				color:color.c01
			}
		};
module.exports = Popover;

