"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var styles = _interopRequireWildcard(require("./style"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var HeadText = function HeadText(props) {
  var toggle = props.toggle,
      text = props.text,
      expanded = props.expanded,
      extraProps = _objectWithoutProperties(props, ["toggle", "text", "expanded"]);

  return _react.default.createElement("div", _extends({
    onClick: function onClick() {
      return toggle();
    },
    style: styles.container
  }, extraProps), _react.default.createElement("div", {
    style: styles.title
  }, text), _react.default.createElement("div", {
    style: expanded ? styles.sideArrowExpanded : styles.sideArrow
  }, "\u2303"));
};

HeadText.defaultProps = {
  text: ''
};
HeadText.propTypes = {
  text: _propTypes.default.string,
  toggle: _propTypes.default.func.isRequired,
  expanded: _propTypes.default.bool.isRequired
};
var _default = HeadText;
exports.default = _default;