import React, { Component } from 'react';
import ReactDOM from 'react-dom'
var color = require('../common/color');

class Dialog extends Component {
	render(){
		return (
			<div style={{position:'fixed',left:0,top:0,right:0,bottom:0,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)',display:'flex',flexDirection:'row'}}>
				<div style={{display:'flex',flexDirection:'row',maxWidth:'80%',maxHeight:'80%',boxShadow: '0 3px 9px rgba(0,0,0,.5)'}}>
					<div style={Object.assign({},{backgroundColor:'white',borderRadius:4,display:'flex',flexDirection:'column'},this.props.style)}>
						<div style={{height:50,flexShrink:0,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
							<span style={{fontSize:16,color:color.c12}}>{this.props.title}</span>
						</div>
						<div style={{height:1,backgroundColor:color.c04,alignSelf:'stretch'}} />
						<div style={{padding:"10 30", overflow:'auto'}}>
						{this.props.cnt}
						</div>
						{this.props.btnui}
					</div>
					<div style={{position:'relative', left:-20,top:-15, alignSelf:'flex-start'}} >
						<div style={{position:'absolute',left:8,top:8, width:16,height:16,backgroundColor:'white'}}/>
						<i onClick={this.props.cancel} style={{position:'absolute',left:0,right:0,fontSize:30}} className={"fontello icon-cancel-2"} />
					</div>
				</div>
			</div>
		)
	}
}

class ReactUIBase extends Component {
	
	constructor(props){
		super(props);
		
		this.log={
			log:function(){console.log('log',...arguments)},
			debug:function(){console.log('debug',...arguments)},
			error:function(){console.error('error',...arguments)},
			info:function(){console.info('info',...arguments)}
		}
	}
	
	selectkey(props){
		var selectkey;
		if (!props) props = this.props;
		if (props.selectkey && props.selectkey.data){
			selectkey = props.selectkey.data.depth.join(".");
			selectkey = selectkey+ (selectkey.length==0?"":".")+props.selectkey.data.idx;
		}
		return selectkey;
	}
	
	/**
	 *  rs = root_style, it will only be used as compent root style,to append local style with upstyle and sys style
	 */
	rs(upstyle){ 
		var style = this.style(upstyle);
		
		var selectkey=this.selectkey();
		
		if (this.props.options && this.props.options.width){
			var value = Number(this.props.options.width);
			if (value>0){
				style = Object.assign({},style,{width:value});
			}
		}
		if (this.props.options && this.props.options.height){
			var value = Number(this.props.options.height);
			if (value>0){
				style = Object.assign({},style,{height:value});
			}
		}
		if (this.props.options && this.props.options.backgroundColor){
			var value = this.props.options.backgroundColor;
			if (value!=''){
				style = Object.assign({},style,{backgroundColor:value});
			}
		}
		if (this.props.options && this.props.options.padding){
			var value = this.props.options.padding;
			if (value!=''){
				if (value.indexOf(" ")<0){
					value = Number(value);
				}
				style = Object.assign({},style,{padding:value});
			}
		}
		if (this.props.options && this.props.options.margin){
			var value = this.props.options.margin;
			if (value!=''){
				if (value.indexOf(" ")<0){
					value = Number(value);
				}
				style = Object.assign({},style,{margin:value});
			}
		}
		
		var parentType=0;
		if ((this.props.parent == null) || (this.props.parent.type == 'components__appbase__verticalLayout')){
			parentType = 1;
		}
		else if (this.props.parent.type == 'components__appbase__horizontalLayout'){
			parentType = 2;
		}
		if (parentType==1){ //Vlayout
			if (this.props.options && (typeof this.props.options.halign != 'undefined')){
				var value = Number(this.props.options.halign);
				if (value==0 /*"左对齐"*/){
					style = Object.assign({},style,{alignSelf:'flex-start'});
				}
				if (value==1 /*"右对齐"*/){
					style = Object.assign({},style,{alignSelf:'flex-end'});
				}
				if (value==2 /*"居中对齐"*/){
					style = Object.assign({},style,{alignSelf:'center'});
				}
			}
			if (this.props.options && (typeof this.props.options.valign != 'undefined')){
				var value = Number(this.props.options.valign);
				if (value==0 /*"上对齐"*/){
					style = Object.assign({},style,{alignSelf:'flex-start'});
				}
				if (value==1 /*"下对齐"*/){
					style = Object.assign({},style,{alignSelf:'flex-end'});
				}
				if (value==2 /*"居中对齐"*/){
					style = Object.assign({},style,{alignSelf:'center'});
				}
			}
			if (this.props.options && (typeof this.props.options.hflex != 'undefined')){
				var value = this.props.options.hflex;
				if ((value==true) || (!isNaN(Number(value)) && (Number(value)>0)) /*"拉升"*/){
					style = Object.assign({},style,{alignSelf:'stretch'});
				}
			}
			if (this.props.options && (typeof this.props.options.vflex != 'undefined')){
				var value = this.props.options.vflex;
				if (value==true /*"拉升"*/){
					style = Object.assign({},style,{flex:'1 0 auto'});
				}
				else if (!isNaN(Number(value))){
					style = Object.assign({},style,{flex:value+' 0 auto'});
				}
				else{
					style = Object.assign({},style,{flex:value});
				}
			}
		}
		else if (parentType==2){ //Hlayout
			if (this.props.options && (typeof this.props.options.halign != 'undefined')){
				var value = Number(this.props.options.halign);
				if (value==0 /*"左对齐"*/){
					style = Object.assign({},style,{alignSelf:'flex-start'});
				}
				if (value==1 /*"右对齐"*/){
					style = Object.assign({},style,{alignSelf:'flex-end'});
				}
				if (value==2 /*"居中对齐"*/){
					style = Object.assign({},style,{alignSelf:'center'});
				}
			}
			if (this.props.options && (typeof this.props.options.valign != 'undefined')){
				var value = Number(this.props.options.valign);
				if (value==0 /*"上对齐"*/){
					style = Object.assign({},style,{alignSelf:'flex-start'});
				}
				if (value==1 /*"下对齐"*/){
					style = Object.assign({},style,{alignSelf:'flex-end'});
				}
				if (value==2 /*"居中对齐"*/){
					style = Object.assign({},style,{alignSelf:'center'});
				}
			}
			if (this.props.options && (typeof this.props.options.hflex != 'undefined')){
				var value = this.props.options.hflex;
				if (value==true /*"拉升"*/){
					style = Object.assign({},style,{flex:'1 0 auto'});
				}
				else if (!isNaN(Number(value))){
					style = Object.assign({},style,{flex:value+' 0 auto'});
				}
				else{
					style = Object.assign({},style,{flex:value});
				}
			}
			if (this.props.options && (typeof this.props.options.vflex != 'undefined')){
				var value = this.props.options.vflex;
				if ((value==true)  || (!isNaN(Number(value)) && (Number(value)>0)) /*"拉升"*/){
						style = Object.assign({},style,{alignSelf:'stretch'});
					}
				}
		}

		if (selectkey == this.props.yxkey){
			style = Object.assign({},style,{borderWidth:1,borderStyle:'solid',borderColor:'red'});
		}
		
		return this.valiedate(style);
	}
	
	/*as a base style */
	valiedate(style){
		//so far only do this,later do more
		if (('borderWidth' in style) && ('border' in style)){
			delete style.border;
		}
		
		//bugs in do know where,but we'd better check and add px in those things
		function fixPxBug(key){
			//change "10 20" to "10px 20px"
			if (!(key in style)) return;
			if (typeof style[key] != "string") return;
			
			var values = style[key].split(" ");
			style[key] = values.map((v)=>{
				if (/^\d+$/.test(v)){
					return v+"px";
				}
				else{
					return v;
				}
			}).join(" ");
		}
		
		fixPxBug("padding");
		fixPxBug("margin");
		
		return style;
	}
	
	style(upstyle){ 
		var ret;
		if (this.props.style){
			ret = Object.assign({},upstyle,this.props.style);
		}
		else{
			ret = upstyle;
		}

		if (!ret) ret= {};
		
		if (typeof ret.flexShrink == "undefined"){
			ret = Object.assign({},ret,{flexShrink:0});//default do not allow shrink
		}
		
		return this.valiedate(ret);
	}

	toast(cnt,endcallback=null){
		if (typeof this.toastElem == 'undefined'){
			this.toastElem = document.createElement('div');
			document.body.appendChild(this.toastElem);
		}
		ReactDOM.render((
			<div style={{position:'fixed',left:0,right:0,bottom:0,top:0,alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
				<div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.65)',color:'#fff',fontSize:16,borderShadow:'0 0 1px #333',borderRadius:6,minWidth:230, padding:20,}}>
					{cnt}
				</div>
			</div>
		), this.toastElem);
		setTimeout((()=>{
			if (endcallback){
				endcallback();
			}
			ReactDOM.unmountComponentAtNode(this.toastElem);
			this.toastElem = undefined;
		}).bind(this),2000);
	}
	
	cancelProgress(){
		if (window.progressElem){
			ReactDOM.unmountComponentAtNode(window.progressElem);
			window.progressElem = undefined;
		}
	}

	showProgress(title){
		if (typeof window.progressElem == 'undefined'){
			window.progressElem = document.createElement('div');
			document.body.appendChild(window.progressElem);
		}
		ReactDOM.render((
			<div style={{position:'fixed',left:0,top:0,right:0,bottom:0,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.7)',display:'flex',flexDirection:'row'}}>
				<div style={{display:'flex',flexDirection:'row',width:300,height:100,alignItems:'center',justifyContent:'center',backgroundColor:'white',borderRadius:10}}>
					<div style={{display:'flex',flexDirection:'row',padding:20}}>
						<img style={{width:20,height:20}} src='/images/loading.gif' />
						<span style={{fontSize:16,marginLeft:10}}>{title}</span>
					</div>
				</div>
			</div>
		), window.progressElem);
	}

	showDialog(title,cnt,buttons,callback,style={}){
		if (typeof this.dialogElem == 'undefined'){
			this.dialogElem = document.createElement('div');
			document.body.appendChild(this.dialogElem);
		}
		var btnopts=buttons;
		if (!buttons || buttons.length==0){
			btnopts = [];
		}
		
		var btns =  btnopts.map((opt,idx)=>{
			var Button = require("../base/Button");
			if(typeof opt == 'object'){
				// opt: {
				// 	content:'确定',
				// 	theme:'success'
				// }
				return (
					<Button style={{marginLeft:idx==0?0:10,marginTop:20,padding:6}} theme={opt.theme?opt.theme:'success'} key={idx} onClick={((idx)=>{
						this.cancelDialog();
						callback(idx);
					}).bind(this,idx)}>{opt.content}</Button>
				)
			}else{
				return (
					<Button style={{marginLeft:idx==0?0:10,marginTop:20,padding:6}} key={idx} onClick={((idx)=>{
						this.cancelDialog();
						callback(idx);
					}).bind(this,idx)}>{opt}</Button>
				)
			}
		});
		var btnui;
		if (btns.length>0){
			btnui = (
				<div style={{display:'flex',alignSelf:'center',flexShrink:0, height:32,alignItems:'center', flexDirection:'row',marginBottom:30}}>
				{btns}
				</div>
			)
		}
		document.body.style.overflow = 'hidden';
		ReactDOM.render(<Dialog title={title} cnt={cnt} btnui={btnui} style={style} cancel={this.cancelDialog.bind(this)}/>, this.dialogElem);
	}

	cancelDialog(){
		document.body.style.overflow = 'auto';
		ReactDOM.unmountComponentAtNode(this.dialogElem);
		this.dialogElem = undefined;
	}

	render() {
		return <div>should not directly call this</div>;
	}
}

module.exports = ReactUIBase;
