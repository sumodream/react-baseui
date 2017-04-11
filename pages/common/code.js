import React, { Component } from 'react'
import VerticalLayout from '../../src/VerticalLayout'
import HorizontalLayout from '../../src/HorizontalLayout'
class Code extends Component {
    static get defaultProps() {
        return {
        	text:'',
        	type:'primary'
        }
    }
    constructor(props){
		super(props);
		this.state={
			type : Code.type[props.type]
		};
	}
	componentWillReceiveProps(nextProps){
        this.setState({
            type : Code.type[nextProps.type]
        });
	}
    render() {
    	var objStyle=this.state.type;
        var styles = {
            wrap: {
               display: 'flex',
			    flexDirection: 'row',
			    alignItems: 'flex-start',
			    borderRadius: '0px 0px 6px 6px',
			    alignSelf: 'stretch',
            },
            content: {
                fontSize: 12,
                color: objStyle.color,
                paddingRight: 5,
    			textAlign: 'justify',
            },
        };
        //将HTML特殊转义为实体字符
		var keys = Object.keys || function(obj) {
		    obj = Object(obj)
		    var arr = []   
		    for (var a in obj) arr.push(a)
		    return arr
		}
		var invert = function(obj) {
		    obj = Object(obj)
		    var result = {}
		    for (var a in obj) result[obj[a]] = a
		    return result
		}
		var entityMap = {
		    escape: {
		      '&': '&',
		      '<': '<',
		      '>': '>',
		      '"': '"',
		      "'": "'",
		      "/": '/'
		    }
		}
		entityMap.unescape = invert(entityMap.escape)
		var entityReg = {
		    escape: RegExp('[' + keys(entityMap.escape).join('') + ']', 'g'),
		    unescape: RegExp('(' + keys(entityMap.unescape).join('|') + ')', 'g')
		}
		 
		// 将HTML转义为实体
		function escape(html) {
		    if (typeof html !== 'string') return ''
		    return html.replace(entityReg.escape, function(match) {
		        return entityMap.escape[match]
		    })
		}
        return (
            <VerticalLayout style={styles.wrap}>
		        <span style={styles.content}>{escape(this.props.text)}</span>
		        {this.props.children}
            </VerticalLayout>
        )
    }
}

Code.type = {
	keyword:{
		color:'#f43f82'
	},
	punctuation:{
		color:'#bfbdbd'
	},
	primary:{
		color:'#6a6a6a'
	},
	string:{
		color:'#690'
	},
	function:{
		color:'#40c2f7'
	},
	boolean:{
		color:'#fc0521'
	},
	tag:{
		color:'#fc0521'
	}

};
module.exports = Code;