window.DevFrame = this;
import React from 'react'
import Table from '../src/Table'
import HorizontalLayout from '../src/HorizontalLayout'
import VerticalLayout from '../src/VerticalLayout'
import Button from '../src/Button'
import Text from '../src/Text'
import Image from '../src/Image'
import Link from '../src/Link'
import CollapseList from '../src/CollapseList'
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}

class BaseDevFrame extends React.Component{	

    changeComp(comp){
        history.replaceState(null, "", updateQueryStringParameter(window.location.href,'comp',comp));
        this.setState({comp});
    }
    constructor(props) {
        super(props);
        this.renderPopup.bind(this);
    }
    renderPopup(elem,ui,src){
        var pos = ReactDOM.findDOMNode(this.refs[ui]).getBoundingClientRect();
        ReactDOM.render((
            <VerticalLayout style={{position:'absolute',left:window.pageXOffset+pos.left-50,top:window.pageYOffset+pos.top-125,width:120,height:120, display:'flex',flexDirection:'column'}}>
                <Image  src={src} />
            </VerticalLayout>
            ),elem);
    }

    wechartMouseOver(){
        if(typeof this.wechartElem == 'undefined'){
            this.wechartElem = document.createElement('div');
            document.body.appendChild(this.wechartElem);
        }
        this.renderPopup(this.wechartElem,'wechartui','/images/weima.png');
    }
    wechartMouseOut(){
        ReactDOM.unmountComponentAtNode(this.wechartElem);
        this.wechartElem=undefined;
    }
    appMouseOver(){
        if(typeof this.appElem == 'undefined'){
            this.appElem = document.createElement('div');
            document.body.appendChild(this.appElem);
        }
        this.renderPopup(this.appElem,'appui','/images/weima-download.png');
    }
    appMouseOut(){
        ReactDOM.unmountComponentAtNode(this.appElem);
        this.appElem=undefined;
    }
    render(){
        if ((!Table) || (!HorizontalLayout) || (!VerticalLayout) || (!Button) || (!Text)){
            return <span>Loading ...</span>;
        }
        else{
            var originData = this.props.comps;
            var comps = Object.keys(this.props.comps);
            if (!this.state){
                this.state={};
            }
            if (!this.state.comp){
                this.state.comp = getParameterByName('comp');
            }
            if ((!this.state.comp) && (comps.length>0)){
                this.state.comp = comps[0];
            }
            var CompInstance=null;
            if (this.state.comp){
                var test = originData[this.state.comp].test;
                if (!test){
                    test = "src/"+this.state.comp;
                }
                CompInstance = require(test);
                if (!CompInstance){
                    return null;
                }
            }
            var data={
                data:[[<Button style={{width:267,}} theme='infoBlueBlack'>Design of React</Button>],[<Button style={{width:267,}} theme='infoBlueBlack'>快速上手</Button>],[<Button style={{width:267,}} theme='infoBlueBlack'>安装</Button>],[<Button style={{width:267,}} theme='infoBlueBlack'>更新日志</Button>],[<Button style={{width:267,}} theme='infoBlueBlack'>升级指南</Button>],['Components']].concat(comps.map((comp)=>{
                    return [<Button style={{width:267,}} onClick={this.changeComp.bind(this,comp)} theme='infoBlue'>{comp}</Button>];
                })),
            };

            var styles = {
            header:{
                display:'flex',
                flexDirection:'row',
                flexGrow:1,
                alignItems:'center',
                alignSelf:'stretch',
            },
            logo:{
                marginRight: 65
            },
            link:{
                fontSize: 14,
                color: '#333333',
                marginRight: 40,
                textDecoration:'none'
            },
            favicon:{
                margin: '0 12px 0 30px'
            },
            footer:{
                flexGrow: 1,
                alignItems:'center',
                alignSelf:'stretch',
                justifyContent:'center',
                
            },
            plateform:{
                marginRight: 25,
            },
            company:{
                fontSize: 12,
                color: '#ababab'
            },
            text:{
                margin: '0 5px'
            }
        };
            return (
                <VerticalLayout style={{backgroundColor:'#ececec'}}>
                    <HorizontalLayout style={{alignItems:'center',backgroundColor:'#fff',justifyContent:'center',height:66,alignSelf: 'stretch',padding:'0 60',marginBottom: 30,}}>
                        <HorizontalLayout style={styles.header}>
                            <Image style={styles.logo} src='/images/logo.png'></Image>
                        </HorizontalLayout>
                    </HorizontalLayout>

                    <HorizontalLayout style={{alignItems:'center',justifyContent:'center',alignSelf: 'stretch',padding:'0 60',marginBottom: 30,}}>
                        <Table data={data} style={{width:270,alignSelf:'stretch',overflow:'auto'}}/>
                        
                        <VerticalLayout style={{flex:1,alignSelf:'stretch',backgroundColor:'#fff'}}>
                            <Text>{this.state.comp}</Text>
                            <HorizontalLayout style={{alignItems:'center',justifyContent:'center',alignSelf:'stretch'}}>
                            <CompInstance />
                            </HorizontalLayout>
                        </VerticalLayout>
                    </HorizontalLayout>

                    <VerticalLayout style={{height: 86,boxSizing:'border-box',backgroundColor:'#fff',alignSelf: 'stretch',padding:'0 60'}}>
                        <HorizontalLayout style={styles.footer}>
                            <HorizontalLayout style={styles.plateform}>
                                <Link style={{marginRight: 16}} theme={'default'} icon={'icon-iconfont-xinlang'} href={'http://weibo.com/haofenshu'} hoverColor={'#59bde5'}>@好分数</Link>
                                <Link style={{marginRight: 16}} ref='wechartui' theme={'default'} icon={'icon-iconfont-weixin'} hoverColor={'#59bde5'} onMouseOver={this.wechartMouseOver.bind(this)} onMouseOut={this.wechartMouseOut.bind(this)}>haofenshu</Link>
                                <Link ref='appui' theme={'default'} icon={'icon-grade'} hoverColor={'#59bde5'} onMouseOver={this.appMouseOver.bind(this)} onMouseOut={this.appMouseOut.bind(this)}>扫描二维码下载好分数APP</Link>
                            </HorizontalLayout>
                            <HorizontalLayout style={styles.company}>
                                <Text style={styles.text}>©2014-2015 北京修齐治平科技有限公司</Text>
                                <Text style={styles.text}>|</Text>
                                <Link theme={'default'}  href={'http://www.miitbeian.gov.cn/'} target={'_blank'}>京ICP备12037256-6号</Link>
                                <Text style={styles.text}>|</Text>
                                <Text style={styles.text}>京公网安备11010502027075</Text>
                            </HorizontalLayout>
                        </HorizontalLayout>
                    </VerticalLayout>
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
