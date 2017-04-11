import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'

class Test_Button extends ReactUIBase{
    render(){
        var Table=require("src/Table");
        var Button=require("src/Button");
        if ((!Table) || (!Button)){
            return <span>Loading...</span>
        }

        var themes = Object.keys(Button.theme).map((theme,index)=>{
            return <Button theme={theme} key={index} >{theme}</Button>
        })

        var rowdata=[];
        themes.forEach((btn,idx)=>{
            if (idx % 5 == 0){
                rowdata.push([]);
            }
            rowdata[rowdata.length-1].push(btn);
        })
        var data = {
            data:rowdata,
        }

        return (
            <Table data={data} />
        )
    }

}

module.exports = Test_Button;