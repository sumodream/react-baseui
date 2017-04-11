import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import HorizontalLayout from './HorizontalLayout'
var color = require("../common/color");
class ModifyNum extends ReactUIBase {
	static get propTypes() {
		return {
            theme: React.PropTypes.string,
			value: React.PropTypes.number,
			min: React.PropTypes.number,
			max: React.PropTypes.number,
            disabled: React.PropTypes.bool,
            onValueChange: React.PropTypes.func
		}
	}
	static get defaultProps() {
		return {
            theme:'primary',
			value: 5,
            min: 0,
            disabled: false
		}
	}
    static get theme() {
        return {
            primary:{
                color: color.b03
            },
            danger:{
                color: color.b08
            },
            success:{
                color: color.b04
            },
            warning:{
                color: color.b06
            },
            default:{
                color: color.a06
            }
        }
    }
	constructor(props) {
		super(props);
		this.state = {
            theme : ModifyNum.theme[props.theme],
			value: props.value,
            hoverIdx: -1
		};
	}
	onValueChange(evt) {
        if(!this.props.disabled){
            let value = Number(evt.target.value);
            if(isNaN(value)){
                value  = 0;
            } else {
                let min = this.props.min;
                if(value<min){
                    value = min;
                }
                if(value>this.props.max){
                    value = this.props.max;
                }
            }
            this.setState({
                value:value
            });
        }
	}
	minusNum() {
		if(this.state.value>this.props.min){
			this.setState({
				value: this.state.value-1
			});
		}
	}
	addNum() {
        if(this.state.value<this.props.max
            || this.props.max==null){
            this.setState({
                value: this.state.value+1
            });
        }
	}
    mouseover(idx){
        this.setState({
            hoverIdx:idx
        });
    }
    mouseout(){
        this.setState({
            hoverIdx : -1
        });
    }
    componentWillReceiveProps(nextProps){
        if(this.props.value!=nextProps.value){
            let value = nextProps.value;
            if(nextProps.min!=null && nextProps.value<nextProps.min){
                value = nextProps.min;
            }
            if(nextProps.max!=null && nextProps.value>nextProps.max){
                value = nextProps.max;
            }

            this.setState({
                value: value,
                hoverIdx: -1
            });
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.value != nextState.value){
            if(this.props.onValueChange){
                this.props.onValueChange(nextState.value);
            }
            return true;
        }
        if(this.state.hoverIdx != nextState.hoverIdx){
            return true;
        }
        return false;
    }
	render() {
		var value = this.state.value;
        var styles = {
            btn:{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width: 34,
                height:30,
                minWidth:10,
                margin:'0 6',
                border:'1px solid #bfbfbf',
                boxSizing:'border-box',
                color: color.c09,
                cursor:'pointer'
            },
            input:{
                width:60,
                height:30,
                borderRadius:2,
                border:'1px solid #bfbfbf',
                color:color.c12,
                fontSize:13,
                outline:'none',
                textAlign:'center'
            }
        };
		return (
			<HorizontalLayout style={this.style()}>
				<div  style={Object.assign({},styles.btn,{color: this.state.hoverIdx==0?this.state.theme.color:color.c09})} onClick={!this.props.disabled&&this.minusNum.bind(this)} onMouseOver={!this.props.disabled&&this.mouseover.bind(this,0)} onMouseOut={this.mouseout.bind(this)}>
					<i className="icon-min"></i>
				</div>
                {
                    !this.props.disabled?<input type="text" value={value} onChange={this.onValueChange.bind(this)} style={styles.input}/>:
                        <input type="text" readonly='readonly' value={value} style={styles.input}/>
                }
				<div style={Object.assign({},styles.btn,{color: this.state.hoverIdx==1?this.state.theme.color:color.c09})} onClick={!this.props.disabled&&this.addNum.bind(this)} onMouseOver={!this.props.disabled&&this.mouseover.bind(this,1)} onMouseOut={this.mouseout.bind(this)}>
                    <i className="icon-add-3"></i>
				</div>
			</HorizontalLayout>
		)
	}
}
module.exports = ModifyNum;