import React from 'react'
import YxECharts from './ECharts'
import YXReactUIBase from '../framework/uibase'
import YXSVG from './SVGEditor'

class DaTiKaWithRemark extends YXReactUIBase{
	render(){
		var detail = this.props.data;
		var remarks = detail.remark? detail.remark:[];
		var elements=remarks.map((item)=>{
			var src = '/images/good.png';
			switch (item.type){
				case 2:
					src="/images/rightTag.png";
					break;
				case 3:
					src="/images/wrongTag.png";
					break;
				case 4:
					src="/images/hrightTag.png";
					break;
			}
			return  {type:'图片',x:item.x,y:item.y,src}
		});
		return (
			<YXSVG key={new Date().getTime()} width={800} elements={elements} showShapes={false} showToolbar={false} editimage={this.props.data.answer} />
		)
	}
}

class ShowZhuGuanTiAnswer extends YXReactUIBase{
	constructor(props){
		super(props);
		this.state={selectDetail:null};
	}
	render(){
		if (this.state.selectDetail){
			var detail = this.state.selectDetail;
			console.log(detail.remark,detail.remark2);
		}
		var styles = this.props.styles;
		var data = this.props.data;
		var users = data.details.map((each, idx) => {
			return (
				<a onClick={(()=>{
					this.setState({selectDetail:data.details[idx]});
					}).bind(this,idx)} key={idx}>
				<div style={each===this.state.selectDetail?styles.activeAnswerName:styles.rightAnswerName} >
						<span>{each.users.join("，")}</span>
						<span>({each.score}分)</span>
				</div>
				</a>
			)
		});
		var detail=(
			<div>
				<div style={styles.numAns}>
					<span style={styles.fontBase}>&nbsp;&nbsp;&nbsp;<span style={styles.yellow}>{this.props.id}</span>&nbsp;&nbsp;&nbsp;</span>
				    <span style={styles.fontBase}>&nbsp;&nbsp;&nbsp;{data.desc}：</span>
					<span style={styles.orange}>{data.details.length}人</span>
					<span style={styles.fontBase}>&nbsp;&nbsp;&nbsp;占比：<span style={styles.blue}>{(data.details.length *100/this.props.total).toFixed(2)}%</span></span>
				</div>
				<div style={styles.ansUser}>
					{users}
				</div>
					{this.state.selectDetail?
				<div>
					<DaTiKaWithRemark data={this.state.selectDetail}/>
				</div>:null}
			</div>)
		return detail;
	}
}
module.exports = ShowZhuGuanTiAnswer;