/*
 * @Author: web.王晓冬
 * @Date: 2021-01-02 08:59:17
 * @LastEditors: web.王晓冬
 * @LastEditTime: 2021-01-02 16:02:46
 * @Description: 工具方法
 */
let utils = {
    /*移除HTML标签代码*/
    html2text(str) {
        str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
        str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
        str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
        str = str.replace(/[ ]|[&nbsp;]/g, ''); //去掉 
        str = str.replace(/\s/g, ''); //去掉 
        return str;
    },
    imgUrlFirst(str) {
        var data = '';
        str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/, function (match, capture) {
            data = capture;
        });
        return data
    }
}
module.exports = utils;