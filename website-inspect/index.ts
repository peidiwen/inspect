/*
 * @Author: lzp
 * @Date: 2023-01-06 14:55:08
 * @LastEditors: lzp
 * @LastEditTime: 2023-02-24 17:10:31
 * @Description: 服务入口文件
 */
import express from "express";
import type { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { expressjwt } from "express-jwt";
import { taskAssigning } from "./tool/taskAssigning";

// 配置文件
import { PRIVATE_KEY } from "./config";

// 数据库初始化
import { initDBTable } from "./db/init_db";
initDBTable();
import { routerRegister } from "./router/router_register"; // 路由注册函数

dotenv.config(); // init dotenv

const app = express();

app.use(bodyParser.json());

// 后端跨域
app.use(
  cors({
    origin: "*",
  })
);

// Token 验证中间件
app.use(
  expressjwt({
    secret: PRIVATE_KEY,
    algorithms: ["HS256"],
  }).unless({
    path: [
      "/",
      // "/role",
      // "/user",
      "/user/loginUser",
      "/user/loginAdmin"
      // "/assigning/by_account",
      // "/check",
      // "/status",
      // "/log",
    ],
  })
);

// 自动注册路由
routerRegister(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Express 错误处理
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err.name === "UnauthorizedError") {
    res.json({
      message: "错误",
      err: "Token 过期或者无效，请重新登录",
      code: 401,
    });
    // res.redirect(302, "http://127.0.0.1:5500/index.html");
    return;
  }
  res.send({
    message: "错误",
    code: 400,
    error: err.message,
  });
});

// 自动更新网站分配计划
let lockDate = new Date().getDate();
setInterval(() => {
  const nowDay = new Date().getDate();
  if (nowDay !== lockDate) {
    taskAssigning();
    console.log("更新网站分配计划！");
    lockDate = nowDay;
  }
});

app.listen(3000, () => {
  console.log("检查网站服务运行中......");
});
