/*
 * @Author: web.王晓冬
 * @Date: 2021-01-01 10:44:11
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-03 21:15:56
 * @Description: file content
 */
const mongoose = require('../dbHelper');
const categoriesSchema = require('../schemas/categorie')

// 定义一个模型类
module.exports = mongoose.model('Category', categoriesSchema)