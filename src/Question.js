import ReactUIBase from '../framework/uibase'
import React, { Component } from 'react'
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'
import FontIcon from './FontIcon'
import Link from './Link'
class Question extends ReactUIBase {
   static get propTypes() {
		return {
			quesNum: React.PropTypes.number, //题目题号传入
			data: React.PropTypes.object,    //题目接口数据
			options: React.PropTypes.object  //组件配置条件
		}
	}
	static get defaultProps() {
		return {
			quesNum:1,
			data: {
					questionObj: {
						comment: "本题考查勾股定理及勾股定理的逆定理的应用．解题关键是得出中线${AD}$是${BC}$上的高线．",
						refer_exampapers: [
							{
							region: "",
							id: 4003135487,
							name: "《第18章 勾股定理》2010年单元综合测试（1）",
							year: 2010
							},
							{
							region: "江西",
							id: 3957063679,
							name: "2009-2010学年江西省吉安市朝宗实验学校八年级（下）期中数学试卷",
							year: 2010
							},
							{
							region: "",
							id: 3987275775,
							name: "《第18章 勾股定理》期末复习水平测试（A）",
							year: 0
							}
						],
						blocks: {
							types: [
								"选择题"
							],
							explanations: [
								"根据勾股定理的逆定理可知${BC}$上的中线${AD}$同时是${BC}$上的高线，根据勾股定理求出${AC}$的长，从而判断${\triangle ABC}$的形状．"
							],
							solutions: [
								"解：∵${AD}$是${BC}$上的中线，${AB= 17cm}$，${BC= 30cm}$，${AD= 8cm}$，<br />∴${BD= CD= \dfrac{1}{2}BC= 15}$，<br />∴${15^{2}+ 8^{2}= 17^{2}}$，故是直角三角形．<br />∴${AC= \sqrt{15^{2}+ 8^{2}}= 17}$．<br />∵${17^{2}+ 17^{2}\neq 30^{2}}$，<br />∴${\triangle ABC}$为等腰三角形．<br />故选${B}$．"
							],
							answers: [
								"B"
							],
							stems: [
								{
									options: {
										A: "直角三角形",
										C: "等腰直角三角形",
										B: "等腰三角形",
										D: "等边三角形"
									},
									stem: "已知${\triangle ABC}$中，${AB= 17cm}$，${BC= 30cm}$，${BC}$上的中线${AD= 8cm}$，则${\triangle ABC}$为（　　）"
								}
							]
						},
						description: "",
						type: "选择题",
						period: "初中",
						knowledges: [
							{
								chance: 0.0272,
								score: 0.14,
								id: 2004746239,
								name: "勾股定理的逆定理"
							}
						],
						difficulty: 3,
						refer_times: 3,
						quality: 8,
						id: 426110207,
						subject: "数学"
					},
					submissionObj: [
						{
							type: "choice",
							value: "B"
						}
					],
					score: 1
				},
			options:{
				fold: true,    				// 是否显示查看解析按钮
				showRefer: true, 			//是否显示年份与省份
				showAnswer: true,  			//是否显示【解答】
				showExplan: true,  			//是否显示【解析】
				showKnowledge: false,  		//是否显示【考点】
				showDifficulty: false,  	//是否显示【难度】
				showSubmission: true  	    //是否显示【学生答案】
			}
		}
	}
	constructor(props){
		super(props);
		this.options = Object.assign({},{
			fold: true, 	// 是否显示查看解析按钮
			showRefer: true, //是否显示年份与省份
			showAnswer: true, //是否显示【解答】
			showExplan: true, //是否显示【解析】
			showKnowledge: false, //是否显示【考点】
			showDifficulty: false , //是否显示【难度】
			showSubmission: false  	    //是否显示【学生答案】
		},props.options);
		this.state={
			toggleShow: false,
		};
	}
    createMarkup(value){
        return {__html: value};
    }
    toggleShowMark(){
    	this.setState({
    		toggleShow: !this.state.toggleShow
    	});
    	if(typeof window!='undefined'){
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            MathJax.Hub.Configured();
        }
    }
    render(){
    	var data = this.props.data.questionObj;
        if(typeof window!='undefined'){
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            MathJax.Hub.Configured();
        }
        var styles ={
        	button:{
        		display:'flex',
        		width: 110,
        		height: 30,
        		marginBottom: 10,
        		marginLeft: 20,
        		alignItems:'center',
        		justifyContent:'center',
        		border:'thin solid #e7e7e7',
        		boxSizing:'border-box',
        		fontSize: 14,
        		color:'#333',
        		cursor:'pointer'
        	},
        	contentWrap:{
                width: '100%',
                marginLeft:20,
                marginRight:20,
                fontSize:14,
                borderTop:'thin solid #f2f2f2',
                boxSizing:'border-box'
            },
            title:{
                fontSize:15,
                margin:'30px 0 20px -8px'
            }
        };
        var listWrapper = ((title,content)=>{
        	return (
        		<VerticalLayout style={styles.contentWrap}>
		                <h4 style={styles.title}>【{title}】</h4>
		                <div style={{width: '100%',paddingBottom:30,boxSizing:'border-box'}}>
		                    {content}
		                </div>
		            </VerticalLayout>
        		)
        });
        //问题描述
        var questionDes = this.props.quesNum?this.props.quesNum+'.':'';
        questionDes += this.options.showRefer&&data.refer_exampapers&&data.refer_exampapers.length>0?'<span style=\"display:inline-block;color:#1daef8;margin-right:5px;margin-left:3px;\">('+data.refer_exampapers[0].year+'.'+data.refer_exampapers[0].region+')</span>':'';
        questionDes += data.description?data.description:'';
        if(data.type=='选择题'){
        	//选择题
        	var dataQues  = (()=>{
	        	let options = '';
	        	data.blocks.stems.forEach((item)=>{
		            questionDes += item.stem;
		            Object.keys(item.options).sort((a,b)=>{
		            	return a>b?1:a==b?0:-1;
		            }).forEach((key)=>{
		            	options += '<div style=\"display:inline-block;margin:20px 20px 0 0;\">'+key+'.'+item.options[key]+'</div>';
		            })
		        });
	        	return (
	        		<VerticalLayout style={{paddingBottom: 30}}>
	        			<div style={{paddingLeft:20,fontSize:14,color:'#333',lineHeight:2}} dangerouslySetInnerHTML={this.createMarkup(questionDes)} />
	        			<HorizontalLayout style={{paddingLeft:20,fontSize:14,color:'#333',flexWrap:'wrap',justifyContent:'space-between'}} dangerouslySetInnerHTML={this.createMarkup(options)} />
	        		</VerticalLayout>
	        	)
	        })();
	        var studentSubmission = '';
        }else {
        	//解答题或其它题目
        	var dataQues  = (()=>{
	        	data.blocks.stems.forEach((item)=>{
		            questionDes += '<div>'+item.stem+'</div>';
		        });
	        	return (
	        		<VerticalLayout>
	        			<div style={{paddingLeft:20,fontSize:14,color:'#333',lineHeight:2}} dangerouslySetInnerHTML={this.createMarkup(questionDes)} />
	        		</VerticalLayout>
	        	)
	        })();
	        //学生答案
	        var submission = this.props.data.submissionObj;
	        var studentSubmission = (()=>{
	        	if(this.options.showSubmission && submission){
	        		let content = submission.map((sub,idx)=>{
	        			let subContent = '';
	        			if(sub.type=='image'){
	        				subContent = <img  style={{maxWidth: '100%',width:'100%'}} src={sub.value} alt='学生的回答' />;
	        			}else{
	        				subContent = <span style={{lineHeight:1.5,wordWrap:'break-word',boxSizing:'border-box'}}>{sub.value}</span>;
	        			}
	        			return <div key={idx} style={{width:'100%'}}>{subContent}</div>
		        	});
	        		return listWrapper('学生的回答',content);
	        	}else {
	        		return '';
	        	}
	        })();
        }
        //解答
        let answers = (()=>{
        	if(this.options.showAnswer && data.blocks.solutions && data.blocks.solutions.length){
        		let content = data.blocks.solutions.map((solution,idx)=>{
		            return <span key={idx} style={{display:'block',width:'100%',lineHeight:1.5,boxSizing:'border-box'}} dangerouslySetInnerHTML={this.createMarkup(solution)} />
		        });
        		return listWrapper('解答',content);
		    }else{
		    	return '';
		    }
        })();
        //解析
        let explanations = (()=>{
        	if(this.options.showExplan && data.blocks.explanations && data.blocks.explanations.length){
        		let content = data.blocks.explanations.map((solution,idx)=>{
		            return <span key={idx} style={{display:'block',width:'100%',boxSizing:'border-box'}} dangerouslySetInnerHTML={this.createMarkup(solution)} />
		        });
		        return listWrapper('解析',content);
		    }else{
		    	return '';
		    }
        })();
        //考点
        let knowledges = (()=>{
        	if(this.options.showKnowledge &&data.knowledges && data.knowledges.length){
        		let content = data.knowledges.map((item,idx)=>{
		            return <Link key={idx} href={'http://hfs.yunxiao.com/src/gotiku/html/knowledge.html?knowledge_id='+item.id} target={'_blank'} style={{fontSize:14,marginRight:20}} theme={'warning'}>{item.name}</Link>
		        });
		        return listWrapper('考点',<HorizontalLayout style={{width: '100%'}}>{content}</HorizontalLayout>);
		    }else{
		    	return '';
		    }
        })();
        //难度
        let difficulty = (()=>{
        	if(this.options.showDifficulty){
        		let starArr = [];
        		let diffNum = data.difficulty;
        		for(let i=1;i<=5;i++){
        			if(i<=diffNum){
        				starArr.push(1);
        			}else{
        				starArr.push(0);
        			}
        		}
        		let diffStar = starArr.map((item,idx)=>{
        			if(item){
        				return <FontIcon icon={'icon-star'} style={{fontSize:12,color:'#f7be38',marginRight:3}}/>
        			}else{
        				return <FontIcon icon={'icon-star'} style={{fontSize:12,color:'#eeeeee',marginRight:3}}/>
        			}
        		});
        		let content = (
        			<HorizontalLayout>
        				{diffStar}
        			</HorizontalLayout>
        			);
		        return listWrapper('难度',content);
		    }else{
		    	return '';
		    }
        })();
        return (
        	<VerticalLayout style={this.style({alignItems:'stretch'})}>
        	{dataQues}
        	{this.options.fold?
        		(this.state.toggleShow?
        			<VerticalLayout>
        				{studentSubmission}
        				{answers}
        				{explanations}
        				{knowledges}
        				{difficulty}
        				<div style={styles.button} onClick={this.toggleShowMark.bind(this)}>收起解析<FontIcon style={{color: '#b6bac3',marginLeft:8}} icon={'icon-up-open-2'}/></div>
        			</VerticalLayout>:
        		<div style={styles.button} onClick={this.toggleShowMark.bind(this)}>查看解析<FontIcon style={{color: '#b6bac3',marginLeft:8}} icon={'icon-down-open-2'}/></div>):
        	''
        	}
        	</VerticalLayout>
        )
    }
}
module.exports = Question;