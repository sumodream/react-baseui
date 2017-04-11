'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _draftJs = require('draft-js');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleButton = function (_React$Component) {
    _inherits(StyleButton, _React$Component);

    function StyleButton() {
        _classCallCheck(this, StyleButton);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleButton).call(this));

        _this2.onToggle = function (e) {
            e.preventDefault();
            _this2.props.onToggle(_this2.props.style);
        };
        return _this2;
    }

    _createClass(StyleButton, [{
        key: 'render',
        value: function render() {
            var className = 'RichEditor-styleButton';
            if (this.props.active) {
                className += ' RichEditor-activeButton';
            }

            var style = {
                color: '#000',
                cursor: 'pointer',
                marginRight: 16,
                padding: '2px 0',
                display: 'inline-block'
            };
            if (this.props.active) {
                if (colorStyleMap[this.props.style]) {
                    style = Object.assign({}, style, colorStyleMap[this.props.style]);
                } else {
                    style.color = '#5890ff';
                }
            }

            return _react2.default.createElement(
                'span',
                { style: style, className: className, onMouseDown: this.onToggle },
                this.props.label
            );
        }
    }]);

    return StyleButton;
}(_react2.default.Component);
//类别:

var BLOCK_TYPES = [{ label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'H4', style: 'header-four' }, { label: 'H5', style: 'header-five' }, { label: 'H6', style: 'header-six' }, { label: '引用文本', style: 'blockquote' }, { label: '无序列表', style: 'unordered-list-item' }, { label: '有序列表', style: 'ordered-list-item' }, { label: '代码块', style: 'code-block' }];

var BlockStyleControls = function BlockStyleControls(props) {
    var editorState = props.editorState;

    var selection = editorState.getSelection();
    var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

    return _react2.default.createElement(
        'div',
        { className: 'RichEditor-controls' },
        _react2.default.createElement(
            'span',
            { style: { marginRight: 15 } },
            '类别 :'
        ),
        BLOCK_TYPES.map(function (type) {
            return _react2.default.createElement(StyleButton, {
                key: type.label,
                active: type.style === blockType,
                label: type.label,
                onToggle: props.onToggle,
                style: type.style
            });
        })
    );
};
//字形:
var INLINE_STYLES = [{ label: '粗体', style: 'BOLD' }, { label: '斜体', style: 'ITALIC' }, { label: '下划线', style: 'UNDERLINE' }, { label: 'Monospace字体', style: 'CODE' }];

var InlineStyleControls = function InlineStyleControls(props) {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return _react2.default.createElement(
        'div',
        { className: 'RichEditor-controls' },
        _react2.default.createElement(
            'span',
            { style: { marginRight: 15 } },
            '字形 :'
        ),
        INLINE_STYLES.map(function (type) {
            return _react2.default.createElement(StyleButton, {
                key: type.label,
                active: currentStyle.has(type.style),
                label: type.label,
                onToggle: props.onToggle,
                style: type.style
            });
        })
    );
};
//颜色:
var colorStyleMap = {
    red: {
        color: 'rgba(255, 0, 0, 1.0)'
    },
    orange: {
        color: 'rgba(255, 127, 0, 1.0)'
    },
    yellow: {
        color: 'rgba(180, 180, 0, 1.0)'
    },
    green: {
        color: 'rgba(0, 180, 0, 1.0)'
    },
    blue: {
        color: 'rgba(0, 0, 255, 1.0)'
    },
    indigo: {
        color: 'rgba(75, 0, 130, 1.0)'
    },
    violet: {
        color: 'rgba(127, 0, 255, 1.0)'
    },
    title: {
        color: '#54423d'
    },
    text: {
        color: '#766864'
    },
    last: {
        color: '998a87'
    }

};
var COLORS = [{ label: '红色', style: 'red' }, { label: '橘色', style: 'orange' }, { label: '黄色', style: 'yellow' }, { label: '绿色', style: 'green' }, { label: '蓝色', style: 'blue' }, { label: '青色', style: 'indigo' }, { label: '紫色', style: 'violet' }, { label: '标题色', style: 'title' }, { label: '文本色', style: 'text' }, { label: '引用色', style: 'last' }];

var ColorControls = function ColorControls(props) {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return _react2.default.createElement(
        'div',
        { className: 'RichEditor-controls' },
        _react2.default.createElement(
            'span',
            { style: { marginRight: 15 } },
            '颜色 :'
        ),
        COLORS.map(function (type) {
            return _react2.default.createElement(StyleButton, {
                active: currentStyle.has(type.style),
                label: type.label,
                key: type.label,
                onToggle: props.onToggle,
                style: type.style
            });
        })
    );
};
//字号:
var fontStyleMap = {
    small: {
        fontSize: 12
    },
    normal: {
        fontSize: 14
    },
    large: {
        fontSize: 18
    },
    verylarge: {
        fontSize: 24
    },

    textF: {
        fontSize: 15
    },
    titleL: {
        fontSize: 16
    },
    titleS: {
        fontSize: 15
    },
    qrotF: {
        fontSize: 12
    }
};
var FONTS = [{ label: '正文字号', style: 'textF' }, { label: '一级标题字号', style: 'titleL' }, { label: '二级标题字号', style: 'titleS' }, { label: '引用字号', style: 'qrotF' }, { label: 'small', style: 'small' }, { label: 'normal', style: 'normal' }, { label: 'large', style: 'large' }, { label: 'vlarge', style: 'verylarge' }];

var FontControls = function FontControls(props) {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return _react2.default.createElement(
        'div',
        { className: 'RichEditor-controls' },
        _react2.default.createElement(
            'span',
            { style: { marginRight: 15 } },
            '字号 :'
        ),
        FONTS.map(function (type) {
            return _react2.default.createElement(StyleButton, {
                active: currentStyle.has(type.style),
                label: type.label,
                key: type.label,
                onToggle: props.onToggle,
                style: type.style
            });
        })
    );
};

var MyEditor = function (_YXReactUIBase) {
    _inherits(MyEditor, _YXReactUIBase);

    _createClass(MyEditor, null, [{
        key: 'defaultProps',
        get: function get() {
            return {
                readOnly: false
            };
        }
    }]);

    function MyEditor(props) {
        _classCallCheck(this, MyEditor);

        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(MyEditor).call(this, props));

        var decorator = new _draftJs.CompositeDecorator([{
            strategy: findLinkEntities,
            component: Link
        }]);
        if (props.content) {
            _this3.state = { editorState: _draftJs.EditorState.createWithContent((0, _draftJs.convertFromRaw)(props.content), decorator) };
        } else {
            _this3.state = { editorState: _draftJs.EditorState.createEmpty(decorator) };
        }
        _this3.onChange = function (editorState) {
            return _this3.setState({ editorState: editorState });
        };
        _this3.focus = function () {
            return _this3.refs.editor.focus();
        };
        _this3.toggleBlockType = function (type) {
            return _this3._toggleBlockType(type);
        };
        _this3.toggleInlineStyle = function (style) {
            return _this3._toggleInlineStyle(style);
        };
        _this3.toggleColor = function (toggledColor) {
            return _this3._toggleColor(toggledColor);
        };
        _this3.toggleFont = function (toggledFont) {
            return _this3._toggleFont(toggledFont);
        };
        return _this3;
    }

    _createClass(MyEditor, [{
        key: '_toggleFont',
        value: function _toggleFont(toggledFont) {
            var editorState = this.state.editorState;

            var selection = editorState.getSelection();

            // Let's just allow one color at a time. Turn off all active colors.
            var nextContentState = Object.keys(fontStyleMap).reduce(function (contentState, font) {
                return _draftJs.Modifier.removeInlineStyle(contentState, selection, font);
            }, editorState.getCurrentContent());

            var nextEditorState = _draftJs.EditorState.push(editorState, nextContentState, 'change-inline-style');

            var currentStyle = editorState.getCurrentInlineStyle();

            // Unset style override for current color.
            if (selection.isCollapsed()) {
                nextEditorState = currentStyle.reduce(function (state, font) {
                    return _draftJs.RichUtils.toggleInlineStyle(state, font);
                }, nextEditorState);
            }

            // If the color is being toggled on, apply it.
            if (!currentStyle.has(toggledFont)) {
                nextEditorState = _draftJs.RichUtils.toggleInlineStyle(nextEditorState, toggledFont);
            }

            this.onChange(nextEditorState);
        }
    }, {
        key: '_toggleColor',
        value: function _toggleColor(toggledColor) {
            var editorState = this.state.editorState;

            var selection = editorState.getSelection();

            // Let's just allow one color at a time. Turn off all active colors.
            var nextContentState = Object.keys(colorStyleMap).reduce(function (contentState, color) {
                return _draftJs.Modifier.removeInlineStyle(contentState, selection, color);
            }, editorState.getCurrentContent());

            var nextEditorState = _draftJs.EditorState.push(editorState, nextContentState, 'change-inline-style');

            var currentStyle = editorState.getCurrentInlineStyle();

            // Unset style override for current color.
            if (selection.isCollapsed()) {
                nextEditorState = currentStyle.reduce(function (state, color) {
                    return _draftJs.RichUtils.toggleInlineStyle(state, color);
                }, nextEditorState);
            }

            // If the color is being toggled on, apply it.
            if (!currentStyle.has(toggledColor)) {
                nextEditorState = _draftJs.RichUtils.toggleInlineStyle(nextEditorState, toggledColor);
            }

            this.onChange(nextEditorState);
        }
    }, {
        key: '_toggleBlockType',
        value: function _toggleBlockType(blockType) {
            this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
        }
    }, {
        key: '_toggleInlineStyle',
        value: function _toggleInlineStyle(inlineStyle) {
            this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
        }
    }, {
        key: 'insertLink',
        value: function insertLink() {
            var _this4 = this;

            var editorState = this.state.editorState;

            var selection = editorState.getSelection();
            if (!selection.isCollapsed()) {
                var that = this;
                this.showDialog('请输入链接地址', _react2.default.createElement(_Input2.default, { onValueChange: function onValueChange(href) {
                        that.linkHref = href;
                    } }), ['确定', '取消'], function (idx) {
                    if (idx == 0) {
                        var _state = _this4.state;
                        var _editorState = _state.editorState;
                        var urlValue = _state.urlValue;

                        var entityKey = _draftJs.Entity.create('LINK', 'MUTABLE', { url: _this4.linkHref });
                        _this4.setState({
                            editorState: _draftJs.RichUtils.toggleLink(_editorState, _editorState.getSelection(), entityKey)
                        }, function () {
                            setTimeout(function () {
                                return _this4.refs.editor.focus();
                            }, 0);
                        });
                    }
                }.bind(this));
            }
        }
    }, {
        key: 'chooseImageFile',
        value: function chooseImageFile(img) {
            var _this5 = this;

            if (this.props.onSaveImg) {
                (function () {
                    var _this = _this5;
                    _this5.props.onSaveImg(img, function (url) {
                        _this.imgSrcToBeInsert = url;
                    });
                })();
            } else {
                this.imgSrcToBeInsert = img.src;
            }
        }
    }, {
        key: 'insertImage',
        value: function insertImage() {
            var _this6 = this;

            var fileChooser = _react2.default.createElement(ImageChooser, { onImage: this.chooseImageFile.bind(this) });
            this.showDialog('请选择文件', fileChooser, ['确定', '取消'], function (idx) {
                if (idx != 0) return;
                var editorState = _this6.state.editorState;

                var entityKey = _draftJs.Entity.create('image', 'IMMUTABLE', { src: _this6.imgSrcToBeInsert });

                _this6.setState({
                    editorState: _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ')
                }, function () {
                    setTimeout(function () {
                        return _this6.focus();
                    }, 0);
                });
            }.bind(this));
        }
    }, {
        key: 'removeLink',
        value: function removeLink() {
            var editorState = this.state.editorState;

            var selection = editorState.getSelection();
            if (!selection.isCollapsed()) {
                this.setState({
                    editorState: _draftJs.RichUtils.toggleLink(editorState, selection, null)
                });
            }
        }
    }, {
        key: 'getRaw',
        value: function getRaw() {
            var content = this.state.editorState.getCurrentContent();
            return (0, _draftJs.convertToRaw)(content);
        }
    }, {
        key: 'getHtml',
        value: function getHtml() {
            var content = this.state.editorState.getCurrentContent();
            return convertToHTML(content);
        }
    }, {
        key: 'render',
        value: function render() {
            var editorState = this.state.editorState;

            var className = 'RichEditor-editor';
            var contentState = editorState.getCurrentContent();
            if (!contentState.hasText()) {
                if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                    className += ' RichEditor-hidePlaceholder';
                }
            }

            var editorStyle = {
                cursor: 'text',
                fontSize: 16,
                lineHeight: 1.5,
                marginTop: 10,
                paddingTop: 10
            };
            if (!this.props.readonly) {
                editorStyle.overflow = 'hidden';
            }
            if (this.props.editorHeight) {
                editorStyle.height = this.props.editorHeight;
            }

            return _react2.default.createElement(
                'div',
                { className: 'RichEditor-root', style: this.style({ background: '#fafafa',
                        border: '1px solid #ddd',
                        fontSize: 14,
                        padding: 15
                    }) },
                this.props.readOnly ? null : _react2.default.createElement(
                    _VerticalLayout2.default,
                    { style: { position: "fixed", zIndex: 2, backgroundColor: "#ccc", padding: "10px 15px", width: 935, top: 136 } },
                    _react2.default.createElement(BlockStyleControls, {
                        editorState: editorState,
                        onToggle: this.toggleBlockType
                    }),
                    _react2.default.createElement(InlineStyleControls, {
                        editorState: editorState,
                        onToggle: this.toggleInlineStyle
                    }),
                    _react2.default.createElement(ColorControls, {
                        editorState: editorState,
                        onToggle: this.toggleColor
                    }),
                    _react2.default.createElement(FontControls, {
                        editorState: editorState,
                        onToggle: this.toggleFont
                    }),
                    _react2.default.createElement(
                        _HorizontalLayout2.default,
                        null,
                        _react2.default.createElement(
                            _Button2.default,
                            { onClick: this.insertLink.bind(this) },
                            '插入链接'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { onClick: this.removeLink.bind(this), style: { marginLeft: 10 } },
                            '移除链接'
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { onClick: this.insertImage.bind(this), style: { marginLeft: 10 } },
                            '插入图片'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: className, style: editorStyle, onClick: this.focus },
                    _react2.default.createElement(_draftJs.Editor, { ref: 'editor', readOnly: this.props.readOnly, blockRendererFn: mediaBlockRenderer, customStyleMap: Object.assign({}, colorStyleMap, fontStyleMap), placeholder: 'Tell a story...', editorState: editorState, onChange: this.onChange })
                )
            );
        }
    }]);

    return MyEditor;
}(_uibase2.default);

function findLinkEntities(contentBlock, callback) {
    contentBlock.findEntityRanges(function (character) {
        var entityKey = character.getEntity();
        return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
    }, callback);
}

var Link = function Link(props) {
    var _Entity$get$getData = _draftJs.Entity.get(props.entityKey).getData();

    var url = _Entity$get$getData.url;

    return _react2.default.createElement(
        'a',
        { href: url, style: { color: '#3b5998', textDecoration: 'underline' } },
        props.children
    );
};

function mediaBlockRenderer(block) {
    if (block.getType() === 'atomic') {
        return {
            component: Media,
            editable: false
        };
    }

    return null;
}

var Audio = function Audio(props) {
    return _react2.default.createElement('audio', { controls: true, src: props.src, style: { width: '100%' } });
};

var Image = function Image(props) {
    return _react2.default.createElement('img', { src: props.src, style: { width: '100%' } });
};

var Video = function Video(props) {
    return _react2.default.createElement('video', { controls: true, src: props.src, style: { width: '100%' } });
};

var Media = function Media(props) {
    var entity = _draftJs.Entity.get(props.block.getEntityAt(0));

    var _entity$getData = entity.getData();

    var src = _entity$getData.src;

    var type = entity.getType();

    var media = void 0;
    if (type === 'audio') {
        media = _react2.default.createElement(Audio, { src: src });
    } else if (type === 'image') {
        media = _react2.default.createElement(Image, { src: src });
    } else if (type === 'video') {
        media = _react2.default.createElement(Video, { src: src });
    }

    return media;
};

var ImageChooser = function (_React$Component2) {
    _inherits(ImageChooser, _React$Component2);

    function ImageChooser() {
        _classCallCheck(this, ImageChooser);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageChooser).apply(this, arguments));
    }

    _createClass(ImageChooser, [{
        key: 'chooseImageFile',
        value: function chooseImageFile(evt) {
            var _this8 = this;

            var files = evt.target.files;
            if (files && files[0]) {
                this.file = files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this8.img = e.target.result;
                    if (_this8.props.onImage) {
                        _this8.props.onImage({ src: e.target.result, name: files[0].name, file: files[0] });
                    }
                    _this8.forceUpdate();
                }.bind(this);
                reader.readAsDataURL(files[0]);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _VerticalLayout2.default,
                { style: { alignItems: 'center', justifyContent: 'center', width: 400, height: 300, border: '1px solid #f2f2f2', backgroundColor: '#f2f2f2' } },
                this.img ? _react2.default.createElement('img', { src: this.img, style: { width: 400, height: 300 } }) : _react2.default.createElement(
                    'label',
                    { style: { display: 'flex', flexDirection: 'column' } },
                    _react2.default.createElement(
                        'div',
                        { style: { display: 'flex', width: 90, height: 90, border: '2px dashed #d6d7d9', fontSize: 48, fontWeight: 200, color: '#d6d7d9', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' } },
                        '+',
                        _react2.default.createElement('input', { style: { width: 0.1, height: 0.1, opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1, border: '2px solid red' }, onChange: this.chooseImageFile.bind(this), type: 'file' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { marginTop: 20, fontSize: 12, color: '#6e7279' } },
                        ' 只支持JPG、PNG、GIF，大小不超过5M'
                    )
                )
            );
        }
    }]);

    return ImageChooser;
}(_react2.default.Component);

module.exports = MyEditor;