'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function index (_ref) {
  var color = _ref.color,
      children = _ref.children;
  return React.createElement("button", {
    style: {
      color: color
    }
  }, children);
}

// export { default as Timeline} from './timeline'

exports.Button = index;
