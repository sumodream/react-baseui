import React from 'react'
import com from '../../pages/common/common'
import VerticalLayout from '../../src/VerticalLayout'
import FontIcon from '../../src/FontIcon'
import Text from '../../src/Text'
import Image from '../../src/Image'
class FontIconInfo extends React.Component{
    static get displayName (){
        return {
            name: '字体图标',
            classify:'Basic'
        };
    }
    static get api(){
        return [
            {
                attr:'icon',
                caption:'字体图标样式',
                type: 'string',
                default:'icon-grade'
            },
            {
                attr:'theme',
                caption:'字体图标主题',
                type: 'string',
                optional: 'primary | danger | success | warning | info | default | infoBlue | infoWhite | infoGray | infoBlueBlack',
                default:''
            },
            {
                attr:'onClick',
                caption:'字体图标点击事件',
                type: 'func'
            }
        ]
    }
    render(){
        return (
            <VerticalLayout style={{alignSelf: 'stretch',flex: '1 0 auto'}}>
                <com.Title title={'FontIcon 字体图标'}>
                    矢量图形。
                </com.Title>
                <com.Folder title={'默认样式'}>
                    <FontIcon />
                </com.Folder>
                <com.Folder title={'API'}>
                <Text style={{lineHeight: 1.5}}>通过设置 FontIcon 的属性来产生不同的字体图标样式。</Text>
                    <com.apiTable title={'字体图标'} list={FontIconInfo.api} />
                </com.Folder>
                <com.Folder title={'代码演示'}>
                    <com.Code type={'function'} text='<FontIcon icon={"icon-up-dir-1"} />'></com.Code>
                    <Image src='/server/docs/images/font.png' />
                </com.Folder>
            </VerticalLayout>
        )
    }
}

module.exports = FontIconInfo;