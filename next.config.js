const withPWA = require('next-pwa')({
  dest: 'public',
  sw: 'sw.js',
  swDest: 'sw.js',
})

module.exports = withPWA()
