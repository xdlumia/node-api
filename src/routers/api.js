/*
 * @Author: web.王晓冬
 * @Date: 2020-09-09 15:01:24
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-06 17:36:04
 * @Description: file content
 */
const Router = require('koa-router');
const request = require('request-promise');
const router = new Router({
    prefix: '/api'
});



router.get('/bing', async (ctx) => {
    let data = await request.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&') || 'null'
    data = JSON.parse(data)
    let bingImg = data.images[0];
    data.url = `https://cn.bing.com/${bingImg.url}`;
    ctx.body = {
        data: data
    }
})
router.get('/baidu_sugrec/:key', async (ctx) => {
    console.log(ctx.params);
    let key = ctx.params.key
    let data = await request.get(`https://www.baidu.com/sugrec?prod=pc&wd=${key}`) || 'null'
    data = JSON.parse(data)
    ctx.body = {
        data: data
    }
})
router.get('/fm/playlist', async (ctx) => {
    let url = 'https://fm.douban.com/j/v2/playlist?channel=-10&kbps=128&client=s%3Amainsite%7Cy%3A3.0&app_name=radio_website&version=100&type=s&sid=501651&pt=&pb=128&apikey='

    let options = {
        url: url,
        method: "get",
        json: true,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "Cookie": `bid=_W26LQeafeA`
        },
    }

    let data = await request.get(options)
    ctx.body = {
        data: data
    }
})


module.exports = router;