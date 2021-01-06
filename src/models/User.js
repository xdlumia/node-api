/*
 * @Author: web.王晓冬
 * @Date: 2020-09-10 09:31:58
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-03 21:16:04
 * @Description: file content
 */
const mongoose = require('../dbHelper');
const userSchema = require('../schemas/users')
module.exports = mongoose.model('User', userSchema)