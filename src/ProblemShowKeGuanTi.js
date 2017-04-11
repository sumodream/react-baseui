import React, { Component } from 'react'
import YxECharts from './ECharts'
import ReactUIBase from '../framework/uibase'
class KeGuanTi extends ReactUIBase{
	constructor(props){
		super(props);
		this.state={
			collapse: true,
			studentshow: false,
			selectAnswer: 0
		};
		this.styles={
			probBorder: {
				display: 'flex',
				alignSelf:'stretch',
				backgroundColor: '#fff',
				flexDirection: 'column',
				border: 'thin solid #eee',
				borderRadius: 2
			},
			probTitle:{
				display:'flex',
				paddingLeft: 30,
				height: 40,
				alignItems:'center',
				color: '#333',
				fontSize:14,
				backgroundColor:"#fafafa",
				borderBottom:'thin solid #eee'
			},
			probBanner: {
				padding: '20px 30px 30px'
			},
			paperWarning:{
				fontSize: 14,
				padding: '10px 20px 0',
				color:'#6a6a6a'
			},
			toggleBtn:{
				display:'flex',
				width: 106,
				height: 32,
				alignItems:'center',
				justifyContent:'center',
				fontSize: 14,
				color:'#333',
				cursor:'pointer',
				border: 'thin solid #e7e7e7'
			},
			showAnswer: {
				margin: '20px 30px 0',
				paddingTop: 30,
				borderTop: 'thin solid #f2f2f2',
				fontSize: 14
			},
			rightAnswer: {
				display: 'flex',
				flexDirection: 'row',
				marginBottom: 30
			},
			numAns: {
				backgroundColor: '#f2f2f2',
				padding: 10,
				border: 'thin solid #e7e7e7',
				fontSize: 12,
				borderLeft: 0,
				borderRight: 0
			},
			ansUser: {
				display: 'flex',
				flexDirection: 'row',
				padding: 10,
				flexWrap: 'wrap',
				margin: '5px 0'
			},
			rightAnswerName: {
				padding: '5px 10',
				color: '#fff',
				border: 'thin solid #e7e7e7',
				backgroundColor: '#59bde5',
				marginRight: 10,
				fontSize: 12,
				marginBottom: 5,
				borderRadius: 5,
				width:50,
				alignItems:'center',
				justifyContent:'center',
				textAlign:'center'
			},
			yellow: {
				color: '#F7BE38',
				fontSize: 14
			},
			blue: {
				color: '#59bde5',
				fontSize: 14
			},
			orange: {
				color: '#d2553f',
				fontSize: 14
			},
			fontBase: {
				fontSize: 12
			},
			imageContent: {
				width: '80%',
				padding: 10
			},
			answerCharts: {
				height: 200
			}
		}
	}
	static get defaultProps(){
		return{
			data:{"id":"第1题","score":3,"schoolRate":96.57701711491443,"answer":"B-3.0","detail":[{"answer":"B","score":3,"users":["李嘉栋","杜奕成","谢志健","冯灵馨","黄智成","郭兰知仪","陈文玥","钟郑洲","钟仪轩","冯筠棋","李传伟","邱洋","李沁祯","张秋雯","李章粮","蔡振文","谭兴","张茜怡","郭兰艺","钟郑杭","黄文浩","周志宇","黄梓玮","胡琼月","孙屿琪","曾文涛","李芯卉","夏晓蕊","张芷扬","李灏聪","李锦涵","杨军","苏兰","肖晗","刘传尧","黄新奇","胡超越","张舒阳","钟浩欣","李康平","曾令红","黄巧雅","孙丽丰","刘炯男","曾利妍","徐远铭","陈辉弘","许嘉玥","邱博涵"]}],"url":"http://haofenshu.kssws.ks-cdn.com/file/vs/7831/1.png","choices":["B"]}
		}
	}
	answerDesc(answer) {
		if(answer == '-'){
			answer = "未填";
		}
		return answer;
	}
	onChartClicked(evt) {
		var styles = this.styles;
		var selectAnswer = evt.dataIndex;
		var users = this.data.detail[selectAnswer].users.map((each, idx) => {
			return (
				<div key={idx} style={styles.rightAnswerName}>{each}</div>
			)
		});
		var detail=(
		<div>
			<div style={styles.numAns}>
				&nbsp;<span style={styles.yellow}>{this.data.id}</span>&nbsp;
				&nbsp;&nbsp;<span style={styles.orange}>{this.answerDesc(this.data.detail[selectAnswer].answer)} </span> &nbsp;&nbsp; <span style={styles.orange}>{this.data.detail[selectAnswer].users.length}</span>&nbsp;&nbsp;人&nbsp;&nbsp;&nbsp;&nbsp;占比&nbsp;&nbsp;<span style={styles.blue}>{(this.data.detail[selectAnswer].users.length *100/this.total).toFixed(2)}%</span>
			</div>
			<div style={styles.ansUser}>{users}</div>
		</div>);
		this.showDialog("单项成绩详情",detail);
		/*this.setState({
			studentshow: true,
			selectAnswer: evt.dataIndex
		});*/
	}
	render() {
		if (!this.props.data) return null;
		this.data = this.props.data;
		//题号： string
		this.quesNum = this.props.quesNum?this.props.quesNum:'';
		this.data.detail.sort((a, b) => {
			return b.users.length - a.users.length;
		});
		var styles = this.styles;
		var rightNum = 0;
		this.data.detail.forEach((item) => {
			if (JSON.stringify(item.score) == JSON.stringify(this.data.score)) rightNum += item.users.length
		});
		var wrongNum = 0;
		this.data.detail.forEach((item) => {
			if (JSON.stringify(item.score) != JSON.stringify(this.data.score)) wrongNum += item.users.length
		});
		var total = rightNum + wrongNum;
		this.total = total;
		var avgScore = (rightNum * this.data.score / total).toFixed(2);
		var maxchoiceLen = 0;
		this.data.detail.forEach((item) => {
			maxchoiceLen = item.answer.length > maxchoiceLen ? item.answer.length : maxchoiceLen
		});
		var classRatio = rightNum  / (rightNum + wrongNum);
		var detailLength= this.data.detail.length;
		var option = {
			xAxis: {
				type: 'value',
				axisTick: {
					show: false
				},
				max: total,
				splitLine: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisLabel: {
					show: false
				}
			},
			yAxis: {
				type: 'category',
				data: this.data.detail.map((item) => {
					return this.answerDesc(item.answer);
				}),
				splitLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				}
			},
			grid: {
				right: 120,
				y: 0,
				x: 20 + 20 * maxchoiceLen,
				height: 180,
			},
			series: [{
				type: 'bar',
				barWidth: 20,
				data: this.data.detail.map((item) => {
					return item.users.length;
				}),
				itemStyle: {
					borderRadius: 5,
					normal: {
						color: '#59bde5',
						label: {
							show: true,
							position: 'right',
							formatter: ((value) => {
								return value.data + "人 占比" + (value.data * 100 / total).toFixed(2) + "%"
							}).bind(this),
							textStyle: {
								color: '#333'
							}
						}
					}
				}
			}]
		};
		var config = {
			event: [{
				type: 'click',
				handler: this.onChartClicked.bind(this)
			}]
		};
		return (
			<div style={styles.probBorder}>
				<div style={styles.probTitle}>
				<span>{this.quesNum?<span style={{marginRight:20}}>{this.quesNum}</span>:''}平均得分 : {avgScore}分 (答对{rightNum}人/答错{wrongNum}人/班级得分率 {classRatio.toFixed(2)})</span>
				</div>
		 		<div style={styles.imageContent}>
		 			{this.data.url?
						<img style={{padding: 10,maxWidth:'100%',boxSizing:'border-box'}} src={this.data.url} />:
						<div style={styles.paperWarning}>该考试可能还没有上传原卷</div>
					}
				</div>
				{this.state.collapse?null:
				<div style={styles.showAnswer}>
					<div style={styles.rightAnswer}>
						<span>【正确答案】 </span>
						<span>{this.answerDesc(this.data.answer)}</span>
					</div>
					<div style={styles.rightAnswer}>
						<span>【选择详情】 点击柱状图可查看学生名单</span>
					</div>
					<div style={{height:detailLength>8?detailLength*25:200,overflow:'hidden'}}>
						<YxECharts config={config} options={option} />
					</div>
				</div>}
				<div style={styles.probBanner}>
					<a style={styles.toggleBtn} onClick={((evt)=>
							{
								evt.preventDefault();
								this.setState({collapse:!this.state.collapse,studentshow:false});
							}).bind(this)}>
					{this.state.collapse?
						<span>展开解析 <span className='icon-down-open-2'></span></span>:
						<span>收起解析 <span className='icon-up-open-2'></span></span>
					}
					</a>
				</div>
			</div>
			)
	}
}
module.exports = KeGuanTi;