/*
 * @Author: lzp
 * @Date: 2023-01-22 17:09:38
 * @LastEditors: lzp
 * @LastEditTime: 2023-01-22 17:41:51
 * @Description: 登录 SQL 语句
 */
export const ADD = `INSERT INTO passage.\`user\` (account,pwd)
VALUES (?,?);
`;

export const QueryAll = `SELECT * FROM passage.\`user\`;`;

export const QueryPWD = `SELECT * FROM passage.\`user\`
WHERE account=?;`;

export const DELETE = `DELETE FROM passage.\`user\`
WHERE account =?;`;

export const UPDATE = `UPDATE passage.\`user\`
SET pwd=?
WHERE account=?;`;
