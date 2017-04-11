import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import CollapseList from '../../src/CollapseList'
import Text from '../../src/Text'
import HorizontalLayout from '../../src/HorizontalLayout'
class CollapseListInfo extends React.Component{
    static get displayName (){
        return {
            name: '折叠列表',
            classify:'Views'
        };
    }
    static get api(){
        return [
            {
                attr:'title',
                caption:'折叠列表标题',
                type: 'string',
                default:'折叠列表'
            },
            {
                attr:'icon',
                caption:'折叠列表标题前图标',
                type: 'string',
                default:'icon-clock-2'
            },
            {
                attr:'list',
                caption:'各个项目相关数据',
                type: 'array'
            },
            {
                attr:'default',
                caption:'默认选中的项目索引',
                type: 'string',
                optional:'0 -- list.length-1',
                default:'0'
            },
            {
                attr:'theme',
                caption:'折叠列表前置图标的主题',
                type: 'string',
                optional: 'primary | danger | success | warning | info | default | infoBlue | infoBlack | infoWhite | infoGray | disabled',
                default: 'default'
            },
            {
                attr:'fold',
                caption:'折叠内容是否展开',
                type: 'bool',
                optional:'true | false',
                default:'false'
            },
            {
                attr:'onValueChange',
                caption:'点击项目改变所选值触发,参数为项目索引',
                type: 'func'
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
                type:'折叠列表',
                content:'折叠列表使用的操作方法',
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
                type:'折叠列表1',
                content:'折叠列表使用的操作方法',
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
                <com.Title title={'CollapseList 折叠列表'}>
                    折叠列表。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <CollapseList></CollapseList>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 CollapseList 的属性来产生不同折叠列表。</Text>
                    <com.apiTable title={'折叠列表'} list={CollapseListInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                        <CollapseList></CollapseList>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <CollapseList icon={'icon-clock-2'} theme={'primary'}></CollapseList>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = CollapseListInfo;