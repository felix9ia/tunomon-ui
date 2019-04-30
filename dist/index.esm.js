function getBar() {
  return 'bar';
}

function index () {
  var aBar = getBar();
  console.log("hello world ".concat(aBar));
}

export default index;
