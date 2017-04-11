'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uibase = require('../framework/uibase');

var _uibase2 = _interopRequireDefault(_uibase);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HorizontalLayout = require('./HorizontalLayout');

var _HorizontalLayout2 = _interopRequireDefault(_HorizontalLayout);

var _VerticalLayout = require('./VerticalLayout');

var _VerticalLayout2 = _interopRequireDefault(_VerticalLayout);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
	function Shape(parent, def) {
		_classCallCheck(this, Shape);

		this.data = def;
		this.parent = parent;
	}

	_createClass(Shape, [{
		key: 'type',
		get: function get() {
			return this.data.type;
		}
	}], [{
		key: 'defaultShape',
		value: function defaultShape(shapeType, props) {
			if (shapeType == "圆") return new Circle(props);
			if (shapeType == "矩形") return new Rect(props);
		}
	}, {
		key: 'newShape',
		value: function newShape(parent, item) {
			if (item.type == "圆") return new Circle(parent, item);
			if (item.type == "矩形") return new Rect(parent, item);
			if (item.type == "图片") return new Icon(parent, item);
		}
	}, {
		key: 'shapes',
		get: function get() {
			return ['圆', '矩形'];
		}
	}]);

	return Shape;
}();

var Icon = function (_Shape) {
	_inherits(Icon, _Shape);

	function Icon(parent, def) {
		_classCallCheck(this, Icon);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).call(this, parent, def));

		def.type = '图片';
		return _this;
	}

	_createClass(Icon, [{
		key: 'render',
		value: function render(key) {
			return _react2.default.createElement('image', { key: key, x: this.data.x, y: this.data.y, width: 48, height: 40, xlinkHref: this.data.src });
		}
	}]);

	return Icon;
}(Shape);

var Circle = function (_Shape2) {
	_inherits(Circle, _Shape2);

	function Circle(parent, def) {
		_classCallCheck(this, Circle);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).call(this, parent, def));

		def.type = '圆';
		if (!def.radius) def.radius = 1;
		return _this2;
	}

	_createClass(Circle, [{
		key: 'render',
		value: function render(key) {
			return _react2.default.createElement('circle', { key: key, strokeWidth: 1, stroke: 'white',
				cx: this.data.x, cy: this.data.y, r: this.data.radius, fillOpacity: '0' });
		}
	}, {
		key: 'getActiveData',
		value: function getActiveData(parent, width, height, key) {
			return _react2.default.createElement(
				'svg',
				{ viewBox: this.data.x - this.data.radius + ',' + (this.data.y - this.data.radius) + ',' + this.data.radius * 2 + ',' + this.data.radius * 2, height: height, width: width, style: { clipPath: 'url(#' + key + ')' } },
				_react2.default.createElement('image', { x: parent.imgx, y: parent.imgy, width: parent.imgwidth, height: parent.imgheight, xlinkHref: parent.state.editimage }),
				_react2.default.createElement(
					'defs',
					null,
					_react2.default.createElement(
						'clipPath',
						{ id: key },
						this.render(0)
					)
				)
			);
		}
	}, {
		key: 'dragStart',
		value: function dragStart(evt) {
			this.startX = evt.clientX;
			this.startY = evt.clientY;
			this.initCX = this.data.x;
			this.initCY = this.data.y;
			this.initR = this.data.radius;
			if (!this.drawWay) this.drawWay = 'RB';
		}
	}, {
		key: 'doDrag',
		value: function doDrag(evt) {
			var ae = this.data;
			var deltax = evt.clientX - this.startX;
			var deltay = evt.clientY - this.startY;
			if (this.drawWay == "move") {
				ae.x = this.initCX + deltax;
				ae.y = this.initCY + deltay;
			}
			if (this.drawWay == "LT") {
				var rdelta = Math.min(deltax, deltay) * -1 / 2;
				ae.x = this.initCX + deltax / 2;
				ae.y = this.initCY + deltay / 2;
				ae.radius = this.initR + rdelta;
			}
			if (this.drawWay == "RT") {
				var rdelta = Math.max(deltax, -1 * deltay) / 2;
				ae.x = this.initCX + deltax / 2;
				ae.y = this.initCY + deltay / 2;
				ae.radius = this.initR + rdelta;
			}
			if (this.drawWay == "LB") {
				var rdelta = Math.max(-1 * deltax, deltay) / 2;
				ae.x = this.initCX + deltax / 2;
				ae.y = this.initCY + deltay / 2;
				ae.radius = this.initR + rdelta;
			}
			if (this.drawWay == "RB") {
				var rdelta = Math.max(deltax, deltay) / 2;
				ae.x = this.initCX + deltax / 2;
				ae.y = this.initCY + deltay / 2;
				ae.radius = this.initR + rdelta;
			}
			if (this.drawWay == "TC") {
				var rdelta = deltay * -1 / 2;
				ae.x = this.initCX;
				ae.y = this.initCY + deltay / 2;
				ae.radius = this.initR + rdelta;
			}
			if (this.drawWay == "BC") {
				var rdelta = deltay / 2;
				ae.x = this.initCX;
				ae.y = this.initCY + deltay / 2;
				ae.radius = this.initR + rdelta;
			}
			if (this.drawWay == "LC") {
				var rdelta = deltax * -1 / 2;
				ae.x = this.initCX + deltax / 2;
				ae.y = this.initCY;
				ae.radius = this.initR + rdelta;
			}
			if (this.drawWay == "RC") {
				var rdelta = deltax / 2;
				ae.x = this.initCX + deltax / 2;
				ae.y = this.initCY;
				ae.radius = this.initR + rdelta;
			}
			//ae.radius<min(this.parent.props.width,this.parent.props.height)/2
			if (ae.radius > Math.min(this.parent.props.width, this.parent.props.height) / 2) {
				ae.radius = Math.min(this.parent.props.width, this.parent.props.height) / 2;
			}
			// ae.x >ae.radius && ae.x < this.parent.props.width-ae.radius
			if (ae.x < ae.radius + this.parent.imgx) {
				ae.x = ae.radius + this.parent.imgx;
			}
			if (ae.x > this.parent.props.width - this.parent.imgx - ae.radius) {
				ae.x = this.parent.props.width - this.parent.imgx - ae.radius;
			}
			// ae.y>ae.radius && ae.y<this.parent.props.height-ae.radius
			if (ae.y < ae.radius + this.parent.imgy) {
				ae.y = ae.radius + this.parent.imgy;
			}
			if (ae.y > this.parent.props.height - this.parent.imgy - ae.radius) {
				ae.y = this.parent.props.height - this.parent.imgy - ae.radius;
			}
			// console.log("Circle",ae.x,ae.y,ae.width,ae.height,ae.radius,this.parent.props.width,this.parent.props.height,this.data.x,this.data.y,this.parent);
		}
	}, {
		key: 'stopDrag',
		value: function stopDrag(evt) {
			this.drawWay = "";
		}
	}, {
		key: 'renderActive',
		value: function renderActive(parent) {
			var _this3 = this;

			var ae = this.data;
			return _react2.default.createElement(
				'g',
				null,
				_react2.default.createElement('rect', { x: ae.x - ae.radius, y: ae.y - ae.radius, width: ae.radius * 2, height: ae.radius * 2, fillOpacity: '0', strokeWidth: 1, stroke: 'black', strokeDasharray: '3 3', strokeDashoffset: parent.state.offset }),
				_react2.default.createElement('path', { d: 'M' + (ae.x - ae.radius) + ' ' + (ae.y - ae.radius) + ' L' + ae.x + ' ' + (ae.y - ae.radius) + ' \n\t\t\tA ' + ae.radius + ' ' + ae.radius + ' 0 0 0 ' + (ae.x - ae.radius) + ' ' + ae.y + ' Z', fillOpacity: '0.2' }),
				_react2.default.createElement('path', { d: 'M' + (ae.x + ae.radius) + ' ' + (ae.y - ae.radius) + ' L' + (ae.x + ae.radius) + ' ' + ae.y + ' \n\t\t\tA ' + ae.radius + ' ' + ae.radius + ' 0 0 0 ' + ae.x + ' ' + (ae.y - ae.radius) + ' Z', fillOpacity: '0.2' }),
				_react2.default.createElement('path', { d: 'M' + (ae.x + ae.radius) + ' ' + (ae.y + ae.radius) + ' L' + ae.x + ' ' + (ae.y + ae.radius) + ' \n\t\t\tA ' + ae.radius + ' ' + ae.radius + ' 0 0 0 ' + (ae.x + ae.radius) + ' ' + ae.y + ' Z', fillOpacity: '0.2' }),
				_react2.default.createElement('path', { d: 'M' + (ae.x - ae.radius) + ' ' + (ae.y + ae.radius) + ' L' + (ae.x - ae.radius) + ' ' + ae.y + ' \n\t\t\tA ' + ae.radius + ' ' + ae.radius + ' 0 0 0 ' + ae.x + ' ' + (ae.y + ae.radius) + ' Z', fillOpacity: '0.2' }),
				_react2.default.createElement('circle', { onMouseDown: function () {
						_this3.drawWay = 'move';
					}.bind(this), strokeWidth: 1, stroke: 'white',
					cx: ae.x, cy: ae.y, r: ae.radius, fillOpacity: '0' }),
				_react2.default.createElement('rect', { x: 0, y: 0, width: parent.props.width, height: ae.y - ae.radius, fillOpacity: '0.4' }),
				_react2.default.createElement('rect', { x: 0, y: ae.y + ae.radius, width: parent.props.width, height: parent.props.height - ae.y - ae.radius, fillOpacity: '0.4' }),
				_react2.default.createElement('rect', { x: 0, y: ae.y - ae.radius, width: ae.x - ae.radius, height: ae.radius * 2, fillOpacity: '0.4' }),
				_react2.default.createElement('rect', { x: ae.x + ae.radius, y: ae.y - ae.radius, width: parent.props.width - ae.x - ae.radius, height: ae.radius * 2, fillOpacity: '0.4' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this3.drawWay = 'LT';
					}.bind(this), x: ae.x - ae.radius - 5, y: ae.y - ae.radius - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this3.drawWay = 'RT';
					}.bind(this), x: ae.x + ae.radius - 5, y: ae.y - ae.radius - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this3.drawWay = 'LB';
					}.bind(this), x: ae.x - ae.radius - 5, y: ae.y + ae.radius - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this3.drawWay = 'RB';
					}.bind(this), x: ae.x + ae.radius - 5, y: ae.y + ae.radius - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this3.drawWay = 'TC';
					}.bind(this), x: ae.x - 5, y: ae.y - ae.radius - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this3.drawWay = 'BC';
					}.bind(this), x: ae.x - 5, y: ae.y + ae.radius - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this3.drawWay = 'LC';
					}.bind(this), x: ae.x - ae.radius - 5, y: ae.y - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this3.drawWay = 'RC';
					}.bind(this), x: ae.x + ae.radius - 5, y: ae.y - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' })
			);
		}
	}]);

	return Circle;
}(Shape);

var Rect = function (_Shape3) {
	_inherits(Rect, _Shape3);

	function Rect(parent, def) {
		_classCallCheck(this, Rect);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Rect).call(this, parent, def));

		def.type = '矩形';
		if (!def.width) def.width = 1;
		if (!def.height) def.height = 1;
		return _this4;
	}

	_createClass(Rect, [{
		key: 'render',
		value: function render(key) {
			return _react2.default.createElement('rect', { key: key, strokeWidth: 1, stroke: 'white',
				x: this.data.x, y: this.data.y, width: this.data.width, height: this.data.height, fillOpacity: '0' });
		}
	}, {
		key: 'dragStart',
		value: function dragStart(evt) {
			this.startX = evt.clientX;
			this.startY = evt.clientY;
			this.initCX = this.data.x;
			this.initCY = this.data.y;
			this.initWidth = this.data.width;
			this.initHeight = this.data.height;
			if (!this.drawWay) this.drawWay = 'RB';
		}
	}, {
		key: 'stopDrag',
		value: function stopDrag(evt) {
			this.drawWay = "";
		}
	}, {
		key: 'getActiveData',
		value: function getActiveData(parent, width, height, key) {
			return _react2.default.createElement(
				'svg',
				{ viewBox: this.data.x + ',' + this.data.y + ',' + this.data.width + ',' + this.data.height, height: height, width: width, style: { clipPath: 'url(#' + key + ')' } },
				_react2.default.createElement('image', { x: parent.imgx, y: parent.imgy, width: parent.imgwidth, height: parent.imgheight, xlinkHref: parent.state.editimage }),
				_react2.default.createElement(
					'defs',
					null,
					_react2.default.createElement(
						'clipPath',
						{ id: key },
						this.render(0)
					)
				)
			);
		}
	}, {
		key: 'doDrag',
		value: function doDrag(evt) {
			var ae = this.data;
			var deltax = evt.clientX - this.startX;
			var deltay = evt.clientY - this.startY;
			if (this.drawWay == "move") {
				ae.x = this.initCX + deltax;
				ae.y = this.initCY + deltay;
			}
			if (this.drawWay == "LT") {
				ae.x = this.initCX + deltax;
				ae.width = this.initWidth - deltax;
				ae.y = this.initCY + deltay;
				ae.height = this.initHeight - deltay;
			}
			if (this.drawWay == "RT") {
				ae.width = this.initWidth + deltax;
				ae.y = this.initCY + deltay;
				ae.height = this.initHeight - deltay;
			}
			if (this.drawWay == "LB") {
				ae.x = this.initCX + deltax;
				ae.width = this.initWidth - deltax;
				ae.height = this.initHeight + deltay;
			}
			if (this.drawWay == "RB") {
				ae.width = this.initWidth + deltax;
				ae.height = this.initHeight + deltay;
			}
			if (this.drawWay == "TC") {
				ae.y = this.initCY + deltay;
				ae.height = this.initHeight - deltay;
			}
			if (this.drawWay == "BC") {
				ae.height = this.initHeight + deltay;
			}
			if (this.drawWay == "LC") {
				ae.x = this.initCX + deltax;
				ae.width = this.initWidth - deltax;
			}
			if (this.drawWay == "RC") {
				ae.width = this.initWidth + deltax;
			}
			//ae.radius<min(this.parent.props.width,this.parent.props.height)/2
			if (ae.radius > Math.min(this.parent.props.width, this.parent.props.height) / 2) {
				ae.radius = Math.min(this.parent.props.width, this.parent.props.height) / 2;
			}
			// ae.x >ae.radius && ae.x < this.parent.props.width-ae.radius
			if (ae.x < ae.radius + this.parent.imgx) {
				ae.x = ae.radius + this.parent.imgx;
			}
			if (ae.x > this.parent.props.width - this.parent.imgx - ae.radius) {
				ae.x = this.parent.props.width - this.parent.imgx - ae.radius;
			}
			// ae.y>ae.radius && ae.y<this.parent.props.height-ae.radius
			if (ae.y < ae.radius + this.parent.imgy) {
				ae.y = ae.radius + this.parent.imgy;
			}
			if (ae.y > this.parent.props.height - this.parent.imgy - ae.radius) {
				ae.y = this.parent.props.height - this.parent.imgy - ae.radius;
			}
			// console.log("Rect",ae.x,ae.y,ae.width,ae.height,this.parent.props.width,this.parent.props.height);
		}
	}, {
		key: 'renderActive',
		value: function renderActive(parent) {
			var _this5 = this;

			var ae = this.data;
			return _react2.default.createElement(
				'g',
				null,
				_react2.default.createElement('rect', { x: ae.x, y: ae.y, width: ae.width, height: ae.height, fillOpacity: '0', strokeWidth: 1, stroke: 'white' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this5.drawWay = 'move';
					}.bind(this), x: ae.x, y: ae.y, width: ae.width, height: ae.height, fillOpacity: '0', strokeWidth: 1, stroke: 'black', strokeDasharray: '3 3', strokeDashoffset: parent.state.offset }),
				_react2.default.createElement('rect', { x: 0, y: 0, width: parent.props.width, height: ae.y, fillOpacity: '0.4' }),
				_react2.default.createElement('rect', { x: 0, y: ae.y + ae.height, width: parent.props.width, height: parent.props.height - ae.y - ae.height, fillOpacity: '0.4' }),
				_react2.default.createElement('rect', { x: 0, y: ae.y, width: ae.x, height: ae.height, fillOpacity: '0.4' }),
				_react2.default.createElement('rect', { x: ae.x + ae.width, y: ae.y, width: parent.props.width - ae.x - ae.width, height: ae.height, fillOpacity: '0.4' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this5.drawWay = 'LT';
					}.bind(this), x: ae.x - 5, y: ae.y - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this5.drawWay = 'RT';
					}.bind(this), x: ae.x + ae.width - 5, y: ae.y - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this5.drawWay = 'LB';
					}.bind(this), x: ae.x - 5, y: ae.y + ae.height - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this5.drawWay = 'RB';
					}.bind(this), x: ae.x + ae.width - 5, y: ae.y + ae.height - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this5.drawWay = 'TC';
					}.bind(this), x: ae.x + ae.width / 2 - 5, y: ae.y - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this5.drawWay = 'BC';
					}.bind(this), x: ae.x + ae.width / 2 - 5, y: ae.y + ae.height - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this5.drawWay = 'LC';
					}.bind(this), x: ae.x - 5, y: ae.y + ae.height / 2 - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' }),
				_react2.default.createElement('rect', { onMouseDown: function () {
						_this5.drawWay = 'RC';
					}.bind(this), x: ae.x + ae.width - 5, y: ae.y + ae.height / 2 - 5, width: 10, height: 10, strokeWidth: 2, stroke: 'white', fillOpacity: '0' })
			);
		}
	}]);

	return Rect;
}(Shape);

var SVGEditor = function (_YXReactUIBase) {
	_inherits(SVGEditor, _YXReactUIBase);

	_createClass(SVGEditor, null, [{
		key: 'propTypes',
		get: function get() {
			return {
				editimage: _react2.default.PropTypes.string,
				width: _react2.default.PropTypes.number,
				height: _react2.default.PropTypes.number,
				elements: _react2.default.PropTypes.array,
				onActiveData: _react2.default.PropTypes.func,
				onDataChange: _react2.default.PropTypes.func,
				showToolbar: _react2.default.PropTypes.bool,
				showShapes: _react2.default.PropTypes.bool,
				defaultSelect: _react2.default.PropTypes.number
			};
		}
	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				width: null,
				height: null,
				//editimage:'http://hfs.yunxiao.com/src/profile/images/icon-face.png',
				editimage: null,
				elements: [],
				onActiveData: null,
				onDataChange: null,
				showToolbar: true,
				showShapes: true,
				defaultSelect: -1
			};
		}
	}]);

	function SVGEditor(props) {
		_classCallCheck(this, SVGEditor);

		var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(SVGEditor).call(this, props));

		_this6.state = {
			offset: 5,
			elements: props.elements.map(function (item) {
				return Shape.newShape(_this6, item);
			}),
			selectIdx: props.defaultSelect
		};
		_this6.state.editimage = props.editimage;
		_this6.svgwidth = _this6.props.width;
		_this6.svgheight = _this6.props.height;
		_this6.shapeType = -1;
		return _this6;
	}

	_createClass(SVGEditor, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.drawIndInterval);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this7 = this;

			// 隐藏右侧图片
			// if (this.props.onActiveData) {
			// 	if (this.state.selectIdx >= 0) {
			// 		var ae = this.state.elements[this.state.selectIdx];
			// 		this.props.onActiveData(ae.getActiveData.bind(ae, this));
			// 	}
			// }

			if (this.props.editimage) {
				var img = new Image();
				img.onload = function () {
					this.svgwidth = img.width;
					this.svgheight = img.height;
					this.imgx = 0;
					this.imgy = 0;
					this.imgwidth = img.width;
					this.imgheight = img.height;
					this.forceUpdate();
				}.bind(this);
				img.src = this.props.editimage;
			}

			this.drawIndInterval = setInterval(function () {
				if (_this7.state.selectIdx >= 0) {
					_this7.setState({
						offset: _this7.state.offset + 1
					});
				}
			}.bind(this), 200);
		}
	}, {
		key: 'startDrag',
		value: function startDrag(evt) {
			if (this.state.selectIdx >= 0) {
				var ae = this.state.elements[this.state.selectIdx];
				if (ae.drawWay) {
					ae.dragStart(evt);
					this.draging = true;
					return;
				}
			}
			if (this.shapeType < 0) return;
			this.draging = true;
			var pos = ReactDOM.findDOMNode(this.refs.baseZone).getBoundingClientRect();
			this.state.elements.push(Shape.defaultShape(Shape.shapes[this.shapeType], {
				x: evt.clientX - pos.left,
				y: evt.clientY - pos.top
			}));
			this.state.selectIdx = this.state.elements.length - 1;
			var ae = this.state.elements[this.state.selectIdx];
			ae.dragStart(evt);
		}
	}, {
		key: 'canvas2img',
		value: function canvas2img(pt) {
			return {
				x: pt.x * this.srcwidth / this.imgwidth,
				y: pt.y * this.srcheight / this.imgheight
			};
		}
	}, {
		key: 'endDrag',
		value: function endDrag(evt) {
			this.draging = false;
			var ae = this.state.elements[this.state.selectIdx];
			ae.stopDrag();
			if (this.props.onActiveData) {
				this.props.onActiveData(ae.getActiveData.bind(ae, this));
			}
			if (this.props.onDataChange) {
				this.props.onDataChange(this.file, this.props.elements, this.state.selectIdx, this);
			}
		}
	}, {
		key: 'doDrag',
		value: function doDrag(evt) {
			if (this.draging) {
				var ae = this.state.elements[this.state.selectIdx];
				ae.doDrag(evt);
				this.forceUpdate();
			}
		}
	}, {
		key: 'addCircle',
		value: function addCircle() {
			this.state.elements.push(new Circle(this, {
				radius: 30,
				x: 50,
				y: 50
			}));
			this.forceUpdate();
		}
	}, {
		key: 'addRect',
		value: function addRect() {
			this.state.elements.push(new Rect(this, {
				x: 50,
				y: 50,
				width: 100,
				height: 50
			}));
			this.forceUpdate();
		}
	}, {
		key: 'drawActiveSvg',
		value: function drawActiveSvg(svg) {
			return svg.renderActive(this);
		}
	}, {
		key: 'drawSvg',
		value: function drawSvg(svg, idx) {
			return svg.render(idx);
		}
	}, {
		key: 'selectElement',
		value: function selectElement(idx) {
			this.setState({
				selectIdx: idx
			});
			if (this.props.onActiveData) {
				var ae = this.state.elements[idx];
				this.props.onActiveData(ae.getActiveData.bind(ae, this));
			}
		}
	}, {
		key: 'fileChange',
		value: function fileChange(evt) {
			var _this8 = this;

			var files = evt.target.files;
			if (files && files[0]) {
				this.file = files[0];
				var reader = new FileReader();
				reader.onload = function (e) {
					var img = new Image();
					img.src = e.target.result;
					img.onload = function () {
						_this8.srcwidth = img.width;
						_this8.srcheight = img.height;
						if (_this8.props.width / _this8.props.height >= _this8.srcwidth / _this8.srcheight) {
							_this8.imgwidth = _this8.srcwidth * _this8.props.height / _this8.srcheight;
							_this8.imgx = (_this8.props.width - _this8.imgwidth) / 2;
							_this8.imgy = 0;
							_this8.imgheight = _this8.props.height;
						} else {
							_this8.imgx = 0;
							_this8.imgwidth = _this8.props.width;
							_this8.imgheight = _this8.props.width * _this8.srcheight / _this8.srcwidth;
							_this8.imgy = (_this8.props.height - _this8.imgheight) / 2;
						}
						_this8.setState({
							editimage: e.target.result
						});
						setTimeout(function () {
							if (_this8.props.onActiveData) {
								if (_this8.state.selectIdx >= 0) {
									var ae = _this8.state.elements[_this8.state.selectIdx];
									_this8.props.onActiveData(ae.getActiveData.bind(ae, _this8));
								}
								if (_this8.props.onDataChange) {
									_this8.props.onDataChange(_this8.file, _this8.props.elements, _this8.state.selectIdx, _this8);
								}
							}
						}.bind(_this8), 100);
					}.bind(_this8);
				}.bind(this);
				reader.readAsDataURL(files[0]);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this9 = this;

			if (!this.state.editimage) {
				return _react2.default.createElement(
					_VerticalLayout2.default,
					{ style: { alignItems: 'center', justifyContent: 'center', width: this.props.width, height: this.props.height, border: '1px solid #f2f2f2', backgroundColor: '#f2f2f2' } },
					_react2.default.createElement(
						'label',
						{ style: { display: 'flex', flexDirection: 'column' } },
						_react2.default.createElement(
							'div',
							{ style: { display: 'flex', width: 90, height: 90, border: '2px dashed #d6d7d9', fontSize: 48, fontWeight: 200, color: '#d6d7d9', cursor: 'pointer', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' } },
							'+',
							_react2.default.createElement('input', { style: { width: 0.1, height: 0.1, opacity: 0, overflow: 'hidden', position: 'absolute', zIndex: -1, border: '2px solid red' }, id: 'svgeditor_choose_file', onChange: this.fileChange.bind(this), type: 'file' })
						),
						_react2.default.createElement(
							'div',
							{ style: { marginTop: 20, fontSize: 12, color: '#6e7279' } },
							' 只支持JPG、PNG、GIF，大小不超过5M'
						)
					)
				);
			}
			var elements = this.state.elements.map(function (item, idx) {
				return _react2.default.createElement(
					_Button2.default,
					{ onClick: _this9.selectElement.bind(_this9, idx),
						key: idx, theme: 'infoBlue' },
					item.type,
					' ',
					idx + 1
				);
			});
			var inactiveElements = this.state.elements.filter(function (item, idx) {
				return idx != _this9.state.selectIdx;
			}).map(function (item, idx) {
				return _this9.drawSvg(item, idx);
			});
			var ae, activeElement;
			if (this.state.selectIdx >= 0) {
				ae = this.state.elements[this.state.selectIdx];
				activeElement = this.drawActiveSvg(ae);
			}
			var width = this.props.width ? this.props.width : this.svgwidth ? this.svgwidth : 600;
			var height = this.props.height;
			if (!this.svgheight) this.svgheight = 1;
			if (!this.svgwidth) this.svgwidth = 1;
			if (!height) {
				if (this.svgwidth > 0) {
					height = width * this.svgheight / this.svgwidth;
				} else {
					height = 0;
				}
			}
			return _react2.default.createElement(
				_VerticalLayout2.default,
				null,
				this.props.showToolbar ? _react2.default.createElement(
					_HorizontalLayout2.default,
					null,
					_react2.default.createElement(_Radio2.default, { onSelect: function (idx) {
							_this9.shapeType = idx;
						}.bind(this), values: Shape.shapes })
				) : null,
				_react2.default.createElement(
					_HorizontalLayout2.default,
					null,
					_react2.default.createElement(
						'div',
						{ ref: 'baseZone', onMouseDown: this.startDrag.bind(this), onMouseUp: this.endDrag.bind(this), onMouseMove: this.doDrag.bind(this), style: { width: this.props.width, height: this.props.height } },
						_react2.default.createElement(
							'svg',
							{ style: { width: width, height: height }, viewBox: "0 0 " + this.svgwidth + " " + this.svgheight, width: this.svgwidth, height: this.svgheight },
							this.state.editimage ? _react2.default.createElement('image', { x: this.imgx, y: this.imgy, width: this.imgwidth, height: this.imgheight, xlinkHref: this.state.editimage }) : null,
							inactiveElements,
							this.state.selectIdx >= 0 ? activeElement : null
						)
					),
					this.props.showShapes ? _react2.default.createElement(
						_VerticalLayout2.default,
						null,
						elements,
						_react2.default.createElement(
							_Button2.default,
							{ onClick: function () {
									_this9.setState({ selectIdx: -1 });
								}.bind(this) },
							'取消选中'
						)
					) : null
				)
			);
		}
	}]);

	return SVGEditor;
}(_uibase2.default);

module.exports = SVGEditor;