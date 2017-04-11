import YXReactUIBase from '../framework/uibase'
import React from 'react'
var color = require('../common/color');
class PushInfo extends YXReactUIBase{
    static get propTypes() {
        return {
            theme: React.PropTypes.oneOf(['primary','danger','success','warning','default'])
        }
    }
    static get defaultProps() {
        return {
            theme: 'danger',
            children:'10'
        }
    }
    constructor(props) {
        super(props);
        this.state={
            theme: PushInfo.theme[props.theme]
        };
    }
    render(){
        var objStyle = this.state.theme;
        var style = {
            background: objStyle.bg,
            color: objStyle.color,
            width: "24px",
            height: "16px",
            borderRadius: "8px",
            fontSize: "12px",
            fontStyle: "normal",
            lineHeight: "16px",
            textAlign: "center"
        };
        return (
            <span style={this.style(style)}>
                {this.props.children}
            </span>
        )
    }
}
PushInfo.theme = {
    primary:{
        bg: color.b03,
        color: color.c01
    },
    danger:{
        bg: color.b08,
        color: color.c01
    },
    success:{
        bg: color.b04,
        color: color.c01
    },
    warning:{
        bg: color.b06,
        color: color.c01
    },
    default: {
        bg: color.c01,
        color: color.b03
    }
};
module.exports = PushInfo;
