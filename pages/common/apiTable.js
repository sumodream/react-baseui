import React, { Component } from 'react'
import VerticalLayout from '../../src/VerticalLayout'
import Table from '../../src/Table'
class apiTable extends Component {
    static get defaultProps() {
        return {
            title: '',
            list :[]
        }
    }
    render(){
        let tableData = {
            data: [
                    ['属性', '说明', '类型', '可选值', '默认值']
                ].concat(
                this.props.list.map((item)=>{
                    item.attr = item.attr?item.attr:'-';
                    item.caption = item.caption?item.caption:'-';
                    item.type = item.type?item.type:'-';
                    item.optional = item.optional?item.optional:'-';
                    item.default = item.default?item.default:'-';
                return [item.attr,item.caption,item.type,item.optional,item.default];
            }))
        };

        var styles={
            wrap: {
                display: 'flex',
                alignSelf: 'stretch',
                flex: '1 0 auto',
                alignItems: 'stretch',
                margin:'20px 0'
            },
            content: {
                fontSize: 14,
                color: '#6a6a6a',
                paddingRight: 5,
                textAlign: 'justify',
                marginBottom:15,
                lineHeight:1.5
            },
        };
        return (
            <VerticalLayout style={styles.wrap}>
                {this.props.title?<span style={styles.content}>{this.props.title}的属性说明如下：</span>:''}
                	<Table data={tableData} colStyles={[-1,300,-1,-2,-1]} itemStyle={{justifyContent:'flex-start',padding:'0 10px 0 30px',fontSize: 12,color: '#6a6a6a',boxSizing:'border-box'}}></Table>
            </VerticalLayout>
            )
    }
}

module.exports = apiTable;