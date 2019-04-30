(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.configByfoo = factory());
}(this, function () { 'use strict';

    function getBar() {
      return 'bar';
    }

    function index () {
      var aBar = getBar();
      console.log("hello world ".concat(aBar));
    }

    return index;

}));
