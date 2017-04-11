window.DevFrame = this;
import React, { Component } from 'react'
import HorizontalLayout from '../src/HorizontalLayout'
import VerticalLayout from '../src/VerticalLayout'
import Text from '../src/Text'

class BaseDevFrame extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        if ((!HorizontalLayout) || (!VerticalLayout) || (!Text)){
            return <div style={{display:'flex',height:'100vh',flex:'1 0 auto',alignSelf:'stretch',alignItems:'center',justifyContent:'center',fontSize: 24,color:'#6a6a6a'}}>异世界的惊喜,由你开启 ......</div>;
        }
        else{
            var that = this;
            var CompInstance = require('/src/'+this.props.comps.name);
            if(!CompInstance){
                return null;
            }

            var styles = {

                //中间部分
                wrap:{
                    width: '90%',
                    minHeight: '76vh',
                    margin: '20px auto',
                    alignItems: 'center',
                    justifyContent:'center',
                    alignSelf:'stretch',
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    padding: 30,
                    overflow:'hidden',
                    boxSizing:'border-box'

                }
            };
            return (
                <VerticalLayout style={{backgroundColor:'#ececec'}}>
                    <Text style={{marginTop: 40,marginLeft: '5%',fontSize: 26,color:'#4D4D4D'}}>基础组件: {this.props.comps.name}</Text>
                    <HorizontalLayout style={styles.wrap}>
                        <CompInstance />
                    </HorizontalLayout>
                </VerticalLayout>
            );
        }

    }
}

let reduxState={};
if (window.__REDUX_STATE__) {
    try {
        reduxState = JSON.parse(unescape(__REDUX_STATE__));
    } catch (e) {
    }
}

if (window.DevFrame){
    setTimeout(()=>{
        window.DevFrame.forceUpdate();
    });
}
else{
    ReactDOM.render(<BaseDevFrame comps={reduxState}/>, document.getElementById('root'));
}
