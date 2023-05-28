/*
 * @Author: lzp
 * @Date: 2023-01-06 21:28:29
 * @LastEditors: lzp
 * @LastEditTime: 2023-02-24 23:52:18
 * @Description: 项目配置文件
 */

// 数据库配置
export const dbconfig = {
  host: "43.139.117.216", //数据库地址
  port: 4403, //
  user: "root", //用户名
  password: "123456xyc", //密码
  database: "website_inspect", //数据库名字
};

// 请求成功配置
export const SuccessTip = (result?: any) => {
  const template = {
    code: 200,
    message: "请求成功",
  };
  if (result) {
    return {
      data: result,
      ...template,
    };
  }
  return template;
};

// Token
// 私钥
export const PRIVATE_KEY = "GinPang666";

// 分页
export const PAGE_SIZE = 30;
