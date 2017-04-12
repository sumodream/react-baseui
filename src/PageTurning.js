import ReactUIBase from '../framework/uibase';
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
import FontIcon from './FontIcon'
import color from '../common/color'
class PageTurning extends ReactUIBase{	
	static get propTypes() {
		return {
			page: React.PropTypes.number,
			maxPage: React.PropTypes.number,
			showLength: React.PropTypes.number,
			onPageChange: React.PropTypes.func,
			theme: React.PropTypes.oneOf(['primary','danger','success','warning','info','default','infoBlack','infoWhite','infoGray','disabled']),
		}
	}
	static get defaultProps() {
	    return {
	    	page: 1,
			maxPage: 12,
			showLength: 10,
			theme: 'primary'
		}
	}
	constructor(props){
		super(props);
		this.state={
			hoverPage: -1,
			hoverBtn: -1,
			activePage: props.page,
			theme : PageTurning.theme[props.theme]
		}
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.page != this.props.page){
			this.state.activePage  = nextProps.page;
			this.setState({
                theme : PageTurning.theme[nextProps.theme]
            });
		}
	}
	mouseover(idx){
		this.setState({
			hoverBtn: idx
		});
	}
	mouseout(){
		this.setState({
			hoverBtn: -1
		});
	}
	pagePrev(){
		if(this.state.activePage>1){
			this.pageNumClick(this.state.activePage-1);
		}
	}
	pageNext(){
		if(this.state.activePage<this.props.maxPage){
			this.pageNumClick(this.state.activePage+1);
		}
	}
	pageNumOver(page){
		this.setState({
			hoverPage: page
		});
	}
	pageNumOut(page){
		this.setState({
			hoverPage: -1
		});
	}
	pageNumClick(page){
		if(this.props.onPageChange){
			this.props.onPageChange(page);
		}
		this.setState({
			activePage: page
		});
	}

	render(){
		var objStyle = this.state.theme;
		var styles={
			pageStyle:{
				alignSelf:'stretch',
				alignItems:'center',
				justifyContent:'flex-start',
				paddingTop: 30,
				paddingBottom: 30

			},
			pageButton:{
				display:'flex',
				width: 22,
				height: 22,
				borderRadius:'50%',
				backgroundColor:'#e7e7e7',
				cursor:'pointer',
				justifyContent:'center',
				alignItems:'center'
			},
			pageList:{
				listStyle:'none',
				margin: '0 22px',
				padding: 0
			},
		};
		var pageList = (()=>{
			let pageArr=[];
			let showPageArr = [];
			let maxPage = this.props.maxPage;
			let showLength = this.props.showLength;
			for(let i=1;i<=maxPage;i++){
				pageArr.push(i);
			}
			if(maxPage<=showLength){
				showPageArr = pageArr;
			}else{
				let firstPage = this.state.activePage-1 - (this.state.activePage-1)%showLength;
				if(maxPage-firstPage>=showLength){
					for(let j=0;j<showLength;j++){
						showPageArr.push(pageArr[firstPage+j]);
					}
				}else{
					for(let j=0;j<(maxPage-firstPage);j++){
						showPageArr.push(pageArr[firstPage+j]);
					}
				}
			}
			let list = showPageArr.map((item,idx)=>{
				let pageIndex = idx+1;
				let liStyle={
					display:'inline-block',
					marginRight: pageIndex==showLength || item == maxPage?0:18,
					color: this.state.activePage==item?objStyle.color:(this.state.hoverPage==pageIndex?objStyle.color:'#999999'),
					fontSize: 16,
					cursor:'pointer'
				};
				return (<li key={pageIndex} style={liStyle} onClick={this.pageNumClick.bind(this,item)} onMouseOver={this.pageNumOver.bind(this,pageIndex)} onMouseOut={this.pageNumOut.bind(this,pageIndex)}>{item}</li>)
			});
			return (<ul style={styles.pageList}>{list}</ul>);
		})();

		return (
			<HorizontalLayout style={this.style(styles.pageStyle)}>
				<div onClick={this.pagePrev.bind(this)} style={Object.assign({},styles.pageButton,{backgroundColor:this.state.hoverBtn==1?'#c6c6c6':'#e7e7e7'})} onMouseOver={this.mouseover.bind(this,1)} onMouseOut={this.mouseout.bind(this)}><FontIcon icon={'icon-left-open-3'} style={{fontSize: 14,color:'#ffffff',cursor:'pointer'}} /></div>
				{pageList}
				<div onClick={this.pageNext.bind(this)} style={Object.assign({},styles.pageButton,{backgroundColor:this.state.hoverBtn==2?'#c6c6c6':'#e7e7e7'})} onMouseOver={this.mouseover.bind(this,2)} onMouseOut={this.mouseout.bind(this)}><FontIcon icon={'icon-right-open-3'} style={{fontSize: 14,color:'#ffffff',cursor:'pointer'}} /></div>
			</HorizontalLayout>
		) 
	} 
}
PageTurning.theme = {
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
module.exports = PageTurning;