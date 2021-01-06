/*
 * @Author: web.王晓冬
 * @Date: 2020-09-10 09:15:18
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-03 21:17:10
 * @Description: file content
 */
const mongoose = require("mongoose")
const {
  defaultSchemaExtend,
  defaultSchemaOptions
} = require("../config/index");
// 定义一个表
module.exports = new mongoose.Schema({
  ...defaultSchemaExtend,
  username: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
}, defaultSchemaOptions)