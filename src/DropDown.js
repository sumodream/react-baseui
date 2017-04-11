import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HorizontalLayout from './HorizontalLayout'
import VerticalLayout from './VerticalLayout'
import FontIcon from './FontIcon'
import Link from './Link'

class DropDown extends ReactUIBase{
	static get propTypes(){
		return {
			theme:React.PropTypes.string,
			list: React.PropTypes.arrayOf(React.PropTypes.object),
			listStyle: React.PropTypes.object
		}
	}

	static get defaultProps() {
		return {
			theme:'default',
			list:[
				{
					item:'个人中心',
					href:'',
					icon:'icon-iconfont-yonghu',
					fuc:null
				}
			],
			children:'下拉菜单'
		};
	}

	constructor(props) {
	    super(props);
		this.renderDropList.bind(this);
		this.overIndex=-1;
		this.state={
			theme: DropDown.theme[props.theme]
		}
		
	}

	renderDropList(){
		var bodyrect = document.body.getBoundingClientRect();
		var pos = ReactDOM.findDOMNode(this.refs.dropui).getBoundingClientRect();
		var listLast = this.props.list.length-1;
		let theme = this.state.theme;
		let styles = {
			link :{
				display:'flex',
				flexDirection:'row',
				alignItems:'center',
				fontSize:12,
				color:'#333333',
				height:32,
				textDecoration:'none',
				boxSizing:'border-box'
			}
		};
		let listStyle = Object.assign({},styles.link,theme.listStyle.link,this.props.listStyle?this.props.listStyle:{});
		var values = this.props.list.map((item,idx)=>{
			return (
				<Link key={idx} onMouseOver={((idx,evt)=>{
							this.overIndex=idx;
							this.renderDropList();
						}).bind(this,idx)
				} 
				onMouseOut={
					((idx,evt)=>{
									this.overIndex=-1;
									this.renderDropList();
								}).bind(this,idx)
				} 
				href={item.href?item.href:''}
				icon={item.icon?item.icon:''}
			    iconStyle={theme.listStyle.icon}
			    onClick = {item.fuc?item.fuc:null}
				style={Object.assign({},listStyle,{backgroundColor:idx==this.overIndex?'#E7E7E7':'#FFFFFF',borderBottom:idx==listLast?0:'1px solid #f2f2f2'})}>{item.item}</Link>
			)
		});
		ReactDOM.render((
			<div onClick={this.cancel.bind(this)} style={{position:'absolute',left:window.pageXOffset,top:window.pageYOffset,width:bodyrect.width,height:bodyrect.height, display:'flex',flexDirection:'column'}}>
			<div style={{position:'absolute', left:pos.left,top:pos.top+pos.height, width:pos.width, backgroundColor:'white', display:'flex',flexDirection:'column',boxShadow:'#c7c7c7 0 1px 1px',WebkitBoxShadow:'#c7c7c7 0 1px 1px'}}>
			<VerticalLayout style={{alignItems:'stretch'}}>
			{values}
			</VerticalLayout>
			</div>
			</div>
		), this.dropElem);

	}

	showList(){
		if (typeof this.dropElem == 'undefined'){
			this.dropElem = document.createElement('div');
			document.body.appendChild(this.dropElem);
		}
		this.renderDropList();
	}
	cancel(){
		ReactDOM.unmountComponentAtNode(this.dropElem);
		this.dropElem.parentNode.removeChild(this.dropElem);
		this.dropElem=undefined;
	}
	
	render(){ 
		var styles={
			title:{
				display:'flex',
				height: 40,
				justifyContent:'space-between',
				alignItems:'center',
				cursor:'pointer',
				fontSize: 14,
				color: '#4d4d4d'
			},
			downIcon:{
				marginLeft:6,
				fontSize:18
			}
		};
		return(
			<HorizontalLayout style={this.style(styles.title)} ref='dropui' onClick={this.showList.bind(this)}>
				{this.props.children}
				<FontIcon style={styles.downIcon} icon={'icon-down-dir-1'}></FontIcon>
			</HorizontalLayout>
		)
	} 
}
DropDown.theme = {
	default:{
		listStyle:{
			link:{
				height: 40
			},
			icon:{
				color: '#b1b1b1'
			}
		}
	}
};
module.exports = DropDown;