"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: lzp
 * @Date: 2023-01-19 10:43:08
 * @LastEditors: lzp
 * @LastEditTime: 2023-03-05 16:38:38
 * @Description: 数据库连接
 */
const config_1 = require("../config");
const mysql2_1 = __importDefault(require("mysql2"));
const DB = mysql2_1.default.createPool(config_1.dbconfig);
exports.default = DB;
