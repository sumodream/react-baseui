import React from 'react'
import ReactDOM from 'react-dom'
import VerticalLayout from '../../src/VerticalLayout'

class MD extends React.Component {
    static get defaultProps() {
        return {
            src: 'http://design.iyunxiao.com/showmd/?cnt=getstart.md'
        }
    }
    render() {
        var styles = {
            wrap: {
                display: 'flex',
                alignSelf: 'stretch',
                flex: '1 0 auto',
                alignItems: 'stretch',
                marginTop: -30
            }
        };
        return (
            <VerticalLayout style={styles.wrap}>
                <iframe src={this.props.src} width='100%' height='100%'  style={{display: 'flex',alignSelf: 'center',width: '104%',border:0}} ></iframe>
            </VerticalLayout>
        )
    }
}

module.exports = MD;