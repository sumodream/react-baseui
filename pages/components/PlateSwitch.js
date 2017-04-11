import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import PlateSwitch from '../../src/PlateSwitch'
import HorizontalLayout from '../../src/HorizontalLayout'
import Text from '../../src/Text'
class PlateSwitchInfo extends React.Component{
    static get displayName (){
        return {
            name: '模块对比',
            classify:'Navigation'
        };
    }
    static get api(){
        return [{
            attr: 'theme',
            caption: '设置模块对比主题',
            type: 'string',
            optional: 'primary | danger | success | warning | info | default  | infoBlack | infoWhite | infoGray | disabled',
            default: 'primary'
        },{
            attr: 'values',
            caption: '设置模块对比参数',
            type: 'array | string',
            optional: '',
            default: ''
        },{
            attr: 'default',
            caption: '设置模块默认索引值',
            type: 'number',
            optional: '0 | 1'
        },{
            attr: 'disabled',
            caption: '设置模块项目是否可切换的状态,true不可切换',
            type: 'array',
            optional: '空 | [true|false] | [true|false,true|false]'
        },{
            attr: 'onChange',
            caption: '设置模块对比点击事件,返回参数为点击项目的索引',
            type: 'func',
            optional:'',
            default: ''
        }
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
                type:'模块对比',
                content:'模块对比使用的操作方法',
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
                type:'模块对比1',
                content:'模块对比使用的操作方法',
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
                <com.Title title={'PlateSwitch 模块对比'}>
                    模块对比。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <PlateSwitch></PlateSwitch>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 PlateSwitch 的属性来产生不同的模块对比样式。</Text>
                    <com.apiTable title={'模块对比'} list={PlateSwitchInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <PlateSwitch style={styles.box}></PlateSwitch>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <PlateSwitch style={styles.box}></PlateSwitch>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = PlateSwitchInfo;