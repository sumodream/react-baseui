import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import ComboCalendar from '../../src/ComboCalendar'
import Text from '../../src/Text'
class ComboCalendarInfo extends Component {
    static get displayName (){
        return {
            name: '日期选择框',
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
                <com.Title title={'ComboCalendar 日期选择框'}>
                    日期选择框。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <ComboCalendar></ComboCalendar>
                </com.Folder>
                <com.Folder title={'API'}>
                    <com.apiTable title={'日期选择框'} list={ComboCalendarInfo.api} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = ComboCalendarInfo;