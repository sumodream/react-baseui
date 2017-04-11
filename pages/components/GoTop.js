import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import GoTop from '../../src/GoTop'
class GoTopInfo extends Component {
    static get displayName (){
        return {
            name: '回到顶部',
            classify:'Views'
        };
    }
    render(){

        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'GoTop 回到顶部'}>
                    回到顶部。当页面向下滚动超过200px后,会显示。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    向上滚动,会显示在页面的右下角
                    <GoTop></GoTop>
                </com.Folder>
                <com.Folder title={'API'}>
                    直接调用即可
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = GoTopInfo;