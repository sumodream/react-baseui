import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import BreadCrumb from '../../src/BreadCrumb'
import Text from '../../src/Text'
import FontIcon from '../../src/FontIcon'
import HorizontalLayout from '../../src/HorizontalLayout'
class BreadCrumbInfo extends React.Component{
    static get displayName (){
        return {
            name: '面包屑',
            classify: 'Navigation'
        };
    }
    static get api(){
        return [
            {
                attr:'icon',
                caption:'面包屑前置图标',
                type: 'string',
                optional: 'icon-fanhui2',
                default:<FontIcon icon={'icon-fanhui2'} style={{color:'#59bde5',fontSize: 16,marginRight:2}} />
            },
            {
                attr:'separation',
                caption:'隔离部分图标',
                type: 'string',
                default: <FontIcon icon={'icon-right-open-3'} />
            },
            {
                attr:'theme',
                caption:'面包屑前置图标的主题',
                type: 'string',
                optional: 'primary | danger | success | warning | info | default | infoBlue | infoBlack | infoWhite | infoGray | disabled',
                default: 'primary'
            },
            {
                attr:'list',
                caption:'数组顺序分为各个部分的内容,string显示为标题样式',
                type: 'array | string',
                default:"[{item: '面包屑'}, {item: '当前页'}]"
            }
        ]
    }
    static get apiList(){
        return [
            {
                attr:'item',
                caption:'面包屑导航信息',
                type: 'string',
                optional: '面包屑 | 当前页 | 等导航，可为空',
                default:'面包屑'
            },
            {
                attr:'href',
                caption:'面包屑路由参数',
                type: 'string',
                optional: '',
                default:''
            },
            {
                attr:'fuc',
                caption:'自定义链接函数',
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
                content:'面包屑使用的操作方法',
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
                type:'面包屑',
                content:'面包屑使用的操作方法',
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
        let breadData={
            icon:'icon-fanhui2',
            theme:'primary',
            separator:'icon-right-open-3',
            list: [{
                item: 'Home',
                href: '',
                fuc: function() {
                    console.log('link fuc')
                }
            }, {
                item: 'Application'
            }]
        };
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'BreadCrumb 面包屑'}>
                    显示当前页面在系统层级结构中的位置，并能向上返回。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <BreadCrumb></BreadCrumb>
                </com.Folder>
                <com.Folder title={'何时使用'}>
                    <HorizontalLayout style={{alignItems:'center'}}>
                        <FontIcon icon='icon-dot' style={{fontSize: 22,marginLeft: -10}}></FontIcon>
                        <Text>当系统拥有超过两级以上的层级结构时；</Text>
                    </HorizontalLayout>
                    <HorizontalLayout style={{alignItems:'center'}}>
                        <FontIcon icon='icon-dot' style={{fontSize: 22,marginLeft: -10}}></FontIcon>
                        <Text>当需要告知用户『你在哪里』时；</Text>
                    </HorizontalLayout>
                    <HorizontalLayout style={{alignItems:'center'}}>
                        <FontIcon icon='icon-dot' style={{fontSize: 22,marginLeft: -10}}></FontIcon>
                        <Text>当需要向上导航的功能时。</Text>
                    </HorizontalLayout>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 BreadCrumb 的属性来产生不同层次结构。</Text>
                    <com.apiTable title={'面包屑'} list={BreadCrumbInfo.api} />
                    <com.apiTable title={'面包屑list需要设定'} list={BreadCrumbInfo.apiList} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <HorizontalLayout style={styles.wrap}>
                        <com.codeView type={codeData.code[0].type} content={codeData.code[0].content} text={codeData.code[0].text}>
                        <BreadCrumb list={breadData.list} theme={breadData.theme}>
                        </BreadCrumb>
                        </com.codeView>
                        <com.codeView type={codeData.code[1].type} content={codeData.code[1].content} text={codeData.code[1].text}>
                            <BreadCrumb list={breadData.list} theme={breadData.theme}>
                            </BreadCrumb>
                        </com.codeView>
                    </HorizontalLayout>
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = BreadCrumbInfo;