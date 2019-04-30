export default {
  esm: {
    type: 'rollup',
    mjs: true // 类似umd的包，把所有的都打进去，比较超前的现在浏览器<script type="module">
  },
  cjs: 'rollup',
  umd: {
    name: 'configByfoo',
    minFile: false
  }
};
