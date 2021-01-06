/*
 * @Author: web.王晓冬
 * @Date: 2021-01-03 10:08:17
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-06 21:04:43
 * @Description: file content
 */
console.log('-------', process.env.NODE_ENV)

require('babel-register')
require('babel-polyfill')

const app = require('./src/index')

app.listen(8082)