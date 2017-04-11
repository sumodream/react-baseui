import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Button from '../../src/Button'
import Text from '../../src/Text'
import HorizontalLayout from '../../src/HorizontalLayout'
class ButtonInfo extends Component {
    static get displayName() {
        return {
            name: '按钮',
            classify: 'Basic'
        };
    }
    static get api() {
        return [{
            attr: 'theme',
            caption: '设置按钮主题',
            type: 'string',
            optional: 'primary | danger | success | warning | info | default | lightGreen | infoBlue | infoBlack | infoWhite | infoGray | disabled',
            default: 'primary'
        }, {
            attr: 'icon',
            caption: '设置按钮前面图标',
            type: 'string'
        }, {
            attr: 'size',
            caption: '设置按钮的形状',
            type: 'string',
            optional: '',
            default: ''
        }, {
            attr: 'disabled',
            caption: '设置按钮为不可点击',
            type: 'string',
            optional: 'false | true',
            default: 'false'
        }, {
            attr: 'onClick',
            caption: '设置按钮点击事件',
            type: 'func',
            optional: '',
            default: ''
        }]
    }
    render() {
        var styles = {
            wrap: {
                display: 'flex',
                alignSelf: 'stretch',
                justifyContent: 'space-between'
            },
            bacBtn: {
                justifyContent: 'space-between',
                alignSelf: 'stretch',
                padding: '10px 0',
                minWidth: 400,
                flexWrap: 'wrap'
            },
            btn1: {
                position: 'relative',
                width: 250,
                height: 150,
                background: '#ffbf00',
                borderRadius: 5,
                border: '1px solid #ccc',
                boxShadow:'0 5px 12px rgba(0, 0, 0, .3)',
            },
            btn2: {
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '15px 15px 0 15px',
                borderColor: '#ffbf00 transparent transparent transparent',
                position: 'absolute',
                marginLeft: 110,
                marginTop:151,
            },
            btn3: {
                width: 0,
                height: 0,
                borderStyle: 'solid',
                borderWidth: '0 15px 15px 15px',
                borderColor: 'transparent transparent #ffbf00 transparent',
                position: 'absolute',
                marginLeft: 110,
                marginTop:-14,
            },

        }
        let codeData = {
            code: [{
                type: '按钮类型',
                content: '当需要在 Button 内嵌入 theme 时，可以设置 theme 属性，默认不设置 theme 则为primary。',
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
            }, {
                type: '图标按钮',
                content: '当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 FontIcon 组件。如果想控制 Icon 具体的位置，只能直接使用 FontIcon 组件，而非 icon 属性，默认没有 Icon 。',
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
            }, {
                type: '形状按钮',
                content: '当需要在 Button 内嵌入 size 时，可以设置 size 属性，则为圆形，默认不设置 size 则为矩形。设置borderRadius时，为椭圆。',
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
        }
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'Button 按钮'}>
                    按钮用于开始一个即时操作。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Button icon={''}>按钮</Button>
                </com.Folder>
                <com.Folder title={'何时使用'}>
                    <Text style={{lineHeight: 1.5}}>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</Text>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 Button 的属性来产生不同的按钮样式。</Text>
                    <com.apiTable title={'按钮'} list={ButtonInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <HorizontalLayout style={styles.bacBtn}>
                                <Button theme={'primary'} style={{marginBottom: 10}}>primary</Button>
                                <Button theme={'danger'} style={{marginBottom: 10}}>danger</Button>
                                <Button theme={'success'} style={{marginBottom: 10}}>success</Button>
                                <Button theme={'warning'} style={{marginBottom: 10}}>warning</Button>
                                <Button theme={'default'} style={{marginBottom: 10}}>default</Button>
                                <Button theme={'infoBlue'} style={{marginBottom: 10}}>infoBlue</Button>
                                <Button theme={'infoWhite'} style={{marginBottom: 10}}>infoWhite</Button>
                                <Button theme={'infoBlack'} style={{marginBottom: 10}}>infoBlack</Button>
                                <Button theme={'info'} style={{marginBottom: 10}}>info</Button>
                                <Button theme={'infoGray'} style={{marginBottom: 10}}>infoGray</Button>
                                <Button theme={'disabled'} style={{marginBottom: 10}} disabled={true}>disabled</Button>
                                <Button theme={'green'} style={{marginBottom: 10}}>green</Button>
                                <Button theme={'lightGreen'} style={{marginBottom: 10}}>greenInfo</Button>
                                <Button theme={'warningRev'} style={{marginBottom: 10}}>warningRev</Button>
                            </HorizontalLayout>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                             <Button icon={'icon-search-2'}>Search</Button>
                        </com.codeView>
                    </HorizontalLayout>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[2].type} content={codeData.code[2].content} text={codeData.code[2].text}>
                            <HorizontalLayout style={styles.bacBtn}>
                                 <Button theme={'danger'}>矩形</Button>
                                 <Button theme={'warning'} size={35}>圆</Button>
                                 <Button theme={'success'} style={{borderRadius:30}}>椭圆</Button>
                             </HorizontalLayout>
                        </com.codeView>
                        <com.codeView type={codeData.code[2].type} content={codeData.code[2].content} text={codeData.code[2].text}>
                                <Text style={styles.btn1}>&nbsp;</Text>
                                <Text style={styles.btn2}></Text>
                                <Text style={styles.btn3}></Text>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = ButtonInfo;