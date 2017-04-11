import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Tabs from '../../src/Tabs'
import Text from '../../src/Text'
import HorizontalLayout from '../../src/HorizontalLayout'
class TabsInfo extends Component {
    static get displayName (){
        return {
            name: '项目切换',
            classify:'Navigation'
        };
    }
    static get api(){
        return [{
            attr: 'theme',
            caption: '设置项目切换主题',
            type: 'string',
            optional: 'primary | danger | success | warning | info | default | infoBlue | infoBlack | infoWhite | infoGray | disabled',
            default: 'primary'
        },{
            attr: 'values',
            caption: '设置项目切换参数',
            type: 'array | string',
            optional: '',
            default: ''
        },{
            attr: 'default',
            caption: '设置项目切换默认选中值',
            type: 'number',
            optional: '0 | 1 | 2...',
            default: '0'
        },{
            attr: 'onSelect',
            caption: '设置项目切换点击事件',
            type: 'func',
            optional:'',
            default: ''
        },{
            attr: 'width',
            caption: '设置项目切换父级宽度',
            type: 'number',
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
            },
            box1:{
                padding:'2px 8px',
                marginBottom:10
            }
        }
        let codeData={
            code:[{
                type:'项目切换',
                content:'项目切换使用的操作方法',
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
                type:'项目切换1',
                content:'项目切换使用的操作方法',
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
        var values=['北京','内蒙古','北京','北京','北京','北京','黑龙江','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京','北京'];
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'Tabs 项目切换'}>
                    项目切换。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Tabs></Tabs>
                </com.Folder>
                <com.Folder title={'API'}>
                     <Text style={{lineHeight: 1.5}}>通过设置 Tabs 的属性来产生不同的项目切换样式。</Text>
                    <com.apiTable title={'项目切换'} list={TabsInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <Tabs style={styles.box}></Tabs>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <Tabs style={styles.box1} width={400} values={values}></Tabs>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = TabsInfo;