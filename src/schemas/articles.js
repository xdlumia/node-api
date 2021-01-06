/*
 * @Author: web.王晓冬
 * @Date: 2021-01-01 10:43:59
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-03 21:16:44
 * @Description: 文章内容
 */
const mongoose = require("mongoose")
const {
  defaultSchemaExtend,
  defaultSchemaOptions
} = require("../config/index");
// 内容表结构
module.exports = new mongoose.Schema(Object.assign({

  // 关联字段
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  title: String,
  // 用户
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // 阅读量
  view: {
    type: Number,
    default: 0
  },
  // 阅读量
  publishStatus: {
    type: String,
    default: 'publish'
  },
  description: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  comments: {
    type: Array,
    defalut: []
  },
}, defaultSchemaExtend), defaultSchemaOptions)