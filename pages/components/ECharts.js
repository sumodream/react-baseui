import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import ECharts from '../../src/ECharts'
import Text from '../../src/Text'
class EChartsInfo extends React.Component {
    static get displayName() {
        return {
            name: '图表',
            classify: 'Views'
        };
    }
    static get api() {
        return [{
            attr: 'theme',
            caption: '选择图表类型',
            type: 'string',
            optional: 'bar | line | pie | funnel ',
            default: ''
        }, {
            attr: 'options',
            caption: '当theme为空时，自定义设置图表的类型',
            type: 'object',
            optional: '',
            default: ''
        },]
    }
    render() {
        var data=["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "裤子", "高跟鞋", "袜子"]
        let option = {
            title: {
                text: 'ECharts 自定义 柱状图',
            },
            dataZoom: [
                {
                    type:'slider',
                    show: data.length>7?true:false,
                    handleSize: 7,
                    height: 20,
                    start : 0,
                    end : 7 / data.length*100,
                    fillerColor:'rgba(29,174,248,0.2)',
                    handleColor:'rgba(29,174,248,0.8)',
                    dataBackgroundColor: 'rgba(29,174,248,0.3)',
                    top:'90%'
                }
            ],
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
                data: data,
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
                        color: '#f7be38'
                    },
                },
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        let option1 = {
            title: {
                text: 'ECharts 自定义 横向柱状图',
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
            legend: {
                data: ['2011年', '2012年'],
                top: '10%',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
                borderColor: '#f2f2f2',
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
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
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
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
                name: '2011年',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230],
                itemStyle: {
                    normal: {
                        color: '#f7be38'
                    },
                },
            }, {
                name: '2012年',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807],
                itemStyle: {
                    normal: {
                        color: '#1daef8'
                    },
                },
            }]
        }
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'ECharts 图表'}>
                    图表。
                </com.Title>
                <com.Folder title={'图表类型'}>
                    <ECharts theme={'bar'} options={option} style={{marginBottom:30}}></ECharts>
                    <ECharts theme={'line'} options={option} style={{marginBottom:30}}></ECharts>
                    <ECharts theme={'pie'} options={option}></ECharts>
                    <ECharts theme={'funnel'} options={option}></ECharts>
                    <ECharts theme={''} options={option} style={{marginBottom:30}}></ECharts>
                    <ECharts theme={''} options={option1}></ECharts>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 ECharts 的属性来产生不同图表。</Text>
                    <com.apiTable title={'图表'} list={EChartsInfo.api} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = EChartsInfo;