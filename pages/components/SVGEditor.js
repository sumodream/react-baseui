import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import SVGEditor from '../../src/SVGEditor'
import Text from '../../src/Text'
class SVGEditorInfo extends Component {
    static get displayName (){
        return {
            name: '图片裁切',
            classify:'Form Controls'
        };
    }
    static get api(){
        return [
        ]
    }
    render(){

        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'SVGEditor 图片裁切'}>
                    图片裁切。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <SVGEditor>题目批改状态</SVGEditor>
                </com.Folder>
                <com.Folder title={'API'}>
                    <com.apiTable title={'图片裁切'} list={SVGEditorInfo.api} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = SVGEditorInfo;