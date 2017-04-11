import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import CheckBox from '../../src/CheckBox'
import Text from '../../src/Text'
import HorizontalLayout from '../../src/HorizontalLayout'
class CheckBoxInfo extends Component {
    static get displayName (){
        return {
            name: '复选框',
            classify: 'Form Controls'
        };
    }
    static get api(){
        return [
            {
                attr: 'theme',
                caption: '设置复选框主题',
                type: 'string',
                optional: 'primary | danger | success | warning | info | default ',
                default: 'primary'
            },
            {
                attr: 'images',
                caption: '设置复选框图片样式',
                type: 'object'
            },
            {
                attr: 'list',
                caption: '复选框项目相关设置',
                type: 'array ',
                default: '[]'
            },
            {
                attr: 'itemStyle',
                caption: '复选框单个样式',
                type: 'object ',
                default: '{}'
            },
            {
                attr: 'onValueChange',
                caption: '复选框项目状态发生改变时触发事件,参数1为列表bool值数组,参数2为改变项索引',
                type: 'func'
            }
        ]
    }
    static get images(){
        return [
            {
                attr: 'unchecked',
                caption: '未选中时的图片（url地址）',
                type: 'string'
            },
            {
                attr: 'checked',
                caption: '选中时的图片（url地址）',
                type: 'string '
            }
        ]
    }
    static get list(){
        return [
            {
                attr: 'item',
                caption: '项目的值',
                type: 'string',
                default: '语文'
            },
            {
                attr: 'checked',
                caption: '项目是否已选择',
                type: 'bool ',
                optional:'true | false',
                default: 'false'
            },
            {
                attr: 'disabled',
                caption: '项目是否可选',
                type: 'bool',
                optional:'true | false',
                default: 'false'
            }
        ]
    }
    valueChange(param){
        console.log('comp',param);
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
                justifyContent: 'center'
            }
        }
        let codeData={
            code:[{
                type:'复选框',
                content:'复选框使用的操作方法',
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
                type:'复选框1',
                content:'复选框使用的操作方法',
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
                <com.Title title={'CheckBox 复选框'}>
                    复选框,可同时选择多个项目。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <CheckBox list={[{item:'化学',disabled:true},{item:'物理'}]} onValueChange={this.valueChange.bind(this)}></CheckBox>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 CheckBox 的属性来产生不同的复选框样式。</Text>
                    <com.apiTable title={'复选框'} list={CheckBoxInfo.api} />
                    <com.apiTable title={'images'} list={CheckBoxInfo.images} />
                    <com.apiTable title={'list'} list={CheckBoxInfo.list} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <CheckBox style={styles.box}></CheckBox>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <CheckBox style={styles.box}  itemStyle={{marginRight:50}}></CheckBox>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = CheckBoxInfo;