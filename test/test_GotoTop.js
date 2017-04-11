import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
var VerticalLayout=require("src/VerticalLayout");
var HorizontalLayout=require("src/HorizontalLayout");
var GotoTop=require("src/GotoTop");
var Text = require("src/Text");

class Test_GotoTop extends ReactUIBase{

    render(){
        if ((!HorizontalLayout) || (!GotoTop)){
            return <span>Loading...</span>
        }
        return (
            <HorizontalLayout>
                <HorizontalLayout style={{height:1000,width:1000}}>
                </HorizontalLayout>
                <GotoTop style={{position:'fixed',right:50,bottom:50}} />
            </HorizontalLayout>
        )
    }

}

module.exports = Test_GotoTop;