import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import VerticalLayout from './VerticalLayout'
import Link from './Link'
class Questions extends ReactUIBase {
   static get propTypes() {
        return {
            data: React.PropTypes.object,
            options: React.PropTypes.object  //组件配置条件
        }
    }
    static get defaultProps() {
        return {
            data: {
                questionObj: {
                    "comment": "本题考查了三解函数及解三角形知识的综合应用，难度较大，关键是通过构造三角形利用正余弦定理构建三角函数模型．",
                    "refer_exampapers": [
                      {
                        "region": "江苏",
                        "year": 2015,
                        "id": 3219193343,
                        "name": "2014-2015学年江苏省泰州市兴化市文正实验学校高三（上）第一次月考数学试卷（理科）"
                      },
                      {
                        "region": "江苏",
                        "year": 2014,
                        "id": 2976841215,
                        "name": "2013-2014学年江苏省淮安市淮海中学高三（下）期初数学试卷"
                      },
                      {
                        "region": "江苏",
                        "year": 2014,
                        "id": 2808872447,
                        "name": "2013-2014学年江苏省泰州市高三（上）期末数学试卷"
                      }
                    ],
                    "blocks": {
                      "answers": [
                        "<img alt=\"go题库\" src=\"http://crawler.gotiku.com:8008/data/img?object_name=8fa692905bea8f777bfc9c4f0429a1f2&appendix=png\" style=\"vertical-align:middle;FLOAT:right;\" />解：（1）如图，连接${AD}$，在${\\triangle ACD}$中，${AB= BD= l}$，${\\angle B=  \\dfrac{\\pi }{3}}$，<br />∴${AD= l}$，${\\angle A=  \\dfrac{\\pi }{3}}$，<br />∵货物从${D}$处至${C}$处运行速度为${v}$，设运行的时间为${t_{1}}$，则${CD= vt_{1}}$，<br /> 货物从${C}$处至${A}$处运行速度为${3v}$，设运行的时间为${t_{2}}$，则${AC= 3vt_{2}}$，<br />∴在${\\triangle ACD}$中，由正弦定理得，${ \\dfrac{vt_{1}}{\\sin A}=  \\dfrac{l}{\\sin (\\pi -\\theta )}}$，${ \\dfrac{3vt_{2}}{\\sin (\\theta - \\dfrac{\\pi }{3})}=  \\dfrac{l}{\\sin (\\pi -\\theta )} }$<br />∴${t_{1}=  \\dfrac{ \\sqrt{3}l}{2v\\sin \\theta }}$，${t_{2}=  \\dfrac{l\\sin (\\theta - \\dfrac{\\pi }{3})}{3v\\sin \\theta }}$<br />∴${t= t_{1}+ t_{2}=  \\dfrac{ \\sqrt{3}l}{2v\\sin \\theta }+  \\dfrac{l\\sin (\\theta - \\dfrac{\\pi }{3})}{3v\\sin \\theta }}$<br />${=  \\dfrac{3 \\sqrt{3}l+ 2l\\sin (\\theta - \\dfrac{\\pi }{3})}{6v\\sin \\theta }}$，${( \\dfrac{\\pi }{3}\\lt \\theta \\lt  \\dfrac{2\\pi }{3})}$；",
                        "（2）由${(1)}$知当${\\theta =  \\dfrac{\\pi }{2}}$，${t}$最小，即${C}$在${AB}$的中点时，${t}$取最小值．"
                      ],
                      "explanations": [
                        "第（1）问，时间${t}$分成两段，从${D}$到${C}$设为${t_{1}}$，从${C}$到${A}$设为${t_{2}}$，要建立${t}$与${\\theta }$的函数关系，需要构造三角形，利用正余弦定理解决．第",
                        "（2）问，根据第${(1)}$问三角函数的形式，当${\\theta =  \\dfrac{\\pi }{2}}$时，${t}$取最小值．"
                      ],
                      "solutions": [
                        "<img alt=\"go题库\" src=\"http://crawler.gotiku.com:8008/data/img?object_name=8fa692905bea8f777bfc9c4f0429a1f2&appendix=png\" style=\"vertical-align:middle;FLOAT:right;\" />解：（1）如图，连接${AD}$，在${\\triangle ACD}$中，${AB= BD= l}$，${\\angle B=  \\dfrac{\\pi }{3}}$，<br />∴${AD= l}$，${\\angle A=  \\dfrac{\\pi }{3}}$，<br />∵货物从${D}$处至${C}$处运行速度为${v}$，设运行的时间为${t_{1}}$，则${CD= vt_{1}}$，<br /> 货物从${C}$处至${A}$处运行速度为${3v}$，设运行的时间为${t_{2}}$，则${AC= 3vt_{2}}$，<br />∴在${\\triangle ACD}$中，由正弦定理得，${ \\dfrac{vt_{1}}{\\sin A}=  \\dfrac{l}{\\sin (\\pi -\\theta )}}$，${ \\dfrac{3vt_{2}}{\\sin (\\theta - \\dfrac{\\pi }{3})}=  \\dfrac{l}{\\sin (\\pi -\\theta )} }$<br />∴${t_{1}=  \\dfrac{ \\sqrt{3}l}{2v\\sin \\theta }}$，${t_{2}=  \\dfrac{l\\sin (\\theta - \\dfrac{\\pi }{3})}{3v\\sin \\theta }}$<br />∴${t= t_{1}+ t_{2}=  \\dfrac{ \\sqrt{3}l}{2v\\sin \\theta }+  \\dfrac{l\\sin (\\theta - \\dfrac{\\pi }{3})}{3v\\sin \\theta }}$<br />${=  \\dfrac{3 \\sqrt{3}l+ 2l\\sin (\\theta - \\dfrac{\\pi }{3})}{6v\\sin \\theta }}$，${( \\dfrac{\\pi }{3}\\lt \\theta \\lt  \\dfrac{2\\pi }{3})}$；",
                        "（2）由${(1)}$知当${\\theta =  \\dfrac{\\pi }{2}}$，${t}$最小，即${C}$在${AB}$的中点时，${t}$取最小值．"
                      ],
                      "types": [
                        "解答题",
                        "解答题"
                      ],
                      "stems": [
                        {
                          "stem": "（1）当${\\theta }$变化时，试将货物运行的时间${t}$表示成${\\theta }$的函数（用含有${v}$和${l}$的式子）；"
                        },
                        {
                          "stem": "（2）当${t}$最小时，${C}$点应设计在${AB}$的什么位置？"
                        }
                      ]
                    },
                    "description": "<img alt=\"go题库\" src=\"http://crawler.gotiku.com:8008/data/img?object_name=7cc4bf9093aeefd8093bfab037dae607&appendix=png\" style=\"vertical-align:middle;FLOAT:right;\" />某运输装置如图所示，其中钢结构${ABD}$是${AB= BD= l}$，${\\angle B=  \\dfrac{\\pi }{3}}$的固定装置，${AB}$上可滑动的点${C}$使${CD}$垂直与底面（${C}$不${A}$，${B}$与重合），且${CD}$可伸缩（当${CD}$伸缩时，装置${ABD}$随之绕${D}$在同一平面内旋转），利用该运输装置可以将货物从地面${D}$处沿${D\\rightarrow C\\rightarrow A}$运送至${A}$处，货物从${D}$处至${C}$处运行速度为${v}$，从${C}$处至${A}$处运行速度为${3v}$．为了使运送货物的时间${t}$最短，需在运送前调整运输装置中${\\angle DCB= \\theta }$的大小．",
                    "type": "解答题",
                    "period": "高中",
                    "knowledges": [
                      {
                        "id": 2147418111,
                        "name": "集合的含义"
                      },
                      {
                        "id": 2145845247,
                        "name": "函数解析式的求解及常用方法"
                      },
                      {
                        "id": 2131492863,
                        "name": "已知三角函数模型的应用问题"
                      },
                      {
                        "id": 2102919167,
                        "name": "三角函数的最值"
                      }
                    ],
                    "difficulty": 3,
                    "refer_times": 3,
                    "quality": 0,
                    "id": 120121599,
                    "subject": "数学"
                },
                submissionObj: [
                    {
                        "type": "text",
                        "value": "我是答案"
                    }
                ],
                score: 1
            },
            options:{
                showSubmission: true        //是否显示【学生答案】
            }
        }
    }
    createMarkup(value){
        return {__html: value};
    }
    render(){
        if(typeof window!='undefined'){
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            MathJax.Hub.Configured();
        }
        var styles ={
            answerWrap:{
                width: '100%',
                paddingLeft:20,
                paddingRight:20,
                boxSizing:'border-box'
            },
            title:{
                fontSize:15,
                margin:'20px 0 20px -9px'
            }
        };
        var question = this.props.data.questionObj;
        let questionDes='<div style=\"padding:10px 20px 0;background-color:#fff;line-height:2;\">'+question.description+'</div>';
        question.blocks.stems.forEach((item)=>{
            questionDes += "<div style=\"padding:5px 20px 0;background-color:#fff;\">"+item['stem']+"</div>";
        });
        let knowledges = question.knowledges.map((item,idx)=>{
            return <Link key={idx} href={'http://hfs.yunxiao.com/src/gotiku/html/knowledge.html?knowledge_id='+item.id} target={'_blank'} style={{fontSize:14,marginRight:50,paddingBottom:20}} theme={'primary'}>{item.name}</Link>
        });
        let explanations = question.blocks.explanations.map((solution,idx)=>{
            return <span key={idx} style={{display:'block',width:'100%',paddingBottom:5,boxSizing:'border-box'}} dangerouslySetInnerHTML={this.createMarkup(solution)} />
        });
        let answers = question.blocks.solutions.map((solution,idx)=>{
            return <span key={idx} style={{display:'block',width:'100%',paddingBottom:5,boxSizing:'border-box'}} dangerouslySetInnerHTML={this.createMarkup(solution)} />
        });
        let studentSubmission = (this.props.options.showSubmission && this.props.data.submissionObj)?this.props.data.submissionObj.map((sub,idx)=>{
            let subContent = '';
            if(sub.type=='image'){
                subContent = <img  style={{maxWidth: '100%',width:'100%'}} src={sub.value} alt='学生的回答' />;
            }else{
                subContent = <span style={{paddingBottom:5,lineHeight:1.5,boxSizing:'border-box'}}>{sub.value}</span>;
            }
            return (
                <VerticalLayout style={styles.answerWrap}>
                    <h4 style={styles.title}>【学生的回答】</h4>
                    <div style={{width: '100%',paddingBottom:10,borderBottom:'thin solid #f2f2f2',boxSizing:'border-box'}}>
                        <div key={idx} style={{width:'100%',wordWrap:'break-word',lineHeight:1.5}}>{subContent}</div>
                    </div>
                </VerticalLayout>
            );
        }):"";
        return (
           <VerticalLayout style={{fontSize:14, lineHeight:1.5,alignSelf:'stretch',flex:'1 0 auto'}}>
            <div dangerouslySetInnerHTML={this.createMarkup(questionDes)} />
            {studentSubmission}
            <VerticalLayout style={styles.answerWrap}>
                <h4 style={styles.title}>【解答】</h4>
                <div style={{width: '100%',paddingBottom:10,borderBottom:'thin solid #f2f2f2',boxSizing:'border-box'}}>
                    {answers}
                </div>
            </VerticalLayout>
           </VerticalLayout>
        )
    }
}
module.exports = Questions;