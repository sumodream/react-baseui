import YXReactUIBase from '../framework/uibase'
import React from 'react'
import VerticalLayout from './VerticalLayout';
import HorizontalLayout from './HorizontalLayout'
var color = require('../common/color');
class CircleTab extends YXReactUIBase {
	static get propTypes() {
		return {
			onSelect: React.PropTypes.func,
			values: React.PropTypes.arrayOf(React.PropTypes.object),
			default: React.PropTypes.number,
			theme: React.PropTypes.string,
			size:React.PropTypes.number,
			disabled: React.PropTypes.bool,
            tooltip: React.PropTypes.func
		}
	}
	static get defaultProps() {
		return {
			values: [{name:'01',litterColor:color.b04},{name:'02',litterColor:color.b06},{name:'03',litterColor:color.b08},{name:'04'},{name:'05'}],
			onSelect: index => index,
			default: 0,
			theme:'primary',
			size:35,
			disabled: false
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: props.default,
			theme:CircleTab.theme[props.theme]
		};
	}
	componentWillReceiveProps(newProps){
		if(newProps.default != this.state.selectedTab){
			this.setState({
                selectedTab: newProps.default
			})
		}
	}
	handleSelect(index) {
		this.setState({
			selectedTab:index,
		});
        if(this.props.onSelect){
            this.props.onSelect(index);
        }
	}
    onMouseOver(index,ref,e){
        if(this.props.tooltip){
            let showElem=this.props.tooltip(index);
            if (typeof this.valueElem == 'undefined') {
                this.valueElem = document.createElement('div');
                document.body.appendChild(this.valueElem);
            }
            this.renderPopup(showElem,ref);
            e.preventDefault();
            e.stopPropagation();
        }
    }
    onMouseOut(e){
        if(typeof this.valueElem != 'undefined'){
            this.cancel();
        }
    }
    renderPopup(showElem,ui){
        var pos = ReactDOM.findDOMNode(this.refs[ui]).getBoundingClientRect();
        ReactDOM.render((
            <VerticalLayout style={{position:'absolute',left:window.pageXOffset+pos.left+40,top:window.pageYOffset+pos.top+20,width:120,height:120, display:'flex',flexDirection:'column'}}>
                {showElem}
            </VerticalLayout>
        ),this.valueElem);
    }
    cancel(e) {
        if (typeof this.valueElem == 'undefined') return;
        ReactDOM.unmountComponentAtNode(this.valueElem);
        this.valueElem.parentNode.removeChild(this.valueElem);
        this.valueElem = undefined;
    }
	render() {
		var objStyle=this.state.theme;
		var items = this.props.values.map((item, index) => {
			var style = {
				selectedTab: {
					cursor:this.props.disabled?'text':'pointer',
					position:"relative",
					fontSize: this.props.size/2.5,
					display:'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width:this.props.size,
					height:this.props.size,
					borderRadius:'50%',
					color: objStyle.hoverColor && this.props.disabled?'#6a6a6a':objStyle.hoverColor,
					backgroundColor:objStyle.hoverBg && this.props.disabled?objStyle.bg:objStyle.hoverBg,
					borderWidth: 1,
					borderStyle: 'solid',
					borderColor:objStyle.hoverBg && this.props.disabled?'#e7e7e7':objStyle.hoverBg
				},
				unselectedTab: {
					cursor:this.props.disabled?'text':'pointer',
					position:"relative",
					fontSize: this.props.size/2.5,
					display:'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width:this.props.size,
					height:this.props.size,
					borderRadius:'50%',
					border:'1px solid #e7e7e7'
				},
				litterCircle:{
					width:this.props.size/4.3,
					height:this.props.size/4.3,
					borderRadius:'50%',
					position:'absolute',
					top:0,
					right:0,
					backgroundColor: item.litterColor?item.litterColor:'rgba(255,255,255,0)',
					border:item.litterColor?'1px solid #e7e7e7':0
				}
			};
			return (
				<HorizontalLayout key={index} style={{marginRight: 25,marginBottom:10}}>
					<span style={index==this.state.selectedTab?style.selectedTab:style.unselectedTab}
                          onClick={this.props.disabled?null:this.handleSelect.bind(this,index)}
                          key={index} ref={'CircleTabAddon'+index}
                          onMouseOver={this.onMouseOver.bind(this,index,'CircleTabAddon'+index)}
                          onMouseOut={this.onMouseOut.bind(this)}>
                        {item.name}
					    <span style={style.litterCircle}></span>
					</span>
				</HorizontalLayout>
			)
		});
		return (
			<HorizontalLayout style={this.style({flexWrap:'wrap',flex:1,alignSelf:'stretch'})}>
			    {items}
			</HorizontalLayout>
		)
	}
}
CircleTab.theme = {
    primary:{
        bg: color.c01,
        color: color.c13,
        hoverBg: color.b03,
        hoverColor: color.c01
    },
    danger:{
    	bg: color.c01,
		hoverBg: color.b08,
		color: color.c13,
		hoverColor: color.c01
	},
	success:{
		bg: color.c01,
		hoverBg: color.b04,
		color: color.c13,
		hoverColor: color.c01
	},
	warning:{
		bg: color.c01,
		hoverBg: color.b06,
		color: color.c13,
		hoverColor: color.c01
	},
	info:{
		bg: color.c01,
		hoverBg: color.c03,
		color: color.c13,
		hoverColor: color.c01,
	},
	default:{
		bg: color.c01,
		hoverBg: color.a06,
		color: color.c13,
		hoverColor: color.c01
	},
};

module.exports = CircleTab;