import { createElement } from 'react';

function index (_ref) {
  var color = _ref.color,
      children = _ref.children;
  return createElement("button", {
    style: {
      color: color
    }
  }, children);
}

// export { default as Timeline} from './timeline'

export { index as Button };
