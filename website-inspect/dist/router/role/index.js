"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: lzp
 * @Date: 2023-01-19 15:18:32
 * @LastEditors: lzp
 * @LastEditTime: 2023-02-23 18:15:46
 * @Description: 角色路由
 */
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../../db/index"));
const index_sql_1 = require("../../db/sql/role/index.sql");
const config_1 = require("../../config");
const router = express_1.default.Router();
// 查询所有角色
router.get("/", (req, res, next) => {
    // 查询所有
    index_1.default.execute(index_sql_1.QueryAll, (err, result) => {
        err ? next(err) : res.send((0, config_1.SuccessTip)(result));
    });
});
exports.default = router;
