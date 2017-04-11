import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import ProblemShow from '../../src/ProblemShow'
import Text from '../../src/Text'
class ProblemShowInfo extends Component {
    static get displayName (){
        return {
            name: '问题分析',
            classify:'Views'
        };
    }
    static get api(){
        return [
        ]
    }
    render(){

        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'ProblemShow 问题分析'}>
                    问题分析。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <ProblemShow>题目批改状态</ProblemShow>
                </com.Folder>
                <com.Folder title={'API'}>
                    <com.apiTable title={'问题分析'} list={ProblemShowInfo.api} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = ProblemShowInfo;