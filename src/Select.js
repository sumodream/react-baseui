import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import VerticalLayout from './VerticalLayout'
import ReactDOM from 'react-dom'
import color from '../common/color'
class Select extends ReactUIBase{
	static get propTypes() {
		return {
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlack','infoWhite','infoGray','disabled']),
			placeholder: React.PropTypes.string,
			onValueChange:React.PropTypes.func,
			choice:React.PropTypes.array,
			showLength: React.PropTypes.number,
			icon:React.PropTypes.string,
			separator:React.PropTypes.string,
			default:React.PropTypes.number,
			itemHoverStyle:React.PropTypes.object,
			listStyle:React.PropTypes.object,
			itemStyle:React.PropTypes.object
		}
	}
	static get defaultProps() {
	    return {
	    	theme: 'default',
			choice:['项目1','项目2'],
			showLength: 6
	    }
	}
	constructor(props) {
	    super(props);
		this.renderPopup.bind(this);
		this.state={
			activeIdx:(typeof this.props.default != 'undefined')?this.props.default:(this.props.placeholder?-1:0),
			theme : Select.theme[props.theme]
		};
		this.overIndex=-1;
	}
	componentWillReceiveProps(nextProps){
		if (typeof nextProps.default != 'undefined'){
			this.setState({activeIdx:nextProps.default});
		}
	}
	onItemChoose(idx, e){
		ReactDOM.unmountComponentAtNode(this.valueElem);
		this.valueElem=undefined;
		this.setState({activeIdx:idx});
		if (this.props.onValueChange) this.props.onValueChange(idx);
		e.preventDefault();
		e.stopPropagation();
	}
	cancel(e){
		ReactDOM.unmountComponentAtNode(this.valueElem);
		this.valueElem=undefined;
	}
	renderPopup(){
		var bodyrect = document.body.getBoundingClientRect();
		var pos = ReactDOM.findDOMNode(this.refs.valueui).getBoundingClientRect();
		var styles = {
			listOriginStyle : {
				display:'flex',
				flexDirection:'column',
				position:'absolute',
				border: '1px solid #E7E7E7',
				borderTop:0,
				left:pos.left,top:pos.top+pos.height,
				width:pos.width,
				backgroundColor:'white',
				color:'#333333',
				fontSize: 12,
				boxSizing:'border-box'
			},
			listStyle : {
				display:'flex',
				flexDirection:'row',
				alignItems:'center',
				flex:'1 0 auto',
				paddingLeft:12,
				cursor:'pointer',
				height:22
			}
		};
		var listStyle = Object.assign({},styles.listOriginStyle,this.props.listStyle);
		styles.listStyle.backgroundColor =listStyle.backgroundColor?'transparent':'#FFFFFF';
		var values = this.props.choice.map((item,idx)=>{
			var style = Object.assign({},styles.listStyle,this.props.itemStyle);
			if (idx==this.overIndex) {
				style.backgroundColor = '#e7e7e7';
				style = Object.assign({},style,this.props.itemHoverStyle)
			}
			return (
				<div key={idx} onMouseOver={((idx,evt)=>{
					this.overIndex=idx;
					this.renderPopup();
				}).bind(this,idx)
				} 
				onMouseOut={
					((idx,evt)=>{
							this.overIndex=-1;
							this.renderPopup();
						}).bind(this,idx)
				}
				 onClick={this.onItemChoose.bind(this,idx)} style={style}><span>{item}</span></div>
			)
		});
		if(this.props.choice.length>this.props.showLength){
			listStyle.height = styles.listStyle.height*this.props.showLength;
			listStyle.overflowX = 'hidden';
			listStyle.overflowY = 'scroll';
		}


		ReactDOM.render((
			<div onClick={this.cancel.bind(this)} style={{position:'absolute',left:window.pageXOffset,top:window.pageYOffset,width:bodyrect.width,height:bodyrect.height, display:'flex',flexDirection:'column'}}>
			<div style={listStyle}>
			<VerticalLayout style={{alignItems:'stretch'}}>
			{values}
			</VerticalLayout>
			</div>
			</div>
		), this.valueElem);
	}
	onValueClick(e){
		if (typeof this.valueElem == 'undefined'){
			this.valueElem = document.createElement('div');
			document.body.appendChild(this.valueElem);
		}
		this.renderPopup();
		e.preventDefault();
		e.stopPropagation();
	}
	render(){ 
		var objStyle = this.state.theme;
		var _this = this;
		var value = this.state.activeIdx==-1?this.props.placeholder:this.props.choice[this.state.activeIdx];
		var styles = {
			breadCrumbBar: {
				alignItems: 'center',
				boxSizing: 'border-box'
			},
			icon: {
				color: objStyle.color,
				fontSize: 16,
				marginRight: 5,
    			marginLeft: -5
			}
		}
		return (
			<div onClick={this.onValueClick.bind(this)} ref='valueui' style={this.style({display:'flex',flexDirection:'row', alignItems:'center', height: 32,boxSizing:'border-box',padding:'0 12px',fontSize:12, color: this.state.activeIdx==-1?'#B6BAC3':'#333',border:'thin solid #E7E7E7'})}>
				{
					this.props.icon?
					<i className={"fontello  "+this.props.icon} style={styles.icon}></i>:''
				}
				<span style={{flex:'1 0 auto'}} >{value}</span>
				{
					_this.props.separator?
					<i className={"fontello  "+this.props.separator} style={{marginLeft:16,color: objStyle.color,}}></i>:''
				}
			</div>
		)
	} 
}
Select.theme = {
			primary:{
				color: color.b03
			},
			danger:{
				color: color.b08
			},
			success:{
				color: color.b04
			},
			warning:{
				color: color.b06
			},
			info:{
				color: color.c03
			},
			default:{
				color: color.a06
			},
			infoBlack:{
				color: color.c01
			},
			infoWhite:{
				color: color.c13
			},
			infoGray:{
				color: color.c15
			},
			disabled:{
				color: color.c03
			}
		};
module.exports = Select;