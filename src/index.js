/*
 * @Author: web.王晓冬
 * @Date: 2020-09-09 14:31:08
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-06 16:27:16
 * @Description: 应用程序启动文件
 */
// 加载数据库
const Koa = require('koa')
// bodyjson格式
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors');
const app = new Koa()
const responseFilter = require('./middleware/responseFilter')

app.use(async (ctx, next) => {
    // 解决跨域问题
    ctx.set('Access-Control-Allow-Credentials', true);
    await next();
});
app.use(cors())
app.use(bodyParser())
const article = require('./routers/article')
const api = require('./routers/api')
app.use(responseFilter())
app.use(article.routes()).use(article.allowedMethods());
app.use(api.routes()).use(api.allowedMethods());

module.exports = app