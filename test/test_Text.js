import YXReactUIBase from '../framework/uibase'
import React from 'react'

class Test_Text extends YXReactUIBase{
    render(){
        var Text=require("src/Text");
        if (!Text) {
            return <span>Loading...</span>
        }

        return (
            <Text style={{fontSize:12}}>这是一个测试</Text>
        )
    }

}

module.exports = Test_Text;