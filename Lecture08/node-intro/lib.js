
let lib = {
  add: function (a, b) {
    return a + b
  }
}
if (typeof window === 'undefined') {
  // for node
  module.exports = lib
}
