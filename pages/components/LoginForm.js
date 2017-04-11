import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import LoginForm from '../../src/LoginForm'
class LoginFormInfo extends React.Component{
    static get displayName (){
        return {
            name: '登录',
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
                <com.Title title={'LoginForm 登录'}>
                    登录页面展示。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <LoginForm></LoginForm>
                </com.Folder>
                <com.Folder title={'API'}>
                    直接调用即可。
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = LoginFormInfo;