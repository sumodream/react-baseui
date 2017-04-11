import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Carousel extends ReactUIBase {
    static get propTypes() {
        return {
            width: React.PropTypes.number,
            height: React.PropTypes.number,
            list: React.PropTypes.array,
            time: React.PropTypes.number,
            effect: React.PropTypes.oneOf(['scrollX','fade']),
            showDots: React.PropTypes.bool,
            autoPlay: React.PropTypes.bool,
            onChange: React.PropTypes.func
        }
    }
    static get defaultProps() {
        return {
            width: 500,
            height: 200,
            list:[
                {
                    item:<div>hello 1</div>
                },
                {
                    item:<div>world 2</div>
                },
                {
                    item:<div>nihao 3</div>
                }
            ],
            effect:'scrollX',
            time: 3000,
            showDots: true,
            autoPlay: true
        };
    }
    constructor(props) {
        super(props);
        this.timer = null;
        this.setInterval.bind(this);
        this.state = {
            current: 0
        };
    }
    setInterval(){
        if(this.props.autoPlay){
            let _this = this;
            let conLength = this.props.list.length;
            this.timer = setInterval(function () {
                _this.state.current++;
                if(_this.state.current>=conLength){
                    _this.state.current = 0;
                }
                _this.switchContent(_this.state.current);
            },_this.props.time);
        }
    }
    switchContent(idx){
        if(this.props.effect == 'scrollX'){
            this.scrollX(idx);
        }
        if(this.props.onChange){
            this.props.onChange(idx,this.timer);
        }
        this.setState({
            current: idx
        });

    }
    scrollX(idx){
        var _this = this;
        let conLength = this.props.list.length;
        this.wrapDom = ReactDOM.findDOMNode(this.refs.wrap);
        if(idx==0){
            idx = conLength;
            setTimeout(function(){
                _this.wrapDom.style.transition = 'initial';
                _this.wrapDom.style.left = 0;
            },700);
        }else{
            this.wrapDom.style.WebkitTransition = 'left 0.6s linear';
            this.wrapDom.style.MozTransition = 'left 0.6s linear';
            this.wrapDom.style.MsTransition = 'left 0.6s linear';
            this.wrapDom.style.OTransition = 'left 0.6s linear';
            this.wrapDom.style.transition = 'left 0.6s linear';
        }
        this.wrapDom.style.left = 0-this.props.width*idx;
    }
    dotClick(idx){
        if(this.state.current != idx){
            this.switchContent(idx);
        }
    }
    conMouseEnter(e){
        e.stopPropagation();
        clearInterval(this.timer);
    }
    conMouseLeave(e){
        e.stopPropagation();
        this.setInterval();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    componentDidMount(){
        this.setInterval();
    }
    render() {
        var _this = this;
        var conLength = this.props.list.length;
        var styles = {
            wrap:{
                position:'relative',
                overflow: 'hidden',
                width: this.props.width,
                height: this.props.height,
                backgroundColor:'#b1b1b1'
            },
            contents:{
                position:'absolute',
                top: 0,
                left: 0,
                width: this.props.effect=='scrollX'?this.props.width*(conLength+1):'100%',
                height: '100%',
                margin: 0,
                padding: 0,
                listStyle:'none',
                WebkitTransform: 'translateZ(0)',
                MozTransform: 'translateZ(0)',
                MsTransform: 'translateZ(0)',
                OTransform: 'translateZ(0)',
                transform: 'translateZ(0)',
                WebkitTransition:'left 0.6s linear',
                MozTransition:'left 0.6s linear',
                MsTransition:'left 0.6s linear',
                OTransition:'left 0.6s linear',
                transition:'left 0.6s linear'
            },
            dots:{
                margin: 0,
                padding: 0,
                position: 'absolute',
                left: '50%',
                bottom: 20,
                marginLeft: -(conLength*14-6)/2,
                listStyle: 'none'
            }
        };

        var contents = this.props.list.map((page,idx)=>{
            let isCurrent = idx == _this.state.current;
            let style = {};
            if(_this.props.effect=='fade'){
                style.content={
                        position: 'absolute',
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        opacity: isCurrent?1:0,
                        WebkitTransform: 'translateZ(0)',
                        MozTransform: 'translateZ(0)',
                        MsTransform: 'translateZ(0)',
                        OTransform: 'translateZ(0)',
                        transform: 'translateZ(0)',
                        WebkitTransition:'opacity 0.6s linear',
                        MozTransition:'opacity 0.6s linear',
                        OTransition:'opacity 0.6s linear',
                        transition:'opacity 0.6s linear'
                    };
            }else if(_this.props.effect == 'scrollX'){
                style.content={
                        position:'relative',
                        float:'left',
                        display:'flex',
                        width: _this.props.width,
                        height:_this.props.height
                    };
            }
            return (
                <li style={style&&style.content} key={idx}>{page.item}</li>
            );

        });

        var dots = this.props.showDots&&this.props.list.map((page,idx)=>{
            let isCurrent = idx == _this.state.current;
            let style = {
                li:{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    backgroundColor:'#fff',
                    opacity: isCurrent? 1:.5,
                    borderRadius: '50%',
                    cursor:'pointer',
                    marginRight: idx==conLength-1?0:6
                }
            };
            return (
                <li style={style.li} key={'dot'+idx} onClick={this.dotClick.bind(this,idx)} />
            );

        });


        return (
            <div style={this.style(styles.wrap)} onMouseEnter={this.conMouseEnter.bind(this)} onMouseLeave={this.conMouseLeave.bind(this)}>
                <ul ref='wrap' style={styles.contents} >
                    {contents}
                    {contents[0]}
                </ul>
                {
                    this.props.showDots?
                    <ul style={styles.dots}>
                        {dots}
                    </ul>:''
                }

            </div>
        );
    }
}
module.exports = Carousel;