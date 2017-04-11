import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import NoBorderTabs from '../../src/NoBorderTabs'
import Text from '../../src/Text'
import HorizontalLayout from '../../src/HorizontalLayout'
class NoBorderTabsInfo extends React.Component{
    static get displayName (){
        return {
            name: '项目导航',
            classify:'Navigation'
        };
    }
    static get api(){
        return [{
            attr: 'theme',
            caption: '设置项目导航主题',
            type: 'string',
            optional: 'primary | danger | success | warning | info | white | default | warningText',
            default: 'primary'
        },{
            attr: 'values',
            caption: '设置项目导航参数',
            type: 'array | string',
            optional: '',
            default: ''
        },{
            attr: 'default',
            caption: '设置项目导航默认选中值',
            type: 'number',
            optional: '0 | 1 | 2...',
            default: '0'
        },{
            attr: 'currentIndex',
            caption: '设置项目导航当前选中值',
            type: 'number',
            optional: '',
            default: ''
        },{
            attr: 'onSelect',
            caption: '设置项目导航点击事件',
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
                type:'项目导航',
                content:'项目导航使用的操作方法',
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
                type:'项目导航1',
                content:'项目导航使用的操作方法',
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
                <com.Title title={'NoBorderTabs 项目导航'}>
                    项目导航。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <NoBorderTabs></NoBorderTabs>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 NoBorderTabs 的属性来产生不同的项目导航样式。</Text>
                    <com.apiTable title={'项目导航'} list={NoBorderTabsInfo.api} />
                </com.Folder>
               <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <NoBorderTabs style={styles.box}></NoBorderTabs>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <NoBorderTabs style={styles.box}></NoBorderTabs>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}
module.exports = NoBorderTabsInfo;