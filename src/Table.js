import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'
import FontIcon from './FontIcon'
import CheckBox from './CheckBox'
class Table extends ReactUIBase{
	static get propTypes() {
		return {
			data: React.PropTypes.object,
			foldable: React.PropTypes.bool,
			folddefault:React.PropTypes.bool,
			itemStyle: React.PropTypes.object, //每列的总体样式
			colStyles: React.PropTypes.array, //大于0为宽度固定值，小于0为flex值,其他情况flex为1
			sortable:React.PropTypes.bool,
			optionNum: React.PropTypes.object //配置序号
		}
	}
	static get defaultProps() {
	    return {
			data:{data:[['col1','col2','col3'],['value1','value2','value3'],['value3','value2','value3'],['value2','value2','value3'],['value1','value2','value3'],['value1','value2','value3']]},
	    	foldable:false,
			folddefault:true,
			sortable:false,
			optionNum: {
				show: false, //是否显示序号,
				page: 2,
				pageLength: 10,
				onNumChange: function (arr) {   //选中选框触发函数 参数为选中索引数组
					console.log('序号函数--',arr);
				}
			}
		}
	}
	constructor(props){
		super(props);
		let checkList = [];
		for(let i = 0;i<props.data.data.length-1;i++){
			checkList.push(false);
		}
		this.state={
			fold:props.folddefault,
			activeTab: 0,
			sortidx:-1,
			sortAscending:true,
			checkAll: false,
			checkList: checkList
		}
	}
	changeOver(rowidx) {
		this.setState({
			activeTab: rowidx,
		});
	}
	changeOut(rowidx) {
		this.setState({
			activeTab: -1
		});
	}
	sortData(colidx){
		var data = this.props.data; 
		if (colidx>=0){
			data.data = [data.data[0]].concat(data.data.slice(1,data.data.length).sort((a,b)=>{
				a=a[colidx];
				b=b[colidx];
				if (a.props && "children" in a.props){
					a = a.props.children;
				}
				if (b.props && "children" in b.props){
					b = b.props.children;
				}
				if (!isNaN(Number(a))) a = Number(a);
				if (!isNaN(Number(b))) b = Number(b);
				if (this.state.sortAscending){
					return a > b? -1 : a==b?0: 1;
				}
				else{
					return b > a?-1: a==b?0:1;
				}
			}));
		}
		this.setState({sortidx:colidx,sortAscending:!this.state.sortAscending});
	}
	checkAll(){
		let checkAll = !this.state.checkAll;
		let checkList = this.state.checkList.map(()=>{
			return checkAll;
		});
		this.setState({
			checkAll: checkAll,
			checkList : checkList
		});
		if(this.props.optionNum&&this.props.optionNum.onNumChange){
			let checkListIndex = [];
			checkList.forEach((item,idx)=>{
				if(item){
					checkListIndex.push(idx);
				}
			});
			this.props.optionNum.onNumChange(checkListIndex);
		}
	}
	checkList(idx){
		let checkList = this.state.checkList;
		checkList[idx]= !checkList[idx];
		this.setState({
			checkList : checkList
		});
		if(this.props.optionNum&&this.props.optionNum.onNumChange){
			let checkListIndex = [];
			checkList.forEach((item,idx)=>{
				if(item){
					checkListIndex.push(idx);
				}
			});
			this.props.optionNum.onNumChange(checkListIndex);
		}
	}
	render(){
		var data = this.props.data;
		var rows = data.data.map((row,rowidx)=>{
			if(this.props.optionNum&&this.props.optionNum.show){
				let num = this.props.optionNum.page?(this.props.optionNum.page-1)*this.props.optionNum.pageLength:0;
				if(rowidx == 0) {
					row = [<CheckBox style={{marginLeft: 20,color:'red'}} list={[{item: '序号',checked: this.state.checkAll}]} onValueChange={this.checkAll.bind(this)}/>].concat(row);
				}else{
					row = [<CheckBox style={{marginLeft: 20}} list={[{item: num+rowidx,checked:this.state.checkList[rowidx-1]}]} onValueChange={this.checkList.bind(this,rowidx-1)}/>].concat(row);
				}
			}
			var cols = row.map((col,colidx)=>{
				var propsColStyle = {};
				if(this.props.colStyles&&this.props.colStyles.length>0){
					let propsStyle = this.props.colStyles[colidx];
					if(propsStyle>0){
						propsColStyle.width = propsStyle;
					}else if(propsStyle<0){
						propsColStyle.flex = -propsStyle;
					}else{
						propsColStyle.flex = 1;
					}
				}
				else{
					propsColStyle.flex = 1;
				}
				var colStyle={
					paddingTop: 10,
					paddingBottom: 10,
					fontSize:14,
					color:'#333333',
					borderLeftWidth:1,
					borderRightWidth:colidx==row.length-1?1:0,
					borderLeftStyle:'solid',
					borderLeftColor:colidx==0?'#e7e7e7':'#EEEEEE',
					borderRightStyle:'solid',
					borderRightColor:'#e7e7e7',
					display:'flex',
					flexDirection:'row',
					alignItems:'center',
					justifyContent: (typeof col == 'string')?'center':'flex-start',
					boxSizing:'border-box'
				};
				// if (typeof col=='string'){
				// 	col = <span style={{marginLeft:30}}>{col}</span>;
				// }
				if (this.props.sortable && rowidx == 0){
					return <div onClick={this.sortData.bind(this,colidx)} style={Object.assign({},colStyle,this.props.itemStyle,propsColStyle)} key={colidx}>{col}</div>;
				}
				else{
					return <div style={Object.assign({},colStyle,this.props.itemStyle,propsColStyle)} key={colidx}>{col}</div>;
				}
			});
			var rowStyle={
				alignItems: 'stretch',
				alignSelf:'stretch',
				minHeight:40,
				wordWrap:'break-word',
				lineHeight: 1.2,
				backgroundColor:rowidx==0?'#fafafa':rowidx==this.state.activeTab?'#f2f2f2':'#ffffff',
				borderTopWidth:1,
				borderBottomWidth:rowidx==data.data.length-1?1:0,
				borderTopStyle:'solid',
				borderTopColor:rowidx==0?'#e7e7e7':'#EEEEEE',
				borderBottomStyle:'solid',
				borderBottomColor:'#e7e7e7',
				boxSizing:'border-box'
			};
			return (rowidx==0) || (!this.props.foldable) || (this.state.fold) ? 
				<HorizontalLayout style={rowStyle} key={rowidx}  onMouseOver={this.changeOver.bind(this,rowidx)} onMouseOut={this.changeOut.bind(this,rowidx)}>
				{cols}
				</HorizontalLayout>
				:null
		})
		var styles={
			rowStyle:{
				alignSelf:'stretch',
				alignItems:'center',
				justifyContent:'center',
				height:40,
				backgroundColor:'#FAFAFA',
				borderTopWidth:1,
				borderBottomWidth:1,
				borderLeftWidth:1,
				borderRightWidth:1,
				borderTopStyle:'solid',
				borderTopColor:'#EEEEEE',
				borderBottomStyle:'solid',
				borderBottomColor:'#e7e7e7',
				borderLeftStyle:'solid',
				borderLeftColor:'#e7e7e7',
				borderRightStyle:'solid',
				borderRightColor:'#e7e7e7',
				fontSize:14,
				cursor:'pointer',
				color:'#333',
			},
			pageStyle:{
				alignSelf:'stretch',
				alignItems:'center',
				justifyContent:'center',
				paddingTop: 30,
				paddingBottom: 30
			},
			pageList:{
				listStyle:'none',
				margin: '0 22px',
				padding: 0
			}
		}
		return (
			<VerticalLayout {...this.props} style={this.style({flex:'1 0 auto',alignSelf:'stretch'})}>
			{rows}
			{this.props.foldable?
			<HorizontalLayout style={styles.rowStyle}>
				<div  style={{display:'flex',justifyContent:'center',flex:'1 0 auto'}} onClick={(()=>{this.setState({fold:!this.state.fold})}).bind(this)}>{this.state.fold?<span>收起详情<FontIcon style={{fontSize:14,color:'#59bde5'}} icon={'icon-up-open-2'} /></span>:<span>展开详情<FontIcon style={{fontSize:14,color:'#59bde5'}} icon={'icon-down-open-2'} /></span>}</div>
			</HorizontalLayout>
			:null}
			</VerticalLayout>
		) 
	} 
}
module.exports = Table;