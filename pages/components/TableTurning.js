import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import TableTurning from '../../src/TableTurning'
import HorizontalLayout from '../../src/HorizontalLayout'
import Text from '../../src/Text'
class TableTurningInfo extends React.Component{
    static get displayName (){
        return {
            name: '表格分页',
            classify:'Navigation'
        };
    }
    static get api(){
        return [{
            attr: 'themeColor',
            caption: '设置表格分页边框主题',
            type: 'string',
            optional: '',
            default: ''
        },{
            attr: 'page',
            caption: '设置表格分页页数',
            type: 'number',
            optional: '',
            default: '1'
        },{
            attr: 'maxPage',
            caption: '设置表格分页最大页数',
            type: 'number',
            optional: '',
            default: '12'
        },{
            attr: 'showLength',
            caption: '设置表格分页显示页数',
            type: 'number',
            optional:'',
            default: '10'
        },{
            attr: 'onPageChange',
            caption: '设置表格分页点击事件',
            type: 'func',
            optional:'',
            default: ''
        },
        ]
    }
    render(){
        var styles = {
            wrap: {
                display: 'flex',
                alignSelf: 'stretch',
                justifyContent: 'space-between'
            },
            box:{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }
        }
        let codeData={
            code:[{
                type:'表格分页',
                content:'表格分页使用的操作方法',
                text: <VerticalLayout>
                        <HorizontalLayout>
                        <com.Code type={'keyword'} text='import' ></com.Code>
                        <com.Code text='YXReactUIBase'></com.Code>
                        <com.Code type={'keyword'} text='from'></com.Code>
                        <com.Code type={'string'} text='"../framework/uibase"'></com.Code>
                        </HorizontalLayout>
                        <HorizontalLayout>
                        <com.Code type={'keyword'} text='import' ></com.Code>
                        <com.Code text='React'></com.Code>
                        <com.Code type={'keyword'} text='from'></com.Code>
                        <com.Code type={'string'} text='"react"'></com.Code>
                        </HorizontalLayout>
                        <HorizontalLayout>
                        <com.Code type={'function'} text='class' ></com.Code>
                        <com.Code text='Button'></com.Code>
                        <com.Code type={'function'} text='extends'></com.Code>
                        <com.Code text='YXReactUIBase'></com.Code>
                        <com.Code type={'punctuation'} text='{'></com.Code>
                        </HorizontalLayout>
                        </VerticalLayout>
                },{
                type:'表格分页1',
                content:'表格分页使用的操作方法',
                text: <VerticalLayout>
                        <HorizontalLayout>
                        <com.Code type={'keyword'} text='import' ></com.Code>
                        <com.Code text='Y45XReactUIBase'></com.Code>
                        <com.Code type={'keyword'} text='from'></com.Code>
                        <com.Code type={'string'} text='"../framework/uibase"'></com.Code>
                        </HorizontalLayout>
                        <HorizontalLayout>
                        <com.Code type={'keyword'} text='import' ></com.Code>
                        <com.Code text='React'></com.Code>
                        <com.Code type={'keyword'} text='from'></com.Code>
                        <com.Code type={'string'} text='"react"'></com.Code>
                        </HorizontalLayout>
                        <HorizontalLayout>
                        <com.Code type={'function'} text='class' ></com.Code>
                        <com.Code text='Button'></com.Code>
                        <com.Code type={'function'} text='extends'></com.Code>
                        <com.Code text='YXReactUIBase'></com.Code>
                        <com.Code type={'punctuation'} text='{'></com.Code>
                        </HorizontalLayout>
                        </VerticalLayout>
                }]
            
        };
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'TableTurning 表格分页'}>
                    表格分页。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <TableTurning />
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 TableTurning 的属性来产生不同的表格分页样式。</Text>
                    <com.apiTable title={'表格分页'} list={TableTurningInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <TableTurning style={styles.box}></TableTurning>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <TableTurning style={styles.box}></TableTurning>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = TableTurningInfo;