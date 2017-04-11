import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Link from '../../src/Link'
import Text from '../../src/Text'
import HorizontalLayout from '../../src/HorizontalLayout'
class LinkInfo extends React.Component{
    static get displayName (){
        return {
            name: '超链接',
            classify:'Basic'
        };
    }
    static get api(){
        return [
            {
                attr:'theme',
                caption:'设置超链接主题',
                type: 'string',
                optional: 'primary | danger | warning | success | default | info',
                default:''
            },
            {
                attr:'name',
                caption:'可用于锚点的定位',
                type: 'string'
            },
            {
                attr:'href',
                caption:'链接地址,可为空',
                type: 'string'
            },
            {
                attr:'target',
                caption:'跳转方式',
                type: 'string',
                optional: '_blank | _self | _parent | _top',
                default:'_self'
            },
            {
                attr:'icon',
                caption:'左侧图标',
                type: 'string'
            },
            {
                attr:'iconStyle',
                caption:'左侧图标样式',
                type: 'object'
            },
            {
                attr:'hoverStyle',
                caption:'鼠标划入样式',
                type: 'object'
            },
            {
                attr:'disabled',
                caption:'超链接不可点',
                type: 'boolean',
                optional: 'true | false',
                default:'false'
            },
            {
                attr:'onClick',
                caption:'点击事件',
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
                type:'超链接',
                content:'超链接使用的操作方法',
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
                type:'超链接1',
                content:'超链接使用的操作方法',
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
                <com.Title title={'Link 超链接'}>
                    超链接，用于网页或站点之间进行连接，分为内部链接，锚点链接和外部链接。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Link>超链接默认样式</Link>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 Link 的属性来产生不同的超链接样式。</Text>
                    <com.apiTable title={'超链接'} list={LinkInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                            <Link style={styles.box}>超链接</Link>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <Link style={styles.box}>超链接</Link>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = LinkInfo;