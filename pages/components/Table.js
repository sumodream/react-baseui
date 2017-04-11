import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Table from '../../src/Table'
import Text from '../../src/Text'
class TableInfo extends Component {
    static get displayName (){
        return {
            name: '表格',
            classify:'Form Controls'
        };
    }
    static get api(){
        return [
            {
                attr: 'data',
                caption: '表格的显示数据',
                type: 'array'
            },
            {
                attr: 'foldable',
                caption: '设置表格是否显示伸缩详情',
                type: 'bool',
                optional: 'true | false ',
                default: 'false'
            },
            {
                attr: 'folddefault',
                caption: '设置表格详情默认是否展开',
                type: 'bool',
                optional: 'true | false ',
                default: 'true'
            },
            {
                attr: 'itemStyle',
                caption: '表格行样式',
                type: 'object'
            },
            {
                attr: 'colStyles',
                caption: '表格列样式',
                type: 'array'
            },
            {
                attr: 'sortable',
                caption: '设置表格项目是否可排序',
                type: 'bool',
                optional: 'true | false ',
                default: 'false'
            },
            {
                attr: 'optionNum',
                caption: '设置表格是否显示序号',
                type: 'bool',
                optional: 'true | false ',
                default: 'false'
            }
        ]
    }
    static get optionNum(){
        return [
            {
                attr: 'show',
                caption: '设置序号是否显示',
                type: 'bool',
                optional: 'true | false ',
                default: 'false'
            },
            {
                attr: 'page',
                caption: '表格当前页码',
                type: 'number',
                default: '1'
            },
            {
                attr: 'pageLength',
                caption: '设置页内显示条数',
                type: 'number',
                default: '10'
            },
            {
                attr: 'onNumChange',
                caption: '序号选择监听函数,参数为选中索引数组',
                type: 'func'
            },
        ]
    }
    render(){

        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'Table 表格'}>
                    表格。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Table>题目批改状态</Table>
                </com.Folder>
                <com.Folder title={'API'}>
                    <com.apiTable title={'表格'} list={TableInfo.api} />
                    <com.apiTable title={'optionNum'} list={TableInfo.optionNum} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = TableInfo;