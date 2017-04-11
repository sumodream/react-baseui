import React, { Component } from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import Link from '../../src/Link'
import Text from '../../src/Text'
import RichEditor from '../../src/RichEditor'
import HorizontalLayout from '../../src/HorizontalLayout'
class LinkInfo extends Component {
    static get displayName (){
        return {
            name: '富文本编辑器',
            classify:'Basic'
        };
    }
    static get api(){
        return [
            {
                attr:'style',
                caption:'设置div通用样式',
                type: 'object'
            },
            {
                attr:'ref',
                caption:'通过引用节点调用 getRaw 获得当前编辑内容',
                type: 'string'
            },
            {
                attr:'content',
                caption:'传入上次的 getRaw 返回的内容以重新编辑',
                type:'object'
            },
            {
                attr:'readOnly',
                caption:'用于静态展示编辑内容',
                type:'boolean',
                optional: 'true | false',
                default:'false'
            },
            {
                attr:'editorHeight',
                caption:'用于指定编辑器的高度',
                type:'number',
                default:'200'                
            }
        ]
    }
    render(){
        var styles = {
            wrap: {
                display: 'flex',
                alignSelf: 'stretch',
                justifyContent: 'space-between'
            },
            box:{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }
        }
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'RichEditor 富文本编辑器'}>
                    为您提供一个完整功能的富文本编辑器。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <RichEditor key={new Date().getTime()} readOnly={true} ref='editor' content={this.content} style={{flex:1,alignSelf:'stretch',color:'#998a87',fontSize:15,textAlign: 'justify',borderWidth:0,padding:0}}></RichEditor>
                </com.Folder>
                <com.Folder title={'API'}>
                    <Text style={{lineHeight: 1.5}}>通过设置 Link 的属性来产生不同的超链接样式。</Text>
                    <com.apiTable title={'超链接'} list={LinkInfo.api} />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = LinkInfo;