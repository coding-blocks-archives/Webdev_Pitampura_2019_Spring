const lib2 = require('./lib2')

module.exports.a = 10
module.exports.lib2 = lib2

setTimeout(() => {
  // can change already exported things
  module.exports.a = 50
}, 2000)
