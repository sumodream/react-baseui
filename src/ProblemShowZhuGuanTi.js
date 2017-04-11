import React from 'react'
import YxECharts from './ECharts'
import YXReactUIBase from '../framework/uibase'
import ZhuGuanTiAnswer from './ProblemZhuGuanTiShowGroup'
class ZhuGuanTi extends YXReactUIBase{
	constructor(props){
		super(props);
		this.state = {
			collapse: true,
			studentshow: false,
			selectAnswer: 0,
			studentAnswerShow: false,
			selectDetail: null,
		}
		this.excellentIdx=-1;
		this.styles = {
			probBorder: {
				display: 'flex',
				alignSelf:'stretch',
				backgroundColor: '#fff',
				flexDirection: 'column',
				border: 'thin solid #eee',
				borderRadius: 2,
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
				margin: '5px 0',
				cursor: 'pointer'
			},
			activeAnswerName: {
				padding: '5px 10px',
				color: '#fff',
				border: 'thin solid #e7e7e7',
				backgroundColor: 'blue',
				marginRight: 10,
				fontSize: 12,
				marginBottom: 5,
				borderRadius: 5,
				alignItems: 'center',
				justifyContent: 'center',
				display: 'flex',
				width:80,
				textAlign:'center',
			},
			rightAnswerName: {
				padding: '5px 10px',
				color: '#fff',
				border: 'thin solid #e7e7e7',
				backgroundColor: '#59bde5',
				marginRight: 10,
				fontSize: 12,
				marginBottom: 5,
				borderRadius: 5,
				width:80,
				textAlign:'center',
				cursor: 'pointer'
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
				height: 180,
				overflow:'hidden'
			}
		}
	}
	static get defaultProps(){
		return {
			data: { "id": "第21题", "score": 10, "schoolRate": 70.56234718826406, "detail": [{ "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384113/1.png", "score": 9, "users": ["李嘉栋"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384104/1.png", "score": 10, "users": ["杜奕成"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384117/1.png", "score": 10, "users": ["谢志健"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384114/1.png", "score": 10, "users": ["冯灵馨"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384106/1.png", "score": 10, "users": ["黄智成"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384105/1.png", "score": 10, "users": ["郭兰知仪"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384109/1.png", "score": 10, "users": ["陈文玥"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384127/1.png", "score": 9, "users": ["钟郑洲"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384124/1.png", "score": 9, "users": ["钟仪轩"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384108/1.png", "score": 10, "users": ["冯筠棋"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384122/1.png", "score": 9, "users": ["李传伟"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384130/1.png", "score": 10, "users": ["邱洋"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384153/1.png", "score": 10, "users": ["李沁祯"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384143/1.png", "score": 9, "users": ["张秋雯"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384128/1.png", "score": 10, "users": ["李章粮"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384126/1.png", "score": 8, "users": ["蔡振文"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384107/1.png", "score": 10, "users": ["谭兴"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384121/1.png", "score": 10, "users": ["张茜怡"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384118/1.png", "score": 10, "users": ["郭兰艺"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384129/1.png", "score": 10, "users": ["钟郑杭"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384151/1.png", "score": 8, "users": ["黄文浩"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384110/1.png", "score": 10, "users": ["周志宇"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384141/1.png", "score": 10, "users": ["黄梓玮"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384138/1.png", "score": 8, "users": ["胡琼月"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384135/1.png", "score": 10, "users": ["孙屿琪"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384134/1.png", "score": 10, "users": ["曾文涛"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384123/1.png", "score": 10, "users": ["李芯卉"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384145/1.png", "score": 10, "users": ["夏晓蕊"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384111/1.png", "score": 9, "users": ["张芷扬"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384131/1.png", "score": 10, "users": ["李灏聪"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384119/1.png", "score": 10, "users": ["李锦涵"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384142/1.png", "score": 10, "users": ["杨军"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384133/1.png", "score": 9, "users": ["苏兰"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384136/1.png", "score": 10, "users": ["肖晗"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384152/1.png", "score": 8, "users": ["刘传尧"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384115/1.png", "score": 9, "users": ["黄新奇"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384139/1.png", "score": 10, "users": ["胡超越"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384132/1.png", "score": 10, "users": ["张舒阳"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384112/1.png", "score": 9, "users": ["钟浩欣"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384125/1.png", "score": 7, "users": ["李康平"],
			remark: [{   
                    type: 3,
                    x: 1087,
                    y: 395
                }],
                remark2: []  
		
	}, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384149/1.png", "score": 7, "users": ["曾令红"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384144/1.png", "score": 8, "users": ["黄巧雅"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384120/1.png", "score": 8, "users": ["孙丽丰"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384137/1.png", "score": 10, "users": ["刘炯男"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384148/1.png", "score": 7, "users": ["曾利妍"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384140/1.png", "score": 6, "users": ["徐远铭"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384146/1.png", "score": 8, "users": ["陈辉弘"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384150/1.png", "score": 7, "users": ["许嘉玥"] }, { "answer": "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384147/1.png", "score": 10, "users": ["邱博涵"] }], "url": "http://haofenshu.kssws.ks-cdn.com/file/vs/7831/21.png", "xb": ["http://haofenshu.kssws.ks-cdn.com/file/s/13720/384114/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384337/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384105/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384109/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384155/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384351/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384108/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384130/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384153/1.png", "http://haofenshu.kssws.ks-cdn.com/file/s/13720/384128/1.png"] }
		}
	}
	showAnswer(detail){
		var detail=(
			<div>
				<img style={{width:800}} src={detail.answer} />
			</div>)
			this.showDialog("单个主观题答案",detail);
	}
	onChartClicked(evt) {
		var styles = this.styles;
		var selectAnswer = evt.dataIndex;
		var total = this.data.detail.length;
		var detail = <ZhuGuanTiAnswer data={this.renderGroup[selectAnswer]} styles={this.styles} id={this.data.id} total={total}/>
		this.showDialog("单项成绩详情",detail);
		/*this.setState({
			studentshow: true,
			selectAnswer: evt.dataIndex
		});*/
	}
	nextExcellect(evt) {
		var next = (this.excellentIdx + 1) % this.data.xb.length;
		var styles = this.styles;
		this.excellentIdx=next;
		var detail=(
			<div style={{width:900}}>
				<div>
					<span style={styles.fontBase}>&nbsp;&nbsp;&nbsp;<span style={styles.yellow}>{this.data.id}</span>&nbsp;&nbsp;&nbsp;</span>
					<span style={styles.fontBase}>优秀答案</span>
					<img style={{width:'100%',padding:'10px 10px'}} src={this.data.xb[this.excellentIdx]} />
				</div>								
			</div>
		);
		this.showDialog("学霸答案",detail,['换一个看看'],this.nextExcellect.bind(this));
	}
	render() {
		if (!this.props.data)
			return null;
		this.data = this.props.data;
		//题号： string
		this.quesNum = this.props.quesNum?this.props.quesNum:'';
		var styles = this.styles;
		var renderGroup = ['优秀', '良好', '一般'].map((name, idx) => {
			return {
				desc: name,
				details: this.data.detail.filter((item) => {
					if (idx == 0) return item.score >= this.data.score * 0.8;
					if (idx == 1) return item.score < this.data.score * 0.8 && item.score >= this.data.score * 0.6;
					return item.score < this.data.score * 0.6;
				})
			};
		}).sort((a, b) => {
			return b.details.length - a.details.length;
		});
		this.renderGroup = renderGroup;
		var totalscore = 0;
		var total = this.data.detail.length;
		var rightNum = 0;
		var wrongNum = 0;
		this.data.detail.forEach((item) => {
			totalscore += item.score;
			if (item.score == this.data.score) {
				rightNum += 1;
			} else {
				wrongNum += 1;
			}
		});
		var avgScore = (totalscore / total).toFixed(2);
		var classRatio = totalscore * 100 / (total*this.data.score);
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
				},
			},
			yAxis: {
				type: 'category',
				data: renderGroup.map((item) => {
					return item.desc;
				}),
				axisTick: {
					show: false
				},
				axisLine: {
					show: false
				},
				splitLine: {
					show: false
				}
			},
			grid: {
				right: 120,
				y: 20,
				height: 120,
			},
			series: [{
				type: 'bar',
				barWidth: 20,
				data: renderGroup.map((item) => {
					return item.details.length;
				}),
				itemStyle: {
					borderRadius: 10,
					normal: {
						color: '#59bde5',
						label: {
							show: true,
							position: 'right',
							formatter: ((value) => {
								return value.data + "人 占比" + (value.data * 100 / total).toFixed(2) + "%"
							}).bind(this),
							textStyle: {
								color: 'black'
							}
						}
					}
				}
			}, ],
		};
		var config = {
			event: [{
				type: 'click',
				handler: this.onChartClicked.bind(this)
			}],
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
				{
					this.state.collapse?null:
					<div style={styles.showAnswer}>
						<div style={styles.rightAnswer}>
							<span>【优秀答案】</span>
							<a style={{marginLeft: 10,color: '#59bde5',fontSize: 14}} onClick={this.nextExcellect.bind(this)}>
								<span style={{cursor:'pointer'}}>查看优秀答案</span>
							</a>
						</div>
						<div style={styles.rightAnswer}>
							<span>【选择详情】 点击柱状图可查看学生名单</span>
						</div>
						<div style={styles.answerCharts}>
							<YxECharts config={config} options={option} />
						</div>
					</div>
				}
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
module.exports=ZhuGuanTi