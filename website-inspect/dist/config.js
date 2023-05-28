"use strict";
/*
 * @Author: lzp
 * @Date: 2023-01-06 21:28:29
 * @LastEditors: lzp
 * @LastEditTime: 2023-02-24 23:52:18
 * @Description: 项目配置文件
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGE_SIZE = exports.PRIVATE_KEY = exports.SuccessTip = exports.dbconfig = void 0;
// 数据库配置
exports.dbconfig = {
    host: "43.139.117.216",
    port: 4403,
    user: "root",
    password: "123456xyc",
    database: "website_inspect", //数据库名字
};
// 请求成功配置
const SuccessTip = (result) => {
    const template = {
        code: 200,
        message: "请求成功",
    };
    if (result) {
        return Object.assign({ data: result }, template);
    }
    return template;
};
exports.SuccessTip = SuccessTip;
// Token
// 私钥
exports.PRIVATE_KEY = "GinPang666";
// 分页
exports.PAGE_SIZE = 30;
