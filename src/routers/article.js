/*
 * @Author: web.王晓冬
 * @Date: 2021-01-01 11:10:35
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-05 21:23:07
 * @Description: file content
 */
const Router = require('koa-router');
const router = new Router({
    prefix: '/article'
});
const Article = require('../models/articles');

// 获取文章列表
router.get('/list', async (ctx) => {
    // 查询参数
    let findWhere = {
        publishStatus: ctx.query.publishStatus || 'publish',
        title: new RegExp(ctx.query.title)
    }
    // 排序字段
    let sortKey = ctx.query.sortKey || 'createTime'
    // 排序值
    let sortValue = ctx.query.sortValue || -1
    let sortWhere = {}
    // 排序参数
    sortWhere[sortKey] = sortValue
    let page = Number(ctx.query.page || 1) //当前页码
    let size = Number(ctx.query.size || 15) //当前页数量
    let count = await Article.countDocuments(findWhere) //总数
    let pages = Math.ceil(count / size)
    // page = Math.min(page, pages) // page最大为pages
    page = Math.max(page, 1) // page 最小为1
    let skip = (page - 1) * size
    let data = await Article.find(findWhere).sort(sortWhere).limit(size).skip(skip)
    ctx.body = {
        count: count,
        page: page,
        size: size,
        pages: pages,
        data: data,
    }
})
// 获取文章详情
router.get('/:id', async (ctx) => {
    let where = {
        _id: ctx.params.id
    }
    let data = await Article.findOne(where) || {}
    ctx.body = {
        data: data
    }
    // 文章查看次数+1
    var updateStr = {
        $set: {
            "view": data.view + 1,
        }
    };
    await Article.updateOne(where, updateStr)
})
// 发布文章
router.post('/save', async (ctx) => {
    let data = ctx.request.body
    if (!data.title || !data.content) {
        ctx.body = {
            msg: '标题或内容不能为空',
            code: 500
        }
        return
    }
    let res = await new Article(data).save()
    if (res) {
        ctx.body = {
            data: res._id,
            msg: '发布成功',
        }
    } else {
        ctx.body = {
            msg: '发布失败',
            code: 500
        }
    }
})
// 更新文章
router.post('/update', async (ctx) => {
    let data = ctx.request.body
    if (!data.title || !data.content) {
        ctx.body = {
            msg: '标题或内容不能为空',
            code: 500
        }
        return
    }
    let where = {
        _id: data._id || ''
    }
    delete data._id
    // 文章查看次数+1
    var updateStr = {
        $set: {
            ...data,
            updateTime: Date.now()
        },
    };
    let res = await Article.update(where, updateStr)
    if (res) {
        ctx.body = {
            data: where._id,
            msg: '修改成功',
        }
    } else {
        ctx.body = {
            msg: '修改失败',
            code: 500
        }
    }
})
// 删除文章
router.delete('/del', async (ctx) => {
    let res = await Article.deleteMany({
        _id: ctx.query.id
    })
    if (res && res.deletedCount) {
        ctx.body = {
            msg: '删除成功',
        }
    } else {
        ctx.body = {
            msg: '删除成功',
            code: 500
        }
    }


})

module.exports = router;