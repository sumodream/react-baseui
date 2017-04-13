window.DevFrame = this;
import React, { Component } from 'react'
import color from '../common/color'
import HorizontalLayout from '../src/HorizontalLayout'
import VerticalLayout from '../src/VerticalLayout'
import Table from '../src/Table'
import Button from '../src/Button'
import Text from '../src/Text'
import Image from '../src/Image'
import Link from '../src/Link'
import FontIcon from '../src/FontIcon'
import com from '../pages/common/common'

class BaseDevFrame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comp : 'about/design'
        };
    }
    componentDidMount(){
        var that = this;
        window.onhashchange = function () {
            that.setState({
                comp: location.hash.slice(1)
            });
        }
    }
    render(){
        if ((!com) || (!color) ||(!Table) || (!HorizontalLayout) || (!VerticalLayout) || (!Button) || (!Text) || (!Image) || (!Link)){
            return <div style={{display:'flex',flex:'1 0 auto',alignSelf:'stretch',alignItems:'center',justifyContent:'center',fontSize: 24,color:'#6a6a6a'}}>Loading......</div>;
        }
        else{
            if(location.hash && location.hash.slice(1) != this.state.comp){
                this.state.comp = location.hash.slice(1);
            }
            var that = this;
            var originData = this.props.comps;
            var aboutKeys = Object.keys(originData.about);
            var classifys = originData.components;
            var compKeys = Object.keys(classifys);
            var compList = [];
            var CompInstance = require('/pages/'+this.state.comp);
            if(!CompInstance){
                return null;
            }

            var styles = {
                //头部
                header:{
                    display:'flex',
                    flexDirection:'row',
                    flexGrow:1,
                    alignItems:'center',
                    alignSelf:'stretch'
                },
                logo:{
                    marginRight: 105
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
                //底部
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
                    color: '#666',
                },
                text:{
                    margin: '0 5px'
                },

                //中间部分
                wrap:{
                    width: 1200,
                    minHeight: '70vh',
                    margin: '20px auto',
                    alignItems: 'stretch',
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    paddingTop: 20,
                    overflow:'hidden'

                }
            };
            var sideBar = (()=>{
                let styles = {
                    sideBar:{
                        width: 220,
                        paddingBottom: 20,
                        borderRight: 'thin solid #e9e9e9',
                        alignItems:'stretch',
                        overflow: 'hidden'
                    },
                    link: {
                        display: 'flex',
                        flexDirection:'row',
                        alignSelf:'stretch',
                        alignItems:'center',
                        height: 42,
                        paddingLeft: 24,
                        fontSize: 14,
                        color: '#6a6a6a',
                        textDecoration:'none',
                        boxSizing: 'border-box'
                    },
                    linkComp: {
                        display: 'flex',
                        flexDirection:'row',
                        alignSelf:'stretch',
                        alignItems:'center',
                        height: 42,
                        paddingLeft: 48,
                        fontSize: 14,
                        color: '#6a6a6a',
                        textDecoration:'none',
                        boxSizing: 'border-box'
                    },
                    title:{
                        display: 'flex',
                        flexDirection:'row',
                        alignSelf:'stretch',
                        alignItems:'center',
                        height: 30,
                        paddingLeft: 24,
                        fontSize: 14,
                        color: '#333',
                        boxSizing: 'border-box'
                    },
                    classifyTitle:{
                        display: 'flex',
                        flexDirection:'row',
                        alignSelf:'stretch',
                        alignItems:'center',
                        height: 30,
                        paddingLeft: 32,
                        fontSize: 12,
                        color: '#6a6a6a',
                        boxSizing: 'border-box'
                    }
                };
                let abouts = aboutKeys.map((item,idx)=>{
                    let obj = originData.about[item];
                    let linkObj = {
                        comp: 'about/'+obj.en,
                        ch: obj.ch
                    };
                    compList.push(linkObj);
                    return (<Link key={idx}style={Object.assign({},styles.link,that.state.comp==linkObj.comp?{borderRight: '2px solid #2db7f5',color:'#2db7f5'}:{})} hoverStyle={{color: '#2db7f5'}} href={'#about/'+obj.en}>{obj.ch}</Link>);
                });
                var components = compKeys.map((classify,idx)=>{
                    let classifyComps = classifys[classify].map((comp,idx)=>{
                        let linkObj = {
                            comp: 'components/'+comp.en,
                            en: comp.en,
                            ch: comp.ch
                        };
                        compList.push(linkObj);
                        return (<Link key={idx} style={Object.assign({},styles.linkComp,that.state.comp==linkObj.comp?{borderRight: '2px solid #2db7f5',color:'#2db7f5'}:{})} hoverStyle={{color: '#2db7f5'}} href={'#components/'+comp.en}>{comp.en}<Text style={{marginLeft: 4,fontSize: 12, opacity:0.6,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',marginRight:10}}>{comp.ch}</Text></Link>);
                    });
                    return (
                        <VerticalLayout key={idx} style={{alignSelf:'stretch'}}>
                            <Text style={styles.classifyTitle}>{classify}</Text>
                            {classifyComps}
                        </VerticalLayout>
                    )
                });

                return (
                    <VerticalLayout style={styles.sideBar}>
                        {abouts}
                        <Text style={styles.title}>Components</Text>
                        <VerticalLayout>
                            {components}
                        </VerticalLayout>
                    </VerticalLayout>
                );
            })();

            //下一项
            var currentIndex = _.indexOf(compList,_.findWhere(compList,{comp: this.state.comp})),
                prevLink = null,
                nextLink = null;
            if(currentIndex-1 >= 0){
                prevLink = compList[currentIndex-1];
            }
            if(currentIndex+1 < compList.length){
                nextLink = compList[currentIndex+1];
            }
            return (
                <VerticalLayout style={{backgroundColor:'#ececec',display:'flex',justifyContent:'space-between'}}>
                    <HorizontalLayout style={{alignItems:'center',backgroundColor:'#fff',justifyContent:'center',height:66,alignSelf: 'stretch',padding:'0 45',boxShadow: '0 0 20px rgba(0,0,0,.3)'}}>
                        <HorizontalLayout style={styles.header}>
                            <Image style={styles.logo} src='/images/logo.png'></Image>
                            <HorizontalLayout style={{flex:'1 0 auto'}}>
                              <Link style={styles.link} href={'https://ssumo.github.io/'} hoverStyle={{color: '#59bde5'}}>博客</Link>
                              <Link style={styles.link} href={'https://github.com/sumodream'} hoverStyle={{color: '#59bde5'}}>GitHub</Link>
                              <Link style={styles.link} href={'https://github.com/sumodream/react-baseui'} hoverStyle={{color: '#59bde5'}}>源码</Link>
                            </HorizontalLayout>
                        </HorizontalLayout>
                    </HorizontalLayout>

                    <HorizontalLayout style={styles.wrap}>
                        {sideBar}
                        <VerticalLayout style={{width: 980,boxSizing:'border-box',backgroundColor:'#fff',justifyContent:'space-between'}}>
                            <VerticalLayout style={{paddingLeft: 30,paddingRight: 30,alignSelf:'stretch',paddingBottom:30}}>
                                <CompInstance />
                            </VerticalLayout>
                            <HorizontalLayout style={{justifyContent:'space-between',paddingLeft:20,paddingRight:20,alignItems:'center',alignSelf:'stretch',borderTop:'thin solid' +
                             ' #e9e9e9',height: 60}}>
                                {prevLink?<Link style={{fontSize: 16}} theme={'primary'} href={'#'+prevLink.comp}> {' << '} {prevLink.en?<Text style={{marginLeft:5}}>{prevLink.en}<Text style={{fontSize:14,paddingRight:5,paddingLeft:5,opacity:0.6}}>{prevLink.ch}</Text></Text>:prevLink.ch}</Link>:<Text></Text>}
                                {nextLink?<Link style={{fontSize: 16}} theme={'primary'} href={'#'+nextLink.comp}>{nextLink.en?<Text>{nextLink.en}<Text style={{fontSize:14,paddingRight:5,paddingLeft:5,opacity:0.6}}>{nextLink.ch}</Text></Text>:nextLink.ch}{' >> '} </Link>:<Text></Text>}
                            </HorizontalLayout>
                        </VerticalLayout>
                    </HorizontalLayout>

                    <VerticalLayout style={{height: 76,boxSizing:'border-box',backgroundColor:'#fff',alignSelf: 'stretch',padding:'0 60'}}>
                        <HorizontalLayout style={styles.footer}>
                            <HorizontalLayout style={styles.company}>
                                <Text style={styles.text}>© 2017 <FontIcon icon="icon-heart" /> Sumo</Text>
                                <Text style={styles.text}>|</Text>
                                <Link theme={'default'}  href={'https://github.com/sumodream'} target={'_blank'}>GitHub</Link>
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
