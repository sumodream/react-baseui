import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import PageTurning from '../../src/PageTurning'
import Text from '../../src/Text'
import HorizontalLayout from '../../src/HorizontalLayout'
class PageTurningInfo extends Component {
    static get displayName (){
        return {
            name: '页面分页',
            classify:'Navigation'
        };
    }
    static get api(){
        return [{
            attr: 'theme',
            caption: '设置页面分页主题',
            type: 'string',
            optional: 'primary | danger | success | warning | info | default  | infoBlack | infoWhite | infoGray | disabled',
            default: 'primary'
        },{
            attr: 'page',
            caption: '设置页面分页页数',
            type: 'number',
            optional: '',
            default: '1'
        },{
            attr: 'maxPage',
            caption: '设置页面分页最大页数',
            type: 'number',
            optional: '',
            default: '12'
        },{
            attr: 'showLength',
            caption: '设置页面分页显示页数',
            type: 'number',
            optional:'',
            default: '10'
        },{
            attr: 'onPageChange',
            caption: '设置页面分页点击事件',
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
                type:'页面分页',
                content:'页面分页使用的操作方法',
                text: <VerticalLayout>
                        <HorizontalLayout>
                        <com.Code type={'keyword'} text='import' ></com.Code>
                        <com.Code text='ReactUIBase'></com.Code>
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
                        <com.Code text='ReactUIBase'></com.Code>
                        <com.Code type={'punctuation'} text='{'></com.Code>
                        </HorizontalLayout>
                        </VerticalLayout>
                },{
                type:'页面分页1',
                content:'页面分页使用的操作方法',
                text: <VerticalLayout>
                        <HorizontalLayout>
                        <com.Code type={'keyword'} text='import' ></com.Code>
                        <com.Code text='ReactUIBase'></com.Code>
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
                        <com.Code text='ReactUIBase'></com.Code>
                        <com.Code type={'punctuation'} text='{'></com.Code>
                        </HorizontalLayout>
                        </VerticalLayout>
                }]
            
        };
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'PageTurning 页面分页'}>
                    页面分页。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <PageTurning>题目批改状态</PageTurning>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 PageTurning 的属性来产生不同的页面分页样式。</Text>
                    <com.apiTable title={'页面分页'} list={PageTurningInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <PageTurning style={styles.box}></PageTurning>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <PageTurning style={styles.box}></PageTurning>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = PageTurningInfo;