/*
 * @Author: web.王晓冬
 * @Date: 2021-01-03 10:09:14
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-03 21:14:48
 * @Description: file content
 */
const ApiError = require("../error/ApiError");

/**
 * 返回体拦截器
 */
const responseFilter = () => {
  return async (ctx, next) => {
    console.log(ctx.status);
    ctx.body = ctx.body || {}
    try {
      await next();
      responseFormatter(ctx)
    } catch (error) {
      // 如果异常类型是自定义API异常
      if (error instanceof ApiError) {
        ctx.status = 200;
        ctx.body = {
          code: error.code,
          msg: error.message
        }
      } else {
        throw error;
      }
    }
  }
};

const responseFormatter = (ctx) => {
  if (ctx.body) {
    ctx.body = {
      code: 200,
      msg: '请求成功',
      ...ctx.body,
    }
  } else {
    ctx.body = {
      code: 200,
      msg: '请求成功'
    }
  }
};

export default responseFilter;