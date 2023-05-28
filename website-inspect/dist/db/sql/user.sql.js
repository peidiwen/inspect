"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE = exports.DELETE = exports.QueryPWD = exports.QueryAll = exports.ADD = void 0;
/*
 * @Author: lzp
 * @Date: 2023-01-22 17:09:38
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 17:41:51
 * @Description: 登录 SQL 语句
 */
exports.ADD = `INSERT INTO passage.\`user\` (account,pwd)
VALUES (?,?);
`;
exports.QueryAll = `SELECT * FROM passage.\`user\`;`;
exports.QueryPWD = `SELECT * FROM passage.\`user\`
WHERE account=?;`;
exports.DELETE = `DELETE FROM passage.\`user\`
WHERE account =?;`;
exports.UPDATE = `UPDATE passage.\`user\`
SET pwd=?
WHERE account=?;`;
