'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProblemShowKeGuanTi = require('./ProblemShowKeGuanTi');

var _ProblemShowKeGuanTi2 = _interopRequireDefault(_ProblemShowKeGuanTi);

var _ProblemShowZhuGuanTi = require('./ProblemShowZhuGuanTi');

var _ProblemShowZhuGuanTi2 = _interopRequireDefault(_ProblemShowZhuGuanTi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
	displayName: 'exports',
	getInitialState: function getInitialState() {
		return {};
	},
	render: function render() {

		if (!this.props.data) return null;
		return this.props.data.choices ? _react2.default.createElement(_ProblemShowKeGuanTi2.default, { data: this.props.data, quesNum: this.props.quesNum }) : _react2.default.createElement(_ProblemShowZhuGuanTi2.default, { data: this.props.data, quesNum: this.props.quesNum });
	}
});