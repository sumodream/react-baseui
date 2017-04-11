import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import ModifyNum from '../../src/ModifyNum'
import Text from '../../src/Text'
class ModifyNumInfo extends Component {
    static get displayName (){
        return {
            name: '数字加减',
            classify:'Views'
        };
    }
    static get api(){
        return [
            {
                attr: 'theme',
                caption: '按钮主题颜色',
                type: 'string',
                optional: 'primary | success | warning | danger | default',
                default: 'primary'
            },
            {
                attr: 'value',
                caption: '默认数量',
                type: 'number',
                optional: '',
                default: '5'
            },
            {
                attr: 'min',
                caption: '最小值',
                type: 'number',
                default: '0'
            },
            {
                attr: 'max',
                caption: '最大值',
                type: 'number'
            },
            {
                attr: 'disabled',
                caption: '是否可操作',
                type: 'bool',
                optional: 'true | false',
                default: 'false'
            },
            {
                attr: 'onValueChange',
                caption: '数字发生改变时触发事件',
                type: 'func'
            }
        ]
    }
    render(){

        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'ModifyNum 数字加减'}>
                    数字加减。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <ModifyNum></ModifyNum>
                </com.Folder>
                <com.Folder title={'API'}>
                    <com.apiTable title={'数字加减'} list={ModifyNumInfo.api} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = ModifyNumInfo;