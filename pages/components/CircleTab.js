import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import CircleTab from '../../src/CircleTab'
import Text from '../../src/Text'
import HorizontalLayout from '../../src/HorizontalLayout'
class CircleTabInfo extends Component {
    static get displayName (){
        return {
            name: '题目状态'
        };
    }
    static get api(){
        return [{
            attr: 'theme',
            caption: '设置题目状态主题',
            type: 'string',
            optional: 'primary | danger | success | warning | info | default ',
            default: 'primary'
        },{
            attr: 'size',
            caption: '设置题目状态大小',
            type: 'number',
            optional: '',
            default: '35'
        },{
            attr: 'default',
            caption: '设置题目状态首选样式',
            type: 'number',
            optional: '',
            default: '0'
        },{
            attr: 'values',
            caption: '设置题目状态小圆圈',
            type: 'array | string',
            optional: '小圆圈',
            default: ''
        },{
            attr: 'disabled',
            caption: '设置题目状态不可点击',
            type: 'bool',
            optional: 'false | true',
            default: 'false'
        },{
            attr: 'onSelect',
            caption: '设置题目状态点击事件',
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
                flex: '1 0 auto'
            }
        }
        let codeData={
            code:[{
                type:'题目状态',
                content:'题目状态使用的操作方法',
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
                type:'题目状态1',
                content:'题目状态使用的操作方法',
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
                <com.Title title={'CircleTab 题目批改状态'}>
                    题目批改状态。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <CircleTab></CircleTab>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 CircleTab 的属性来产生不同的题目批改样式。</Text>
                    <com.apiTable title={'题目批改状态'} list={CircleTabInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <CircleTab theme={'danger'} size={80} style={styles.box}></CircleTab>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <CircleTab  style={styles.box} disabled={true}></CircleTab>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = CircleTabInfo;