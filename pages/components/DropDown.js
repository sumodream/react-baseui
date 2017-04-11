import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import DropDown from '../../src/DropDown'
class DropDownInfo extends Component {
    static get displayName (){
        return {
            name: '下拉菜单',
            classify:'Views'
        };
    }
    static get api(){
        return [
            {
                attr:'theme',
                caption:'下拉项目主题设置',
                type: 'string',
                optional:'default',
                default:'default'
            },
            {
                attr:'list',
                caption:'下拉项目相关设置',
                type: 'object'
            },
            {
                attr:'listStyle',
                caption:'下拉项目相关样式',
                type: 'object'
            }
        ]
    }
    static get list(){
        return [
            {
                attr:'item',
                caption:'项目内容',
                type: 'object',
                optional:'string | 元素'
            },
            {
                attr:'href',
                caption:'项目链接地址',
                type: 'string'
            },
            {
                attr:'icon',
                caption:'项目左侧图标',
                type: 'string'
            },
            {
                attr:'fuc',
                caption:'项目点击触发事件',
                type: 'func'
            }
        ]
    }
    render(){

        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'DropDown 下拉菜单'}>
                    下拉菜单。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <DropDown></DropDown>
                </com.Folder>
                <com.Folder title={'API'}>
                    <com.apiTable title={'下拉菜单'} list={DropDownInfo.api} />
                    <com.apiTable title={'list'} list={DropDownInfo.list} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = DropDownInfo;