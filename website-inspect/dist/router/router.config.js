"use strict";
/*
 * @Author: lzp
 * @Date: 2023-01-06 21:31:30
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 17:34:58
 * @Description: 路由配置文件
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const index_1 = __importDefault(require("./role/index"));
const index_2 = __importDefault(require("./user/index"));
const index_3 = __importDefault(require("./assigning/index"));
const index_4 = __importDefault(require("./check/index"));
const index_5 = __importDefault(require("./status/index"));
const index_6 = __importDefault(require("./log/index"));
exports.router = [
    {
        prefix: "/role",
        route: index_1.default,
    },
    {
        prefix: "/user",
        route: index_2.default,
    },
    {
        prefix: "/assigning",
        route: index_3.default,
    },
    {
        prefix: "/check",
        route: index_4.default,
    },
    {
        prefix: "/status",
        route: index_5.default,
    },
    {
        prefix: "/log",
        route: index_6.default,
    },
];
