import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Select from '../../src/Select'
import Text from '../../src/Text'
import FontIcon from '../../src/FontIcon'
import HorizontalLayout from '../../src/HorizontalLayout'
class SelectInfo extends React.Component{
    static get displayName (){
        return {
            name: '选择框',
            classify: 'Form Controls'
        };
    }
    static get api(){
        return [
            {
                attr:'icon',
                caption:'选择框前置图标',
                type: 'string',
                default:<FontIcon icon={'icon-iconfont-pengyouquan'} />
            },
            {
                attr:'separation',
                caption:'隔离部分图标',
                type: 'string',
                default: <FontIcon icon={'icon-down-open-2'} />
            },
            {
                attr:'theme',
                caption:'选择框图标的主题',
                type: 'string',
                optional: 'primary | danger | success | warning | info | default | infoBlue | infoBlack | infoWhite | infoGray | disabled',
                default: 'default'
            },{
                attr:'choice',
                caption:'选择框图标的参数',
                type: 'array | string',
                optional: '',
                default: 'ForTest1,ForTest2'
            },{
                attr:'placeholder',
                caption:'选择框提醒文字',
                type: 'string',
                optional: '',
                default: ''
            },{
                attr:'showLength',
                caption:'列表显示条数',
                type: 'number',
                default: '6'
            },{
                attr:'default',
                caption:'选择框默认选中值',
                type: 'number',
                optional: '',
                default: '无placeholder时为0'
            },{
                attr:'value',
                caption:'选择框默认选中值',
                type: 'number',
                optional: '',
                default: ''
            },{
                attr:'itemHoverStyle',
                caption:'选择框经过样式',
                type: 'object',
                optional: '',
                default: ''
            },{
                attr:'listStyle',
                caption:'选择框列表样式',
                type: 'object',
                optional: '',
                default: ''
            },{
                attr:'itemStyle',
                caption:'选择框列表元素样式',
                type: 'object',
                optional: '',
                default: ''
            },
            {
                attr:'onValueChange',
                caption:'选择框值改变的方法',
                type: 'func',
                optional: '',
                default:''
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
        }
        let codeData={
            code:[{
                type:'二级带图标',
                content:'选择框使用的操作方法',
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
                type:'选择框',
                content:'选择框使用的操作方法',
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
        let BoxData={
            Data: [{
                icon: '',
                theme: 'default',
                separator: 'icon-down-open-2',
                choice: ['ForTest1', 'ForTest2'],
            }, {
                icon: 'icon-iconfont-pengyouquan',
                theme: 'primary',
                separator: 'icon-down-open-2',
                choice: ['测试1', '测试2'],
            }]
            
        };
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'Select 选择框'}>
                    选择框。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Select separator={'icon-down-open-2'}></Select>
                </com.Folder>
                <com.Folder title={'API'}>
                <Text style={{lineHeight: 1.5}}>通过设置 Select 的属性来产生不同类型。</Text>
                <com.apiTable title={'选择框'} list={SelectInfo.api} />
                </com.Folder>
                                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                        <Select  icon={BoxData.Data[0].icon} separator={BoxData.Data[0].separator} theme={BoxData.Data[0].theme} choice={BoxData.Data[0].choice}>
                        </Select>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <Select  icon={BoxData.Data[1].icon} separator={BoxData.Data[1].separator} theme={BoxData.Data[1].theme} choice={BoxData.Data[1].choice}>
                            </Select>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = SelectInfo;