import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var echarts = require('echarts');
if (typeof window != 'undefined') { //only do this on client render
	if (typeof window.echartsChinaMap == 'undefined') {
		window.echartsChinaMap = 'loading';
		require('superagent').get("/json/china.json").end(((err, rsp) => {
			echarts.registerMap('china', rsp.body);
			window.echartsChinaMap = 'done';
		}).bind(this));
	}
}
class ECharts extends ReactUIBase {
	static get propTypes() {
		return {
			theme: React.PropTypes.string,
			options: React.PropTypes.object
		}
	}
	static get defaultProps() {
		return {
			theme: '',
			options: {
				title: {
					text: 'ECharts 自定义 柱状图',
				},
				tooltip: {
					trigger: 'axis',
					textStyle: {
						fontSize: 12,
						fontFamily: "Microsoft YaHei,'微软雅黑' , Tahoma, Helvetica, Arial, sans-serif"
					},
					axisPointer: {
						type: 'shadow'
					},
					extraCssText: 'text-align: left;',
				},
				grid: {
					left: '3%',
					right: '7%',
					bottom: '3%',
					top: "20%",
					borderColor: '#f2f2f2',
					containLabel: true
				},
				xAxis: {
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisLine: {
						show: true,
						lineStyle: {
							color: '#bfbfbf'
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: '#f2f2f2'
						}
					},
					axisTick: {
						show: false
					},
				},
				yAxis: {
					type: 'value',
					inverse: false,
					axisLine: {
						show: true,
						lineStyle: {
							color: '#bfbfbf'
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: '#f2f2f2'
						}
					},
					axisTick: {
						show: false
					},
				},
				series: [{
					name: '销量',
					type: 'bar',
					barWidth: '20',
					itemStyle: {
						normal: {
							color: '#1daef8'
						},
					},
					data: [5, 20, 36, 10, 10, 20]
				}]
			},
		}
	}
	constructor(props) {
		super(props);
		this.inited = false;
		this.state = {
			theme: ECharts.theme[props.theme]
		};
	}
	componentDidMount() {
		this.inited = true;
		this.redraw();
	}
	redraw() {
		if (window.echartsChinaMap != 'done') {
			setTimeout(this.redraw.bind(this), 100);
			return;
		}
		if (!this.chart) {
			var dom = ReactDOM.findDOMNode(this.refs.chart);
			if (!dom) {
				return; //don't know why this happen,really!!!
			}
			this.chart = echarts.init(dom);
			if (this.props.config) {
				this.props.config.event.map(({
					type,
					handler
				}) => this.chart.on(type, handler));
			}
		}
		this.chart.resize();
		this.chart.clear();
		if (this.state.theme == null) {
			this.chart.setOption(this.props.options);
		} else {
			this.chart.setOption(this.state.theme);
		}
	}
	render() {
		if (this.inited) { //only call redraw after inited. and set inited on componentDidMount,so server side will not do render.
			setTimeout(this.redraw.bind(this), 1);
		}
		return <div style={this.style({flex:'1 0 auto', alignSelf:'stretch', minHeight:300,minWidth:200})} ref="chart" />
	}
}
ECharts.theme = {
	bar: {
		title: {
			text: 'ECharts 可选 柱状图',
		},
		tooltip: {
			trigger: 'axis',
			textStyle: {
				fontSize: 12,
				fontFamily: "Microsoft YaHei,'微软雅黑' , Tahoma, Helvetica, Arial, sans-serif"
			},
			axisPointer: {
				type: 'shadow'
			},
			extraCssText: 'text-align: left;',
		},
		grid: {
			left: '3%',
			right: '7%',
			bottom: '3%',
			top: "20%",
			borderColor: '#f2f2f2',
			containLabel: true
		},
		xAxis: {
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
			axisLine: {
				show: true,
				lineStyle: {
					color: '#bfbfbf'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#f2f2f2'
				}
			},
			axisTick: {
				show: false
			},
		},
		yAxis: {
			type: 'value',
			inverse: false,
			axisLine: {
				show: true,
				lineStyle: {
					color: '#bfbfbf'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#f2f2f2'
				}
			},
			axisTick: {
				show: false
			},
		},
		series: [{
			name: '销量',
			type: 'bar',
			barWidth: '20',
			itemStyle: {
				normal: {
					color: '#1daef8'
				},
			},
			data: [5, 20, 36, 10, 10, 20]
		}]
	},
	line: {
		title: {
			text: 'ECharts 可选 折线图',
		},
		color: ['#65abab', '#f7be38', '#9c60b6'],
		legend: {
			data: ['考试科次', '上次原卷', '发布成绩'],
			top:'10%'
		},
		tooltip: {
			trigger: 'axis',
			textStyle: {
				fontSize: 12,
				fontFamily: "Microsoft YaHei,'微软雅黑' , Tahoma, Helvetica, Arial, sans-serif"
			},
			axisPointer: {
				type: 'line',
				lineStyle: {
					color: '#65abab'
				}
			},
			extraCssText: 'text-align: left;',
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value}'
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#bfbfbf'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#f2f2f2'
				}
			},
			axisTick: {
				show: false
			},
			data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
		},
		yAxis: {
			type: 'category',
			axisLine: {
				show: true,
				lineStyle: {
					color: '#bfbfbf'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#f2f2f2'
				}
			},
			axisTick: {
				show: false
			},
			data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
		},
		series: [{
			name: '考试科次',
			type: 'line',
			smooth: true,
			itemStyle: {
				normal: {
					borderColor: '#65abab'
				}
			},
			lineStyle: {
				normal: {
					color: '#65abab'
				},
			},
			areaStyle: {
				normal: {
					color: '#a4e0d6',
					opacity: 0.5
				}
			},
			data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
		}, {
			name: '发布成绩',
			type: 'line',
			data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5],
			smooth: true,
			itemStyle: {
				normal: {
					borderColor: '#f7be38'
				}
			},
			lineStyle: {
				normal: {
					color: '#f7be38'
				},
			},
			areaStyle: {
				normal: {
					color: '#a4e0d6',
					opacity: 0.5
				}
			}
		}]
	},
	pie: {
		title: {
			text: 'ECharts 可选 饼状图',
		},
	    tooltip: {
	        trigger: 'item',
	        //formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        top: '25%',
	        left: '60%',
	        itemWidth: 15,
			itemHeight: 15,
	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    calculable: true,
		color: ['#64a4a6', '#99bcc2', '#abe0d8', '#04fece', '#99ff00'],
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius: ['40%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '16',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            center: ['45%', '50%'],
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ]
	        }
	    ]
	},
	funnel:{
		title: {
			text: 'ECharts 可选 漏斗图',
		},
	    tooltip: {
	        trigger: 'item',
	        //formatter: "{a} <br/>{b} : {c}%"
	    },
	    toolbox: {
	        feature: {
	            dataView: {readOnly: false},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    legend: {
	        itemWidth: 15,
			itemHeight: 15,
			top: '10%',
	        data: ['展现','点击','访问','咨询','订单']
	    },
	    calculable: true,
		color: ['#64a4a6', '#99bcc2', '#abe0d8', '#04fece', '#99ff00'],
	    series: [
	        {
	            name:'漏斗图',
	            type:'funnel',
	            left: '10%',
	            top:'20%',
	            width: '80%',
	            min: 0,
	            max: 100,
	            minSize: '0%',
	            maxSize: '100%',
	            sort: 'descending',
	            gap: 2,
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside'
	                },
	                emphasis: {
	                    textStyle: {
	                        fontSize: 16
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    length: 10,
	                    lineStyle: {
	                        width: 1,
	                        type: 'solid'
	                    }
	                }
	            },
	            itemStyle: {
	                normal: {
	                    borderColor: '#fff',
	                    borderWidth: 1
	                }
	            },
	            data: [
	                {value: 60, name: '访问'},
	                {value: 40, name: '咨询'},
	                {value: 20, name: '订单'},
	                {value: 80, name: '点击'},
	                {value: 100, name: '展现'}
	            ]
	        }
	    ]
	}
}
module.exports = ECharts;