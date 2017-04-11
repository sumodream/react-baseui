import React, { Component } from 'react'
import VerticalLayout from '../../src/VerticalLayout'
import FontIcon from '../../src/FontIcon'
class codeView extends Component {
    static get defaultProps() {
        return {
			fold: false,
        }
    }
	constructor(props){
		super(props);
		this.state={
			hoverActive: false,
			showContent: props.fold,
		};
	}
    toggleContent(){
		this.setState({
			showContent:!this.state.showContent
		});
    }
    componentWillReceiveProps(nextProps){
		this.setState({
			showContent:nextProps.fold,
		});
	}
    render(){
		var styles={
            wrap: {
				position: 'relative',
                display: 'flex',
                // flex: '1 0 auto',
                alignItems: 'flex-start',
                margin:'0 20px 20px 0',
                border:'1px solid #e9e9e9',
                borderRadius:6,
    			maxWidth: 440,
    			minWidth:440,
                background:'#fff',
                boxShadow:this.state.hoverActive?'0 0 10px rgba(0, 0, 0, .3)':'',
            },
            content: {
                fontSize: 12,
                color: '#6a6a6a',
				paddingTop:2,
                paddingRight: 10,
    			textAlign: 'justify',
    			lineHeight:1.5
            },
            content1: {
                fontSize: 14,
                color: '#6a6a6a',
    			textAlign: 'justify',
    			lineHeight:1.5
            },
            comp:{
                flex: '1 0 auto',
                padding: '42px 20px 50px',
            },
            mid:{
			    position: 'absolute',
			    padding: '8px 1.1em',
			    color: '#6a6a6a',
			    borderRadius: 6,
			    background:' #fff',
			    display: 'flex',
			    flexDirection: 'row',
			    alignItems: 'center',
			    marginLeft: 20,
			    marginTop:-16
            },
            trans:{
			    display: 'flex',
			    flexDirection: 'row',
			    alignItems: 'center',
			    padding: 16,
			    borderRadius: '0px 0px 6px 6px',
			    borderTop: '1px solid #e9e9e9',
			    alignSelf: 'stretch',
			    justifyContent: 'space-between',
            },
            trans1:{
			    display: 'flex',
			    flexDirection: 'row',
			    alignItems: 'center',
			    padding: 16,
			    borderRadius: '0px 0px 6px 6px',
			    borderTop: '1px dashed #e9e9e9',
			    alignSelf: 'stretch',

            },
        };
        return (
            <VerticalLayout style={styles.wrap} onMouseOver={(()=>{this.setState({hoverActive: true});}).bind(this)} onMouseOut={(()=>{this.setState({hoverActive:false});}).bind(this)} >
	            <VerticalLayout style={styles.comp}>
	                {this.props.children}
	            </VerticalLayout>
                <VerticalLayout style={styles.mid}>
                    <FontIcon icon='icon-tikuai' style={{color: '#6a6a6a',fontSize:16,marginRight:5,opacity: '.5'}}></FontIcon>{this.props.type?<span style={styles.content1}>{this.props.type}</span>:''}
            	</VerticalLayout>
				<VerticalLayout style={styles.trans}>
					<span style={styles.content}>{this.props.content}</span>
					<FontIcon icon={this.state.showContent?'icon-up-move':'icon-down-move'} style={{color: '#6a6a6a',fontSize:18,cursor:'pointer',opacity:this.state.hoverActive?'.8':'.5'}} onClick={this.toggleContent.bind(this)}></FontIcon>
				</VerticalLayout>
				{this.state.showContent?
				<VerticalLayout style={styles.trans1}>
					<span style={styles.content}>{this.props.text}</span>
				</VerticalLayout>:''}
            </VerticalLayout>
            )
    }
}

module.exports = codeView;