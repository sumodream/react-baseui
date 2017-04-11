import YXReactUIBase from '../framework/uibase'
import React from 'react'
import ReactDOM from 'react-dom'
import HorizontalLayout from './HorizontalLayout'
import VerticalLayout from './VerticalLayout'
import FontIcon from './FontIcon'
import Link from './Link'
var color = require('../common/color');
class TableTurning extends YXReactUIBase{
	static get propTypes() {
		return {
			page: React.PropTypes.number,
			maxPage: React.PropTypes.number,
			showLength: React.PropTypes.number,
			theme: React.PropTypes.string,
			onPageChange: React.PropTypes.func
		}
	}
	static get defaultProps() {
	    return {
	    	page: 1,
			maxPage: 12,
			showLength: 6,
			theme: '#59bde5'
		}
	}
	constructor(props){
		super(props);
		this.state={
			hoverPage: -1,
			hoverBtn: -1,
			showList: false,
			activePage: props.page
		}
		this.overIndex=-1;
		this.focus = false;
	}
	pageStart(){
		this.pageNumChange(1);
	}
	pageEnd(){
		this.pageNumChange(this.props.maxPage);
	}
	pagePrev(){
		if(this.state.activePage>1){
			this.pageNumChange(this.state.activePage-1);
		}
	}
	pageNext(){
		if(this.state.activePage<this.props.maxPage){
			this.pageNumChange(this.state.activePage+1);
		}
	}
	pageNumChange(page){
		if(this.props.onPageChange){
			this.props.onPageChange(page);
		}
		this.setState({
			activePage: page
		});
	}
	pageKeyEnter(evt){
		let which = evt.keyCode || evt.which;
		if(which==13){
			this.pageNumChange(evt.target.value);
			ReactDOM.unmountComponentAtNode(this.pageListElem);
			this.pageListElem=undefined;
			this.setState({
				showList:!this.state.showList
			});
		}
	}
	hoverOverBtn(idx){
		this.setState({
			hoverBtn: idx
		})
	}
	hoverOutBtn(){
		this.setState({
			hoverBtn: -1
		})
	}
	toggleShowList(bool){
		if(bool){
			if(typeof this.pageListElem == 'undefined'){
				this.pageListElem = document.createElement('div');
				document.body.appendChild(this.pageListElem);
			}
			this.renderPageList();
		}else{
			if(typeof this.pageListElem != 'undefined'){
				ReactDOM.unmountComponentAtNode(this.pageListElem);
				this.pageListElem.parentNode.removeChild(this.pageListElem);
				this.pageListElem=undefined;
			}
		}
		this.setState({
			showList: bool
		});
	}
	cancel(){
		if(!this.focus){
			ReactDOM.unmountComponentAtNode(this.pageListElem);
            this.pageListElem.parentNode.removeChild(this.pageListElem);
			this.pageListElem=undefined;
			this.setState({
				showList:!this.state.showList
			});
		}
	}
	renderPageList(){
		var bodyrect = document.body.getBoundingClientRect();
		var pos = ReactDOM.findDOMNode(this.refs.pageListUI).getBoundingClientRect();
		let pageArr = [];
		let maxPage = this.props.maxPage;
		let showLength = this.props.showLength;
		for(let i=1;i<=maxPage;i++){
			pageArr.push(i);
		}
		let listStyles={
			edit:{
				position:'absolute',
				bottom: 6,
				left: 6,
				padding:'0 6px',
				width: 84,
				height: 28,
				alignItems:'center',
				borderWidth: 1,
				borderStyle:'solid',
				borderColor: color.c05,
				boxSizing:'border-box',
				outline: 'none'
			},
			pageList:{
				position:'relative',
				listStyle:'none',
				width: '100%',
				height: maxPage>=showLength?showLength*22:maxPage*22,
				boxSizing:'border-box',
				overflowY:'auto',
				margin: 0,
				padding: 0
			}
		};
		let list = pageArr.map((num)=>{
			let pageli={
					display:'flex',
					width: '100%',
					flexDecoration:'row',
					height: 22,
					alignItems:'center',
					padding: '0 12',
					boxSizing:'border-box',
					justifyContent:'space-between',
					fontSize:12,
					color:color.c12,
					cursor:'pointer',
					backgroundColor: num==this.overIndex?color.c03:color.c01,
				};
			return (
				<li key={num} 
					style={pageli}
					onMouseOver={((num)=>{
						this.overIndex=num;
						this.renderPageList();
					}).bind(this,num)} 
					onMouseOut={((num)=>{
						this.overIndex=-1;
						this.renderPageList();
					}).bind(this,num)}
					onClick = {this.pageNumChange.bind(this,num)}
				>{num}{this.state.activePage==num?<FontIcon style={{fontSize:10,color:color.c08,}} icon={'icon-icon-right'}/>:''}</li>
				);
		});
		let pageList = (<ul style={listStyles.pageList}>{list}</ul>);
		ReactDOM.render((
			<div onClick={this.cancel.bind(this)} style={{position:'absolute',left:window.pageXOffset,top:window.pageYOffset,width:bodyrect.width,height:bodyrect.height, display:'flex',flexDirection:'column'}}>
			<div style={{position:'absolute', left:pos.left,top:maxPage>=showLength?(pos.top-showLength*22-40):(pos.top-maxPage*22-40), width:pos.width,height:maxPage>=showLength?(showLength*22+40):(maxPage*22+40),display:'flex',flexDirection:'column',border:'thin solid #e7e7e7',borderBottom:0,boxSizing:'border-box',backgroundColor:'#ffffff'}}>
			<VerticalLayout style={{alignItems:'stretch'}}>
			{pageList}
			<input style={listStyles.edit} placeholder={'请输入页码'} onFocus={(()=>{this.focus=true;}).bind(this)} onBlur={(()=>{this.focus=false;}).bind(this)} onKeyDown={this.pageKeyEnter.bind(this)} />
			</VerticalLayout>
			</div>
			</div>
		), this.pageListElem);
	}
	render(){
		var styles={
			pageStyle:{
				alignSelf:'stretch',
				alignItems:'center',
				justifyContent:'flex-start',
				paddingTop: 20,
				paddingBottom: 30
			},
			pageList:{
				listStyle:'none',
				margin: '0 22',
				padding: 0
			},
			link:{
				width: 30,
				height: 30,
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: color.c04,
				backgroundColor:'#ffffff',
				alignItems: 'center',
				justifyContent:'center',
				marginRight: 6
			},
			number:{
				width: 96,
				height:30,
				borderWidth:1,
				borderStyle:'solid',
				cursor:'pointer',
				color:color.c12,
				fontSize:12,
				alignItems:'center',
				justifyContent:'space-between',
				marginRight: 6,
				paddingLeft:12,
				paddingRight:5,
				boxSizing:'border-box'
			}
		};
		return (
			<HorizontalLayout style={this.style(styles.pageStyle)}>
				<Link style={Object.assign({},styles.link,{borderColor:this.state.hoverBtn==1?color.c05:color.c04})} onClick={this.pageStart.bind(this)} onMouseOver={this.hoverOverBtn.bind(this,1)} onMouseOut={this.hoverOutBtn.bind(this)}><FontIcon icon={'icon-to-start'} style={{fontSize: 12,color:this.state.hoverBtn==1?color.c05:color.c07,cursor:'pointer'}} /></Link>
				<Link style={Object.assign({},styles.link,{borderColor:this.state.hoverBtn==2?color.c05:color.c04})} onClick={this.pagePrev.bind(this)} onMouseOver={this.hoverOverBtn.bind(this,2)} onMouseOut={this.hoverOutBtn.bind(this)}><FontIcon icon={'icon-left-open-2'} style={{fontSize: 12,color:this.state.hoverBtn==2?color.c05:color.c07,cursor:'pointer'}} /></Link>
				<HorizontalLayout ref='pageListUI' style={Object.assign({},styles.number,{borderColor:this.state.showList?this.props.theme:(this.state.hoverBtn==3?color.c05:color.c04)})} onClick={this.toggleShowList.bind(this,!this.state.showList)} onMouseOver={this.hoverOverBtn.bind(this,3)} onMouseOut={this.hoverOutBtn.bind(this)}>
					{this.state.activePage}
					<VerticalLayout>
						<FontIcon icon={'icon-up-dir-1'} style={{fontSize: 10,color:color.c07,cursor:'pointer'}} />
						<FontIcon icon={'icon-down-dir-1'} style={{fontSize: 10,color:color.c07,cursor:'pointer'}} />
					</VerticalLayout>
				</HorizontalLayout>
				<Link style={Object.assign({},styles.link,{borderColor:this.state.hoverBtn==4?color.c05:color.c04})} onClick={this.pageNext.bind(this)} onMouseOver={this.hoverOverBtn.bind(this,4)} onMouseOut={this.hoverOutBtn.bind(this)}><FontIcon icon={'icon-right-open-2'} style={{fontSize: 12,color:this.state.hoverBtn==4?color.c05:color.c07,cursor:'pointer'}}/></Link>
				<Link style={Object.assign({},styles.link,{borderColor:this.state.hoverBtn==5?color.c05:color.c04})} onClick={this.pageEnd.bind(this)} onMouseOver={this.hoverOverBtn.bind(this,5)} onMouseOut={this.hoverOutBtn.bind(this)}><FontIcon icon={'icon-to-end'} style={{fontSize: 12,color:this.state.hoverBtn==5?color.c05:color.c07,cursor:'pointer'}} /></Link>
			</HorizontalLayout>
		) 
	} 
}
module.exports = TableTurning;
