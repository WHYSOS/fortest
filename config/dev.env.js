'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  UPLOAD_API: '"http://localhost:8090/file/uploadFile"',
  BASE_API:'"http://localhost:8090"'
})
