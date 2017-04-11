import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Input from '../../src/Input'
import FontIcon from '../../src/FontIcon'
import HorizontalLayout from '../../src/HorizontalLayout'
import Text from '../../src/Text'
class InputInfo extends Component {
    static get displayName (){
        return {
            name: '输入框',
            classify:'Form Controls'
        };
    }
    static get api(){
        return [{
            attr: 'type',
            caption: '设置输入框的类型,html中原生表单类型',
            type: 'string',
            optional: 'text | password | email | number | ... ',
            default: 'text'
        },{
            attr: 'maxLength',
            caption: '设置输入框最大字符数',
            type: 'number',
            optional: '',
            default: '999'
        },{
            attr: 'theme',
            caption: '设置输入框图标主题',
            type: 'string',
            optional: 'primary | danger | success | warning | info | default ',
            default: 'default'
        },{
            attr: 'size',
            caption: '设置输入框的大小',
            type: 'string',
            optional: 'larger | default | small | xSmall',
            default: 'default'
        },{
            attr: 'icon',
            caption: '设置输入框前面图标',
            type: 'string',
            optional: '',
            default: <FontIcon icon={'icon-admin'} />
        },{
            attr: 'search',
            caption: '设置输入框后面图标',
            type: 'string',
            optional:'',
            default: <FontIcon icon={'icon-search-2'}/>
        },{
            attr: 'disabled',
            caption: '设置输入框点击失效',
            type: 'bool',
            optional:'true | false',
            default: 'false'
        },{
            attr: 'onClick',
            caption: '设置输入框点击事件',
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
                type:'输入框',
                content:'输入框使用的操作方法',
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
                type:'输入框1',
                content:'输入框使用的操作方法',
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
                <com.Title title={'Input 输入框'}>
                    输入框。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Input placeholder='Hello World!'></Input>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 Input 的属性来产生不同的输入框样式。</Text>
                    <com.apiTable title={'输入框'} list={InputInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <Input placeholder='Hello World!'></Input>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <HorizontalLayout>
                                <Input icon={'icon-admin'} placeholder='Hello World!' ></Input>
                                <Input search={'icon-search-2'} placeholder='Hello World!'></Input>
                            </HorizontalLayout>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = InputInfo;