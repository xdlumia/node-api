/*
 * @Author: web.王晓冬
 * @Date: 2021-01-03 10:09:14
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-03 21:17:35
 * @Description: token验证
 */
const jwt = require("jsonwebtoken");
const {
  jwtConfig
} = require("../config/index");

export default async (ctx, next) => {
  // console.log('token:', ctx.get('token'))
  const token = ctx.get('token');

  if (token === '') {
    ctx.throw(401, 'no token detected in http header \'token\'');
  }
  try {
    await jwt.verify(token, jwtConfig.secret);
  } catch (err) {
    ctx.throw(401, 'invalid token');
  }

  await next();
}