import React, { Component } from 'react'
import VerticalLayout from '../../src/VerticalLayout'
class Folder extends Component {
    static get defaultProps() {
        return {
            title: '',
        }
    }
    render(){
        var styles={
            wrap: {
                width: '100%',
                margin: '20px 0',
                flex:'1 0 auto',
                alignItems: 'stretch',
                boxSizing: 'border-box'
            },
            title: {
                color: '#404040',
                fontWeight: 500,
                lineHeight: '40px',
                marginBottom: 20,
                marginTop: 8,
                fontFamily: 'lato,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif',
                fontSize: 22,
            },
            content: {
                fontSize: 14,
                color: '#6a6a6a',
                paddingRight: 5,
                textAlign: 'justify',
                lineHeight:1.5,
            },
        };
        return (
            <VerticalLayout style={styles.wrap}>
                {this.props.title?<span style={styles.title}>{this.props.title}</span>:''}
                <VerticalLayout style={styles.content}>
                    {this.props.children}
                </VerticalLayout>
            </VerticalLayout>
            )
    }
}

module.exports = Folder;