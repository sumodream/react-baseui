import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Popover from '../../src/Popover'
import Text from '../../src/Text'
import FontIcon from '../../src/FontIcon'
import HorizontalLayout from '../../src/HorizontalLayout'
class PopoverInfo extends Component {
    static get displayName (){
        return {
            name: '气泡卡片',
            classify: 'Views'
        };
    }
    static get api(){
        return [
            {
            attr: 'theme',
            caption: '气泡卡片的主题',
            type: 'string',
            optional: 'primary | danger | success | warning | info | default | infoBlack | infoWhite | infoGray | warningRev',
            default: 'primary'
        }, {
            attr: 'width',
            caption: '气泡卡片的宽度,与content设置必须一致',
            type: 'number',
            default: '250'
        }, {
            attr: 'icon',
            caption: '气泡卡片的图标',
            type: 'string',
        }, {
            attr: 'title',
            caption: '气泡卡片的标题',
            type: 'string | element',
        }, {
            attr: 'content',
            caption: '气泡卡片的内容',
            type: 'object',
        }, {
            attr: 'trigger',
            caption: '气泡卡片触发行为',
            type: 'string',
            optional: 'hover | click',
            default: 'hover'
        },
        {
            attr: 'placement',
            caption: '气泡卡片小尖尖的位置',
            type: 'string',
            optional: 'left | center | right',
            default: 'center'
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
                type:'点击气泡卡片',
                content:'点击气泡卡片',
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
                type:'滑入气泡卡片',
                content:'滑入气泡卡片',
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
        let content={
            cont:[
                    <VerticalLayout style={{width: 250}}>
                        <Text>哪里不会点哪里</Text>
                        <Text>boss再也不会担心我写不好优雅的代码啦</Text>
                    </VerticalLayout>
            ,
                    <VerticalLayout style={{width: 250}}>
                        <Text>移过来啦</Text>
                        <Text>骚年别睡,还有个bug,起来改吧</Text>
                    </VerticalLayout>           
            ]
        };
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'Popover 气泡卡片'}>
                    点击/鼠标移入元素，弹出气泡式的卡片浮层。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Popover title='默认气泡'></Popover>
                </com.Folder>
                <com.Folder title={'何时使用'}>
                    <HorizontalLayout style={{alignItems:'center'}}>
                        <FontIcon icon='icon-dot' style={{fontSize: 22,marginLeft: -10}}></FontIcon>
                        <Text>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</Text>
                    </HorizontalLayout>
                    <HorizontalLayout style={{alignItems:'center'}}>
                        <FontIcon icon='icon-dot' style={{fontSize: 22,marginLeft: -10}}></FontIcon>
                        <Text>用户可以对浮层上的元素进行操作，它可以承载更复杂的内容，比如链接或按钮等。</Text>
                    </HorizontalLayout>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 Popover 的属性来产生不同弹出形式。</Text>
                    <com.apiTable title={'气泡卡片'} list={PopoverInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <Popover title='快点我哟' theme='warning' icon='icon-heart' content={content.cont[0]} trigger='click' theme='infoBlack' placement='right' width={250} trigger='click'></Popover>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <Popover title='鼠标移过来吧' icon='icon-move' content={content.cont[1]} theme='infoBlack' theme='infoBlack' placement='left' width={250} trigger='click'></Popover>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = PopoverInfo;