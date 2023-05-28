"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: lzp
 * @Date: 2023-01-06 14:55:08
 * @LastEditors: lzp
 * @LastEditTime: 2023-02-24 17:10:31
 * @Description: 服务入口文件
 */
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_jwt_1 = require("express-jwt");
const taskAssigning_1 = require("./tool/taskAssigning");
// 配置文件
const config_1 = require("./config");
// 数据库初始化
const init_db_1 = require("./db/init_db");
(0, init_db_1.initDBTable)();
const router_register_1 = require("./router/router_register"); // 路由注册函数
dotenv_1.default.config(); // init dotenv
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// 后端跨域
app.use((0, cors_1.default)({
    origin: "*",
}));
// Token 验证中间件
app.use((0, express_jwt_1.expressjwt)({
    secret: config_1.PRIVATE_KEY,
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
}));
// 自动注册路由
(0, router_register_1.routerRegister)(app);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Express 错误处理
app.use((err, req, res, next) => {
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
        (0, taskAssigning_1.taskAssigning)();
        console.log("更新网站分配计划！");
        lockDate = nowDay;
    }
});
app.listen(3000, () => {
    console.log("检查网站服务运行中......");
});
