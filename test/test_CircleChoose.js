import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'

class Test_CircleChoose extends ReactUIBase{	

    render(){
        var HorizontalLayout=require("src/HorizontalLayout");
        var CircleChoose=require("src/CircleChoose");
        if ((!HorizontalLayout) || (!CircleChoose)){
            return <span>Loading...</span>
        }
        return (
            <HorizontalLayout>
            <CircleChoose />
            <CircleChoose />
            </HorizontalLayout>
        )
    }

}

module.exports = Test_CircleChoose;