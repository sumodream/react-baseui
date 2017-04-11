import YXReactUIBase from '../framework/uibase'
import React from 'react'
var VerticalLayout=require("src/VerticalLayout");
var HorizontalLayout=require("src/HorizontalLayout");
var SVGEditor=require("src/SVGEditor");
var Image=require("src/Image");
var Text=require("src/Text");
var Favicon=require("src/Favicon");
class Test_SVGEditor extends YXReactUIBase{
    constructor(props){
        super(props);
        this.state={
            img:false,
            img2:false
        }
        this.data={type:'圆',x:200,y:200,radius:50};
    }

    setSelectImageData(callback){
        this.setState({
            img:callback(90,90,'preview1'),
            img2:callback(60,60,'preview2')
        });
    }

    svgData(file,elements,idx,obj){
        // console.log("hi",file);
        // this.props.svgData(file,elements,idx,obj);
    }

    render(){
        console.log(this.state);
        return (
            <HorizontalLayout>
                <SVGEditor onDataChange={this.svgData.bind(this)} showToolbar={false} showShapes={false} defaultSelect={0} elements={[this.data]} width={400} height={400} onActiveData={this.setSelectImageData.bind(this)} />
                <VerticalLayout style={{width:146,backgroundColor:'#f2f2f2',alignSelf:'stretch',alignItems:'center',marginLeft:30}}>
                    <Text  style={{paddingTop: 20,paddingBottom: 18,fontSize: 14,color: '#6e7279',alignItems: 'center',justifyContent: 'center',alignSelf: 'center',display:'flex'}}>预览头像</Text>
                    {this.state.img?this.state.img:<Favicon src={'http://hfs.yunxiao.com/src/profile/images/icon-face.png'} size={90} />}
                    <Text style={{paddingTop: 10,paddingBottom: 20,fontSize: 12,color: '#6e7279',alignItems: 'center',justifyContent: 'center',alignSelf: 'center',display:'flex'}}>90x90</Text>
                    {this.state.img2?this.state.img2:<Favicon src={'http://hfs.yunxiao.com/src/profile/images/icon-face.png'} size={60} />}
                    <Text style={{paddingTop: 10,paddingBottom: 20,fontSize: 12,color: '#6e7279',alignItems: 'center',justifyContent: 'center',alignSelf: 'center',display:'flex'}}>60x60</Text>
                </VerticalLayout>
            </HorizontalLayout>
        );
    }
}

module.exports = Test_SVGEditor;