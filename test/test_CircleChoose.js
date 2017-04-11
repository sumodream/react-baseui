import YXReactUIBase from '../framework/uibase'
import React from 'react'

class Test_CircleChoose extends YXReactUIBase{	

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