import React from 'react'
import VerticalLayout from '../../src/VerticalLayout'

class Title extends React.Component {
    static get defaultProps() {
        return {
            title: '的属性说明如下：'
        }
    }
    render() {
        var styles = {
            wrap: {
                width: '100%',
                marginBottom: 20,
                boxSizing: 'border-box'
            },
            title: {
                color: '#333',
                fontWeight: 600,
                lineHeight: '40px',
                marginBottom: 24,
                marginTop: 8,
                fontFamily: 'lato,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif',
                fontSize: 28
            },
            content: {
                fontSize: 14,
                color: '#6a6a6a',
                paddingRight: 5,
                textAlign: 'justify',
                lineHeight:1.5
            }
        };
        return (
            <VerticalLayout style={styles.wrap}>
                <span style={styles.title}>{this.props.title}</span>
                <VerticalLayout style={styles.content}>
                    {this.props.children}
                </VerticalLayout>
            </VerticalLayout>
        )
    }
}

module.exports = Title;