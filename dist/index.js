'use strict';

function getBar() {
  return 'bar';
}

function index () {
  var aBar = getBar();
  console.log("hello world ".concat(aBar));
}

module.exports = index;
