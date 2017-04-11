import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
var VerticalLayout=require("src/VerticalLayout");
var HorizontalLayout=require("src/HorizontalLayout");
var CircleTabAddon=require("src/CircleTabAddon");
var Text = require("src/Text");

class Test_CircleTabAddon extends ReactUIBase{	

    onMouseOver(idx,ref,e){
        return (
            <VerticalLayout style={{fontSize:'14px',border: '1px solid #e7e7e7',lineHeight:1.5,borderRadius:2,backgroundColor:'#404040',color:'#fff',padding:'10px'}}>
                <Text>难度：中等</Text>
                <Text>得分率：50%</Text>
            </VerticalLayout>
        );
    }

    render(){
        if ((!HorizontalLayout) || (!CircleTabAddon)){
            return <span>Loading...</span>
        }
        return (
            <HorizontalLayout>
            <CircleTabAddon currentIndex={-1} onMouseOver={this.onMouseOver.bind(this)} />
            </HorizontalLayout>
        )
    }

}

module.exports = Test_CircleTabAddon;