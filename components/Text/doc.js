"use strict";

exports.__esModule = true;
exports.themeDoc = exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var doc = function doc(Text) {
  var DocumentedText = (0, _reactDesc.describe)(Text).availableAt((0, _utils.getAvailableAtBadge)('Text')).description('Arbitrary text.').usage("import { Text } from 'grommet';\n<Text />").intrinsicElement('span');
  DocumentedText.propTypes = _extends({}, _utils.genericProps, {
    color: _utils.colorPropType.description('A color identifier to use for the text color.'),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']), _reactDesc.PropTypes.string]).description("The font size and line height are primarily driven by the chosen tag. But, it can\nbe adjusted via this size property. The tag should be set for semantic\ncorrectness and accessibility. This size property allows for stylistic\nadjustments."),
    tag: _reactDesc.PropTypes.string.description("The DOM tag to use for the element. NOTE: This is deprecated in favor\nof indicating the DOM tag via the 'as' property."),
    as: _reactDesc.PropTypes.string.description("The DOM tag to use for the element.").defaultValue('span'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the component.').defaultValue('start'),
    truncate: _reactDesc.PropTypes.bool.description("Restrict the text to a single line and truncate with ellipsis if it\nis too long to all fit.").defaultValue(false),
    weight: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['normal', 'bold']), _reactDesc.PropTypes.number]).description('Font weight')
  });
  return DocumentedText;
};

exports.doc = doc;
var themeDoc = {
  color: {
    description: 'The text color used for Text.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: '#f8f8f8', light: '#444444' }"
  },
  'global.edgeSize': {
    description: 'The possible sizes for margin.',
    type: 'object',
    defaultValue: "{\n        none: '0px',\n        hair: '1px',\n        xxsmall: '3px',\n        xsmall: '6px',\n        small: '12px',\n        medium: '24px',\n        large: '48px',\n        xlarge: '96px',\n        responsiveBreakpoint: 'small',\n    }"
  },
  text: {
    description: "The possible sizes of the text in terms of its font-size and line-height.",
    type: 'object',
    defaultValue: "{\n      xsmall: {\n        size: '12px',\n        height: '18px',\n       },\n      small: {\n        size: '14px',\n        height: '20px',\n       },\n      medium: {\n        size: '18px',\n        height: '24px',\n      },\n      large: {\n        size: '22px',\n        height: '28px',\n      },\n      xlarge: {\n        size: '26px',\n        height: '32px',\n      },\n      xxlarge: {\n        size: '34px',\n        height: '40px',\n      },\n    }"
  },
  'text.extend': {
    description: 'Any additional style for Text.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;