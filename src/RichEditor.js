import YXReactUIBase from '../framework/uibase'
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor,RichUtils,Modifier,Entity,AtomicBlockUtils, EditorState,CompositeDecorator,convertToRaw,convertFromRaw} from 'draft-js';
import Button from './Button'
import Input from './Input'
import HorizontalLayout from './HorizontalLayout'
import VerticalLayout from './VerticalLayout'

class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
        };
    }

    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
        className += ' RichEditor-activeButton';
        }

        var style = {
            color: '#000',
            cursor: 'pointer',
            marginRight: 16,
            padding: '2px 0',
            display: 'inline-block'
        }
        if (this.props.active) {
            if (colorStyleMap[this.props.style]){
                style = Object.assign({},style,colorStyleMap[this.props.style]);
            }
            else{
                style.color = '#5890ff';
            }
        }

        return (
            <span style={style} className={className} onMouseDown={this.onToggle}>
                {this.props.label}
            </span>
            );
        }
    }
//类别:
    const BLOCK_TYPES = [
        { label: 'H1', style: 'header-one' },
        { label: 'H2', style: 'header-two' },
        { label: 'H3', style: 'header-three' },
        { label: 'H4', style: 'header-four' },
        { label: 'H5', style: 'header-five' },
        { label: 'H6', style: 'header-six' },
        { label: '引用文本', style: 'blockquote' },
        { label: '无序列表', style: 'unordered-list-item' },
        { label: '有序列表', style: 'ordered-list-item' },
        { label: '代码块', style: 'code-block' },
    ];

    const BlockStyleControls = (props) => {
        const {editorState} = props;
        const selection = editorState.getSelection();
        const blockType = editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType();

        return (
          <div className="RichEditor-controls">
            <span style={{marginRight:15}}>类别 :</span> 
            {BLOCK_TYPES.map((type) =>
              <StyleButton
                key={type.label}
                active={type.style === blockType}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            )}
          </div>
        );
      };
//字形:
    var INLINE_STYLES = [
          { label: '粗体', style: 'BOLD' },
          { label: '斜体', style: 'ITALIC' },
          { label: '下划线', style: 'UNDERLINE' },
          { label: 'Monospace字体', style: 'CODE' },
    ];

    const InlineStyleControls = (props) => {
        var currentStyle = props.editorState.getCurrentInlineStyle();
        return (
          <div className="RichEditor-controls">
            <span style={{marginRight:15}}>字形 :</span>
            {INLINE_STYLES.map(type =>
              <StyleButton
                key={type.label}
                active={currentStyle.has(type.style)}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            )}
          </div>
        );
    };
//颜色:
    const colorStyleMap = {
        red: {
            color: 'rgba(255, 0, 0, 1.0)',
        },
        orange: {
            color: 'rgba(255, 127, 0, 1.0)',
        },
        yellow: {
            color: 'rgba(180, 180, 0, 1.0)',
        },
        green: {
            color: 'rgba(0, 180, 0, 1.0)',
        },
        blue: {
            color: 'rgba(0, 0, 255, 1.0)',
        },
        indigo: {
            color: 'rgba(75, 0, 130, 1.0)',
        },
        violet: {
            color: 'rgba(127, 0, 255, 1.0)',
        },
        title: {
            color: '#54423d',
        },
        text: {
            color: '#766864',
        },
        last: {
            color: '998a87',
        },

    };
    var COLORS = [
        { label: '红色', style: 'red' },
        { label: '橘色', style: 'orange' },
        { label: '黄色', style: 'yellow' },
        { label: '绿色', style: 'green' },
        { label: '蓝色', style: 'blue' },
        { label: '青色', style: 'indigo' },
        { label: '紫色', style: 'violet' },
        { label: '标题色', style: 'title' },
        { label: '文本色', style: 'text' },
        { label: '引用色', style: 'last' },
    ];

    const ColorControls = (props) => {
        var currentStyle = props.editorState.getCurrentInlineStyle();
        return (
            <div className="RichEditor-controls">
            <span style={{marginRight:15}}>颜色 :</span>
            {COLORS.map(type =>
                <StyleButton
                active={currentStyle.has(type.style)}
                label={type.label}
                key={type.label}
                onToggle={props.onToggle}
                style={type.style}
                />
            )}
            </div>
        );
    };
//字号:
    const fontStyleMap = {
        small: {
            fontSize: 12,
        },
        normal: {
            fontSize: 14,
        },
        large: {
            fontSize: 18,
        },
        verylarge: {
            fontSize: 24,
        },

        textF: {
            fontSize: 15,
        },
        titleL: {
            fontSize: 16,
        },
        titleS: {
            fontSize: 15,
        },
        qrotF: {
            fontSize: 12,
        },
    };
    var FONTS = [
        { label: '正文字号', style: 'textF' },
        { label: '一级标题字号', style: 'titleL' },
        { label: '二级标题字号', style: 'titleS' },
        { label: '引用字号', style: 'qrotF' },
        { label: 'small', style: 'small' },
        { label: 'normal', style: 'normal' },
        { label: 'large', style: 'large' },
        { label: 'vlarge', style: 'verylarge' },
    ];

    const FontControls = (props) => {
        var currentStyle = props.editorState.getCurrentInlineStyle();
        return (
            <div className="RichEditor-controls">
            <span style={{marginRight:15}}>字号 :</span>
            {FONTS.map(type =>
                <StyleButton
                active={currentStyle.has(type.style)}
                label={type.label}
                key={type.label}
                onToggle={props.onToggle}
                style={type.style}
                />
            )}
            </div>
        );
    };


    class MyEditor extends YXReactUIBase {

        static get defaultProps() {
            return {
                readOnly:false
            }
        }

    constructor(props) {
    super(props);

    const decorator = new CompositeDecorator([
            {
              strategy: findLinkEntities,
              component: Link,
            },
          ]);
        if (props.content){
            this.state = {editorState: EditorState.createWithContent(convertFromRaw(props.content),decorator)};
        }
        else{
            this.state = {editorState: EditorState.createEmpty(decorator)};
        }
        this.onChange = (editorState) => this.setState({editorState});
        this.focus = () => this.refs.editor.focus();
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
        this.toggleColor = (toggledColor) => this._toggleColor(toggledColor);
        this.toggleFont = (toggledFont) => this._toggleFont(toggledFont);
    }

    _toggleFont(toggledFont) {
        const {editorState} = this.state;
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(fontStyleMap)
        .reduce((contentState, font) => {
            return Modifier.removeInlineStyle(contentState, selection, font)
        }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
        editorState,
        nextContentState,
        'change-inline-style'
        );

        const currentStyle = editorState.getCurrentInlineStyle();

        // Unset style override for current color.
        if (selection.isCollapsed()) {
        nextEditorState = currentStyle.reduce((state, font) => {
            return RichUtils.toggleInlineStyle(state, font);
        }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledFont)) {
        nextEditorState = RichUtils.toggleInlineStyle(
            nextEditorState,
            toggledFont
        );
        }

        this.onChange(nextEditorState);
    }
    _toggleColor(toggledColor) {
        const {editorState} = this.state;
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(colorStyleMap)
        .reduce((contentState, color) => {
            return Modifier.removeInlineStyle(contentState, selection, color)
        }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
        editorState,
        nextContentState,
        'change-inline-style'
        );

        const currentStyle = editorState.getCurrentInlineStyle();

        // Unset style override for current color.
        if (selection.isCollapsed()) {
        nextEditorState = currentStyle.reduce((state, color) => {
            return RichUtils.toggleInlineStyle(state, color);
        }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledColor)) {
        nextEditorState = RichUtils.toggleInlineStyle(
            nextEditorState,
            toggledColor
        );
        }

        this.onChange(nextEditorState);
    }

    _toggleBlockType(blockType) {
            this.onChange(
                RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
                )
            );
            }

    _toggleInlineStyle(inlineStyle) {
            this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
            );
    }

    insertLink(){
        const {editorState} = this.state;
        const selection = editorState.getSelection();
        if (!selection.isCollapsed()) {
            var that=this;
            this.showDialog('请输入链接地址',<Input onValueChange={(href)=>{that.linkHref=href}}/>,['确定','取消'],((idx)=>{
                if (idx==0){
                    const {editorState, urlValue} = this.state;
                    const entityKey = Entity.create('LINK', 'MUTABLE', {url: this.linkHref});
                    this.setState({
                        editorState: RichUtils.toggleLink(
                        editorState,
                        editorState.getSelection(),
                        entityKey
                        )
                    }, () => {
                        setTimeout(() => this.refs.editor.focus(), 0);
                    });
                }
            }).bind(this));
        }
    }

    chooseImageFile(img){
        if(this.props.onSaveImg){
            let _this = this;
            this.props.onSaveImg(img, (url)=>{
                _this.imgSrcToBeInsert = url;
            });
        } else {
            this.imgSrcToBeInsert = img.src;
        }
    }

    insertImage(){
        var fileChooser = <ImageChooser onImage={this.chooseImageFile.bind(this)}/>;
            this.showDialog('请选择文件',fileChooser,['确定','取消'],((idx)=>{
            if (idx!=0) return;
            const {editorState} = this.state;
            const entityKey = Entity.create('image', 'IMMUTABLE', {src: this.imgSrcToBeInsert})

            this.setState({
                editorState: AtomicBlockUtils.insertAtomicBlock(
                editorState,
                entityKey,
                ' '
                ),
            }, () => {
                setTimeout(() => this.focus(), 0);
            });
            }).bind(this));        
    }

  removeLink(){
    const {editorState} = this.state;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
    this.setState({
        editorState: RichUtils.toggleLink(editorState, selection, null),
    });
    }
  }

    getRaw(){
        const content = this.state.editorState.getCurrentContent();
        return convertToRaw(content);
    }

    getHtml(){
        const content = this.state.editorState.getCurrentContent();
        return convertToHTML(content);
    }

    render() {

        const {editorState} = this.state;
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }

    var editorStyle={
        cursor: 'text',
        fontSize: 16,
        lineHeight: 1.5,
        marginTop: 10,
        paddingTop: 10,
    };
        if (!this.props.readonly){
        editorStyle.overflow='hidden';
        }
        if (this.props.editorHeight){
        editorStyle.height = this.props.editorHeight;
        }

    return (
        <div className="RichEditor-root" style={this.style({background:'#fafafa',
            border: '1px solid #ddd',
            fontSize: 14,
            padding: 15
        })}>
            {this.props.readOnly?null:<VerticalLayout style={{position: "fixed",zIndex: 2,backgroundColor: "#ccc",padding:"10px 15px",width:935,top:136}}>
            <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType}
                />
            <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle}
                />
            <ColorControls
                    editorState={editorState}
                    onToggle={this.toggleColor}
                />
            <FontControls
                    editorState={editorState}
                    onToggle={this.toggleFont}
                />
                
                <HorizontalLayout>
                    <Button onClick={this.insertLink.bind(this)}>插入链接</Button>
                    <Button onClick={this.removeLink.bind(this)} style={{marginLeft:10}}>移除链接</Button>
                    <Button onClick={this.insertImage.bind(this)} style={{marginLeft:10}}>插入图片</Button>
                </HorizontalLayout>
            </VerticalLayout>
            }
              <div className={className} style={editorStyle} onClick={this.focus}>
                  <Editor ref="editor" readOnly={this.props.readOnly} blockRendererFn={mediaBlockRenderer} customStyleMap={Object.assign({},colorStyleMap,fontStyleMap)} placeholder="Tell a story..." editorState={editorState} onChange={this.onChange} />
              </div>
        </div> 
        )
    }
}

    function findLinkEntities(contentBlock, callback) {
        contentBlock.findEntityRanges(
            (character) => {
                const entityKey = character.getEntity();
                return (
                    entityKey !== null &&
                    Entity.get(entityKey).getType() === 'LINK'
                );
            },
            callback
        );
    }

    const Link = (props) => {
        const {url} = Entity.get(props.entityKey).getData();
        return (
            <a href={url} style={{ color: '#3b5998', textDecoration: 'underline' }}>
                {props.children}
            </a>
        );
    };

    function mediaBlockRenderer(block) {
        if (block.getType() === 'atomic') {
            return {
                component: Media,
                editable: false,
            };
        }

        return null;
    }


    const Audio = (props) => {
        return <audio controls src={props.src} style={{ width: '100%' }} />;
    };

    const Image = (props) => {
        return <img src={props.src} style={{ width: '100%' }} />;
    };

    const Video = (props) => {
        return <video controls src={props.src} style={{ width: '100%' }} />;
    };

    const Media = (props) => {
        const entity = Entity.get(props.block.getEntityAt(0));
        const {src} = entity.getData();
        const type = entity.getType();

        let media;
        if (type === 'audio') {
            media = <Audio src={src} />;
        } else if (type === 'image') {
            media = <Image src={src} />;
        } else if (type === 'video') {
            media = <Video src={src} />;
        }

        return media;
    };

    class ImageChooser extends React.Component {
        chooseImageFile(evt) {
            var files = evt.target.files;
            if ((files) && (files[0])) {
                this.file = files[0];
                var reader = new FileReader();
                reader.onload = ((e) => {
                    this.img = e.target.result;
                    if (this.props.onImage) {
                        this.props.onImage({ src: e.target.result, name: files[0].name, file: files[0] });
                    }
                    this.forceUpdate();
                }).bind(this);
                reader.readAsDataURL(files[0]);
            }
        }
    render(){
        return <VerticalLayout style={{alignItems:'center',justifyContent:'center', width:400,height:300,border:'1px solid #f2f2f2',backgroundColor:'#f2f2f2'}}>
					{this.img?
                        <img src={this.img} style={{width:400,height:300}} />
                        :<label style={{display: 'flex',flexDirection: 'column',}}>						
						<div style={{display: 'flex',width: 90,height: 90,border: '2px dashed #d6d7d9',fontSize: 48,fontWeight: 200,color: '#d6d7d9',cursor: 'pointer',alignItems: 'center',justifyContent: 'center',alignSelf: 'center'}}>+
							<input style={{width:0.1,height:0.1,opacity:0,overflow:'hidden',position:'absolute',zIndex:-1,border:'2px solid red' }} onChange={this.chooseImageFile.bind(this)} type='file' />
		    			</div>
		    			<div style={{marginTop: 20,fontSize: 12,color: '#6e7279',}}> 只支持JPG、PNG、GIF，大小不超过5M
		    			</div>
					</label>}
				</VerticalLayout>
    }
}
module.exports = MyEditor;