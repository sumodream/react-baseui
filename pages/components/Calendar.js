import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Calendar from '../../src/Calendar'
class CalendarInfo extends React.Component{
    static get displayName (){
        return {
            name: '日历',
            classify: 'Views'
        };
    }
    static get api(){
        return [
            {
                attr:'date',
                caption:'设置日期',
                type: 'string',
                optional: 'YYYY-MM-DD|时间戳',
                default:'当前日期'
            },
            {
                attr:'minDate',
                caption:'最小日期',
                type: 'string',
                optional: 'YYYY-MM-DD|时间戳'
            },
            {
                attr:'maxDate',
                caption:'最大日期',
                type: 'string',
                optional: 'YYYY-MM-DD|时间戳'
            },
            {
                attr:'chooseDay',
                caption:'改变某天所触发的事件',
                type: 'func'
            }

        ]
    }
    render(){
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'Calendar 日历'}>
                    日历。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <Calendar></Calendar>
                </com.Folder>
                <com.Folder title={'API'}>
                    <com.apiTable title={'日历'} list={CalendarInfo.api} />
                </com.Folder>
            </VerticalLayout>
            )
    }
}

module.exports = CalendarInfo;