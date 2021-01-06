/*
 * @Author: web.王晓冬
 * @Date: 2020-09-09 15:01:21
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2020-12-31 09:49:22
 * @Description: file content
 */
const express = require('express')
const router = express.Router()
router.get('/user', (req, res, next) => {
    res.send('管理员')
})
module.exports = router;