import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'

class Test_Toast extends ReactUIBase{

    testToast(){
        this.toast('一般的Toast');
    }

    testToastEndCallback(){
        this.toast('一般的Toast',(()=>{
            this.showDialog('嘿嘿','Toast 结束啦!!!');
        }).bind(this));
    }
    firstClick(){
        console.log('首页 点击');
    }

    render(){
        var Button=require("src/Button");
        var HorizontalLayout=require("src/HorizontalLayout");
        if (!Button){
            return <span>Loading...</span>
        }

        return (
            <HorizontalLayout>
            <Button style={{marginRight:20}} onClick={this.testToast.bind(this)} >一般的Toast</Button>
            <Button onClick={this.testToastEndCallback.bind(this)} >Toast结束Callback</Button>
            </HorizontalLayout>
        )
    }

}

module.exports = Test_Toast;