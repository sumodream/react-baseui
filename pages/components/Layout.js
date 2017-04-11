import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import HorizontalLayout from '../../src/HorizontalLayout'
import Text from '../../src/Text'
import Link from '../../src/Link'
class LayoutInfo extends React.Component{
    static get displayName (){
        return {
            name: '布局',
            classify: 'Basic'
        };
    }
    static get api(){
        return [
            {
                attr:'flexDirection',
                caption:'主轴的方向',
                type: 'string',
                optional: 'row(水平) | row-reverse | column(垂直) | column-reverse',
                default:'row'
            },{
                attr:'flexWrap',
                caption:'如果一条轴线排不下，如何换行',
                type: 'string',
                optional: 'nowrap(不换行) | wrap(换行) | wrap-reverse',
                default:'nowrap'
            },{
                attr:'justifyContent',
                caption:'在主轴上的对齐方式',
                type: 'string',
                optional: 'flex-start | flex-end | center | space-between | space-around',
                default:'flex-start'
            },{
                attr:'alignItems',
                caption:'在交叉轴上如何对齐',
                type: 'string',
                optional: 'flex-start | flex-end | center | baseline | stretch',
                default:'stretch'
            },{
                attr:'flexGrow',
                caption:'放大比例',
                type: 'number',
                optional: '',
                default:'0'
            },{
                attr:'flexShrink',
                caption:'缩小比例',
                type: 'number',
                optional: '',
                default:'1'
            },{
                attr:'flex',
                caption:'flexGrow, flexShrink 和 flexBasis的简写',
                type: 'string',
                optional: '',
                default:'0 1 auto'
            },{
                attr:'alignSelf',
                caption:'单个项目有与其他项目不一样的对齐方式，可覆盖alignItems属性。默认值为auto，表示继承父元素的alignItems属性，如果没有父元素，则等同于stretch',
                type: 'string',
                optional: 'auto | flex-start | flex-end | center | baseline | stretch',
                default:'auto'
            },
        ]
    }
    render(){
        var styles = {
            wrap: {
                display: 'flex',
                alignSelf: 'stretch',
                flex: '1 0 auto'
            },
            row:{
            	display: 'flex',
			    flexDirection: 'row',
			    alignItems: 'center',
			    alignSelf: 'stretch',
			    justifyContent: 'center',
			    background: '#2DC3E8',
			    color: '#fff',
			    marginBottom: 15
            },
            linkStyle:{
                lineHeight: 1.5,
                fontSize: 14,
                marginRight:5
            }
        };

        return (
            <VerticalLayout style={styles.wrap}>
                <com.Title title={'Layout 布局'}>
                    flex 布局。
                </com.Title>
                <HorizontalLayout style={{fontSize:14}}>
                    <Text style={{marginRight:5,color: '#6a6a6a',}}>参考阮一峰</Text>
                    <Link theme={'primary'} href='http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool' style={styles.linkStyle}>语法教程</Link>
                    <Link theme={'primary'} href='http://www.ruanyifeng.com/blog/2015/07/flex-examples.html' style={styles.linkStyle}>实例教程</Link>
                    </HorizontalLayout>
                <com.Folder title={'设计理念'}>
                    <VerticalLayout style={{marginBottom:10}}>横向布局样式写法:<com.Code type={'string'} text='display:"flex",flexDirection:"row"'></com.Code>
                    </VerticalLayout>
                    <VerticalLayout style={{marginBottom:10}}>纵向布局样式写法:<com.Code type={'string'} text='display:"flex",flexDirection:"column"'></com.Code>
                    </VerticalLayout>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{marginBottom:10}}>Design 的布局组件若不能满足你的需求，你也可以直接使用社区的优秀布局组件：</Text>
                    <Link theme={'primary'} icon='icon-dot' href='http://roylee0704.github.io/react-flexbox-grid/' style={styles.linkStyle}>react-flexbox-grid</Link>
                    <Link theme={'primary'} icon='icon-dot' href='http://whoisandie.github.io/react-blocks/' style={styles.linkStyle}>react-blocks</Link>
                    <com.apiTable title={'Layout'} list={LayoutInfo.api} />
                </com.Folder>

            </VerticalLayout>
            )
    }
}

module.exports = LayoutInfo;